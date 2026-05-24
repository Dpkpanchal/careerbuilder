<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::prefix('admin/ajax')->group(function () {
    Route::get('/subcategories', fn(Request $r) =>
        \App\Models\SubCategory::where('category_id', $r->category_id)->get()
    );

    Route::get('/menuitems', fn(Request $r) =>
        \App\Models\MenuItem::where('sub_category_id', $r->sub_category_id)->get()
    );

    Route::get('/menu-groups/by-subcategory/{subCategory}', function ($subCategory) {
            return \App\Models\MenuGroup::where('sub_category_id', $subCategory)
                ->orderBy('sort_order')
                ->get(['id', 'title']);
        });

});
