<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\PageContent;
use App\Services\MenuService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageContentController extends Controller
{
    public function edit(Menu $navMenu)
    {
        $content = PageContent::firstOrNew(['menu_id' => $navMenu->id]);

        $rawHtml = $content->html_content ?? '';
        // Decode any CKEditor-escaped HTML so the editor shows real markup.
        $decodedHtml = $rawHtml ? html_entity_decode($rawHtml, ENT_QUOTES | ENT_HTML5, 'UTF-8') : '';

        return Inertia::render('Admin/PageContents/Edit', [
            'menu'    => $navMenu->only('id', 'label', 'slug', 'key', 'type'),
            'content' => [
                'html_content'     => $decodedHtml,
                'meta_title'       => $content->meta_title ?? '',
                'meta_description' => $content->meta_description ?? '',
                'is_published'     => $content->is_published ?? false,
            ],
        ]);
    }

    public function update(Request $request, Menu $navMenu)
    {
        $validated = $request->validate([
            'html_content'     => 'nullable|string',
            'meta_title'       => 'nullable|string|max:255',
            'meta_description' => 'nullable|string|max:500',
            'is_published'     => 'boolean',
        ]);

        PageContent::updateOrCreate(
            ['menu_id' => $navMenu->id],
            $validated
        );

        MenuService::clearCache();

        return redirect("/admin/nav-menus/{$navMenu->id}/content/edit")
            ->with('success', 'Content saved successfully.');
    }
}
