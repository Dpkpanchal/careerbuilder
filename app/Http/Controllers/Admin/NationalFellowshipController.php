<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NationalFellowship;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class NationalFellowshipController extends Controller
{
    public function index(Request $request): Response
    {
        $query = NationalFellowship::query();

        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('organization', 'like', '%' . $request->search . '%');
            });
        }

        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        if ($request->filled('status')) {
            $query->where('is_active', $request->status === 'active');
        }

        $fellowships = $query
            ->orderBy('sort_order')
            ->orderBy('id')
            ->paginate(15)
            ->withQueryString();

        return Inertia::render('Admin/NationalFellowship/Index', [
            'fellowships' => $fellowships,
            'categories' => NationalFellowship::CATEGORIES,
            'filters' => $request->only(['search', 'category', 'status']),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/NationalFellowship/Create', [
            'categories' => NationalFellowship::CATEGORIES,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $this->validated($request);

        NationalFellowship::create($validated);

        return redirect()
            ->route('admin.national-fellowships.index')
            ->with('success', 'Fellowship created successfully.');
    }

    public function edit(NationalFellowship $nationalFellowship): Response
    {
        return Inertia::render('Admin/NationalFellowship/Edit', [
            'categories' => NationalFellowship::CATEGORIES,
            'fellowship' => $nationalFellowship,
        ]);
    }

    public function update(Request $request, NationalFellowship $nationalFellowship): RedirectResponse
    {
        $validated = $this->validated($request);

        $nationalFellowship->update($validated);

        return redirect()
            ->route('admin.national-fellowships.index')
            ->with('success', 'Fellowship updated successfully.');
    }

    public function destroy(NationalFellowship $nationalFellowship): RedirectResponse
    {
        $nationalFellowship->delete();

        return back()->with('success', 'Deleted successfully.');
    }

    public function status(NationalFellowship $nationalFellowship): RedirectResponse
    {
        $nationalFellowship->update([
            'is_active' => ! $nationalFellowship->is_active,
        ]);

        return back();
    }

    protected function validated(Request $request): array
    {
        return $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'organization' => ['nullable', 'string', 'max:255'],
            'link' => ['nullable', 'string', 'max:255'],
            'category' => ['nullable', Rule::in(NationalFellowship::CATEGORIES)],
            'sort_order' => ['nullable', 'integer'],
            'is_active' => ['nullable', 'boolean'],
        ]);
    }
}
