<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use App\Mail\EmailChangeOtpMail;

class EmailChangeController extends Controller
{
    protected function cacheKey($userId)
    {
        return "email_change_otp_{$userId}";
    }

    // Step 1: naya email input, OTP generate + bhejo
    public function sendOtp(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'email' => [
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($user->id),
            ],
        ]);

        if ($request->email === $user->email) {
            return response()->json([
                'success' => false,
                'message' => 'Ye aapka current email hai. Kripya naya email dalein.',
            ], 422);
        }

        $otp = random_int(100000, 999999);

        // 10 minute ke liye store karo (cache), user id ke against
        Cache::put($this->cacheKey($user->id), [
            'otp'   => $otp,
            'email' => $request->email,
        ], now()->addMinutes(10));

        Mail::to($request->email)->send(new EmailChangeOtpMail($otp, $user->name));

        return response()->json([
            'success' => true,
            'message' => 'Verification code aapke naye email par bhej diya gaya hai.',
        ]);
    }

    // Step 2: OTP verify karo aur email actually update karo
    public function verifyOtp(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'code' => 'required|digits:6',
        ]);

        $data = Cache::get($this->cacheKey($user->id));

        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => 'Verification code expire ho chuka hai. Dobara try karein.',
            ], 422);
        }

        if ((string) $data['otp'] !== (string) $request->code) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid verification code.',
            ], 422);
        }

        // OTP se naye email ki ownership already prove ho chuki hai
        $user->update([
            'email'             => $data['email'],
            'email_verified_at' => now(),
        ]);

        Cache::forget($this->cacheKey($user->id));

        return response()->json([
            'success' => true,
            'message' => 'Email safaltapoorvak update ho gaya!',
            'email'   => $user->email,
        ]);
    }
}