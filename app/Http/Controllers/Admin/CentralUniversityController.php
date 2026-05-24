<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CentralUniversity;
use Illuminate\Http\Request;

class CentralUniversityController extends Controller
{
    public function index(Request $request)
    {

       $universities = CentralUniversity::query()
        ->when($request->state, function ($query, $state) {
            $query->where('state', 'ILIKE', "%{$state}%");
        })
        ->orderBy('name')
        ->paginate(10)
        ->withQueryString();

        return inertia('Admin/CentralUniversities/Index', [
            'universities' => $universities,
            'filters' => $request->only('state'),
        ]);
    }

    public function create()
    {

        return inertia('Admin/CentralUniversities/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'      => 'required|string|max:255',
            'city'      => 'nullable|string|max:255',
            'state'     => 'required|string|max:255',
            'website'   => 'nullable|url|max:255',
            'is_active' => 'sometimes|boolean',
        ]);

        CentralUniversity::create($data);

        return redirect()
            ->route('admin.central-universities.index')
            ->with('success', 'Central University created successfully.');
    }


    public function edit(CentralUniversity $central_university)
    {
        return inertia('Admin/CentralUniversities/Edit', [
            'university' => $central_university
        ]);
    }

    public function update(Request $request, CentralUniversity $central_university)
    {
        $data = $request->validate([
            'name'      => 'required|string|max:255',
            'city'      => 'nullable|string|max:255',
            'state'     => 'required|string|max:255',
            'website'   => 'nullable|url|max:255',
            'is_active' => 'sometimes|boolean',
        ]);

        $central_university->update($data);

        return redirect()
            ->route('admin.central-universities.index')
            ->with('success', 'Central University updated successfully.');
    }

    public function destroy(CentralUniversity $central_university)
    {
        $central_university->delete();

        return back()->with('success', 'University deleted');
    }
}