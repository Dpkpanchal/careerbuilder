<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // ✅ ADD THIS METHOD
    public function showLogin()
    {
        return inertia('Auth/Login'); // your Inertia login page
    }

   public function login(Request $request)
    {
       
        $credentials = $request->validate([
            'email'    => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::guard('admin')->attempt($credentials)) {
            
            $request->session()->regenerate();

            return redirect()->intended(route('admin.dashboard'));
        }

        return back()->withErrors([
            'email' => 'Invalid credentials.',
        ]);
    }


    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->forget('_token');

       return redirect('/admin/login');


    }



    
}
