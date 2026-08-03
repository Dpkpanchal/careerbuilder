<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseContent;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;

class CourseContentController extends Controller
{
    public function index(Request $request)
    {
        $query = CourseContent::with(['menu', 'tab', 'section', 'link']);
 
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

        $courses = $query->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Admin/CourseContent/Index', [
            'courses' => $courses,
            'filters'  => $request->only(['search', 'status']),
        ]);
    }

    public function create()
    {
        $courseMenu = Menu::where('key', 'courses')
            ->with('children.children.children')
            ->firstOrFail();

        // Return raw children (same as CareerContentController)
        return Inertia::render('Admin/CourseContent/Create', [
            'tabsData' => $courseMenu->children,
            'menu_id'  => $courseMenu->id,
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validateData($request);

        // Generate URL from link slug
        if (!empty($data['link_id'])) {
            $link = Menu::find($data['link_id']);
            $data['url'] = $link ? $link->slug : null;
        }

        CourseContent::create($data);

        return redirect()
            ->route('admin.course-content.index')
            ->with('success', 'Course content created successfully.');
    }

    public function edit(CourseContent $courseContent)
    {
        // Get tabs data from the menu
        $tabsData = $courseContent->menu_id
            ? (Menu::with('children.children.children')->find($courseContent->menu_id)?->children ?? [])
            : [];

        return Inertia::render('Admin/CourseContent/Edit', [
            'courseContent' => $courseContent,
            'tabsData'      => $tabsData,
        ]);
    }

    public function update(Request $request, CourseContent $courseContent)
    {
        $data = $this->validateData($request, $courseContent->id);

        // Generate URL from link slug
        if (!empty($data['link_id'])) {
            $link = Menu::find($data['link_id']);
            $data['url'] = $link ? $link->slug : null;
        }

        $courseContent->update($data);

        return redirect()
            ->route('admin.course-content.index')
            ->with('success', 'Course content updated successfully.');
    }

    public function destroy(CourseContent $courseContent)
    {
        $courseContent->delete();

        return redirect()
            ->route('admin.course-content.index')
            ->with('success', 'Course content deleted successfully.');
    }

    public function toggleStatus(CourseContent $courseContent)
    {
        $courseContent->update([
            'is_active' => ! $courseContent->is_active,
        ]);

        return back()->with(
            'success',
            'Status updated to ' . ($courseContent->is_active ? 'Active' : 'Inactive') . '.'
        );
    }

    private function validateData(Request $request, $ignoreId = null)
    {
        return $request->validate([
            'menu_id'                     => 'nullable|integer',
            'tab_id'                      => 'nullable|integer',
            'section_id'                  => 'nullable|integer',
            'link_id'                     => 'nullable|integer',
            'url'                         => 'nullable|string|max:255',
            'intro_heading'               => 'nullable|string|max:255',
            'intro_description'           => 'nullable|string',
            'intro_description_secondary' => 'nullable|string',
            'snapshot'                    => 'nullable|array',
            'sectors'                     => 'nullable|array',
            'admission_heading'           => 'nullable|string|max:255',
            'admission_description'       => 'nullable|string',
            'admission_info'              => 'nullable|array',
            'next_steps'                  => 'nullable|array',
            'skill_agencies'              => 'nullable|array',
            'long_term_programs' => 'nullable|array',    // NEW
            'short_term_courses' => 'nullable|array',    // NEW
            'cta_button' => 'nullable|array',            // NEW

            'sort_order'                  => 'nullable|integer',
            'is_active'                   => 'boolean',
        ]);
    }
}