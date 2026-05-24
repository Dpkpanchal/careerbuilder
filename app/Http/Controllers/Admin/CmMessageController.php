<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\CmMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CmMessageController extends Controller
{
    // ✅ List Page
    public function index()
    {
        return Inertia::render('Admin/CmMessage/Index', [
            'messages' => CmMessage::latest()->get()
        ]);
    }

    // ✅ Create Page
    public function create()
    {
        $message = CmMessage::first(); // only 1 record

        return Inertia::render('Admin/CmMessage/Create', [
            'message' => $message
        ]);
    }

    // ✅ Store
    // public function store(Request $request)
    // {
    //     dd("STORE CALLED");
    //    // dd($request->content);
    //     $request->validate([
    //         'content' => 'nullable|string',
    //         'image' => 'nullable|image'
    //     ]);

    //     $message = CmMessage::first();

    //     $path = $message->image ?? null;

    //     if ($request->hasFile('image')) {
    //         $path = $request->file('image')->store('cm', 'public');
    //     }

    //     $content = html_entity_decode($request->content);
    //     $content = preg_replace('/^<p>(.*)<\/p>$/s', '$1', $content);

        

    //     if ($message) {
    //         // ✅ Update
    //         $message->update([
    //             'content' => html_entity_decode($content),
    //             'image' => $path,
    //         ]);
    //     } else {
    //         // ✅ Create
    //         CmMessage::create([
    //             'content' => html_entity_decode($content),
    //             'image' => $path,
    //         ]);
    //     }

    //     return back()->with('success', 'Saved Successfully');
    // }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'nullable|string',
            'image' => 'nullable|image'
        ]);

        $message = CmMessage::first();

        $path = $message->image ?? null;

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('cm', 'public');
        }

        $content = html_entity_decode($request->content);

        if ($message) {
            // ✅ UPDATE CASE
            $message->update([
                'content' => $content,
                'image' => $path,
            ]);

            return back()->with('success', 'Updated Successfully'); // 🔥 change
        } else {
            // ✅ CREATE CASE
            CmMessage::create([
                'content' => $content,
                'image' => $path,
            ]);

            return back()->with('success', 'Saved Successfully'); // 🔥 change
        }
    }


    // ✅ Edit Page
    public function edit(CmMessage $cmMessage)
    {
        return Inertia::render('Admin/CmMessage/Edit', [
            'message' => $cmMessage
        ]);
    }

    // ✅ Update
    public function update(Request $request, CmMessage $cmMessage)
    {
        dd("UPDATE CALLED");
        $request->validate([
            'content' => 'nullable|string',
            'image' => 'nullable|image'
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('cm', 'public');
            $cmMessage->image = $path;
        }

        $cmMessage->update([
            'content' => $request->content,
        ]);

        return redirect()->back()->with('success', 'CM Message updated');
    }

    // ✅ Delete
    public function destroy(CmMessage $cmMessage)
    {
        $cmMessage->delete();

        return redirect()->route('cm.index')->with('success', 'Deleted successfully');
    }
}