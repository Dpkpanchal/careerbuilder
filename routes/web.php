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
            Route::post('/reset-password', function (Request $request) {
                $request->validate([
                    'email' => 'required|email',
                    'password' => 'required|min:6|confirmed',
                ]);

                $user = User::where('email', $request->email)->first();

                if (! $user) {
                    return back()->withErrors([
                        'email' => 'Email not found',
                    ]);
                }

                $user->password = Hash::make($request->password);
                $user->save();

                return back()->with('status', 'Password reset successful');
            })->name('password.reset.direct');

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
// CONTENT PAGES: Careers, Courses, Colleges, Exams
// These are now served dynamically by PageController via the block below.
// Static controller routes are commented out — content is managed from admin.
// ─────────────────────────────────────────────────────────────────────────────

// Route::prefix('careers')->group(function () {
//     Route::get('/after-class-8', [CareerController::class, 'AfterClassEight'])->name('After.Class.Eight');
//     Route::get('/after-class-10', [CareerController::class, 'AfterClassTenth'])->name('After.Class.Tenth');
//     Route::get('/after-class-12-arts', [CareerController::class, 'AfterClassTwelveArts'])->name('After.Class.Twelve.Arts');
//     Route::get('/after-class-12-commerce', [CareerController::class, 'afterClassTwelveCommerce'])->name('After.Class.Twelve.Commerce');
//     Route::get('/after-class-12-science', [CareerController::class, 'afterClassTwelveScience'])->name('After.Class.Twelve.Science');
//     Route::get('/after-graduation', [CareerController::class, 'AfterGraduation'])->name('After.Graduation');
//     Route::get('/after-class-12-engineering', [CareerController::class, 'afterClassTwelveEngineering'])->name('After.Class.Twelve.Engineering');
//     Route::get('/after-class-12-medical', [CareerController::class, 'afterClassTwelveMedical'])->name('After.Class.Twelve.Medical');
//     Route::get('/engineering', [CareerController::class, 'engineering'])->name('career.engineering');
//     Route::get('/medical-doctor-mbbs', [CareerController::class, 'medical'])->name('career.medical');
//     Route::get('/nursing-allied', [CareerController::class, 'nursing'])->name('career.nursing');
//     Route::get('/pharmacy', [CareerController::class, 'pharmacy'])->name('career.pharmacy');
//     Route::get('/chartered-accountant-ca', [CareerController::class, 'ca'])->name('career.ca');
//     Route::get('/law-llb-integrated', [CareerController::class, 'law'])->name('career.law');
//     Route::get('/design-fashion-graphic-arch', [CareerController::class, 'design'])->name('career.design');
//     Route::get('/hospitality-tourism', [CareerController::class, 'hospitality'])->name('career.hospitality');
//     Route::get('/media-journalism', [CareerController::class, 'media'])->name('career.media');
//     Route::get('/civil-services', [CareerController::class, 'civilServices'])->name('career.civilServices');
//     Route::get('/defence-forces', [CareerController::class, 'defence'])->name('career.defence');
//     Route::get('/research-phd', [CareerController::class, 'research'])->name('career.research');
//     Route::get('/entrepreneurship-startups', [CareerController::class, 'entrepreneurship'])->name('career.entrepreneurship');
//     Route::get('/social-work-ngos', [CareerController::class, 'socialWork'])->name('career.socialWork');
// });

