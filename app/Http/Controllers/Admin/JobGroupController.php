<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobGroup;
use App\Models\JobSector;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class JobGroupController extends Controller
{
    public function index(Request $request): Response
    {
        $query = JobGroup::with('sector')
            ->withCount('rows');

        if ($request->filled('sector_id')) {
            $query->where('job_sector_id', $request->sector_id);
        }

        if ($request->filled('search')) {
            $query->where('label', 'like', '%' . $request->search . '%');
        }

        $jobGroups = $query
            ->orderBy('job_sector_id')
            ->orderBy('sort_order')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/JobGroup/Index', [
            'jobGroups' => $jobGroups,
            'sectors' => JobSector::orderBy('sort_order')->get(['id', 'key', 'title']),
            'filters' => $request->only(['sector_id', 'search']),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/JobGroup/Create', [
            'sectors' => JobSector::orderBy('sort_order')->get(['id', 'key', 'title']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validated($request);

        DB::transaction(function () use ($validated) {

            $group = JobGroup::create([
                'job_sector_id' => $validated['job_sector_id'],
                'label' => $validated['label'],
                'website' => $validated['website'] ?? null,
                'sort_order' => $validated['sort_order'] ?? 0,
            ]);

            $this->syncLinks($group, $validated['sublinks'] ?? []);
            $this->syncRows($group, $validated['rows']);
        });

        return redirect()
            ->route('admin.job-groups.index')
            ->with('success', 'Job group created successfully.');
    }

    public function edit(JobGroup $jobGroup): Response
    {
        $jobGroup->load('links', 'rows', 'sector');

        return Inertia::render('Admin/JobGroup/Edit', [
            'sectors' => JobSector::orderBy('sort_order')->get(['id', 'key', 'title']),
            'jobGroup' => $jobGroup,
        ]);
    }

    public function update(Request $request, JobGroup $jobGroup): RedirectResponse
    {
        $validated = $this->validated($request);

        DB::transaction(function () use ($validated, $jobGroup) {

            $jobGroup->update([
                'job_sector_id' => $validated['job_sector_id'],
                'label' => $validated['label'],
                'website' => $validated['website'] ?? null,
                'sort_order' => $validated['sort_order'] ?? 0,
            ]);

            // Simplest correct approach: wipe and recreate children rather
            // than diffing — these lists are short (a handful of rows).
            $jobGroup->links()->delete();
            $jobGroup->rows()->delete();

            $this->syncLinks($jobGroup, $validated['sublinks'] ?? []);
            $this->syncRows($jobGroup, $validated['rows']);
        });

        return redirect()
            ->route('admin.job-groups.index')
            ->with('success', 'Job group updated successfully.');
    }

    public function destroy(JobGroup $jobGroup): RedirectResponse
    {
        // job_group_links and job_rows cascade-delete via FK constraints.
        $jobGroup->delete();

        return back()->with('success', 'Deleted successfully.');
    }

    protected function syncLinks(JobGroup $group, array $sublinks): void
    {
        foreach (array_values($sublinks) as $index => $link) {

            if (empty($link['label']) && empty($link['href'])) {
                continue;
            }

            $group->links()->create([
                'label' => $link['label'],
                'href' => $link['href'],
                'sort_order' => $index,
            ]);
        }
    }

    protected function syncRows(JobGroup $group, array $rows): void
    {
        foreach (array_values($rows) as $index => $row) {

            $group->rows()->create([
                'recruited_by' => $row['recruited_by'] ?? null,
                'website' => $row['website'] ?? null,
                'post' => $row['post'],
                'eligibility' => $row['eligibility'],
                'sort_order' => $index,
            ]);
        }
    }

    protected function validated(Request $request): array
    {
        $sector = JobSector::find($request->job_sector_id);
        $isAfterClass8 = $sector?->key === 'after-class-8';

        return $request->validate([
            'job_sector_id' => ['required', 'exists:job_sectors,id'],
            'label' => ['required', 'string', 'max:255'],
            'website' => ['nullable', 'url', 'max:255'],
            'sort_order' => ['nullable', 'integer'],

            'sublinks' => ['nullable', 'array'],
            'sublinks.*.label' => ['nullable', 'string', 'max:255'],
            'sublinks.*.href' => ['nullable', 'url', 'max:255'],

            'rows' => ['required', 'array', 'min:1'],
            'rows.*.post' => ['required', 'string', 'max:255'],
            'rows.*.eligibility' => ['required', 'string', 'max:255'],
            'rows.*.recruited_by' => [$isAfterClass8 ? 'required' : 'nullable', 'string', 'max:255'],
            'rows.*.website' => ['nullable', 'url', 'max:255'],
        ]);
    }
}
