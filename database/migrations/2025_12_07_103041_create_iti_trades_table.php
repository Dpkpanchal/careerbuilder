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
        Schema::create('iti_trades', function (Blueprint $table) {
        $table->id();
        $table->foreignId('iti_college_id')->constrained()->onDelete('cascade');
        $table->string('trade_name');
        $table->enum('duration', ['6 Months', '1 Year', '2 Years'])->nullable();
        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iti_trades');
    }
};
