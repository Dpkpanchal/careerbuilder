<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\LeaderMessage;


class LeaderMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return Inertia::render('Admin/Leaders/Index', [
                'messages' => LeaderMessage::latest()->get()
         ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        dd("sdsd");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function destroy(string $id)
    {
        //
    }
}
