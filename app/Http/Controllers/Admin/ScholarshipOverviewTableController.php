<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ScholarshipOverviewTable;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScholarshipOverviewTableController extends Controller
{
    /**
     * Listing
     */
    public function index(Request $request)
    {
        $query = ScholarshipOverviewTable::query();

        if ($request->filled('search')) {
            $query->where('name', 'ILIKE', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where(
                'is_active',
                $request->status === 'active'
            );
        }

        $scholarships = $query
            ->orderBy('sort_order')
            ->orderBy('id')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render(
            'Admin/ScholarshipOverviewTable/Index',
            [
                'scholarships' => $scholarships,
                'filters' => $request->only(['search', 'status']),
            ]
        );
    }

    /**
     * Create
     */
    public function create()
    {
        return Inertia::render(
            'Admin/ScholarshipOverviewTable/Create'
        );
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'class_of_study' => 'nullable|max:255',
            'website' => 'nullable|max:255',
            'minimum_marks' => 'nullable|max:255',
            'annual_family_income' => 'nullable|max:255',
            'sort_order' => 'nullable|integer',
            'is_active' => 'required|boolean',
        ]);

        ScholarshipOverviewTable::create($validated);

        return redirect()
            ->route('admin.scholarship-overview-table.index')
            ->with('success', 'Record created successfully.');
    }

    /**
     * Edit
     */
    public function edit(ScholarshipOverviewTable $scholarshipOverviewTable)
    {
        return Inertia::render(
            'Admin/ScholarshipOverviewTable/Edit',
            [
                'scholarship' => $scholarshipOverviewTable,
            ]
        );
    }

    /**
     * Update
     */
    public function update(
        Request $request,
        ScholarshipOverviewTable $scholarshipOverviewTable
    ) {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'class_of_study' => 'nullable|max:255',
            'website' => 'nullable|max:255',
            'minimum_marks' => 'nullable|max:255',
            'annual_family_income' => 'nullable|max:255',
            'sort_order' => 'nullable|integer',
            'is_active' => 'required|boolean',
        ]);

        $scholarshipOverviewTable->update($validated);

        return redirect()
            ->route('admin.scholarship-overview-table.index')
            ->with('success', 'Record updated successfully.');
    }

    /**
     * Delete
     */
    public function destroy(ScholarshipOverviewTable $scholarshipOverviewTable)
    {
        $scholarshipOverviewTable->delete();

        return redirect()
            ->back()
            ->with('success', 'Record deleted successfully.');
    }
}