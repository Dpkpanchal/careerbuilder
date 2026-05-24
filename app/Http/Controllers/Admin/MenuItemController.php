<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MenuItem;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\MenuGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MenuItemController extends Controller
{
    public function index(Request $request)
    {
        $query = MenuItem::with('subCategory');

        // ✅ Search filter
        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        // ✅ Subcategory filter
        if ($request->sub_category_id) {
            $query->where('sub_category_id', $request->sub_category_id);
        }

        // ✅ Sorting
        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';

        $menuItems = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->withQueryString();

        // ✅ Load subcategories for filter dropdown
        $subCategories = SubCategory::all();

        return $this->adminRender('Admin/menuitems/Index', [
            'menuItems'     => $menuItems,
            'subCategories' => $subCategories,
            'filters'       => $request->only(['search', 'sub_category_id', 'sort_field', 'sort_direction']),
        ]);
    }

    public function create()
    {
        return $this->adminRender('Admin/menuitems/Create', [
            'categories' => Category::all(),
            'subcategories' => SubCategory::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'sub_category_id' => 'required|exists:sub_categories,id',
            'name'            => 'required|string|max:255',
            'description'     => 'nullable|string',
            'group_id'        => 'required|exists:menu_groups,id',
        ]);

        MenuItem::create([
            'sub_category_id' => $request->sub_category_id,
            'name'            => $request->name,
            'slug'            => Str::slug($request->name),
            'description'     => $request->description,
            'group_id'        => $request->group_id
        ]);

        return redirect()->route('admin.menuitems.index')
            ->with('success', 'Menu Item created successfully.');
    }

    public function edit(MenuItem $menuitem)
    {
        $groups = MenuGroup::where('sub_category_id', $menuitem->sub_category_id)
        ->orderBy('sort_order')
        ->get();

        return $this->adminRender('Admin/menuitems/Edit', [
            'menuitem' => $menuitem->load('subcategory'),
            'categories' => Category::all(),
            'subcategories' => SubCategory::all(),
            'groups'        => $groups,
        ]);
    }




    public function update(Request $request, MenuItem $menuitem)
    {
        $request->validate([
            'sub_category_id' => 'required|exists:sub_categories,id',
            'group_id'        => 'required|exists:menu_groups,id',
            'name'            => 'required|string|max:255',
            'description'     => 'nullable|string',
        ]);

        // Generate unique slug (ignore current record)
        $slug = Str::slug($request->name);
        $originalSlug = $slug;
        $count = 1;

        while (
            MenuItem::where('slug', $slug)
                ->where('id', '!=', $menuitem->id)
                ->exists()
        ) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        $menuitem->update([
            'sub_category_id' => $request->sub_category_id,
            'group_id'        => $request->group_id,   // ✅ IMPORTANT
            'name'            => $request->name,
            'slug'            => $slug,
            'description'     => $request->description,
        ]);

        return redirect()
            ->route('admin.menuitems.index')
            ->with('success', 'Menu Item updated successfully.');
    }


    public function destroy(MenuItem $menuitem)
    {
        $menuitem->delete();

        return redirect()->route('admin.menuitems.index')
            ->with('success', 'Menu Item deleted successfully.');
    }
}
