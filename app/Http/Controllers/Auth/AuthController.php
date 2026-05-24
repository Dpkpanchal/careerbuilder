<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    /**
     * Forum Login
     */


    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('web')->attempt($credentials)) {

            $user = Auth::user();

            // 🚫 Blocked user check
            if ($user->is_blocked) {
                Auth::logout();

                return back()->withErrors([
                    'email' => 'Your account has been blocked. Please contact admin.',
                ]);
            }

            // 📧 Email verification check
            if (
                $user->role !== 'counselor' &&
                !$user->hasVerifiedEmail()
            ) {
                Auth::logout();

                return back()->withErrors([
                    'email' => 'Please verify your email first.',
                ]);
            }

            $user->update(['is_online' => true]);

            $request->session()->regenerate();

            return redirect('/forum');
        }

        return back()->withErrors([
            'email' => 'Invalid credentials',
        ]);
    }


    /**
     * Forum Registration
     */
    public function register(Request $request)
    {
       // dd($request->all());
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['nullable', 'string', 'max:255'],
            'email'      => ['required', 'email', 'unique:users,email'],
            'password'   => ['required', Password::min(6), 'confirmed'],
            'role'       => ['required', 'in:student,parent,teacher'],
        ]);

        $user = User::create([
            'name'     => trim($validated['first_name'] . ' ' . ($validated['last_name'] ?? '')),
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role'      => $validated['role'], 
            'is_active'=> 1,
        ]);

        // Auth::login($user);
        // $request->session()->regenerate();
        event(new Registered($user));

       //return Inertia::location('/forum');
       
        return back()->with('success', 'Registration successful. Please verify your email before logging in.');
    }

    /**
     * Forum Logout
     */
   public function logout(Request $request)
    {
        if (auth()->check()) {
            auth()->user()->update([
                'is_online' => false
            ]);
       }

        Auth::guard('web')->logout();

        $request->session()->forget('_token');

        return Inertia::location('/forum');
    }
}
