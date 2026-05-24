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
        Schema::create('loan_sections', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // fact_card / scheme

            $table->string('icon')->nullable(); // only for fact_card
            $table->string('title')->nullable(); // fact_card title OR scheme full
            $table->text('description')->nullable(); // fact_card text

            $table->string('short')->nullable(); // scheme short text
            $table->string('link')->nullable();  // scheme link

            $table->integer('order')->default(0); // for sorting
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_sections');
    }
};
