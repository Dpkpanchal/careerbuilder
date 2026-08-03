<?php
// app/Http/Controllers/Admin/StudentSupportController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\StudentSupport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentSupportController extends Controller
{
    public function index(Request $request)
    {
        $records = StudentSupport::query()
            ->when($request->tone, fn($q, $tone) => $q->where('tone', $tone))
            ->orderBy('sort_order')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/StudentSupport/Index', [
            'records' => $records,
            'filters' => $request->only('tone'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/StudentSupport/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'link'        => 'required|string|max:255',
            'icon'        => 'required|string|max:100',
            'tone'        => 'nullable|string|max:100',
            'level'       => 'nullable|string|max:100',
            'sort_order'  => 'nullable|integer',
            'status'      => 'boolean',
        ]);

        StudentSupport::create($validated);

        return redirect()
            ->route('admin.studentSupport.index')
            ->with('success', 'Support item created successfully.');
    }

    public function edit(StudentSupport $studentSupport)
    {
        return Inertia::render('Admin/StudentSupport/Edit', [
            'item' => $studentSupport,
        ]);
    }

    public function update(Request $request, StudentSupport $studentSupport)
    {
        $validated = $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'link'        => 'required|string|max:255',
            'icon'        => 'required|string|max:100',
            'tone'        => 'nullable|string|max:100',
            'level'       => 'nullable|string|max:100',
            'sort_order'  => 'nullable|integer',
            'status'      => 'boolean',
        ]);

        $studentSupport->update($validated);

        return redirect()
            ->route('admin.studentSupport.index')
            ->with('success', 'Support item updated successfully.');
    }

    public function destroy(StudentSupport $studentSupport)
    {
        $studentSupport->delete();

        return redirect()
            ->route('admin.studentSupport.index')
            ->with('success', 'Support item deleted successfully.');
    }
}