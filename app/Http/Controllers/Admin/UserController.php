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



class UserController extends Controller
{
    // public function index(Request $request)
    // {
    //     // Only system users
    //     $query = User::whereIn('role', [
    //         'student',
    //         'teacher',
    //         'parent',
    //         'super_admin'
    //     ]);

    //     $itemsPerPage = Setting::getValue('items_per_page', 10);

    //     /* 🔍 SEARCH (name / email) */
    //     if ($request->filled('search')) {
    //         $search = $request->search;
    //         $query->where(function ($q) use ($search) {
    //             $q->where('name', 'ILIKE', "%{$search}%")
    //             ->orWhere('email', 'ILIKE', "%{$search}%");
    //         });
    //     }

    //     /* 🎭 ROLE FILTER */
    //     if ($request->filled('role')) {
    //         $query->where('role', $request->role);
    //     }

    //     /* 🚫 BLOCKED / ACTIVE FILTER */
    //     if ($request->filled('blocked')) {
    //         $query->where('is_blocked', (bool) $request->blocked);
    //     }



    //     /* 🔃 SORTING */
    //     $sortField = $request->get('sort_field', 'created_at');
    //     $sortDirection = $request->get('sort_direction', 'desc');

    //     if (in_array($sortField, ['name', 'email', 'role', 'created_at'])) {
    //         $query->orderBy($sortField, $sortDirection);
    //     }

    //     $users = $query->paginate($itemsPerPage)->withQueryString();

    //     return $this->adminRender('Admin/Users/Index', [
    //         'users' => $users,
    //         'filters' => $request->only([
    //             'search',
    //             'role',
    //             'blocked',
    //             'sort_field',
    //             'sort_direction',
    //         ]),
    //         'itemsPerPage' => $itemsPerPage,
    //     ]);
    // }

    public function index(Request $request)
    {
        $itemsPerPage = Setting::getValue('items_per_page', 10);

        $status = $request->get('status'); // 🔥 NEW

        // ✅ BASE QUERY
        $query = User::whereIn('role', [
            'student',
            'teacher',
            'parent',
            'super_admin'
        ]);

        /* 🔥 STATUS FILTER (NEW) */
        if ($status === 'deleted') {
            $query = User::onlyTrashed()->whereIn('role', [
                'student', 'teacher', 'parent', 'super_admin'
            ]);
        } elseif ($status === 'all') {
            $query = User::withTrashed()->whereIn('role', [
                'student', 'teacher', 'parent', 'super_admin'
            ]);
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
        if ($request->filled('role')) {
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

}
