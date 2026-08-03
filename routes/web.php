<?php
// routes/web.php


use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\MoreController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

use App\Http\Controllers\CareerController;
use App\Http\Controllers\CoursesController;
use App\Http\Controllers\CollegesController;
use App\Http\Controllers\ExamsController;
use App\Http\Controllers\ScholarshipsController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\QuestionsController;

use App\Http\Controllers\Auth\AuthController;
use App\Models\User;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

use App\Http\Controllers\Auth\OTPController;
use App\Http\Controllers\Auth\PasswordResetController;



require __DIR__.'/admin.php';
require __DIR__.'/ajax.php';

// Route::get('/', function () {
//     return Inertia::render('Frontend/Home', [
//         'title' => 'Home',
//         'description' => 'Welcome to our website',
//     ]);
// })->name('home');

Route::get('/', [HomeController::class, 'index'])->name('home');


        Route::middleware('guest')->group(function () {
            Route::post('/login', [AuthController::class, 'login'])
                ->name('login');

            Route::post('/register', [AuthController::class, 'register'])
                ->name('register');

                // 📧 Verify Email (custom)
            Route::post('/verify-email', function (Request $request) {
                $request->validate([
                    'email' => 'required|email',
                ]);

                $user = User::where('email', $request->email)->first();

                if (! $user) {
                    return back()->withErrors([
                        'email' => 'Email not found',
                    ]);
                }

                return back()->with('status', 'Email verified successfully');
            })->name('verify.email');

            // 🔁 Reset password (direct)
            // Route::post('/reset-password', function (Request $request) {
            //     $request->validate([
            //         'email' => 'required|email',
            //         'password' => 'required|min:6|confirmed',
            //     ]);

            //     $user = User::where('email', $request->email)->first();

            //     if (! $user) {
            //         return back()->withErrors([
            //             'email' => 'Email not found',
            //         ]);
            //     }

            //     $user->password = Hash::make($request->password);
            //     $user->save();

            //     return back()->with('status', 'Password reset successful');
            // })->name('password.reset.direct');

        });

        // ✅ AUTH ROUTES
        Route::middleware('auth:web')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

            Route::post('/profile', [UserProfileController::class, 'update']);
            Route::put('/profile/password', [UserProfileController::class, 'updatePassword']);
        });

Route::get('/news-updates', [HomeController::class, 'showNewsUpdates'])->name('news.updates');

Route::get('/news/{slug}', [HomeController::class, 'showSingleNews'])
    ->name('news.details');


// ─────────────────────────────────────────────────────────────────────────────
// FUNCTIONAL PAGES (kept on static routes — they have live data / auth)
// ─────────────────────────────────────────────────────────────────────────────

Route::prefix('scholarship')->group(function () {
    Route::get('/overview', [ScholarshipsController::class, 'overview'])->name('scholarship.overview');
    Route::get('/rate-of-scholarship', [ScholarshipsController::class, 'rateOfScholarship'])->name('rate.of.scholarship');
    Route::get('/more-scholarships', [ScholarshipsController::class, 'moreScholarships'])->name('more.scholarships');
    Route::get('/education-loans', [ScholarshipsController::class, 'educationLoans'])->name('education.loans');
    Route::get('/national-fellowships', [ScholarshipsController::class, 'nationalFellowships'])->name('national.fellowships');
    Route::get('/study-abroad', [ScholarshipsController::class, 'studyAbroad'])->name('study.abroad');
});


Route::prefix('forum')->group(function () {
    Route::get('/', [ForumController::class, 'forum'])->name('forum');
    Route::get('/my-questions', [ForumController::class, 'myQuestions'])->name('forum.myQuestions');
    Route::get('/replies', [ForumController::class, 'replies'])->name('forum.replies');
    Route::get('/bookmarked', [ForumController::class, 'bookmarked'])->name('forum.bookmarked');
    Route::get('/profile', [ForumController::class, 'profile'])->name('forum.profile');
});

    Route::get('counsellors/directory', [MoreController::class, 'counsellorsDirectory'])->name('more.counsellorsDirectory');
    Route::get('jobs/opportunities', [MoreController::class, 'jobsOpportunities'])->name('more.jobsOpportunities');
    Route::get('admission/support', [MoreController::class, 'admissionSupport'])->name('more.admissionSupport');
    Route::get('coaching/support', [MoreController::class, 'coachingSupport'])->name('more.coachingSupport');
    Route::get('waqf-run-hostel', [MoreController::class, 'waqfRunHostel'])->name('more.waqfRunHostel');
    Route::get('important-web-links', [MoreController::class, 'importantWebLinks'])->name('more.importantWebLinks');
    Route::get('minority/schemes', [MoreController::class, 'minoritySchemes'])->name('more.minoritySchemes');

    Route::get('courses/medical-paramedical/medical', [LandingPageController::class, 'medicalLandingPage'])
    ->name('landing.medical');

    Route::get('career/by-profession/civil-services', [LandingPageController::class, 'civilServicesPage'])->name('landing.civil');
    Route::get('courses/business-management/mba', [LandingPageController::class, 'commercePage'])->name('landing.commerce');
    Route::get('career/by-profession/defence', [LandingPageController::class, 'defencePage'])->name('landing.defence');
    Route::get('career/by-profession/engineering', [LandingPageController::class, 'engineeringPage'])->name('engineering.medical');
    Route::get('career/by-profession/law', [LandingPageController::class, 'lawPage'])->name('landing.law');
    Route::get('career/by-profession/media', [LandingPageController::class, 'mediaPage'])->name('landing.media');


