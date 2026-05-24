<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MinorityScheme;
use Illuminate\Http\Request;

class MinoritySchemeController extends Controller
{
    public function index()
    {
        $items = MinorityScheme::latest()->paginate(10);

        return inertia('Admin/MinoritySchemes/Index', [
            'schemes' => $items,
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
}
