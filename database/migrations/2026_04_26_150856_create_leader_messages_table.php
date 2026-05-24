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
        Schema::create('leader_messages', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('post')->nullable();        // IAS / WBCS
            $table->string('designation')->nullable(); // Secretary, MD
            $table->longText('about')->nullable();     // CKEditor content
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leader_messages');
    }
};