Route::middleware(['auth'])->group(function () {
    Route::post('save/forum/questions', [QuestionsController::class, 'store'])->name('forum.questions.store');
    Route::delete('/questions/{question}', [QuestionsController::class, 'destroy']);
    Route::post('/threads/{thread}/replies', [ForumController::class, 'storeQuestionReply']);
    Route::post('/threads/{thread}/nested/replies', [ForumController::class, 'storeNestedReply']);
    Route::delete('/threads/{thread}/nested/replies', [ForumController::class, 'destroyNestedReplies'])->name('nested.replies');
    Route::delete('/answers/{answer}', [ForumController::class, 'destroyAnswer'])->name('answers.destroy');
     Route::post('/threads/reports', [ForumController::class, 'reportsStore'])
        ->name('threads.reports.store');
    Route::post('/reports', [ForumController::class, 'saveReport'])->name(name: 'reportOn.question');
     Route::post('/questions/{question}/report', [ForumController::class, 'reportQuestion'])->name('questions.report');
    Route::post('/questions/{question}/bookmark', [ForumController::class, 'toggleBookmark'])->name('questions.bookmark.toggle');
    Route::post('/answers/{answer}/toggle-helpful', [ForumController::class, 'toggleAnswerHelpful']);
    Route::post('/replies/{reply}/toggle-helpful', [ForumController::class, 'toggleReplyHelpful']);

});

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC CONTENT ROUTES
// Registers a GET route for every active menu link that has a slug but no
// route_name. These are content pages managed from the admin panel.
// ─────────────────────────────────────────────────────────────────────────────
// try {
//     \App\Models\Menu::whereNull('route_name')
//         ->whereNotNull('slug')
//         ->where('is_active', true)
//         ->where('type', 'link')
//         ->get()
//         ->each(function ($item) {
//             Route::get('/' . ltrim($item->slug, '/'), [PageController::class, 'show'])
//                 ->defaults('slug', $item->slug)
//                 ->name($item->key);
//         });
// } catch (\Throwable) {
//     // DB unavailable during fresh migrations — skip silently.
// }

try {

    $menus = \App\Models\Menu::query()
        ->whereNull('route_name')
        ->whereNotNull('slug')
        ->where('is_active', true)
        ->where('type', 'link')
        ->get();

    foreach ($menus as $item) {

        $slug = trim($item->slug, '/');

        if (empty($slug)) {
            continue;
        }

        Route::get('/' . $slug, [PageController::class, 'show'])
            ->defaults('slug', $slug)
            ->name('dynamic.' . $item->id);
    }

} catch (\Throwable $e) {

}

Route::fallback(function () {
    return Inertia::render('NotFound')
        ->toResponse(request())
        ->setStatusCode(404);
});

Route::get('/email/verify/{id}/{hash}', function (Request $request, $id, $hash) {

    $user = User::findOrFail($id);

    // check hash
    if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
        abort(403, 'Invalid verification link');
    }

    // check signed URL
    if (! URL::hasValidSignature($request)) {
        abort(403, 'Invalid or expired link');
    }

    // verify email
    if (! $user->hasVerifiedEmail()) {
        $user->markEmailAsVerified();
    }

    return redirect('/forum')->with('success', 'Email verified successfully!');
    
})->middleware(['signed'])->name('verification.verify');


Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('success', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');




Route::post('/otp/send', [OTPController::class, 'send'])->name('otp.send');
Route::post('/otp/verify', [OTPController::class, 'verify'])->name('otp.verify');

// Password Reset Route
Route::post('/password/reset-direct', [PasswordResetController::class, 'resetDirect'])
    ->name('password.reset.direct');



require __DIR__.'/auth.php';
