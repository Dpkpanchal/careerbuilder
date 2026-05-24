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
        Schema::create('coaching_supports', function (Blueprint $table) {
            $table->id();
            $table->string('subject');                 // e.g. Engineering, Medical
            $table->string('institution_name');        // Coaching / Institute name
            $table->string('web_contact', 255)->nullable(); 
            // website OR phone OR email text

            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coaching_supports');
    }
};
