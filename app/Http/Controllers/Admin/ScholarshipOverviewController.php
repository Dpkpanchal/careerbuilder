<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ScholarshipOverview;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScholarshipOverviewController extends Controller
{
    /**
     * Preview page (like an "index") - shows current content + Edit button.
     */
    public function index()
    {
        $overview = ScholarshipOverview::singleton();

        return Inertia::render('Admin/ScholarshipOverview/Index', [
            'overview' => $overview,
        ]);
    }

    /**
     * Edit form for the singleton record.
     */
    public function edit()
    {
        $overview = ScholarshipOverview::singleton();

        return Inertia::render('Admin/ScholarshipOverview/Edit', [
            'overview' => $overview,
        ]);
    }

    public function update(Request $request)
    {
        $overview = ScholarshipOverview::singleton();

        $validated = $request->validate([
            'hero_title' => 'required|string|max:255',
            'hero_breadcrumb' => 'nullable|string|max:255',

            'intro_title' => 'required|string|max:255',
            'intro_subtitle' => 'nullable|string',
            'paragraph_1' => 'nullable|string',
            'paragraph_2' => 'nullable|string',

            'stats' => 'nullable|array',
            'stats.*.label' => 'nullable|string|max:100',
            'stats.*.value' => 'nullable|string|max:100',
            'stats.*.meta' => 'nullable|string|max:255',

            'quick_access_items' => 'nullable|array',
            'quick_access_items.*.text' => 'nullable|string|max:255',
            'quick_access_items.*.link_url' => 'nullable|url|max:255',
            'quick_access_items.*.link_label' => 'nullable|string|max:255',
            'quick_access_note' => 'nullable|string',

            'rules_left' => 'nullable|array',
            'rules_left.*' => 'nullable|string',
            'rules_right' => 'nullable|array',
            'rules_right.*' => 'nullable|string',

            'schemes' => 'nullable|array',
            'schemes.*.no' => 'nullable',
            'schemes.*.name' => 'nullable|string|max:255',
            'schemes.*.class_of_study' => 'nullable|string|max:255',
            'schemes.*.website' => 'nullable|string|max:255',
            'schemes.*.min_marks' => 'nullable|string|max:255',
            'schemes.*.income' => 'nullable|string|max:255',

            'table_note' => 'nullable|string',
            'is_active' => 'boolean',
        ]);

        // Keep the "No." column in sync with row order, regardless of
        // how many rows were added/removed on the form.
        if (!empty($validated['schemes'])) {
            $validated['schemes'] = collect($validated['schemes'])
                ->values()
                ->map(function ($scheme, $index) {
                    $scheme['no'] = $index + 1;
                    return $scheme;
                })
                ->all();
        }

        $overview->update($validated);

        return redirect()
            ->route('admin.scholarship-overview.edit')
            ->with('success', 'Scholarship overview page updated successfully.');
    }
}
