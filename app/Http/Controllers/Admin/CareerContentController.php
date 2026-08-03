<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CareerContent;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerContentController extends Controller
{
    /**
     * Listing page.
     */

    
    public function index(Request $request)
    {
        $query = CareerContent::with(['menu', 'tab', 'section', 'link']);
 
        if ($search = $request->query('search')) {
            $query->where(function ($q) use ($search) {
                $q->where('url', 'like', "%{$search}%")
                    ->orWhereHas('menu', fn ($m) => $m->where('label', 'like', "%{$search}%"))
                    ->orWhereHas('tab', fn ($m) => $m->where('label', 'like', "%{$search}%"))
                    ->orWhereHas('section', fn ($m) => $m->where('label', 'like', "%{$search}%"))
                    ->orWhereHas('link', fn ($m) => $m->where('label', 'like', "%{$search}%"));
            });
        }
 
        if ($status = $request->query('status')) {
            $query->where('is_active', $status === 'active');
        }
 
        $contents = $query->latest()
            ->paginate(10)
            ->withQueryString();
 
        return Inertia::render('Admin/CareerContent/Index', [
            'contents' => $contents,
            'filters'  => $request->only(['search', 'status']),
        ]);
    }

    /**
     * Create form.
     *
     * 3-level flow: Tab -> Section -> Link.
     * `menu_id` query param se aata hai (jis menu ke andar "Add" click
     * kiya gaya), aur tabsData = us menu ke seedhe children (Tabs).
     */
    public function create(Request $request)
    {
        $careerMenu = Menu::where('key', 'careers')
            ->with('children.children.children')
            ->firstOrFail();

          // dd($careerMenu->children);

        return Inertia::render('Admin/CareerContent/Create', [
            'tabsData' => $careerMenu->children,
            'menu_id'  => $careerMenu->id,
        ]);
    }

    /**
     * Store new record.
     */
    public function store(Request $request)
    {

   // dd($request->all());
        $validated = $this->validateData($request);

        $validated['url'] = Menu::where('id', $validated['link_id'] ?? null)->value('slug');

        CareerContent::create($validated);

        return redirect()
            ->route('admin.career-content.index')
            ->with('success', 'Career content created successfully.');
    }

    /**
     * Edit form.
     *
     * Same menu ke Tabs wapas load karte hain (jis menu ke andar ye
     * record originally banaya gaya tha) taaki Tab/Section/Link selects
     * pehle se sahi values ke saath dikhein.
     */
    public function edit(CareerContent $careerContent)
    {
        $tabsData = $careerContent->menu_id
            ? (Menu::with('children.children.children')->find($careerContent->menu_id)?->children ?? [])
            : [];


            //dd($tabsData);
        return Inertia::render('Admin/CareerContent/Edit', [
            'tabsData' => $tabsData,
            'content'  => $careerContent,
        ]);
    }

    /**
     * Update existing record.
     */
    public function update(Request $request, CareerContent $careerContent)
    {
   // dd($careerContent);
        $validated = $this->validateData($request);
        $validated['url'] = Menu::where('id', $validated['link_id'] ?? null)->value('slug');

       // dd($validated);

        $careerContent->update($validated);

        return redirect()
            ->route('admin.career-content.index')
            ->with('success', 'Career content updated successfully.');
    }

    /**
     * Delete record.
     */
    public function destroy(CareerContent $careerContent)
    {
        $careerContent->delete();

        return redirect()
            ->route('admin.career-content.index')
            ->with('success', 'Career content deleted successfully.');
    }


    public function toggleStatus(CareerContent $careerContent)
    {
        $careerContent->update([
            'is_active' => ! $careerContent->is_active,
        ]);

        return back()->with(
            'success',
            'Status updated to ' . ($careerContent->is_active ? 'Active' : 'Inactive') . '.'
        );
    }


    /**
     * Common validation for store + update.
     * (Current form me `url` field nahi hai isliye required nahi rakha —
     * agar future me add karo to bas 'required' rule laga dena.)
     */
    private function validateData(Request $request): array
    {
        return $request->validate([
            'menu_id'    => ['nullable', 'integer'],
            'tab_id'     => ['nullable', 'integer'],
            'section_id' => ['nullable', 'integer'],
            'link_id'    => ['nullable', 'integer'],

            'url' => ['nullable', 'string', 'max:255'],

            'branch_groups'             => ['nullable', 'array'],
            'branch_groups.*.title'     => ['nullable', 'string', 'max:255'],
            'branch_groups.*.points'    => ['nullable', 'array'],
            'branch_groups.*.points.*'  => ['nullable', 'string'],

            'pathways'                  => ['nullable', 'array'],
            'pathways.*.title'          => ['nullable', 'string', 'max:255'],
            'pathways.*.steps'          => ['nullable', 'array'],
            'pathways.*.steps.*'        => ['nullable', 'string'],

            'courses'                   => ['nullable', 'array'],
            'courses.*.title'           => ['nullable', 'string', 'max:255'],
            'courses.*.text'            => ['nullable', 'string'],
            'courses.*.url'             => ['nullable', 'string', 'max:255'],
            'courses.*.cta'             => ['nullable', 'string', 'max:255'],

            'exams'                     => ['nullable', 'array'],
            'exams.*.title'             => ['nullable', 'string', 'max:255'],
            'exams.*.text'              => ['nullable', 'string'],
            'exams.*.url'               => ['nullable', 'string', 'max:255'],

            'institute_links'           => ['nullable', 'array'],
            'institute_links.*.title'   => ['nullable', 'string', 'max:255'],
            'institute_links.*.url'     => ['nullable', 'string', 'max:255'],

            'industries'                => ['nullable', 'array'],
            'industries.*'              => ['nullable', 'string', 'max:255'],

            'role_examples'             => ['nullable', 'array'],
            'role_examples.*'           => ['nullable', 'string', 'max:255'],

            'education_pathways'                     => ['nullable', 'array'],
            'education_pathways.*.type'              => ['nullable', 'string', 'max:255'],
            'education_pathways.*.title'             => ['nullable', 'string', 'max:255'],
            'education_pathways.*.description'       => ['nullable', 'string'],
            'education_pathways.*.options'           => ['nullable', 'array'],
            'education_pathways.*.options.*'         => ['nullable', 'string'],
            'education_pathways.*.features'          => ['nullable', 'array'],
            'education_pathways.*.features.*'        => ['nullable', 'string'],
            'education_pathways.*.contact'           => ['nullable', 'string', 'max:255'],

            'vocational_courses'                     => ['nullable', 'array'],
            'vocational_courses.*.title'             => ['nullable', 'string', 'max:255'],
            'vocational_courses.*.duration'          => ['nullable', 'string', 'max:255'],
            'vocational_courses.*.institutes'        => ['nullable', 'array'],
            'vocational_courses.*.institutes.*'      => ['nullable', 'string'],


            // Overview
            'overview'                           => ['nullable', 'array'],
            'overview.*.id'                      => ['nullable', 'string', 'max:255'],
            'overview.*.title'                   => ['nullable', 'string', 'max:255'],
            'overview.*.subtitle'                => ['nullable', 'string', 'max:255'],
            'overview.*.icon'                    => ['nullable', 'string', 'max:255'],
            'overview.*.colorClass'              => ['nullable', 'string', 'max:255'],
            'overview.*.content'                 => ['nullable', 'array'],
            'overview.*.content.*'               => ['nullable', 'string'],

            // Stream Selection
            'stream_selection'                                   => ['nullable', 'array'],
            'stream_selection.*.id'                              => ['nullable', 'string', 'max:255'],
            'stream_selection.*.name'                            => ['nullable', 'string', 'max:255'],
            'stream_selection.*.code'                            => ['nullable', 'string', 'max:255'],
            'stream_selection.*.colorClass'                      => ['nullable', 'string', 'max:255'],

            'stream_selection.*.languageGroups'                  => ['nullable', 'array'],
            'stream_selection.*.languageGroups.groupA'           => ['nullable', 'array'],
            'stream_selection.*.languageGroups.groupA.*'         => ['nullable', 'string'],
            'stream_selection.*.languageGroups.groupB'           => ['nullable', 'array'],
            'stream_selection.*.languageGroups.groupB.*'         => ['nullable', 'string'],

            'stream_selection.*.mainSubjects'                    => ['nullable', 'array'],
            'stream_selection.*.mainSubjects.*'                  => ['nullable', 'string'],

            'stream_selection.*.optionalSubjects'                => ['nullable', 'array'],
            'stream_selection.*.optionalSubjects.*'              => ['nullable', 'string'],

            'stream_selection.*.instruction'                     => ['nullable', 'string'],

            'overview_tree' => ['nullable', 'array'],
            'related_exams' => ['nullable', 'array'],
            'top_colleges_and_universities' => ['nullable', 'array'],
            'key_instructions_eligibility' => 'nullable|array',


           
            'is_active' => ['nullable', 'boolean'],
        ]);
    }
}




