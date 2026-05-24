<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WaqfRunHostel;
use Illuminate\Http\Request;

class WaqfRunHostelController extends Controller
{
    public function index(Request $request)
    {
        $query = WaqfRunHostel::query();

        if ($request->search) {
            $query->where('name', 'ILIKE', "%{$request->search}%")
                ->orWhere('address', 'ILIKE', "%{$request->search}%");
        }

        $query->orderBy(
            $request->sort_field ?? 'created_at',
            $request->sort_direction ?? 'desc'
        );

        $hostels = $query->paginate(10)->withQueryString();

        return inertia('Admin/WaqfRunHostels/Index', [
            'hostels' => $hostels,
            'filters' => $request->only(['search', 'sort_field', 'sort_direction']),
        ]);
    }


    public function create()
    {
        return inertia('Admin/WaqfRunHostels/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'          => 'required|string|max:255',
            'address'       => 'required|string',
            'seat_capacity' => 'required|integer|min:1',
            'contact_no'    => 'required|string|max:50',
        ]);

        WaqfRunHostel::create($data);

        return redirect()->route('admin.waqf-run-hostels.index')
            ->with('success', 'Hostel added successfully.');
    }

    public function edit($id)
    {
        $hostel = WaqfRunHostel::findOrFail($id);

        return inertia('Admin/WaqfRunHostels/Edit', [
            'hostel' => $hostel,
        ]);
    }


    public function update(Request $request, WaqfRunHostel $waqfRunHostel)
    {
        $data = $request->validate([
            'name'          => 'required|string|max:255',
            'address'       => 'required|string',
            'seat_capacity' => 'required|integer|min:1',
            'contact_no'    => 'required|string|max:50',
        ]);

        $waqfRunHostel->update($data);

        return redirect()->route('admin.waqf-run-hostels.index')
            ->with('success', 'Hostel updated successfully.');
    }

    public function destroy(WaqfRunHostel $waqfRunHostel)
    {
        $waqfRunHostel->delete();

        return back()->with('success', 'Hostel deleted.');
    }
}
