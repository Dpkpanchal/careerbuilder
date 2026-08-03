<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('career_contents', function (Blueprint $table) {
            $table->jsonb('key_instructions_eligibility')->nullable()->after('top_colleges_and_universities');
        });
    }

    public function down()
    {
        Schema::table('career_contents', function (Blueprint $table) {
            $table->dropColumn('key_instructions_eligibility');
        });
    }
};