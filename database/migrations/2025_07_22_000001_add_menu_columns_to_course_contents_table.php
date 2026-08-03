<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('course_contents', function (Blueprint $table) {
            $table->unsignedBigInteger('menu_id')->nullable()->after('id');
            $table->unsignedBigInteger('tab_id')->nullable()->after('menu_id');
            $table->unsignedBigInteger('section_id')->nullable()->after('tab_id');
            $table->unsignedBigInteger('link_id')->nullable()->after('section_id');
            $table->string('url')->nullable()->after('link_id');
        });
    }

    public function down(): void
    {
        Schema::table('course_contents', function (Blueprint $table) {
            $table->dropColumn(['menu_id', 'tab_id', 'section_id', 'link_id', 'url']);
        });
    }
};
