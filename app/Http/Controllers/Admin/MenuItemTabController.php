<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MenuItemTab;
use App\Models\MenuItem;
use Illuminate\Http\Request;

class MenuItemTabController extends Controller
{
    /**
     * Display a listing of the tabs.
     */
    public function index(Request $request)
    {
        $query = MenuItemTab::with('menuItem.subCategory.category');

        if ($request->search) {
            $search = strtolower($request->search);

            $query->where(function ($q) use ($search) {

                // ✅ Tab fields
                $q->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"])
                ->orWhereRaw('LOWER(icon) LIKE ?', ["%{$search}%"])
                ->orWhereRaw('CAST(sort_order AS CHAR) LIKE ?', ["%{$search}%"]);

                // ✅ Menu item
                $q->orWhereHas('menuItem', function ($m) use ($search) {
                    $m->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"])
                    ->orWhereRaw('LOWER(slug) LIKE ?', ["%{$search}%"]);
                });

                // ✅ Subcategory
                $q->orWhereHas('menuItem.subCategory', function ($s) use ($search) {
                    $s->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"]);
                });

                // ✅ Category
                $q->orWhereHas('menuItem.subCategory.category', function ($c) use ($search) {
                    $c->whereRaw('LOWER(name) LIKE ?', ["%{$search}%"]);
                });

            });
        }

        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';

        $tabs = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->withQueryString();

        return $this->adminRender('Admin/itemtabs/Index', [
            'tabs'    => $tabs,
            'filters' => $request->only(['search', 'sort_field', 'sort_direction']),
        ]);
    }



    /**
     * Show form to create a tab.
     */
   public function create()
    {
        return $this->adminRender('Admin/itemtabs/Create', [
            'categories' => \App\Models\Category::all(),
            'subcategories' => [],
            'menuItems' => [],
        ]);
    }


    /**
     * Store a new tab.
     */
    public function store(Request $request)
    {
        $request->validate([
            'menu_item_id' => 'required|exists:menu_items,id',
            'name' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
        ]);

        MenuItemTab::create([
            'menu_item_id' => $request->menu_item_id,
            'name' => $request->name,
            'icon' => $request->icon,
            'sort_order' => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.itemtabs.index')
            ->with('success', 'Tab created successfully.');
    }

    /**
     * Show form to edit a tab.
     */
    public function edit(MenuItemTab $itemtab)
    {
        $itemtab->load('menuItem.subCategory.category');

        $categoryId     = $itemtab->menuItem->subCategory->category_id;
        $subCategoryId  = $itemtab->menuItem->sub_category_id;
        $menuItemId     = $itemtab->menu_item_id;

        return $this->adminRender('Admin/itemtabs/Edit', [
            'tab'               => $itemtab,

            // ✅ dropdown data
            'categories'        => \App\Models\Category::all(),
            'subCategories'     => \App\Models\SubCategory::where('category_id', $categoryId)->get(),
            'menuItems'         => \App\Models\MenuItem::where('sub_category_id', $subCategoryId)->get(),

            // ✅ selected values
            'selectedCategory'  => $categoryId,
            'selectedSubCat'    => $subCategoryId,
            'selectedMenuItem'  => $menuItemId,
        ]);
    }




    /**
     * Update tab.
     */
    public function update(Request $request, MenuItemTab $itemtab)
    {
        $request->validate([
            'menu_item_id' => 'required|exists:menu_items,id',
            'name' => 'required|string|max:255',
            'icon' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer',
        ]);

        $itemtab->update([
            'menu_item_id' => $request->menu_item_id,
            'name' => $request->name,
            'icon' => $request->icon,
            'sort_order' => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.itemtabs.index')
            ->with('success', 'Tab updated successfully.');
    }

    /**
     * Delete a tab.
     */
    public function destroy(MenuItemTab $itemtab)
    {
        $itemtab->delete();

        return redirect()->route('admin.itemtabs.index')
            ->with('success', 'Tab deleted successfully.');
    }

}
