<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\APIController;
use App\Http\Controllers\Api\ExamController;
use App\Http\Controllers\Api\CollegeController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ForumApiController;


use App\Http\Controllers\Api\ForumController;
use App\Http\Controllers\Api\QuestionsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\OTPController;
use App\Http\Controllers\Auth\PasswordResetController;


// Public APIs
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);



Route::post('/otp/send', [OTPController::class, 'send'])->name('api.otp.send');
Route::post('/otp/verify', [OTPController::class, 'verify'])->name('api.otp.verify');
Route::post('/password/reset-direct', [PasswordResetController::class, 'resetDirect'])->name('api.password.reset.direct');

Route::get('/get-menus', [APIController::class, 'menus']);
Route::post('/get-career-content', [APIController::class, 'careerContent']);
Route::post('/get-course-content', [APIController::class, 'courseContent']);
Route::post('/get-exam-content', [ExamController::class, 'examContent']);
Route::post('/get-college-content', [CollegeController::class, 'collegeContent']); 
Route::get('/get-counsellors', [UserController::class, 'counsellors']);
Route::get('/get-minority-schemes', [APIController::class, 'minoritySchemes']);
Route::get('/get-waqf-run-hostels', [APIController::class, 'waqfRunHostel']);
Route::get('/get-admission-support', [APIController::class, 'admissionSupport']);
Route::get('/get-coaching-support', [APIController::class, 'coachingSupport']);
Route::get('/get-important-web-links', [APIController::class, 'importantWebLinks']);
Route::get('/home', [APIController::class, 'home']);
Route::get('/news-updates', [APIController::class, 'newsUpdates']);
Route::get('/get-jobs-opportunities', [APIController::class, 'jobOpportunity']);
Route::get('/scholarship-overview-table', [ApiController::class, 'scholarshipOverviewTable']);
Route::get('/scholarship-rates', [ApiController::class, 'scholarshipRates']);
Route::get('/more-scholarship', [ApiController::class, 'moreScholarship']);
Route::get('/education-loan', [ApiController::class, 'educationLoan']);
Route::get('/national-fellowships', [ApiController::class, 'nationalFellowships']);
Route::get('/national-fellowships/{nationalFellowship}', [ApiController::class, 'nationalFellowship']);
Route::get('/student-support', [ApiController::class, 'studentSupport']);
Route::get('/edu-fund', [ApiController::class, 'eduFund']);
Route::get('/landing-pages/{slug}', [ApiController::class, 'landingPages']);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/update-profile', [AuthController::class, 'updateProfile']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
});


// Forum API Routes

Route::prefix('forum')->group(function () {

    Route::get('/', [ForumController::class, 'index']); // GET /api/forum
    
    // ---------- Auth required ----------
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/my-questions', [ForumController::class, 'myQuestions']);
        Route::get('/bookmarked', [ForumController::class, 'bookmarked']);
        
        Route::get('/profile', [ForumController::class, 'profile']);

        // Questions
        Route::post('/questions', [QuestionsController::class, 'store']);
        Route::delete('/questions/{question}', [QuestionsController::class, 'destroy']);
        Route::post('/questions/{question}/bookmark', [ForumController::class, 'toggleBookmark']);

        // Answers
        Route::post('/{threadId}/reply', [ForumController::class, 'storeQuestionReply']);
        Route::delete('/answers/{answerId}', [ForumController::class, 'destroyAnswer']);
        Route::post('/answers/{answer}/helpful', [ForumController::class, 'toggleAnswerHelpful']);

        // Nested replies
        Route::post('/{threadId}/nested-reply', [ForumController::class, 'storeNestedReply']);
        Route::delete('/replies/{id}', [ForumController::class, 'destroyNestedReplies']);
        Route::post('/replies/{reply}/helpful', [ForumController::class, 'toggleReplyHelpful']);

        Route::get('/replies', [ForumController::class, 'replies']);

        // Reporting
        Route::post('/report', [ForumController::class, 'saveReport']);
    });
});
