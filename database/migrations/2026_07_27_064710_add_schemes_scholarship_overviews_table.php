<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('scholarship_overviews', function (Blueprint $table) {
            // [{no, name, class_of_study, website, min_marks, income}, ...]
            $table->json('schemes')->nullable()->after('rules_right');
        });
    }

    public function down(): void
    {
        Schema::table('scholarship_overviews', function (Blueprint $table) {
            $table->dropColumn('schemes');
        });
    }
};
