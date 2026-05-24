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
        Schema::create('waqf_run_hostels', function (Blueprint $table) {
            $table->id();
            $table->string('name');                 // Hostel name
            $table->text('address');                // Full address
            $table->integer('seat_capacity');       // Total seats
            $table->string('contact_no', 50);       // Supports multiple numbers
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('waqf_run_hostels');
    }
};
