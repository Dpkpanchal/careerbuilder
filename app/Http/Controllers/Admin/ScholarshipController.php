<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Scholarship;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScholarshipController extends Controller
{
    public function index(Request $request)
    {
        $query = Scholarship::query();

        if ($request->filled('search')) {
            $query->where('name', 'ILIKE', '%' . $request->search . '%')
                  ->orWhere('category', 'ILIKE', '%' . $request->search . '%');
        }

        if ($request->filled('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        $scholarships = $query
            ->orderBy('sort_order')
            ->orderBy('id')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/Scholarship/Index', [
            'scholarships' => $scholarships,
            'filters' => $request->only('search', 'status'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Scholarship/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'criteria' => 'nullable|string',
            'award' => 'nullable|string',
            'eligibility' => 'nullable|string',
            'when_to_apply' => 'nullable|string|max:255',
            'application' => 'nullable|string|max:255',
            'links' => 'nullable|array',
            'links.*' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        Scholarship::create($data);

        return redirect()
            ->route('admin.scholarships.index')
            ->with('success', 'Scholarship created successfully.');
    }

    public function edit(Scholarship $scholarship)
    {
        return Inertia::render('Admin/Scholarship/Edit', [
            'scholarship' => $scholarship,
        ]);
    }

    public function update(Request $request, Scholarship $scholarship)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'criteria' => 'nullable|string',
            'award' => 'nullable|string',
            'eligibility' => 'nullable|string',
            'when_to_apply' => 'nullable|string|max:255',
            'application' => 'nullable|string|max:255',
            'links' => 'nullable|array',
            'links.*' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        $scholarship->update($data);

        return redirect()
            ->route('admin.scholarships.index')
            ->with('success', 'Scholarship updated successfully.');
    }

    public function destroy(Scholarship $scholarship)
    {
        $scholarship->delete();

        return back()->with('success', 'Scholarship deleted successfully.');
    }
}