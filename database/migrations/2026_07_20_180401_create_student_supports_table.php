<?php
// database/migrations/xxxx_xx_xx_create_student_supports_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('student_supports', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('link'); // internal path or route slug e.g. /more/admission-support
            $table->string('icon')->default('University'); // lucide icon key
            $table->string('tone')->nullable();   // e.g. Admissions, Careers
            $table->string('level')->nullable();  // e.g. India, Help, Exams
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('status')->default(1); // 1 = active, 0 = inactive
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('student_supports');
    }
};