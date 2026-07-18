<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ScholarshipRate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScholarshipRateController extends Controller
{
    /**
     * Listing
     */
    public function index(Request $request)
    {
        $query = ScholarshipRate::query();

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('type', 'ILIKE', '%' . $request->search . '%')
                  ->orWhere('class_of_study', 'ILIKE', '%' . $request->search . '%');
            });
        }

        if ($request->filled('status')) {
            $query->where(
                'is_active',
                $request->status === 'active'
            );
        }

        $rates = $query
            ->orderBy('sort_order')
            ->orderBy('id')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/ScholarshipRate/Index', [
            'rates' => $rates,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Create
     */
    public function create()
    {
        return Inertia::render('Admin/ScholarshipRate/Create');
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'class_of_study' => 'required|string|max:255',

            'day_admission_fee' => 'required|numeric',
            'day_maintenance_allowance' => 'required|numeric',
            'day_total' => 'required|numeric',

            'hosteller_admission_fee' => 'required|numeric',
            'hosteller_maintenance_allowance' => 'required|numeric',
            'hosteller_total' => 'required|numeric',

            'sort_order' => 'nullable|integer',
            'is_active' => 'required|boolean',
        ]);

        ScholarshipRate::create($validated);

        return redirect()
            ->route('admin.scholarship-rates.index')
            ->with('success', 'Scholarship rate created successfully.');
    }

    /**
     * Edit
     */
    public function edit(ScholarshipRate $scholarshipRate)
    {
        return Inertia::render('Admin/ScholarshipRate/Edit', [
            'rate' => $scholarshipRate,
        ]);
    }

    /**
     * Update
     */
    public function update(Request $request, ScholarshipRate $scholarshipRate)
    {
        $validated = $request->validate([
            'type' => 'required|string|max:255',
            'class_of_study' => 'required|string|max:255',

            'day_admission_fee' => 'required|numeric',
            'day_maintenance_allowance' => 'required|numeric',
            'day_total' => 'required|numeric',

            'hosteller_admission_fee' => 'required|numeric',
            'hosteller_maintenance_allowance' => 'required|numeric',
            'hosteller_total' => 'required|numeric',

            'sort_order' => 'nullable|integer',
            'is_active' => 'required|boolean',
        ]);

        $scholarshipRate->update($validated);

        return redirect()
            ->route('admin.scholarship-rates.index')
            ->with('success', 'Scholarship rate updated successfully.');
    }

    /**
     * Delete
     */
    public function destroy(ScholarshipRate $scholarshipRate)
    {
        $scholarshipRate->delete();

        return redirect()
            ->back()
            ->with('success', 'Scholarship rate deleted successfully.');
    }
}