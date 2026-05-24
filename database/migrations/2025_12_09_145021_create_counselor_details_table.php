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
        Schema::create('counselor_details', function (Blueprint $table) {
        $table->id();

        $table->unsignedBigInteger('user_id')->unique();
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

        $table->json('qualification')->nullable(); // multiple values
        $table->json('expertise')->nullable(); // multiple values

        $table->text('bio')->nullable();
        $table->string('profile_image')->nullable();

        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('counselor_details');
    }
};
