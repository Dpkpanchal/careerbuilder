<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('education_loans', function (Blueprint $table) {
            $table->id();
            $table->string('title')->default('GET EDUCATION LOAN at the lowest Rate of Interest @ 3% p.a.!');
            $table->string('subtitle')->default('www.wbmdfc.net');
            $table->text('eligibility')->nullable();
            $table->text('application_process')->nullable();
            $table->string('age_group')->default('within 32 years');
            
            // Income and Interest Rates
            $table->json('income_rates')->nullable(); // Will store all income slabs
            
            // Disbursement Info
            $table->text('disbursement_info')->nullable();
            
            // External Links
            $table->string('loan_care_link')->default('https://www.myloancare.in/education-loan-interest/');
            $table->string('vidya_lakshmi_link')->default('https://www.vidyalakshmi.co.in/Students/');
            
            // SEO
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            
            // Status
            $table->boolean('is_active')->default(true);
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('education_loans');
    }
};