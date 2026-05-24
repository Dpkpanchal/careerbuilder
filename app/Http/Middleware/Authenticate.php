<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    // protected function redirectTo($request): ?string
    // {
    //     if (! $request->expectsJson()) {

    //         if ($request->is('admin/*')) {
    //             return route('admin.login');
    //         }

    //         return route('forum.login');
    //     }

    //     return null;
    // }

    protected function redirectTo($request): ?string
    {
        if (! $request->expectsJson()) {

            if ($request->is('admin/*')) {
                return route('admin.login');
            }

            return route('forum'); // ✅ change here
        }

        return null;
    }
}
