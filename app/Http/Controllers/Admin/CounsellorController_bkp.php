<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\CounselorDetail;


class CounsellorController extends Controller
{
    // Show all counsellors
    public function index(Request $request)
    {
        $query = User::where('role', 'counsellor'); // Filter only counsellors

        // Search filter
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                ->orWhere('email', 'like', "%{$request->search}%");
            });
        }

        // Sorting
        $sortField = $request->sort_field ?? 'created_at';
        $sortDirection = $request->sort_direction ?? 'desc';

        $counsellors = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->withQueryString();

        return $this->adminRender('Admin/counsellors/Index', [
            'counsellors' => $counsellors,
            'filters' => $request->all(),
        ]);
    }



    // Form to create counsellor
    public function create()
    {
        return $this->adminRender('Admin/counsellors/Create');
    }

    // Store counsellor
    public function store(Request $request)
    {
        $request->validate([
            'name'         => 'required|string|max:255',
            'email'        => 'required|email|unique:users,email',
            'password'     => 'required|min:6',
            'qualification'=> 'nullable|array',
            'expertise'    => 'nullable|array',
            'bio'          => 'nullable|string|max:1000',
        ]);

        // Create User
        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
            'role'      => 'counsellor',
            'is_active' => 1, // default active
        ]);

        // Create Counselor Details
        CounselorDetail::create([
            'user_id'       => $user->id,
            'qualification' => $request->qualification ?? [],
            'expertise'     => $request->expertise ?? [],
            'bio'           => $request->bio,
        ]);

        return redirect()->route('admin.counsellors.index')
            ->with('success', 'Counsellor created successfully');
    }

    // Edit counsellor
    public function edit($id)
    {
        return inertia('Admin/counsellors/Edit', [
            'counsellor'  => User::with('counselorDetail')->findOrFail($id),
            'categories'  => ForumCategory::select('id', 'name')->orderBy('name')->get(),
            'qualifications' => ['B.Sc', 'M.Sc', 'PhD', 'B.Tech', 'M.Tech', 'MBA', 'Diploma'],
        ]);
    }

    // Update counsellor
    public function update(Request $request, $id)
    {
        $counsellor = User::findOrFail($id);

        $request->validate([
            'name'          => 'required|string|max:255',
            'email'         => 'required|email|unique:users,email,' . $id,
            'qualification' => 'nullable|array',
            'expertise'     => 'nullable|array',
            'bio'           => 'nullable|string|max:1200',
            'profile_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $counsellor->update([
            'name'  => $request->name,
            'email' => $request->email,
        ]);

        $details = CounselorDetail::where('user_id', $id)->first();

        if ($request->hasFile('profile_image')) {
            if ($details->profile_image) {
                Storage::disk('public')->delete($details->profile_image);
            }
            $details->profile_image = $request->file('profile_image')->store('counsellors', 'public');
        }

        $details->qualification = $request->qualification;
        $details->expertise = $request->expertise;
        $details->bio = $request->bio;
        $details->save();

        return back()->with('success', 'Counsellor updated successfully.');
    }

    // Delete counsellor
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        CounselorDetail::where('user_id', $id)->delete();
        $user->delete();

        return back()->with('success', 'Counsellor deleted.');
    }
}
