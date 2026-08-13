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

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                ->orWhere('address', 'LIKE', "%{$search}%");
            });
        }

        if ($request->filled('status')) {
            $query->where('is_active', $request->status);
        }

        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';
        $query->orderBy($sortField, $sortDirection);

        $hostels = $query->paginate(10);

        return inertia('Admin/WaqfRunHostels/Index', [
            'hostels' => $hostels,
            'filters' => $request->only(['search', 'status', 'sort_field', 'sort_direction'])
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

    public function toggleStatus(Request $request, $id)
    {
        $item = WaqfRunHostel::findOrFail($id);
        $item->is_active = $request->input('is_active');
        $item->save();

        return redirect()->back()->with('success', 'Status updated successfully!');
    }



}
