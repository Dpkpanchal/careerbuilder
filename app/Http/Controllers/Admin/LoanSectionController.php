<?php

// namespace App\Http\Controllers\Admin;

// use App\Http\Controllers\Controller;
// use App\Models\LoanSection;
// use Illuminate\Http\Request;
// use Inertia\Inertia;

// class LoanSectionController extends Controller
// {
//     public function index()
//     {
//         $items = LoanSection::orderBy('order')
//             ->orderBy('id')
//             ->get();
//         return Inertia::render('Admin/LoanSections/Index', [
//             'items' => $items
//         ]);
//     }

//     public function create()
//     {
//         return Inertia::render('Admin/LoanSections/Create');
//     }

//     public function store(Request $request)
//     {
//         LoanSection::create($request->all());

//         return redirect()->route('loan-sections.index')
//             ->with('success', 'Saved Successfully');
//     }

//     public function edit(LoanSection $loanSection)
//     {
//         return Inertia::render('Admin/LoanSections/Edit', [
//             'item' => $loanSection
//         ]);
//     }

//     public function update(Request $request, LoanSection $loanSection)
//     {
//         $loanSection->update($request->all());

//         return redirect()->route('admin.loan-sections.index');
//     }

//     public function destroy(LoanSection $loanSection)
//     {
//         $loanSection->delete();

//         return back()->with('success', 'Deleted Successfully');
//     }
// }



namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LoanSection;
use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanSectionController extends Controller
{
    // 🔹 Single edit page — heading + fact cards + schemes
    public function edit()
    {
        $section = Section::where('section_key', 'scholarships_loans')->firstOrFail();

        $factCards = LoanSection::where('type', 'fact_card')
            ->orderBy('order')
            ->get();

        $schemes = LoanSection::where('type', 'scheme')
            ->orderBy('order')
            ->get();

        return Inertia::render('Admin/LoanSections/Edit', [
            'section' => $section,
            'factCards' => $factCards,
            'schemes' => $schemes,
        ]);
    }

    // 🔹 Update heading/subheading text
    public function updateSection(Request $request, Section $section)
    {
        $validated = $request->validate([
            'heading_prefix' => 'nullable|string|max:255',
            'heading_highlight' => 'nullable|string|max:255',
            'subheading' => 'nullable|string',
        ]);

        // 'heading' column not null hai, isliye prefix+highlight se bana dete hain
        $validated['heading'] = trim(($validated['heading_prefix'] ?? '') . ' ' . ($validated['heading_highlight'] ?? ''));

        $section->update($validated);

        return back()->with('success', 'Section text updated successfully.');
    }

    // 🔹 Add new fact card / scheme
    public function store(Request $request)
    {
        $validated = $this->validateByType($request);

        $validated['order'] = LoanSection::where('type', $validated['type'])->max('order') + 1;

        LoanSection::create($validated);

        return back()->with('success', ucfirst(str_replace('_', ' ', $validated['type'])) . ' added successfully.');
    }

    // 🔹 Update existing fact card / scheme
    public function update(Request $request, LoanSection $loanSection)
    {
        $validated = $this->validateByType($request);

        $loanSection->update($validated);

        return back()->with('success', 'Updated successfully.');
    }

    // 🔹 Delete
    public function destroy(LoanSection $loanSection)
    {
        $loanSection->delete();

        return back()->with('success', 'Deleted successfully.');
    }

    // 🔹 Reorder (drag/up-down se order change karne ke liye)
    public function reorder(Request $request)
    {
        $validated = $request->validate([
            'items' => 'required|array',
            'items.*.id' => 'required|exists:loan_sections,id',
            'items.*.order' => 'required|integer',
        ]);

        foreach ($validated['items'] as $item) {
            LoanSection::where('id', $item['id'])->update(['order' => $item['order']]);
        }

        return back()->with('success', 'Order updated.');
    }

    private function validateByType(Request $request): array
    {
        $type = $request->input('type');

        if ($type === 'fact_card') {
            return $request->validate([
                'type' => 'required|in:fact_card',
                'icon' => 'required|string|in:School,CreditCard,ShieldCheck,Users',
                'title' => 'required|string|max:255',
                'description' => 'required|string',
            ]);
        }

        // scheme
        return $request->validate([
            'type' => 'required|in:scheme',
            'title' => 'required|string|max:255',
            'short' => 'required|string|max:255',
            'link' => 'nullable|string|max:255',
        ]);
    }
}