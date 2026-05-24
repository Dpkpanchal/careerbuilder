<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminSession
{
    public function handle(Request $request, Closure $next)
    {
        // ✅ Admin ke liye alag session cookie
        config([
            'session.cookie' => 'admin_session'
        ]);

        return $next($request);
    }
}
