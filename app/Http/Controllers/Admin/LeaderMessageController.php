<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\LeaderMessage;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;


class LeaderMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  

    public function index()
    {
        return Inertia::render('Admin/Leaders/Index', [

            'messages' => LeaderMessage::withTrashed()
                ->latest()
                ->get()
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Leaders/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'post' => 'nullable|string|max:255',
            'designation' => 'nullable|string|max:255',
            'about' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {

            $imagePath = $request
                ->file('image')
                ->store('leaders', 'public');
        }

        

        // CREATE LEADER
        LeaderMessage::create([

            'name' => $request->name,

            'slug' => Str::slug($request->name),

            'post' => $request->post,

            'designation' => $request->designation,

            'about' => $request->about,

            'image' => $imagePath,

            'is_blocked' => false,
        ]);

        return redirect()
            ->route('admin.leaders.index')
            ->with(
                'success',
                'Leader created successfully.'
            );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $leaderMessage = LeaderMessage::findOrFail($id);

        return Inertia::render('Admin/Leaders/Edit', [
            'message' => $leaderMessage
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $leaderMessage = LeaderMessage::findOrFail($id);

        $path = $leaderMessage->image;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('leaders', 'public');
        }

        $leaderMessage->update([
            'name' => $request->name,
            'post' => $request->post,
            'designation' => $request->designation,
            'about' => $request->about,
            'image' => $path,
        ]);

        return redirect()->route('admin.leaders.index')
            ->with('success', 'Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $leader = LeaderMessage::findOrFail($id);

        $leader->delete();

        return back()->with(
            'success',
            'Leader deleted successfully.'
        );
    }

    public function toggleBlock($id)
    {
        $leader = LeaderMessage::findOrFail($id);

        $leader->is_blocked = !$leader->is_blocked;

        $leader->save();

        return back()->with(
            'success',
            $leader->is_blocked
                ? 'Leader blocked successfully.'
                : 'Leader unblocked successfully.'
        );
    }

    public function restore($id)
    {
        $leader = LeaderMessage::withTrashed()
            ->findOrFail($id);

        $leader->restore();

        return back()->with(
            'success',
            'Leader restored successfully.'
        );
    }

}
