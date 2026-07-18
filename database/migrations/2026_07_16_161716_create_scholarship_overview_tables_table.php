<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('scholarship_overview_tables', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('class_of_study')->nullable();
            $table->string('website')->nullable();
            $table->string('minimum_marks')->nullable();
            $table->string('annual_family_income')->nullable();

            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('scholarship_overview_tables');
    }
};