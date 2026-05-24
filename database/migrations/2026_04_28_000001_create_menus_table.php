<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->string('label');
            $table->string('href')->nullable();
            $table->string('route_name')->nullable();
            $table->string('slug')->nullable();
            $table->boolean('tabbed')->default(false);
            $table->boolean('no_dropdown')->default(false);
            $table->foreignId('parent_id')->nullable()->constrained('menus')->nullOnDelete();
            $table->enum('type', ['menu', 'tab', 'section', 'link'])->default('link');
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
