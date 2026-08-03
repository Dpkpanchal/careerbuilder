<?php
// database/migrations/xxxx_xx_xx_create_edu_fund_cards_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('edu_fund_cards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('section_id')->constrained('edu_fund_sections')->cascadeOnDelete();
            $table->string('icon')->default('Award');
            $table->string('title');
            $table->text('content'); // HTML allowed: <ul><li>, <b>
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('edu_fund_cards');
    }
};