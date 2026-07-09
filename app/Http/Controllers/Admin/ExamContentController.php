<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;
use App\Models\ExamContent;

class ExamContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   public function index()
    {
       $examContents = ExamContent::with([
            'menu:id,label',
            'tab:id,label',
            'section:id,label',
        ])
        ->orderByDesc('id')
        ->paginate(10)
        ->withQueryString();

        return Inertia::render('Admin/ExamContent/Index', [
            'examContents' => $examContents,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
   public function create()
    {
        $examMenu = Menu::where('key', 'exams')
            ->with('children.children.children')
            ->firstOrFail();

        return Inertia::render('Admin/ExamContent/Create', [
            'menus' => $examMenu->children
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

    $slug = Menu::where('id', $request->section_id)->value('slug');

    //dd($request->all());
    $validated = $request->validate([

        'menu_id' => 'required|exists:menus,id',
        'tab_id' => 'nullable|exists:menus,id',
        'section_id' => 'nullable|exists:menus,id',

        'tag' => 'nullable|string|max:255',
        'level' => 'nullable|string|max:255',

        'name' => 'nullable|string|max:255',
        'exam' => 'nullable|string|max:255',
        'fullForm' => 'nullable|string|max:255',
        'title' => 'nullable|string|max:255',
        'short' => 'nullable|string|max:255',

        'route' => 'nullable|string|max:255',
        'nature' => 'nullable|string|max:255',
        'group' => 'nullable|string|max:255',
        'who' => 'nullable|string|max:255',

        'purpose' => 'nullable|string',
        'eligibility' => 'nullable|array',
        'eligibility.*' => 'nullable|string',

        'apply' => 'nullable|string|max:255',
        'activity' => 'nullable|array',
        'activity.*' => 'nullable|string',
        'calendar' => 'nullable|string|max:255',

        'source' => 'nullable|url',
        'href' => 'nullable|url',
        'linkLabel' => 'nullable|string|max:255',

        'note' => 'nullable|string',
        'statusNote' => 'nullable|string',

        'wbFocus' => 'nullable|boolean',
        'is_active' => 'nullable|boolean',

        'sources' => 'nullable|array',
        'sources.*.label' => 'nullable|string|max:255',
        'sources.*.href' => 'nullable|url',

        'links' => 'nullable|array',
        'links.*.label' => 'nullable|string|max:255',
        'links.*.href' => 'nullable|url',

    ]);

    ExamContent::create([

        'menu_id' => $validated['menu_id'],
        'tab_id' => $validated['tab_id'] ?? null,
        'section_id' => $validated['section_id'] ?? null,

        'tag' => $validated['tag'] ?? null,
        'level' => $validated['level'] ?? null,

        'name' => $validated['name'] ?? null,
        'exam' => $validated['exam'] ?? null,
        'full_form' => $validated['fullForm'] ?? null,
        'title' => $validated['title'] ?? null,
        'short' => $validated['short'] ?? null,

        'route' => $validated['route'] ?? null,
        'nature' => $validated['nature'] ?? null,
        'group' => $validated['group'] ?? null,
        'who' => $validated['who'] ?? null,

        'purpose' => $validated['purpose'] ?? null,
        'eligibility' => $validated['eligibility'] ?? null,

        'apply' => $validated['apply'] ?? null,
        'activity' => $validated['activity'] ?? null,
        'calendar' => $validated['calendar'] ?? null,

        'source' => $validated['source'] ?? null,
        'href' => $validated['href'] ?? null,
        'link_label' => $validated['linkLabel'] ?? null,

        'note' => $validated['note'] ?? null,
        'status_note' => $validated['statusNote'] ?? null,

        'sources' => $validated['sources'] ?? [],
        'links' => $validated['links'] ?? [],

        'wb_focus' => $validated['wbFocus'] ?? false,
        'is_active' => $validated['is_active'] ?? true,
        'url' => $slug ?? null,

    ]);

    return redirect()
        ->route('admin.exam-content.index')
        ->with('success', 'Exam content created successfully.');
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
    public function edit(ExamContent $examContent)
    {
        $examMenu = Menu::where('key', 'exams')
            ->with('children.children.children')
            ->firstOrFail();

        return Inertia::render('Admin/ExamContent/Edit', [

            'menus' => $examMenu->children,

            'examContent' => [
                'id' => $examContent->id,

                'menu_id' => $examContent->menu_id,
                'tab_id' => $examContent->tab_id,
                'section_id' => $examContent->section_id,
                'link_id' => $examContent->link_id,

                'tag' => $examContent->tag,
                'level' => $examContent->level,

                'name' => $examContent->name,
                'exam' => $examContent->exam,
                'full_form' => $examContent->full_form,
                'title' => $examContent->title,
                'short' => $examContent->short,

                'route' => $examContent->route,
                'nature' => $examContent->nature,
                'group' => $examContent->group,
                'who' => $examContent->who,

                'purpose' => $examContent->purpose,
                'eligibility' => $examContent->eligibility,

                'apply' => $examContent->apply,
                'activity' => $examContent->activity,
                'calendar' => $examContent->calendar,

                'source' => $examContent->source,
                'href' => $examContent->href,
                'link_label' => $examContent->link_label,

                'sources' => $examContent->sources ?? [],
                'links' => $examContent->links ?? [],

                'note' => $examContent->note,
                'status_note' => $examContent->status_note,

                'wb_focus' => $examContent->wb_focus,
                'is_active' => $examContent->is_active,

                'sl' => $examContent->sl,
            ]

        ]);
    }

    /**
     * Update the specified resource in storage.
     */
public function update(Request $request, ExamContent $examContent)
{
    $slug = Menu::where('id', $request->section_id)->value('slug');

    $validated = $request->validate([

        'menu_id' => 'required|exists:menus,id',
        'tab_id' => 'nullable|exists:menus,id',
        'section_id' => 'nullable|exists:menus,id',

        'tag' => 'nullable|string|max:255',
        'level' => 'nullable|string|max:255',

        'name' => 'nullable|string|max:255',
        'exam' => 'nullable|string|max:255',
        'fullForm' => 'nullable|string|max:255',
        'title' => 'nullable|string|max:255',
        'short' => 'nullable|string|max:255',

        'route' => 'nullable|string|max:255',
        'nature' => 'nullable|string|max:255',
        'group' => 'nullable|string|max:255',
        'who' => 'nullable|string|max:255',

        'purpose' => 'nullable|string',
        'eligibility' => 'nullable|array',
        'eligibility.*' => 'nullable|string',

        'apply' => 'nullable|string|max:255',
        'activity' => 'nullable|array',
        'activity.*' => 'nullable|string',
        'calendar' => 'nullable|string|max:255',

        'source' => 'nullable|url',
        'href' => 'nullable|url',
        'linkLabel' => 'nullable|string|max:255',

        'note' => 'nullable|string',
        'statusNote' => 'nullable|string',

        'wbFocus' => 'nullable|boolean',
        'is_active' => 'nullable|boolean',

        'sources' => 'nullable|array',
        'sources.*.label' => 'nullable|string|max:255',
        'sources.*.href' => 'nullable|url',

        'links' => 'nullable|array',
        'links.*.label' => 'nullable|string|max:255',
        'links.*.href' => 'nullable|url',

    ]);

    $examContent->update([

        'menu_id' => $validated['menu_id'],
        'tab_id' => $validated['tab_id'] ?? null,
        'section_id' => $validated['section_id'] ?? null,

        'tag' => $validated['tag'] ?? null,
        'level' => $validated['level'] ?? null,

        'name' => $validated['name'] ?? null,
        'exam' => $validated['exam'] ?? null,
        'full_form' => $validated['fullForm'] ?? null,
        'title' => $validated['title'] ?? null,
        'short' => $validated['short'] ?? null,

        'route' => $validated['route'] ?? null,
        'nature' => $validated['nature'] ?? null,
        'group' => $validated['group'] ?? null,
        'who' => $validated['who'] ?? null,

        'purpose' => $validated['purpose'] ?? null,
        'eligibility' => $validated['eligibility'] ?? null,

        'apply' => $validated['apply'] ?? null,
        'activity' => $validated['activity'] ?? null,
        'calendar' => $validated['calendar'] ?? null,

        'source' => $validated['source'] ?? null,
        'href' => $validated['href'] ?? null,
        'link_label' => $validated['linkLabel'] ?? null,

        'note' => $validated['note'] ?? null,
        'status_note' => $validated['statusNote'] ?? null,

        'sources' => $validated['sources'] ?? [],
        'links' => $validated['links'] ?? [],

        'wb_focus' => $validated['wbFocus'] ?? false,
        'is_active' => $validated['is_active'] ?? true,
        'url' => $slug ?? null,

    ]);

    return redirect()
        ->route('admin.exam-content.index')
        ->with('success', 'Exam content updated successfully.');
}

    /**
     * Remove the specified resource from storage.
     */
   

    public function status(ExamContent $examContent)
    {
        $examContent->update([
            'is_active'=>!$examContent->is_active
        ]);

        return back();
    }

    public function destroy(ExamContent $examContent)
    {
        $examContent->delete();

        return back()->with(
            'success',
            'Deleted Successfully'
        );
    }


}