// Route::prefix('courses')->group(function () {
//     Route::get('/nursing-anm-gnm-bsc-nursing', [CoursesController::class, 'nursingCourses'])->name('courses.nursing');
//     Route::get('/medical/mbbs', [CoursesController::class, 'mbbsCourses'])->name('courses.medical.mbbs');
//     Route::get('/pharmacy-dpharm-bpharm-mpharm-pharmd', [CoursesController::class, 'pharmacyCourses'])->name('courses.pharmacy');
//     Route::get('/paramedical-diplomas', [CoursesController::class, 'paramedicalDiploma'])->name('courses.paramedical.diploma');
//     Route::get('/ug-paramedical-degrees', [CoursesController::class, 'paramedicalUG'])->name('courses.paramedical.ug');
//     Route::get('/medical/pg', [CoursesController::class, 'paramedicalPG'])->name('courses.medical.pg');
//     Route::get('/medical/allied-health', [CoursesController::class, 'alliedHealthSciences'])->name('courses.medical.alliedHealth');
//     Route::get('/medical/ayush', [CoursesController::class, 'ayushCourses'])->name('courses.ayush');
//     Route::get('/medical/naturopathy-yoga', [CoursesController::class, 'naturopathyYoga'])->name('courses.naturopathy.yoga');
//     Route::get('/btech-be-programs', [CoursesController::class, 'btechBE'])->name('courses.btech');
//     Route::get('/barch', [CoursesController::class, 'barch'])->name('courses.barch');
//     Route::get('/mtech', [CoursesController::class, 'mtech'])->name('courses.mtech');
//     Route::get('/bca', [CoursesController::class, 'bca'])->name('courses.bca');
//     Route::get('/bsc-computer-science-it', [CoursesController::class, 'bscIt'])->name('courses.bsc.it');
//     Route::get('/mca', [CoursesController::class, 'mca'])->name('courses.mca');
//     Route::get('/msc', [CoursesController::class, 'mscIt'])->name('courses.msc.it');
//     Route::get('/bcom-allied-programs', [CoursesController::class, 'bcom'])->name('courses.bcom');
//     Route::get('/mcom', [CoursesController::class, 'mcom'])->name('courses.mcom');
//     Route::get('/bba', [CoursesController::class, 'bba'])->name('courses.bba');
//     Route::get('/mba-pgdm', [CoursesController::class, 'mba'])->name('courses.mba');
//     Route::get('/finance-taxation-accounting', [CoursesController::class, 'finance'])->name('courses.finance');
//     Route::get('/class-8-vocational-trades', [CoursesController::class, 'classEightPlus'])->name('courses.vocational.class8plus');
//     Route::get('/class-10-vocational-trades', [CoursesController::class, 'classTenPlus'])->name('courses.vocational.class10plus');
//     Route::get('/iti-itc-trades', [CoursesController::class, 'itiCourses'])->name('courses.vocational.iti');
//     Route::get('/msme-tool-room-courses', [CoursesController::class, 'msme'])->name('courses.vocational.msme');
//     Route::get('/diploma-in-engineering-polytechnic', [CoursesController::class, 'diplomaEngineering'])->name('courses.diploma.engineering');
//     Route::get('/diploma-in-paramedical', [CoursesController::class, 'diplomaParamedical'])->name('courses.diploma.paramedical');
//     Route::get('/diploma-in-pharmacy-dpharm', [CoursesController::class, 'diplomaPharmacy'])->name('courses.diploma.pharmacy');
//     Route::get('/diploma-in-computer-it', [CoursesController::class, 'diplomaIT'])->name('courses.diploma.it');
//     Route::get('/arts-graduation-courses-ba-allied', [CoursesController::class, 'degreeGraduationArts'])->name('courses.degree.graduation.arts');
//     Route::get('/commerce-graduation-courses-bcom-allied', [CoursesController::class, 'degreeGraduationCommerce'])->name('courses.degree.graduation.commerce');
//     Route::get('/science-graduation-courses-bsc-allied', [CoursesController::class, 'degreeGraduationScience'])->name('courses.degree.graduation.science');
//     Route::get('/arts-pg-courses-ma-msw-allied', [CoursesController::class, 'degreePostGraduationArts'])->name('courses.degree.postgraduation.arts');
//     Route::get('/commerce-pg-courses-mcom-allied', [CoursesController::class, 'degreePostGraduationCommerce'])->name('courses.degree.postgraduation.commerce');
//     Route::get('/science-pg-courses-msc-allied', [CoursesController::class, 'degreePostGraduationScience'])->name('courses.degree.postgraduation.science');
// });

// Route::prefix('colleges')->group(function () {
//     Route::get('/iits-indian-institutes-of-technology', [CollegesController::class, 'iits'])->name('colleges.iits');
//     Route::get('/nits-national-institutes-of-technology', [CollegesController::class, 'nits'])->name('colleges.nits');
//     Route::get('/iims-management-institutes', [CollegesController::class, 'iims'])->name('colleges.iims');
//     Route::get('/aiims-medical-institutes', [CollegesController::class, 'aiims'])->name('colleges.aiims');
//     Route::get('/nift-nid-fashion-design', [CollegesController::class, 'design'])->name('colleges.design');
//     Route::get('/national-law-universities-nlus', [CollegesController::class, 'nlu'])->name('colleges.nlu');
//     Route::get('/central-universities', [CollegesController::class, 'centralUniversities'])->name('colleges.central');
//     Route::get('/state-universities', [CollegesController::class, 'stateUniversities'])->name('colleges.state');
//     Route::get('/open-distance-universities-ignou-nsou', [CollegesController::class, 'openDistanceUniversities'])->name('colleges.open');
//     Route::get('/engineering-colleges', [CollegesController::class, 'engineeringColleges'])->name('colleges.engineering');
//     Route::get('/medical-paramedical-colleges', [CollegesController::class, 'medicalColleges'])->name('colleges.medical');
//     Route::get('/nursing-colleges', [CollegesController::class, 'nursingColleges'])->name('colleges.nursing');
//     Route::get('/pharmacy-colleges', [CollegesController::class, 'pharmacyColleges'])->name('colleges.pharmacy');
//     Route::get('/management-business-colleges', [CollegesController::class, 'managementColleges'])->name('colleges.management');
//     Route::get('/law-colleges', [CollegesController::class, 'lawColleges'])->name('colleges.law');
//     Route::get('/agriculture-veterinary-colleges', [CollegesController::class, 'agricultureColleges'])->name('colleges.agriculture');
//     Route::get('/teacher-training-bed-colleges', [CollegesController::class, 'teacherTrainingColleges'])->name('colleges.teacherTraining');
//     Route::get('/iti-centres-govt-private', [CollegesController::class, 'itiCentres'])->name('colleges.iti');
//     Route::get('/polytechnic-colleges', [CollegesController::class, 'polytechnicColleges'])->name('colleges.polytechnic');
//     Route::get('/msme-tool-room-institutes', [CollegesController::class, 'msmeToolRoomInstitutes'])->name('colleges.msme');
//     Route::get('/skill-development-centres', [CollegesController::class, 'skillDevelopmentCentres'])->name('colleges.skill');
// });

