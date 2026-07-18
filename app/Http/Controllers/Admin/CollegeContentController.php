<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;
use App\Models\CollegeContent;

class CollegeContentController extends Controller
{
    public function index(Request $request)
    {
        $query = CollegeContent::with([
            'menu:id,label',
            'tab:id,label',
            'section:id,label',
            'link:id,label',
        ]);

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('code', 'like', '%' . $request->search . '%')
                  ->orWhere('city', 'like', '%' . $request->search . '%')
                  ->orWhere('state', 'like', '%' . $request->search . '%')
                  ->orWhere('website', 'like', '%' . $request->search . '%')
                  ->orWhere('url', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->filled('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        $collageContents = $query
            ->orderByDesc('id')
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/CollegeContent/Index', [
            'collageContents' => $collageContents,
            'filters' => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $collegeMenu = Menu::where('key', 'colleges')
            ->with('children.children.children')
            ->firstOrFail();

        return Inertia::render('Admin/CollegeContent/Create', [
            'tabsData' => $collegeMenu->children,
            'menu_id' => $collegeMenu->id,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       // dd($request->all());
        // section's slug is stored as the record's `url` (same pattern as update())
        $slug = Menu::where('id', $request->link_id)->value('slug');

        $validated = $request->validate([
            'menu_id'    => 'required|exists:menus,id',
            'tab_id'     => 'nullable|exists:menus,id',
            'section_id' => 'nullable|exists:menus,id',
            'link_id'    => 'nullable|exists:menus,id',

            'name'       => 'required|string|max:255',
            'code'       => 'nullable|string|max:100',
            'state'      => 'nullable|string|max:255',
            'city'       => 'nullable|string|max:255',
            'website'    => 'nullable|url|max:255',

            'address'    => 'nullable|string',
            'contact'    => 'nullable|string|max:100',
            'url'        => 'nullable|url|max:255',
            'note'       => 'nullable|string',

            'is_active'  => 'nullable|boolean',
        ]);

        CollegeContent::create([
            'menu_id'    => $validated['menu_id'],
            'tab_id'     => $validated['tab_id'] ?? null,
            'section_id' => $validated['section_id'] ?? null,
            'link_id'    => $validated['link_id'] ?? null,

            'name'       => $validated['name'],
            'code'       => $validated['code'] ?? null,
            'state'      => $validated['state'] ?? null,
            'city'       => $validated['city'] ?? null,
            'address'    => $validated['address'] ?? null,
            'contact'    => $validated['contact'] ?? null,
            'website'    => $validated['website'] ?? null,
            'url'        => $slug ?? null,
            'note'       => $validated['note'] ?? null,

            'is_active'  => $validated['is_active'] ?? true,
        ]);

        return redirect()
            ->route('admin.college-content.index')
            ->with('success', 'College content created successfully.');
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
    public function edit(CollegeContent $collegeContent)
    {
        
        $collegeMenu = Menu::where('key', 'colleges')
            ->with('children.children.children')
            ->firstOrFail();

        return Inertia::render('Admin/CollegeContent/Edit', [
            'tabsData' => $collegeMenu->children,
            'menu_id' => $collegeMenu->id,
            'collegeContent' => $collegeContent,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CollegeContent $collegeContent)
    {
        $slug = Menu::where('id', $request->link_id)->value('slug');

        $validated = $request->validate([
            'menu_id'    => 'required|exists:menus,id',
            'tab_id'     => 'nullable|exists:menus,id',
            'section_id' => 'nullable|exists:menus,id',
            'link_id'    => 'nullable|exists:menus,id',

            'name'       => 'required|string|max:255',
            'code'       => 'nullable|string|max:100',
            'state'      => 'nullable|string|max:255',
            'city'       => 'nullable|string|max:255',
            'website'    => 'nullable|url|max:255',
            'address'    => 'nullable|string',
            'contact'    => 'nullable|string|max:100',
            'url'        => 'nullable|url|max:255',
            'note'       => 'nullable|string',

            'is_active'  => 'nullable|boolean',
        ]);

        $collegeContent->update([
            'menu_id'    => $validated['menu_id'],
            'tab_id'     => $validated['tab_id'] ?? null,
            'section_id' => $validated['section_id'] ?? null,
            'link_id'    => $validated['link_id'] ?? null,

            'name'       => $validated['name'],
            'code'       => $validated['code'] ?? null,
            'state'      => $validated['state'] ?? null,
            'city'       => $validated['city'] ?? null,
            'website'    => $validated['website'] ?? null,
            'address'    => $validated['address'] ?? null,
            'contact'    => $validated['contact'] ?? null,
            'url'        => $slug ?? null,
            'note'       => $validated['note'] ?? null,

            'is_active'  => $validated['is_active'] ?? true,
        ]);

        return redirect()
            ->route('admin.college-content.index')
            ->with('success', 'College content updated successfully.');
    }

    public function status(CollegeContent $collegeContent)
    {
        $collegeContent->update([
            'is_active' => ! $collegeContent->is_active,
        ]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CollegeContent $collegeContent)
    {
        $collegeContent->delete();

        return back()->with('success', 'Deleted Successfully');
    }
}
