<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameDescriptionToCategoryIconInForumCategoriesTable extends Migration
{
    public function up()
    {
        Schema::table('forum_categories', function (Blueprint $table) {
            $table->renameColumn('description', 'category_icon');
        });
    }

    public function down()
    {
        Schema::table('forum_categories', function (Blueprint $table) {
            $table->renameColumn('category_icon', 'description');
        });
    }
}
