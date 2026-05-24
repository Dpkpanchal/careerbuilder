<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ItiCollege;
use Illuminate\Http\Request;

class ItiCollegeController extends Controller
{
    public function index(Request $request)
    {
        $colleges = ItiCollege::withCount('trades')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return inertia('Admin/ItiCollege/Index', [
            'colleges' => $colleges
        ]);
    }

    public function create()
    {
        return inertia('Admin/ItiCollege/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',

            'trades' => 'required|array|min:1',
            'trades.*.name' => 'required|string|max:255',
            'trades.*.duration' => 'required|string|in:6MO,1YR,2YR',
        ]);

        $college = ItiCollege::create([
            'name' => $request->name,
            'type' => $request->type,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);

        foreach ($request->trades as $trade) {
            $college->trades()->create([
                'name' => $trade['name'],
                'duration' => $trade['duration'],
            ]);
        }

        return redirect()
            ->route('admin.iti-colleges.index')
            ->with('success', 'ITI College created successfully with trades.');
    }

    public function edit(ItiCollege $iti_college)
    {
        $iti_college->load('trades');

        return inertia('Admin/ItiCollege/Edit', [
            'college' => $iti_college
        ]);
    }

    public function update(Request $request, ItiCollege $iti_college)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',

            'trades' => 'required|array|min:1',
            'trades.*.name' => 'required|string|max:255',
            'trades.*.duration' => 'required|string|in:6MO,1YR,2YR',
        ]);

        $iti_college->update([
            'name' => $request->name,
            'type' => $request->type,
            'address' => $request->address,
            'phone' => $request->phone,
        ]);

        // Refresh trades
        $iti_college->trades()->delete();

        foreach ($request->trades as $trade) {
            $iti_college->trades()->create([
                'name' => $trade['name'],
                'duration' => $trade['duration'],
            ]);
        }

        return redirect()
            ->route('admin.iti-colleges.index')
            ->with('success', 'ITI College updated successfully.');
    }

    public function destroy(ItiCollege $iti_college)
    {
        $iti_college->delete();

        return redirect()
            ->route('admin.iti-colleges.index')
            ->with('success', 'College removed successfully.');
    }
}
