<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UserProfileController extends Controller
{
   

    public function update(Request $request)
    {
       // dd($request->all());
        $user = $request->user();

        $data = $request->validate([
            'name'   => 'required|string|max:255',
            'email'  => [
                'required',
                'email',
                Rule::unique('users')->ignore($user->id),
            ],
            'role'   => 'required|string|max:50',
            'avatar' => 'nullable|image|max:2048',
        ]);

        // ✅ Handle avatar upload
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');

            // Optional: delete old avatar
            if ($user->avatar) {
                \Storage::disk('public')->delete($user->avatar);
            }

            $data['avatar'] = $path;
        } else {
            unset($data['avatar']); // do not overwrite existing avatar
        }

        $user->update($data);

        // 🔥 IMPORTANT: no redirect for Inertia
        return back()->with('success', 'Profile updated successfully.');
    }



    public function updatePassword(Request $request)
    {
   //  dd($request->all());
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['required', 'min:6', 'confirmed'],
        ]);

        $request->user()->update([
            'password' => Hash::make($request->password),
        ]);

        return back()->with('success', 'Password updated successfully.');
    }

}
