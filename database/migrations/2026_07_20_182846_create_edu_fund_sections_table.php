<?php
// database/migrations/xxxx_xx_xx_create_edu_fund_sections_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('edu_fund_sections', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique(); // scholarship | loan
            $table->string('heading_prefix');       // "Scholarships that"
            $table->string('heading_highlight');     // "reduce your burden"
            $table->text('description');
            $table->string('cta_label');
            $table->string('cta_link');
            $table->string('extra_note')->nullable(); // "Best for.. Smart strategy.." (loan only)
            $table->string('note_title')->nullable();  // WB Govt support box (scholarship only)
            $table->text('note_text')->nullable();
            $table->string('note_icon')->nullable();
            $table->string('bg_style')->default('light'); // light | white
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('edu_fund_sections');
    }
};