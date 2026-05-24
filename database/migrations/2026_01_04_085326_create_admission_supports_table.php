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
        Schema::create('admission_supports', function (Blueprint $table) {
            $table->id();
            $table->string('category'); 
            // Connecting / Indian University / Foreign University

            $table->string('university')->nullable(); 
            $table->string('name');
            $table->string('phone')->nullable(); // allow multiple numbers
            $table->string('email')->nullable();

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
        Schema::dropIfExists('admission_supports');
    }
};
