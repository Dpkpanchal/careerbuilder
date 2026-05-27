<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\Authenticate;
use App\Http\Middleware\UpdateLastActivity;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )

    ->withMiddleware(function (Middleware $middleware): void {

        // Trust the reverse proxy (Nginx/LB) so Laravel uses X-Forwarded-Host/Proto
        // instead of the raw EC2 internal hostname.
        $middleware->trustProxies(at: '*');

        /*
        |--------------------------------------------------------------------------
        | Web Middleware Stack
        |--------------------------------------------------------------------------
        */
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,

            UpdateLastActivity::class,
        ]);

        /*
        |--------------------------------------------------------------------------
        | Middleware Aliases
        |--------------------------------------------------------------------------
        | Laravel 12 me Kernel.php nahi hota,
        | isliye yahin register karna hota hai
        */
        $middleware->alias([
            'auth' => Authenticate::class,
            'admin.session' => \App\Http\Middleware\AdminSession::class,
        ]);
    })

    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })

    ->create();