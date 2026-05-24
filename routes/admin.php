<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\SubCategoryController;
use App\Http\Controllers\Admin\MenuItemController;
use App\Http\Controllers\Admin\MenuItemTabController;
use App\Http\Controllers\Admin\MenuItemTabContentController;
use App\Http\Controllers\Admin\CounsellorController;
use App\Http\Controllers\Admin\ForumCategoryController;
use App\Http\Controllers\Admin\ItiCollegeController;
use App\Http\Controllers\Admin\AuthController;


use App\Http\Controllers\Admin\CoachingSupportController;
use App\Http\Controllers\Admin\WaqfRunHostelController;
use App\Http\Controllers\Admin\MinoritySchemeController;
use App\Http\Controllers\Admin\ImportantWebLinkController;
use App\Http\Controllers\Admin\AdmissionSupportController;
use App\Http\Controllers\Admin\CentralUniversityController;
use App\Http\Controllers\Admin\ReportController;

use App\Http\Controllers\Admin\CmMessageController;
use App\Http\Controllers\Admin\HeroSlideController;
use App\Http\Controllers\Admin\LeaderMessageController;
use App\Http\Controllers\Admin\CareerDomainController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\LoanSectionController;
use App\Http\Controllers\Admin\SectionController;

use App\Http\Controllers\Admin\NavMenuController;
use App\Http\Controllers\Admin\PageContentController;





Route::middleware('guest:admin')
    ->prefix('admin')
    ->group(function () {

        Route::get('/login', [AuthController::class, 'showLogin'])
            ->name('admin.login');

        Route::post('/login', [AuthController::class, 'login'])
            ->name('admin.login.store');
});


Route::middleware(['admin.session', 'auth:admin'])
// Route::middleware('auth:admin')
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {

        Route::get('/dashboard', [DashboardController::class, 'index'])
            ->name('dashboard');

        Route::post('/logout', [AuthController::class, 'logout'])
          ->name('logout');


        //Profile management 

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::patch('/profile/password', [ProfileController::class, 'updatePassword'])->name('profile.password.update');
        Route::post('/profile/avatar', [ProfileController::class, 'updateAvatar'])->name('profile.avatar.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


        // Control by Admin 
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
        Route::resource('users', UserController::class);
        Route::post('/users/{user}/toggle-block', [UserController::class, 'toggleBlock']);
        Route::resource('categories', CategoryController::class);
        Route::resource('subcategories', SubCategoryController::class);
        Route::resource('menuitems', MenuItemController::class);
        Route::resource('itemtabs', MenuItemTabController::class);
        Route::resource('tabcontents', MenuItemTabContentController::class);
        Route::resource('counsellors', CounsellorController::class);
        Route::resource('forum-categories', ForumCategoryController::class);
        Route::resource('iti-colleges', ItiCollegeController::class);

        Route::resource('coaching-support', CoachingSupportController::class);
        Route::resource('waqf-run-hostels', WaqfRunHostelController::class);
        Route::resource('minority-schemes', MinoritySchemeController::class);
        Route::resource('important-web-links', ImportantWebLinkController::class);
        Route::resource('admission-support', AdmissionSupportController::class);


        Route::resource('cm-message', CmMessageController::class);
        Route::resource('hero-slides', HeroSlideController::class);
        Route::resource('leaders', LeaderMessageController::class);
        Route::resource('career-domains', CareerDomainController::class);
        Route::resource('news', NewsController::class);
        Route::resource('loan-sections', LoanSectionController::class);
        Route::resource('sections', SectionController::class);
       
        Route::resource('central-universities', CentralUniversityController::class);

        // Navigation Menus (menus table)
        Route::resource('nav-menus', NavMenuController::class);
        Route::post('/nav-menus/{navMenu}/toggle-active', [NavMenuController::class, 'toggleActive'])
            ->name('nav-menus.toggle-active');
        Route::post('/nav-menus/{id}/restore', [NavMenuController::class, 'restore'])
            ->name('nav-menus.restore');

        // Page content editor (CKEditor)
        Route::get('/nav-menus/{navMenu}/content/edit', [PageContentController::class, 'edit'])
            ->name('nav-menus.content.edit');
        Route::put('/nav-menus/{navMenu}/content', [PageContentController::class, 'update'])
            ->name('nav-menus.content.update');
        Route::get('/reports', [ReportController::class, 'index'])
            ->name('reports.index');
        Route::get('/reports/{report}', [ReportController::class, 'show'])
            ->name('reports.show');

        Route::post('/reports/{report}/delete-content', [ReportController::class, 'deleteContent'])
            ->name('reports.deleteContent');

        Route::post('/reports/{report}/block-user', [ReportController::class, 'blockUser'])
            ->name('reports.blockUser');

        Route::post('/reports/{report}/ignore', [ReportController::class, 'ignore'])
            ->name('reports.ignore');

        Route::post('/users/{id}/restore', [UserController::class, 'restore'])
    ->name('users.restore');

    Route::post('/counsellors/{id}/restore', [CounsellorController::class, 'restore'])
    ->name('admin.counsellors.restore');




});
