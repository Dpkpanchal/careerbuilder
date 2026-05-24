<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SubCategory;
use App\Models\Category;
use App\Models\MenuGroup;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
class SubCategoryController extends Controller
{
    public function index(Request $request)
    {
        $query = SubCategory::with('category');

        // ✅ Search filter
        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        // ✅ Filter by parent category
        if ($request->category_id) {
            $query->where('category_id', $request->category_id);
        }

        // ✅ Sorting
        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';

        $subCategories = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->withQueryString();

        // ✅ Load categories for dropdown filter
        $categories = Category::all();

        return $this->adminRender('Admin/subcategories/Index', [
            'subCategories' => $subCategories,
            'categories'    => $categories,
            'filters'       => $request->only(['search', 'category_id', 'sort_field', 'sort_direction']),
        ]);
    }

    public function create()
    {
        // ✅ Load ALL main categories
        $categories = Category::all();

        return $this->adminRender('Admin/subcategories/Create', [
            'categories' => $categories
        ]);
    }

    // public function store(Request $request)
    // {
        
    //     $request->validate([
    //         'category_id' => 'required',
    //         'name'        => 'required'
    //     ]);

    //     SubCategory::create([
    //         'category_id' => $request->category_id,
    //         'name'        => $request->name,
    //         'slug'        => Str::slug($request->name),
    //     ]);

    //     return redirect()->route('admin.subcategories.index')
    //         ->with('success', 'Subcategory created successfully.');
    // }


   public function store(Request $request)
{
    $request->validate([
        'category_id'     => 'required|exists:categories,id',
        'name'            => 'required|string|max:255',
        'groups'          => 'nullable|array',
        'groups.*.title'  => 'required|string|max:255',
    ]);

    // Generate unique slug
    $slug = $request->slug
        ? $this->generateUniqueSlug($request->slug)
        : $this->generateUniqueSlug($request->name);

    // Create Sub Category
    $subCategory = SubCategory::create([
        'category_id' => $request->category_id,
        'name'        => $request->name,
        'slug'        => $slug,
    ]);

    // Save group titles
    if ($request->filled('groups')) {
        foreach ($request->groups as $index => $group) {
            MenuGroup::create([
                'sub_category_id' => $subCategory->id,
                'title'           => $group['title'],
                'sort_order'      => $index,
            ]);
        }
    }

    return redirect()
        ->route('admin.subcategories.index')
        ->with('success', 'Subcategory created successfully.');
}

/**
 * Generate unique slug
 */
    private function generateUniqueSlug($value, $ignoreId = null)
    {
        $slug = Str::slug($value);
        $originalSlug = $slug;
        $count = 1;

        $query = SubCategory::where('slug', $slug);
        if ($ignoreId) {
            $query->where('id', '!=', $ignoreId);
        }

        while ($query->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
            $query = SubCategory::where('slug', $slug);
            if ($ignoreId) {
                $query->where('id', '!=', $ignoreId);
            }
        }

        return $slug;
    }


    // public function edit(SubCategory $subcategory)
    // {
    //     // ✅ Load all categories
    //     $categories = Category::all();

    //     return $this->adminRender('Admin/subcategories/Edit', [
    //         'subcategory' => $subcategory,
    //         'categories'  => $categories
    //     ]);
    // }

    public function edit(SubCategory $subcategory)
    {
        $groups = MenuGroup::where('sub_category_id', $subcategory->id)
            ->orderBy('sort_order')
            ->get();

        return $this->adminRender('Admin/subcategories/Edit', [
            'subcategory' => $subcategory,
            'categories'  => Category::all(),
            'groups'      => $groups,   // 🔥 THIS WAS MISSING
        ]);
    }



  public function update(Request $request, SubCategory $subcategory)
{
    $request->validate([
        'category_id'     => 'required|exists:categories,id',
        'name'            => 'required|string|max:255',
        'groups'          => 'nullable|array',
        'groups.*.title'  => 'required|string|max:255',
    ]);

    DB::transaction(function () use ($request, $subcategory) {

        /* ===============================
           UPDATE SUB CATEGORY
        ================================ */

        $slug = $request->slug
            ? $this->generateUniqueSlug($request->slug, $subcategory->id)
            : $this->generateUniqueSlug($request->name, $subcategory->id);

        $subcategory->update([
            'category_id' => $request->category_id,
            'name'        => $request->name,
            'slug'        => $slug,
        ]);

        /* ===============================
           UPDATE MENU GROUPS
        ================================ */

        $existingGroupIds = $subcategory->menuGroups()->pluck('id')->toArray();
        $submittedGroupIds = [];

        if ($request->filled('groups')) {
            foreach ($request->groups as $index => $group) {

                // UPDATE existing group
                if (!empty($group['id'])) {
                    MenuGroup::where('id', $group['id'])->update([
                        'title'      => $group['title'],
                        'sort_order' => $index,
                    ]);

                    $submittedGroupIds[] = $group['id'];
                }
                // CREATE new group
                else {
                    $newGroup = MenuGroup::create([
                        'sub_category_id' => $subcategory->id,
                        'title'           => $group['title'],
                        'sort_order'      => $index,
                    ]);

                    $submittedGroupIds[] = $newGroup->id;
                }
            }
        }

        // DELETE removed groups
        $groupsToDelete = array_diff($existingGroupIds, $submittedGroupIds);
        if (!empty($groupsToDelete)) {
            MenuGroup::whereIn('id', $groupsToDelete)->delete();
        }
    });

    return redirect()
        ->route('admin.subcategories.index')
        ->with('success', 'Subcategory updated successfully.');
}

    public function destroy(SubCategory $subcategory)
    {
        $subcategory->delete();

        return redirect()->route('admin.subcategories.index')
            ->with('success', 'Subcategory deleted successfully.');
    }
}
