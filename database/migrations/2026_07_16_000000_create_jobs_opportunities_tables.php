<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Fixed reference list — Government, Banking, Defence, Teaching,
        // Engineering, Railway, After Class 8. Seeded once, not editable
        // from the admin UI (per requirement — sectors stay fixed).
        Schema::create('job_sectors', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();   // e.g. 'government', 'after-class-8'
            $table->string('title');
            $table->text('note')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        // A "Recruiter Group" — e.g. "UPSC" under Government, or
        // "Driver Type Job" under After Class 8 (label doubles as
        // recruitedBy / typeOfJob depending on the sector).
        Schema::create('job_groups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_sector_id')->constrained()->cascadeOnDelete();
            $table->string('label');
            $table->string('website')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        // Optional extra links shown next to a group's official website
        // (e.g. WBSEDCL / WBSETCL under the Engineering group).
        Schema::create('job_group_links', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_group_id')->constrained()->cascadeOnDelete();
            $table->string('label');
            $table->string('href');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        // A single Post / Eligibility row under a group. For the
        // "After Class 8" sector, recruited_by + website are set per-row
        // instead of on the parent group.
        Schema::create('job_rows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('job_group_id')->constrained()->cascadeOnDelete();
            $table->string('recruited_by')->nullable();
            $table->string('website')->nullable();
            $table->string('post');
            $table->string('eligibility');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_rows');
        Schema::dropIfExists('job_group_links');
        Schema::dropIfExists('job_groups');
        Schema::dropIfExists('job_sectors');
    }
};
