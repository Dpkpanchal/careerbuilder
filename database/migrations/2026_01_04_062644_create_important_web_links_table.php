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
        Schema::create('important_web_links', function (Blueprint $table) {
            $table->id();
            $table->string('category', 100);
            $table->string('subject');          // Title / Subject
            $table->string('web_link', 500);    // URL
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('important_web_links');
    }
};
