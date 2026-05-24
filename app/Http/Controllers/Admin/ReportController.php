<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Report;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class ReportController extends Controller
{
    public function index()
    {
        $reports = Report::with(['reportable', 'reporter'])
            ->latest()
            ->get()
            ->map(function ($report) {

                $type = str_replace('App\\Models\\', '', $report->reportable_type);

                return [
                    'id' => $report->id,
                    'type' => $type,
                    'reason' => $report->reason,
                    'status' => $report->status,
                    'reporter' => $report->reporter?->name,
                    'content_preview' => substr(
                        $report->reportable->body ?? $report->reportable->title ?? '',
                        0,
                        50
                    ),
                    'created_at' => $report->created_at->format('d M Y'),
                ];
            });

        return inertia('Admin/Reports/Index', [
            'reports' => $reports,
        ]);
    }


    public function show(Report $report)
    {
        $report->load([
            'reporter',
            'reportable.user',
        ]);

        return inertia('Admin/Reports/Show', [
            'report'  => $report,
            'content' => $report->reportable,
        ]);
    }

    public function deleteContent(Report $report)
    {
        DB::transaction(function () use ($report) {

            // delete reported content
            if ($report->reportable) {
                $report->reportable->delete();
            }

            // delete report itself
            $report->delete();
        });

        return Redirect::route('admin.reports.index')
            ->with('success', 'Reported content deleted successfully.');
    }


    public function blockUser(Report $report)
    {
        // ✅ IMPORTANT: eager load
        $report->load('reportable.user');

      


        $content = $report->reportable;

    //       dd([
    //     'report_id' => $report->id,
    //     'content_id' => optional($content)->id,
    //     'content_user_id' => optional($content?->user)->id,
    //     'content_user_email' => optional($content?->user)->email,
    // ]);

        $userToBlock = optional($content)->user;

        if (!$userToBlock) {
            return back()->with('error', 'Reported user not found.');
        }

        // ✅ Block the reported user
        $userToBlock->update([
            'is_blocked' => true,
            'blocked_at' => now(),
        ]);

        // (optional but recommended)
        $report->update([
            'status' => 'action_taken',
        ]);

        return redirect()
            ->route('admin.reports.index')
            ->with('success', 'User blocked successfully.');
    }


    public function ignore(Report $report)
    {
        $report->delete();

        return Redirect::route('admin.reports.index')
            ->with('success', 'Report ignored.');
    }






}
