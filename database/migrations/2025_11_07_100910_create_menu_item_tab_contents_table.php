<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('menu_item_tab_contents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('menu_item_tab_id')->constrained()->onDelete('cascade');

            $table->string('title')->nullable();        // Optional title
            $table->string('subtitle')->nullable();     // Optional subtitle

            // ✅ Full HTML block of the card (can store ANYTHING)
            $table->longText('html_content')->nullable();

            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('menu_item_tab_contents');
    }
};