// Route::prefix('exams')->group(function () {
//     Route::get('/national-level-eg-jee-main-jee-advanced', [ExamsController::class, 'national'])->name('exams.engineering.national');
//     Route::get('/state-level-wbjee-etc', [ExamsController::class, 'state'])->name('exams.engineering.state');
//     Route::get('/university-level-exams', [ExamsController::class, 'university'])->name('exams.engineering.university');
//     Route::get('/mca', [ExamsController::class, 'mcaEntranceExams'])->name('exams.engineering.mca');
//     Route::get('/architecture', [ExamsController::class, 'architectureExams'])->name('exams.engineering.architecture');
//     Route::get('/national-level-eg-neet-ug', [ExamsController::class, 'medicalNational'])->name('exams.medical.national');
//     Route::get('/state-level-medical-exams', [ExamsController::class, 'medicalState'])->name('exams.medical.state');
//     Route::get('/university-level-medical-exams', [ExamsController::class, 'nursingExams'])->name('exams.medical.nursing');
//     Route::get('/pharmacy', [ExamsController::class, 'pharmacyExams'])->name('exams.medical.pharmacy');
//     Route::get('/pg', [ExamsController::class, 'pgMedicalExams'])->name('exams.medical.pg');
//     Route::prefix('hotel-management')->group(function () {
//         Route::get('/national', [ExamsController::class, 'nationalLevelExams'])->name('exams.hotelManagement.national');
//         Route::get('/state', [ExamsController::class, 'stateLevelExams'])->name('exams.hotelManagement.state');
//         Route::get('/university', [ExamsController::class, 'hotelUniversityExams'])->name('exams.hotelManagement.university');
//         Route::get('/hotel-run', [ExamsController::class, 'industryExams'])->name('exams.hotelManagement.hotelRun');
//     });
//     Route::prefix('law')->group(function () {
//         Route::get('/law', [ExamsController::class, 'lawExams'])->name('exams.law.law');
//         Route::get('/management', [ExamsController::class, 'managementExams'])->name('exams.law.management');
//         Route::get('/finance-accounts', [ExamsController::class, 'financeAccountsExams'])->name('exams.law.financeAccounts');
//     });
//     Route::prefix('design')->group(function () {
//         Route::get('/design', [ExamsController::class, 'fashionDesignExams'])->name('exams.design.fashionDesign');
//         Route::get('/mass-comm', [ExamsController::class, 'massCommExams'])->name('exams.design.massComm');
//         Route::get('/humanities', [ExamsController::class, 'humanitiesExams'])->name('exams.design.humanities');
//         Route::get('/mathematics', [ExamsController::class, 'mathematicsExams'])->name('exams.design.mathematics');
//     });
//     Route::prefix('agri')->group(function () {
//         Route::get('/agriculture', [ExamsController::class, 'agricultureExams'])->name('exams.agri.agriculture');
//         Route::get('/veterinary', [ExamsController::class, 'veterinaryExams'])->name('exams.agri.veterinary');
//         Route::get('/defence', [ExamsController::class, 'defenceExams'])->name('exams.agri.defence');
//         Route::get('/school', [ExamsController::class, 'schoolExams'])->name('exams.agri.school');
//     });
// });

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

    Route::get('courses/medical-paramedical/medical', [LandingPageController::class, 'medicalLandingPage'])->name('landing.medical');
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
try {
    \App\Models\Menu::whereNull('route_name')
        ->whereNotNull('slug')
        ->where('is_active', true)
        ->where('type', 'link')
        ->get()
        ->each(function ($item) {
            Route::get('/' . ltrim($item->slug, '/'), [PageController::class, 'show'])
                ->defaults('slug', $item->slug)
                ->name($item->key);
        });
} catch (\Throwable) {
    // DB unavailable during fresh migrations — skip silently.
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




require __DIR__.'/auth.php';
