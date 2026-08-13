<?php
// app/Http/Controllers/Admin/DashboardController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\Category;
use App\Models\ItiCollege;
use App\Models\CentralUniversity;
use App\Models\Report;


class DashboardController extends Controller
{
 

    public function index()
    {
        /* ================= TOTAL COUNTS ================= */
        $students = User::where('role', 'student')->count();
        $teachers = User::where('role', 'teacher')->count();
        $parents  = User::where('role', 'parent')->count();
        $counselors = User::where('role', 'counselor')->count();

        $loggedInUsers = User::where('is_online', true)
        ->where('last_activity', '>=', now()->subMinutes(5))
        ->count();

        $stats = [
            'total_student'   => $students,
            'total_teacher'   => $teachers,
            'total_parent'    => $parents,
            'total_counselor' => $counselors,

            // OPTIONAL (future use)
            'total_categories' => Category::count(),
            'total_reports' => 0,
            'solved_reports' => 0,
            'unsolved_reports' => Report::where('status','pending')->count(),
            'total_iti_colleges' => ItiCollege::count(),
            'total_central_universities' => CentralUniversity::count(),
            'logged_in_users' => $loggedInUsers

        ];

        /* ================= USER DISTRIBUTION (Pie) ================= */
        $userDistribution = [
            'student' => $students,
            'teacher' => $teachers,
            'parent'  => $parents,
        ];

        /* ================= WEEKLY USERS (Bar) ================= */
        $weeklyUsers = [];

        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subDays($i)->startOfDay();

            $weeklyUsers[$date->format('D')] = User::whereIn('role', ['student','teacher','parent'])
                ->whereDate('created_at', $date)
                ->count();
        }

        /* ================= RECENT USERS ================= */
        $recentUsers = User::whereIn('role', ['teacher','student','parent'])
            ->latest()
            ->take(5)
            ->get();

        

        return $this->adminRender('Admin/Dashboard', [
            'stats' => $stats,
            'recentUsers' => $recentUsers,
            'weeklyUsers' => $weeklyUsers,
            'userDistribution' => $userDistribution,
        ]);
    }






    public function pagesDemo()
    {
        return $this->adminRender('Admin/DemoPages');
    }
}