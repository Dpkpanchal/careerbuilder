<?php
// app/Http/Controllers/Admin/EduFundSectionController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EduFundSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EduFundSectionController extends Controller
{
    public function index()
    {
        $sections = EduFundSection::withCount('cards', 'schemes')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Admin/EduFund/Index', [
            'sections' => $sections,
        ]);
    }

    public function edit(EduFundSection $section)
    {
        $section->load('cards', 'schemes');

        return Inertia::render('Admin/EduFund/Edit', [
            'section' => $section,
        ]);
    }

    public function update(Request $request, EduFundSection $section)
    {
        $validated = $request->validate([
            'heading_prefix'    => 'required|string|max:255',
            'heading_highlight' => 'required|string|max:255',
            'description'       => 'required|string',
            'cta_label'         => 'required|string|max:100',
            'cta_link'          => 'required|string|max:255',
            'extra_note'        => 'nullable|string',
            'note_title'        => 'nullable|string|max:255',
            'note_text'         => 'nullable|string',
            'note_icon'         => 'nullable|string|max:100',
            'bg_style'          => 'required|in:light,white',

            'cards'                    => 'array',
            'cards.*.icon'             => 'required|string|max:100',
            'cards.*.title'            => 'required|string|max:255',
            'cards.*.content'          => 'required|string',
            'cards.*.status'           => 'boolean',

            'schemes'                  => 'array',
            'schemes.*.full_name'      => 'required|string|max:255',
            'schemes.*.short_name'     => 'required|string|max:255',
            'schemes.*.href'           => 'required|string|max:255',
            'schemes.*.status'         => 'boolean',
        ]);

        $section->update([
            'heading_prefix'    => $validated['heading_prefix'],
            'heading_highlight' => $validated['heading_highlight'],
            'description'       => $validated['description'],
            'cta_label'         => $validated['cta_label'],
            'cta_link'          => $validated['cta_link'],
            'extra_note'        => $validated['extra_note'] ?? null,
            'note_title'        => $validated['note_title'] ?? null,
            'note_text'         => $validated['note_text'] ?? null,
            'note_icon'         => $validated['note_icon'] ?? null,
            'bg_style'          => $validated['bg_style'],
        ]);

        // Replace cards
        $section->cards()->delete();
        foreach (($validated['cards'] ?? []) as $i => $card) {
            $section->cards()->create([
                'icon'       => $card['icon'],
                'title'      => $card['title'],
                'content'    => $card['content'],
                'sort_order' => $i,
                'status'     => $card['status'] ?? true,
            ]);
        }

        // Replace schemes
        $section->schemes()->delete();
        foreach (($validated['schemes'] ?? []) as $i => $scheme) {
            $section->schemes()->create([
                'full_name'  => $scheme['full_name'],
                'short_name' => $scheme['short_name'],
                'href'       => $scheme['href'],
                'sort_order' => $i,
                'status'     => $scheme['status'] ?? true,
            ]);
        }

        return redirect()
            ->route('admin.eduFund.index')
            ->with('success', 'Section updated successfully.');
    }
}