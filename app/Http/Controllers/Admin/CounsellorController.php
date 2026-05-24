<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\CounselorDetail;
use App\Models\ForumCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class CounsellorController extends Controller
{
    // LIST PAGE
    public function index(Request $request)
    {
        $query = User::where('role', 'counselor');

        // 🔍 Search
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                ->orWhere('email', 'like', "%{$request->search}%");
            });
        }

        // 🔥 STATUS FILTER (FIXED)
        if ($request->status === 'deleted') {
            $query->onlyTrashed(); // ✅ NOT reassigned
        } elseif ($request->status === 'active') {
            $query->whereNull('deleted_at');
        } else {
            $query->withTrashed(); // ✅ NOT reassigned
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

    // CREATE FORM
    public function create()
    {
        return inertia('Admin/counsellors/Create', [
            'categories' => ForumCategory::select('id', 'name')->orderBy('name')->get(),
            'qualifications' => ['B.Sc', 'M.Sc', 'PhD', 'B.Tech', 'M.Tech', 'MBA', 'Diploma'],
            'subjects' => [
                            "General Subjects (Science / Arts / Commerce)",
                            "D.Ed / B.Ed / M.Ed",
                            "Vocational / ITI / Diploma",
                            "Engineering (WBJEE / IIT JEE)",
                            "Medical",
                            "Pharmacy",
                            "GATE / GRE / TOEFL / IELTS",
                            "Law / CLAT / Judicial / NET / SLET",
                            "WBCS / UPSC Exam",
                            "BBA / MBA / BCA / MCA",
                            "Journalism & Mass Communication",
                            "BSW / MSW",
                            "Hotel Management",
                            "Paramedical Courses / Nursing",
                            "Microbiology",
                            "Biotechnology",
                            "Data Analysis / STATA / R / Software",
                            "Graphic Design / Animation / Video Editing",
                            "Ocean Engineering / Marine Science / Petroleum Engg",
                            "Agriculture",
                            "Visual / Fine Arts",
                            "Arabic Language",
                            "Persian Language",
                            "Japanese Language",
                            "BLIS / MLIS",
                            "Chartered Accountant",
                            "GIS & Remote Sensing",
                            "Population Science / Demography / Public Health",
                            "Disaster Management",
                            "Museology",
                            "Nutrition",
                            "Development Studies",
                            "Statistics"
                            ]
        ]);
    }

        // STORE
    public function store(Request $request)
    {
        // ✅ Validate request
        $data = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'mobile' => [
                'required',
                'string',
                'max:50',
                'regex:/^[0-9\/\s+()-]+$/'
            ],
            'password' => 'required|min:6',

            // 🔹 validate array rows
            'subjectQualifications' => 'required|array|min:1',
            'subjectQualifications.*.subject' => 'required|string|max:255',
            'subjectQualifications.*.qualification' => 'required|string|max:255',

            // 🔹 image
            'profile_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:4096',
        ]);

        \DB::transaction(function () use ($request, $data) {

            // ✅ Handle image upload (avatar in users table)
            $avatarPath = null;
            if ($request->hasFile('profile_image')) {
                $avatarPath = $request->file('profile_image')
                    ->store('avatars', 'public');
            }

            // ✅ Create user
            $user = User::create([
                'name'      => $data['name'],
                'email'     => $data['email'],
                'mobile'    => $data['mobile'],
                'password'  => Hash::make($data['password']),
                'role'      => 'counselor',
                'avatar'    => $avatarPath, // ✅ avatar saved here
                'is_active' => 1,
            ]);

            // ✅ Save subject + qualification rows
            foreach ($data['subjectQualifications'] as $row) {
                CounselorDetail::create([
                    'user_id'       => $user->id,
                    'subject'       => $row['subject'],
                    'qualification' => $row['qualification'],
                ]);
            }
        });

        return redirect()
            ->route('admin.counsellors.index')
            ->with('success', 'Counsellor created successfully.');
    }



    // EDIT PAGE
   public function edit($id)
    {
        return inertia('Admin/counsellors/Edit', [
            'counsellor' => User::with('counselorDetails')->findOrFail($id),

            'subjects' => [
                "General Subjects (Science / Arts / Commerce)",
                "D.Ed / B.Ed / M.Ed",
                "Vocational / ITI / Diploma",
                "Engineering (WBJEE / IIT JEE)",
                "Medical",
                "Pharmacy",
                "GATE / GRE / TOEFL / IELTS",
                "Law / CLAT / Judicial / NET / SLET",
                "WBCS / UPSC Exam",
                "BBA / MBA / BCA / MCA",
                "Journalism & Mass Communication",
                "BSW / MSW",
                "Hotel Management",
                "Paramedical Courses / Nursing",
                "Microbiology",
                "Biotechnology",
                "Data Analysis / STATA / R / Software",
                "Graphic Design / Animation / Video Editing",
                "Ocean Engineering / Marine Science / Petroleum Engg",
                "Agriculture",
                "Visual / Fine Arts",
                "Arabic Language",
                "Persian Language",
                "Japanese Language",
                "BLIS / MLIS",
                "Chartered Accountant",
                "GIS & Remote Sensing",
                "Population Science / Demography / Public Health",
                "Disaster Management",
                "Museology",
                "Nutrition",
                "Development Studies",
                "Statistics"
            ],
        ]);
    }


    // UPDATE
   public function update(Request $request, $id)
    {
        $counsellor = User::findOrFail($id);

        $data = $request->validate([
            'name'  => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($counsellor->id),
            ],
            'mobile' => [
                'required',
                'string',
                'max:50',
                'regex:/^[0-9\/\s+()-]+$/'
            ],
            'password' => 'nullable|min:6',

            // ✅ MULTIPLE ROWS
            'subjectQualifications' => 'required|array|min:1',
            'subjectQualifications.*.subject' => 'required|string|max:255',
            'subjectQualifications.*.qualification' => 'required|string|max:255',

            // ✅ IMAGE
            'profile_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:4096',
        ]);

       \DB::transaction(function () use ($request, $data, $counsellor) {

            /** ------- UPDATE USERS TABLE ------- **/
            $counsellor->update([
                'name'   => $data['name'],
                'email'  => $data['email'],
                'mobile' => $data['mobile'],
            ]);

            if (!empty($data['password'])) {
                $counsellor->update([
                    'password' => Hash::make($data['password']),
                ]);
            }

            /** ------- UPDATE AVATAR (USERS TABLE) ------- **/
            if ($request->hasFile('profile_image')) {

                if ($counsellor->avatar) {
                    Storage::disk('public')->delete($counsellor->avatar);
                }

                $counsellor->avatar = $request
                    ->file('profile_image')
                    ->store('avatars', 'public');

                $counsellor->save();
            }

            /** ------- REPLACE COUNSELLOR DETAILS ------- **/
            CounselorDetail::where('user_id', $counsellor->id)->delete();

            foreach ($data['subjectQualifications'] as $row) {
                CounselorDetail::create([
                    'user_id'       => $counsellor->id,
                    'subject'       => $row['subject'],
                    'qualification' => $row['qualification'],
                ]);
            }
        });

        return redirect()
            ->route('admin.counsellors.index')
            ->with('success', 'Counsellor updated successfully.');
    }



    // DELETE
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        CounselorDetail::where('user_id', $id)->delete();
        $user->delete();

        return back()->with('success', 'Counsellor deleted.');
    }

    public function restore($id)
    {
        $counsellor = User::withTrashed()->findOrFail($id);
        $counsellor->restore();

        return back()->with('success', 'Counsellor restored successfully');
    }
}
