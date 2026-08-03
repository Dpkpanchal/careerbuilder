<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OTP extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'code',
        'expires_at',
        'is_used',
    ];

    protected $casts = [
        'expires_at' => 'datetime',
        'is_used' => 'boolean',
    ];

    /**
     * Generate a new OTP for the given email
     */
    public static function generate($email)
    {
        // Delete old OTPs
        self::where('email', $email)->delete();

        // Generate 6-digit code
        $code = str_pad(random_int(0, 999999), 6, '0', STR_PAD_LEFT);

        return self::create([
            'email' => $email,
            'code' => $code,
            'expires_at' => now()->addMinutes(10), // 10 minutes expiry
            'is_used' => false,
        ]);
    }

    /**
     * Verify the OTP
     */
    public static function verify($email, $code)
    {
        $otp = self::where('email', $email)
            ->where('code', $code)
            ->where('is_used', false)
            ->where('expires_at', '>', now())
            ->first();

        if (!$otp) {
            return false;
        }

        // Mark as used
        $otp->update(['is_used' => true]);

        return true;
    }
}