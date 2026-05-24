<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menu_groups', function (Blueprint $table) {
            $table->id();

            $table->foreignId('sub_category_id')
                  ->constrained('sub_categories')
                  ->cascadeOnDelete();

            $table->string('title');
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });

        Schema::table('menu_items', function (Blueprint $table) {
            $table->foreignId('group_id')
                  ->nullable()
                  ->after('sub_category_id')
                  ->constrained('menu_groups')
                  ->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropForeign(['group_id']);
            $table->dropColumn('group_id');
        });

        Schema::dropIfExists('menu_groups');
    }
};
