<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MinorityScheme;
use Illuminate\Http\Request;

class MinoritySchemeController extends Controller
{
    public function index(Request $request)
    {
        $query = MinorityScheme::query();

        if ($request->filled('search')) {
            $query->where('subject', 'LIKE', "%{$request->search}%");
        }

        if ($request->filled('status')) {
            $query->where('is_active', $request->status);
        }

        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';
        $query->orderBy($sortField, $sortDirection);

        $schemes = $query->orderBy('id')->paginate(10);

        return inertia('Admin/MinoritySchemes/Index', [
            'schemes' => $schemes,
            'filters' => $request->only(['search', 'status', 'sort_field', 'sort_direction'])
        ]);
    }

    public function create()
    {
        return inertia('Admin/MinoritySchemes/Create');
    }

    public function store(Request $request)
    {
        $request->merge([
            'web_link' => preg_match('#^https?://#', $request->web_link)
                ? $request->web_link
                : 'https://' . $request->web_link,
        ]);

        $data = $request->validate([
            'subject'  => 'required|string|max:255',
            'web_link' => 'required|url',
        ]);

        MinorityScheme::create($data);

        return redirect()->route('admin.minority-schemes.index')
            ->with('success', 'Scheme added successfully.');
    }

    public function edit(MinorityScheme $minorityScheme)
    {
        return inertia('Admin/MinoritySchemes/Edit', [
            'scheme' => $minorityScheme, // ✅ MATCH REACT
        ]);
    }


    public function update(Request $request, MinorityScheme $minorityScheme)
    {
        $data = $request->validate([
            'subject'  => 'required|string|max:255',
            'web_link' => 'required|url|max:500',
        ]);

        $minorityScheme->update($data);

        return redirect()->route('admin.minority-schemes.index')
            ->with('success', 'Scheme updated successfully.');
    }

    public function destroy(MinorityScheme $minorityScheme)
    {
        $minorityScheme->delete();

        return back()->with('success', 'Scheme deleted.');
    }

    public function toggleStatus(Request $request, $id)
    {
        $item = MinorityScheme::findOrFail($id);
        $item->is_active = $request->input('is_active');
        $item->save();

        return redirect()->back()->with('success', 'Status updated successfully!');
    }
}
