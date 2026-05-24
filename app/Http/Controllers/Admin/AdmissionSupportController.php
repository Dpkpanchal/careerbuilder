<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdmissionSupport;

class AdmissionSupportController extends Controller
{
    public function index(Request $request)
    {
        $records = AdmissionSupport::query()
            ->when($request->category, fn($q) =>
                $q->where('category', $request->category)
            )
            ->orderBy('sort_order')
            ->paginate(20)
            ->withQueryString();

        return inertia('Admin/AdmissionSupport/Index', [
            'records' => $records,
            'filters' => $request->only('category'),
        ]);
    }

    public function create()
    {
        return inertia('Admin/AdmissionSupport/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'category'   => 'required|string',
            'name'       => 'required|string',
            'university' => 'nullable|string',
            'phone'      => 'nullable|string',
            'email'      => 'nullable|email',
        ]);

        AdmissionSupport::create($request->all());

        return redirect()->route('admin.admission-support.index')
            ->with('success', 'Admission support added');

    }

    public function edit(AdmissionSupport $admissionSupport)
    {
        return inertia('Admin/AdmissionSupport/Edit', [
            'record' => $admissionSupport,
        ]);
    }

    public function update(Request $request, AdmissionSupport $admissionSupport)
    {
        $request->validate([
            'category'   => 'required|string',
            'name'       => 'required|string',
            'university' => 'nullable|string',
            'phone'      => 'nullable|string',
            'email'      => 'nullable|email',
        ]);

        $admissionSupport->update($request->all());

        return redirect()->route('admin.admission-support.index')
            ->with('success', 'Updated successfully');
    }

    public function destroy(AdmissionSupport $admissionSupport)
    {
        $admissionSupport->delete();
        return back()->with('success', 'Deleted');
    }

    /* ---------- FRONTEND ---------- */
    public function directory()
    {
        return inertia('Frontend/More/admission-support', [
            'connecting' => AdmissionSupport::where('category','Connecting')->get(),
            'indian'     => AdmissionSupport::where('category','Indian University')->get(),
            'foreign'    => AdmissionSupport::where('category','Foreign University')->get(),
        ]);
    }
}

