<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CoachingSupport;
use Illuminate\Http\Request;

class CoachingSupportController extends Controller
{
    public function index()
    {
        $items = CoachingSupport::orderBy('sort_order')->latest()->paginate(10);

        return inertia('Admin/CoachingSupport/Index', [
            'items' => $items,
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
            'note'              => 'required|string|max:255',
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
            'note'              => 'required|string|max:255',
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
}
