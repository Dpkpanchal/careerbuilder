<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MenuItemTabContent;
use App\Models\MenuItemTab;
use Illuminate\Http\Request;

class MenuItemTabContentController extends Controller
{
    public function index(Request $request)
    {
        $contents = MenuItemTabContent::with('tab.menuItem.subCategory.category')
            ->orderBy('sort_order', 'asc')
            ->paginate(10)
            ->withQueryString();

        return $this->adminRender('Admin/tabcontents/Index', [
            'contents' => $contents
        ]);
    }

    public function create()
    {
        return $this->adminRender('Admin/tabcontents/Create', [
            'tabs' => MenuItemTab::with('menuItem')->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'menu_item_tab_id' => 'required|exists:menu_item_tabs,id',
            'title'            => 'nullable|string|max:255',
            'subtitle'         => 'nullable|string|max:255',
            'html_content'     => 'required',
            'sort_order'       => 'nullable|integer',
        ]);

        MenuItemTabContent::create([
            'menu_item_tab_id' => $request->menu_item_tab_id,
            'title'            => $request->title,
            'subtitle'         => $request->subtitle,
            'html_content'     => $request->html_content,
            'sort_order'       => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.tabcontents.index')
            ->with('success', 'Tab content created successfully.');
    }

    public function edit(MenuItemTabContent $tabcontent)
    {
        return $this->adminRender('Admin/tabcontents/Edit', [
            'tabcontent' => $tabcontent->load('tab.menuItem'),
            'tabs'       => MenuItemTab::with('menuItem')->get()
        ]);
    }

    public function update(Request $request, MenuItemTabContent $tabcontent)
    {
        $request->validate([
            'menu_item_tab_id' => 'required|exists:menu_item_tabs,id',
            'title'            => 'nullable|string|max:255',
            'subtitle'         => 'nullable|string|max:255',
            'html_content'     => 'required',
            'sort_order'       => 'nullable|integer',
        ]);

        $tabcontent->update([
            'menu_item_tab_id' => $request->menu_item_tab_id,
            'title'            => $request->title,
            'subtitle'         => $request->subtitle,
            'html_content'     => $request->html_content,
            'sort_order'       => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.tabcontents.index')
            ->with('success', 'Tab content updated successfully.');
    }

    public function destroy(MenuItemTabContent $tabcontent)
    {
        $tabcontent->delete();

        return redirect()->route('admin.tabcontents.index')
            ->with('success', 'Tab content deleted successfully.');
    }
}
