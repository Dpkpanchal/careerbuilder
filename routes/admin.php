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
use App\Http\Controllers\Admin\ExamContentController;
use App\Http\Controllers\Admin\CollegeContentController;
use App\Http\Controllers\Admin\JobGroupController;
use App\Http\Controllers\Admin\ScholarshipOverviewTableController;
use App\Http\Controllers\Admin\ScholarshipRateController;
use App\Http\Controllers\Admin\ScholarshipController;
use App\Http\Controllers\Admin\EducationLoanController;


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
        Route::post( '/leaders/{id}/toggle-block', [LeaderMessageController::class, 'toggleBlock'] )->name('leaders.toggle-block');
        Route::post( '/leaders/{id}/restore', [LeaderMessageController::class, 'restore'] )->name('leaders.restore');
    
        Route::resource('career-domains', CareerDomainController::class);

        Route::resource('news', NewsController::class);
        Route::resource('loan-sections', LoanSectionController::class);
        Route::resource('sections', SectionController::class);
       
        Route::resource('central-universities', CentralUniversityController::class);

        Route::resource('exam-content', ExamContentController::class);
        Route::resource('college-content', CollegeContentController::class);
        Route::resource('job-groups', \App\Http\Controllers\Admin\JobGroupController::class);

        Route::resource('scholarship-overview-table', ScholarshipOverviewTableController::class);
        Route::resource('scholarship-rates', ScholarshipRateController::class);
        Route::resource('scholarships', ScholarshipController::class);

        Route::get('education-loan', [EducationLoanController::class, 'index'])->name('education-loan.index');
        Route::put('education-loan', [EducationLoanController::class, 'update'])->name('education-loan.update');

        Route::resource('national-fellowships', \App\Http\Controllers\Admin\NationalFellowshipController::class);
        Route::put('national-fellowships/{national_fellowship}/status', [\App\Http\Controllers\Admin\NationalFellowshipController::class, 'status'])
            ->name('national-fellowships.status');



       

        Route::delete(
                'college-content/{collegeContent}',
                [CollegeContentController::class, 'destroy']
            )->name('college-content.destroy');

         Route::put(
            'college-content/{collegeContent}/status',
            [CollegeContentController::class,'status']
        )->name('college-content.status');



        Route::put(
            'exam-content/{examContent}/status',
            [ExamContentController::class,'status']
        )->name('exam-content.status');

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
