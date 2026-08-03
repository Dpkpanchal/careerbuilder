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
        Schema::create('career_contents', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('menu_id')->nullable();
            $table->unsignedBigInteger('tab_id')->nullable();
            $table->unsignedBigInteger('section_id')->nullable();
            $table->unsignedBigInteger('link_id')->nullable();

            $table->string('url')->nullable();

            $table->jsonb('branch_groups')->nullable();
            $table->jsonb('pathways')->nullable();
            $table->jsonb('courses')->nullable();
            $table->jsonb('exams')->nullable();
            $table->jsonb('institute_links')->nullable();
            $table->jsonb('industries')->nullable();
            $table->jsonb('role_examples')->nullable();

            $table->boolean('is_active')->default(true);

            $table->timestamps();

            $table->index('menu_id');
            $table->index('tab_id');
            $table->index('section_id');
            $table->index('link_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('career_contents');
    }
};
