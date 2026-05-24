<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use App\Models\Category;
use App\Services\MenuService;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function share(Request $request): array
    {
        $webUser = Auth::guard('web')->user();
        $adminUser = Auth::guard('admin')->user();

        return array_merge(parent::share($request), [

            // ✅ Forum / Web user ONLY
            'auth' => [
                'user' => $webUser ? [
                    'id'    => $webUser->id,
                    'name'  => $webUser->name,
                    'email' => $webUser->email,
                    'role' => $webUser->role,
                    'avatar' => $webUser->avatar
                        ? asset('storage/' . $webUser->avatar)
                        : null,
                ] : null,
            ],

            // ✅ Admin user ONLY
            'adminAuth' => [
                'user' => $adminUser ? [
                    'id'    => $adminUser->id,
                    'name'  => $adminUser->name,
                    'email' => $adminUser->email,
                    'avatar' => $adminUser->avatar
                        ? asset('storage/' . $adminUser->avatar)
                        : null,
                    'role'  => 'admin',
                ] : null,
            ],

           'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error'   => fn () => $request->session()->get('error'),
            ],

            'menus' => fn() => app(MenuService::class)->getMenusForFrontend(),
        ]);
    }



}
