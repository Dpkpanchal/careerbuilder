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
        Schema::create('scholarship_rates', function (Blueprint $table) {
            $table->id();

            $table->string('type');                     // PRE MATRIC / POST MATRIC
            $table->string('class_of_study');

            // Day Scholar
            $table->decimal('day_admission_fee', 10, 2)->default(0);
            $table->decimal('day_maintenance_allowance', 10, 2)->default(0);
            $table->decimal('day_total', 10, 2)->default(0);

            // Hosteller
            $table->decimal('hosteller_admission_fee', 10, 2)->default(0);
            $table->decimal('hosteller_maintenance_allowance', 10, 2)->default(0);
            $table->decimal('hosteller_total', 10, 2)->default(0);

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
        Schema::dropIfExists('scholarship_rates');
    }
};