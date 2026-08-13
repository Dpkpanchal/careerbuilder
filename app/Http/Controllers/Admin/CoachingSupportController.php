<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CoachingSupport;
use Illuminate\Http\Request;

class CoachingSupportController extends Controller
{
  
    public function index(Request $request)
    {
        $query = CoachingSupport::query();

        // Search filter
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('subject', 'LIKE', "%{$search}%")
                ->orWhere('institution_name', 'LIKE', "%{$search}%");
            });
        }

        // Subject filter
        if ($request->filled('subject')) {
            $query->where('subject', 'LIKE', "%{$request->subject}%");
        }

        // Institution filter
        if ($request->filled('institution')) {
            $query->where('institution_name', 'LIKE', "%{$request->institution}%");
        }

        // Status filter
        if ($request->filled('status')) {
            $query->where('is_active', $request->status);
        }

        // Sorting
        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';
        $query->orderBy($sortField, $sortDirection);

        $items = $query->paginate(10);

        return inertia('Admin/CoachingSupport/Index', [
            'items' => $items,
            'filters' => $request->only(['search', 'subject', 'institution', 'status', 'sort_field', 'sort_direction'])
        ]);
    }



    public function create()
    {
        return inertia('Admin/CoachingSupport/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'subject'           => 'required|string|max:255',
            'institution_name'  => 'required|string|max:255',
            'web_contact'       => 'nullable|string|max:255',
            'is_active'         => 'boolean',
            'sort_order'        => 'integer',
        ]);

        CoachingSupport::create($data);

        return redirect()->route('admin.coaching-support.index')
            ->with('success', 'Coaching Support added successfully.');
    }

    public function edit(CoachingSupport $coachingSupport)
    {
        return inertia('Admin/CoachingSupport/Edit', [
            'item' => $coachingSupport,
        ]);
    }

    public function update(Request $request, CoachingSupport $coachingSupport)
    {
        $data = $request->validate([
            'subject'           => 'required|string|max:255',
            'institution_name'  => 'required|string|max:255',
            'web_contact'       => 'nullable|string|max:255',
            'is_active'         => 'boolean',
            'sort_order'        => 'integer',
        ]);

        $coachingSupport->update($data);

        return redirect()->route('admin.coaching-support.index')
            ->with('success', 'Coaching Support updated successfully.');
    }

    public function destroy(CoachingSupport $coachingSupport)
    {
        $coachingSupport->delete();

        return back()->with('success', 'Coaching Support deleted.');
    }

    public function toggleStatus(Request $request, $id)
    {
        $item = CoachingSupport::findOrFail($id);
        $item->is_active = $request->input('is_active');
        $item->save();

        return redirect()->back()->with('success', 'Status updated successfully!');
    }
}
