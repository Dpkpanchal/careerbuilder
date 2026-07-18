<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\APIController;
use App\Http\Controllers\Api\ExamController;
use App\Http\Controllers\Api\CollegeController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ForumApiController;

// Public APIs
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);


Route::get('/get-menus', [APIController::class, 'menus']);
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

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/update-profile', [AuthController::class, 'updateProfile']);
    Route::post('/change-password', [AuthController::class, 'changePassword']);
});


Route::prefix('forum')->group(function () {

    // Public
    Route::get('/', [ForumApiController::class, 'forum']);
    Route::get('/question/{id}', [ForumApiController::class, 'questionDetails']);

    // Login Required
    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/my-questions', [ForumApiController::class, 'myQuestions']);
        Route::get('/replies', [ForumApiController::class, 'replies']);
        Route::get('/bookmarked', [ForumApiController::class, 'bookmarked']);
        Route::get('/profile', [ForumApiController::class, 'profile']);

        Route::post('/{threadId}/reply', [ForumApiController::class, 'storeQuestionReply']);
        Route::post('/{threadId}/nested-reply', [ForumApiController::class, 'storeNestedReply']);

        Route::patch('/questions/{question}/bookmark', [ForumApiController::class, 'toggleBookmark']);
        Route::patch('/answers/{answer}/helpful', [ForumApiController::class, 'toggleAnswerHelpful']);
        Route::patch('/replies/{reply}/helpful', [ForumApiController::class, 'toggleReplyHelpful']);

        Route::delete('/answers/{answerId}', [ForumApiController::class, 'destroyAnswer']);
        Route::delete('/nested-replies/{id}', [ForumApiController::class, 'destroyNestedReplies']);
        Route::delete('/replies/{reply}', [ForumApiController::class, 'replyDestroy']);

        Route::post('/report-thread', [ForumApiController::class, 'store']);
        Route::post('/report', [ForumApiController::class, 'saveReport']);
        Route::post('/report-question', [ForumApiController::class, 'reportQuestion']);
    });
});