<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use App\Models\Answer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;



class UserController extends Controller
{
    

    public function index(Request $request)
    {
        $itemsPerPage = Setting::getValue('items_per_page', 10);

        $status = $request->get('status'); // 🔥 NEW

        $allowedRoles = ['student', 'teacher', 'parent', 'super_admin'];

        // ✅ BASE QUERY
        $query = User::whereIn('role', $allowedRoles);

        /* 🔥 STATUS FILTER (NEW) */
        if ($status === 'deleted') {
            $query = User::onlyTrashed()->whereIn('role', $allowedRoles);
        } elseif ($status === 'all') {
            $query = User::withTrashed()->whereIn('role', $allowedRoles);
        } elseif ($status === 'blocked') {
            $query->where('is_blocked', 1);
        } elseif ($status === 'active') {
            $query->whereNull('deleted_at')->where('is_blocked', 0);
        }

        /* 🔍 SEARCH */
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'ILIKE', "%{$search}%")
                ->orWhere('email', 'ILIKE', "%{$search}%");
            });
        }

        /* 🎭 ROLE FILTER */
        if ($request->filled('role') && in_array($request->role, $allowedRoles)) {
            $query->where('role', $request->role);
        }

        /* 🚫 OLD BLOCKED FILTER (optional remove) */
        // if ($request->filled('blocked')) {
        //     $query->where('is_blocked', (bool) $request->blocked);
        // }

        /* 🔃 SORTING */
        $sortField = $request->get('sort_field', 'created_at');
        $sortDirection = $request->get('sort_direction', 'desc');

        if (in_array($sortField, ['name', 'email', 'role', 'created_at'])) {
            $query->orderBy($sortField, $sortDirection);
        }

        $users = $query->paginate($itemsPerPage)->withQueryString();

        return $this->adminRender('Admin/Users/Index', [
            'users' => $users,
            'filters' => $request->only([
                'search',
                'role',
                'status', // ✅ NEW
                'sort_field',
                'sort_direction',
            ]),
            'itemsPerPage' => $itemsPerPage,
        ]);
    }

   public function create()
    {
        return $this->adminRender('Admin/Users/Create', [
            'roles' => [
                'student',
                'teacher',
                'parent',
                'super_admin',
            ],
        ]);
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|max:255|unique:users,email',
            'mobile'   => 'nullable|string|max:50',
            'role'     => 'required|in:student,teacher,parent,super_admin',
            'is_blocked' => 'nullable|boolean',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        User::create([
            'name'       => $data['name'],
            'email'      => $data['email'],
            'mobile'     => $data['mobile'] ?? null,
            'role'       => $data['role'],
            'is_blocked' => $data['is_blocked'] ?? false,
            'password'   => bcrypt($data['password']),
        ]);

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User created successfully.');
    }


    public function edit(User $user)
    {
        return $this->adminRender('Admin/Users/Edit', [
            'user' => $user->only([
                'id',
                'name',
                'email',
                'mobile',
                'role',
                'is_blocked',
                'created_at',
                'updated_at',
            ]),
        ]);
    }


    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'email'       => 'required|email|max:255|unique:users,email,' . $user->id,
            'mobile'      => 'nullable|string|max:50',
            'role'        => 'required|in:student,teacher,parent,super_admin',
            'is_blocked'  => 'nullable|boolean',
            'password'    => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);

        // Base update
        $user->update([
            'name'   => $data['name'],
            'email'  => $data['email'],
            'mobile' => $data['mobile'] ?? null,
            'role'   => $data['role'],
            'is_blocked' => $data['is_blocked'] ?? false,
            'blocked_at' => ($data['is_blocked'] ?? false) ? now() : null,
        ]);

        // Update password only if provided
        if (!empty($data['password'])) {
            $user->update([
                'password' => bcrypt($data['password']),
            ]);
        }

        return redirect()
            ->route('admin.users.index')
            ->with('success', 'User updated successfully.');
    }


    // public function destroy(User $user)
    // {
    //     // prevent accidental deletion of main admin (optional)
    //     if ($user->role === 'admin') {
    //         return back()->with('error', "You can't delete an admin user!");
    //     }

    //     $user->delete();

    //     return redirect()->route('admin.users.index')
    //         ->with('success', 'User deleted successfully.');
    // }

  public function destroy($id)
    {
        $user = User::findOrFail($id);

        if (Answer::where('user_id', $user->id)->exists()) {
            return back()->with(
                'error',
                'User cannot be deleted because related answers exist.'
            );
        }

        $user->delete();

        return back()->with('success', 'User deleted successfully.');
    }



    public function toggleBlock(User $user)
    {
        $user->update([
            'is_blocked' => ! $user->is_blocked,
            'blocked_at' => $user->is_blocked ? null : now(),
        ]);

        return back()->with('success', 'User status updated.');
    }

    public function restore($id)
    {
        $user = User::withTrashed()->findOrFail($id);
        $user->restore();

        return back()->with('success', 'User restored');
    }

    public function verify($id)
    {
       // dd($id);
        $user = User::findOrFail($id);

        $user->update([
            'email_verified_at' => now(),
        ]);

        return back()->with('success', 'User verified successfully.');
    }

    /**
     * Permanently delete a user (must already be soft-deleted).
     */
    public function forceDelete($id)
    {
        $user = User::withTrashed()->findOrFail($id);

        try {
            DB::transaction(function () use ($user) {
                // Clean up everything that references this user, so the
                // foreign key constraints don't block the delete.
                $user->answers()->delete();      // answers.user_id
                $user->replies()->delete();      // replies.user_id
                $user->reports()->delete();      // reports.user_id
                $user->counselorDetails()->delete(); // counselor_details.user_id

                // Questions have their own children (answers/replies via
                // question_id), so delete those first, then the questions.
                foreach ($user->questions()->get() as $question) {
                    $question->answers()->delete();
                    $question->delete();
                }

                $user->forceDelete();
            });
        } catch (QueryException $e) {
            Log::error('Force delete user failed: ' . $e->getMessage());

            // Postgres foreign key violation code
            if ($e->getCode() === '23503') {
                return back()->with(
                    'error',
                    'This user cannot be permanently deleted because other records (forum posts, answers, etc.) still reference them. Please remove or reassign those first.'
                );
            }

            return back()->with('error', 'Failed to permanently delete this user. Please try again.');
        }

        return back()->with('success', 'User permanently deleted.');
    }




}
