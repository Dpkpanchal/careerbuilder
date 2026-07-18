<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('exam_contents', function (Blueprint $table) {
            $table->unsignedBigInteger('master_id')->nullable()->after('id');
            $table->foreign('master_id')->references('id')->on('menus')->nullOnDelete();
        });
    }

    public function down()
    {
        Schema::table('exam_contents', function (Blueprint $table) {
            $table->dropForeign(['master_id']);
            $table->dropColumn('master_id');
        });
    }
};