<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ImportantWebLink;
use Illuminate\Http\Request;

class ImportantWebLinkController extends Controller
{
    public function index(Request $request)
    {
        $query = ImportantWebLink::query();

        if ($request->search) {
            $query->where('subject', 'ILIKE', '%' . $request->search . '%');
        }

        if ($request->category) {
            $query->where('category', $request->category);
        }

        $links = $query
            ->orderBy('id', 'desc')
            ->paginate(10)
            ->withQueryString();

        return inertia('Admin/ImportantWebLinks/Index', [
            'links'   => $links,
            'filters' => $request->only(['search', 'category']),
        ]);
    }


    public function create()
    {
        return inertia('Admin/ImportantWebLinks/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required|string|max:100',
            'subject'  => 'required|string|max:255',
            'web_link' => 'required|string|max:500',
        ]);

        ImportantWebLink::create($request->only('category', 'subject', 'web_link'));

        return redirect()->route('admin.important-web-links.index')
            ->with('success', 'Link added successfully');
    }

    public function edit(ImportantWebLink $importantWebLink)
    {
        return inertia('Admin/ImportantWebLinks/Edit', [
            'link' => $importantWebLink,
        ]);
    }

    public function update(Request $request, ImportantWebLink $importantWebLink)
    {
        $request->validate([
            'category' => 'required|string|max:100',
            'subject'  => 'required|string|max:255',
            'web_link' => 'required|string|max:500',
        ]);

        $importantWebLink->update($request->only('category', 'subject', 'web_link'));

        return redirect()->route('admin.important-web-links.index')
            ->with('success', 'Link updated successfully');
    }

    public function destroy(ImportantWebLink $importantWebLink)
    {
        $importantWebLink->delete();

        return back()->with('success', 'Link deleted successfully');
    }
}
