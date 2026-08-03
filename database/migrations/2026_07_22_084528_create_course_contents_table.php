<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('course_contents', function (Blueprint $table) {
            $table->id();

            // Tab identity, e.g. class-8-plus / class-10-plus / iti / msme
            $table->string('tab_key')->unique();
            $table->string('tab_label');
            $table->string('slug')->unique(); // used in URL: /courses/{slug}

            // Hero / page level content
            $table->string('page_title');
            $table->string('breadcrumb')->nullable();

            // Intro section (left column text)
            $table->string('intro_heading')->nullable();
            $table->text('intro_description')->nullable();
            $table->text('intro_description_secondary')->nullable();

            // Quick snapshot box -> {eligibility, major_sectors, duration, institutes}
            $table->json('snapshot')->nullable();

            // Sector wise course list -> [{code,title,description,courses:[]}]
            $table->json('sectors')->nullable();

            // Admission & where to study
            $table->string('admission_heading')->nullable();
            $table->text('admission_description')->nullable();
            $table->json('admission_info')->nullable();   // array of strings
            $table->json('next_steps')->nullable();       // array of strings (ordered list)

            // Key skill agencies -> [{title,subtitle,links:[{label,url}]}]
            $table->json('skill_agencies')->nullable();

            // Explore more pages -> [{label,description,href}]
            $table->json('more_pages')->nullable();

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('course_contents');
    }
};
