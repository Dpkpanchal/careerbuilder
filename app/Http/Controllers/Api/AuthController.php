<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password as PasswordRule;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;


class AuthController extends Controller
{
    /**
     * Mobile App Login
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials.',
            ], 401);
        }

        $user = Auth::user();

        // Blocked User
        if ($user->is_blocked) {

            Auth::logout();

            return response()->json([
                'success' => false,
                'message' => 'Your account has been blocked. Please contact admin.',
            ], 403);
        }

        // Email Verification
        if (
            $user->role !== 'counselor' &&
            !$user->hasVerifiedEmail()
        ) {

            Auth::logout();

            return response()->json([
                'success' => false,
                'message' => 'Please verify your email first.',
            ], 403);
        }

        $user->update([
            'is_online' => true,
        ]);

        // Remove previous tokens (optional)
        $user->tokens()->delete();

        // Create Sanctum Token
        $token = $user->createToken('mobile-app')->plainTextToken;

        return response()->json([
            'success' => true,
            'message' => 'Login successful.',
            'token'   => $token,
            'user'    => [
                'id'         => $user->id,
                'name'       => $user->name,
                'email'      => $user->email,
                'role'       => $user->role,
                'avatar'     => $user->avatar ? asset('storage/'.$user->avatar) : null,
                'mobile'     => $user->mobile,
                'is_active'  => $user->is_active,
                'is_online'  => $user->is_online,
            ]
        ]);
    }

    /**
     * Mobile App Register
     */
    public function register(Request $request)
    {
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['nullable', 'string', 'max:255'],
            'email'      => ['required', 'email', 'unique:users,email'],
            'password' => [ 'required', PasswordRule::min(6), 'confirmed', ],
            'role'       => ['required', 'in:student,parent,teacher'],
        ]);

        $user = User::create([
            'name'      => trim($validated['first_name'].' '.($validated['last_name'] ?? '')),
            'email'     => $validated['email'],
            'password'  => Hash::make($validated['password']),
            'role'      => $validated['role'],
            'is_active' => 1,
        ]);

        event(new Registered($user));

        return response()->json([
            'success' => true,
            'message' => 'Registration successful. Please verify your email before login.',
        ], 201);
    }

    /**
     * Logged In User
     */
    public function me(Request $request)
    {
        return response()->json([
            'success' => true,
            'user' => $request->user(),
        ]);
    }

    /**
     * Logout
     */
    public function logout(Request $request)
    {
        if ($request->user()) {

            $request->user()->update([
                'is_online' => false,
            ]);

            $request->user()->currentAccessToken()->delete();
        }

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully.',
        ]);
    }


   

    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
             'email'      => 'nullable|email|max:255',
            // 'avatar'     => 'nullable|image|mimes:jpg,jpeg,png,gif,bmp,svg,webp,heic,ico|max:5120',
            'avatar' => 'nullable|file|max:2048|mimetypes:image/jpeg,image/png,image/gif,image/bmp,image/svg+xml,image/webp,image/heic,image/heif,image/x-icon',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors'  => $validator->errors(),
            ], 422);
        }

        // Concatenate first_name and last_name and save as name
        $user->name = $request->first_name . ' ' . $request->last_name;
        $user->email = $request->email;

        // if ($request->hasFile('avatar')) {
        //     if ($user->avatar && Storage::disk('public')->exists($user->avatar)) {
        //         Storage::disk('public')->delete($user->avatar);
        //     }
        //     $user->avatar = $request->file('avatar')->store('avatars', 'public');
        // }

        if ($request->hasFile('avatar')) {
        // Delete old avatar if exists
            if ($user->avatar && Storage::disk('public')->exists($user->avatar)) {
                Storage::disk('public')->delete($user->avatar);
            }
            
            $file = $request->file('avatar');
            $extension = $file->getClientOriginalExtension();
            
            // Handle HEIC files
            if (in_array(strtolower($extension), ['heic', 'heif'])) {
                // You might want to convert HEIC to JPEG using external library
                // Or just store as is
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $avatarPath = $file->storeAs('avatars', $filename, 'public');
            } else {
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $avatarPath = $file->storeAs('avatars', $filename, 'public');
            }
            
            $user->avatar = $avatarPath;
        }


        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Profile updated successfully.',
            'user' => [
                'id'         => $user->id,
                'name'       => $user->name,
                'email'      => $user->email,
                'avatar'     => $user->avatar_url,
                // Also return first_name and last_name for frontend use
                'first_name' => $request->first_name,
                'last_name'  => $request->last_name,
            ]
        ]);
    }


    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
        ]);

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Current password is incorrect.',
            ], 400);
        }

        $user->password = Hash::make($request->new_password);
        $user->save();

        // Optional: sab devices se logout
        // $user->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Password changed successfully.',
        ]);
    }


    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email not found.',
            ], 404);
        }

        return response()->json([
            'success' => true,
            'message' => 'Email verified.',
        ]);
    }


    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Email not found.',
            ], 404);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'success' => true,
            'message' => 'Password updated successfully.',
        ]);
    }





}