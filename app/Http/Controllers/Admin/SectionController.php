<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionController extends Controller
{
    // 📄 INDEX PAGE
    public function index()
    {
        $sections = Section::orderBy('id')->get();

        return Inertia::render('Admin/Sections/Index', [
            'sections' => $sections
        ]);
    }

    // ➕ CREATE PAGE
    public function create()
    {
        return Inertia::render('Admin/Sections/Create');
    }

    // 💾 STORE
    public function store(Request $request)
    {
        $validated = $request->validate([
            'section_key' => 'required|unique:sections,section_key',
            'heading' => 'nullable|string|max:255',
            'heading_prefix' => 'nullable|string|max:255',
            'heading_highlight' => 'nullable|string|max:255',
            'subheading' => 'nullable|string',
        ]);

        Section::create($validated);

        return redirect()->route('admin.sections.index')
            ->with('success', 'Section created successfully');
    }

    // ✏️ EDIT PAGE
    public function edit($id)
    {
        $section = Section::findOrFail($id);

        return Inertia::render('Admin/Sections/Edit', [
            'section' => $section
        ]);
    }

    // 🔄 UPDATE
    public function update(Request $request, $id)
    {
        $section = Section::findOrFail($id);

        $validated = $request->validate([
            'section_key' => 'required|unique:sections,section_key,' . $id,
            'heading' => 'nullable|string|max:255',
            'heading_prefix' => 'nullable|string|max:255',
            'heading_highlight' => 'nullable|string|max:255',
            'subheading' => 'nullable|string',
        ]);

        $section->update($validated);

        return redirect()->route('admin.sections.index')
            ->with('success', 'Section updated successfully');
    }

    // ❌ DELETE
    public function destroy($id)
    {
        Section::findOrFail($id)->delete();

        return redirect()->back()
            ->with('success', 'Section deleted successfully');
    }
}