<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('exam_contents', function (Blueprint $table) {

            $table->id();

            $table->foreignId('menu_id')->constrained('menus')->cascadeOnDelete();
            $table->foreignId('tab_id')->nullable()->constrained('menus')->nullOnDelete();
            $table->foreignId('section_id')->nullable()->constrained('menus')->nullOnDelete();

            $table->string('tag')->nullable();
            $table->string('level')->nullable();

            $table->string('name')->nullable();
            $table->string('exam')->nullable();
            $table->string('full_form')->nullable();
            $table->string('title')->nullable();
            $table->string('short')->nullable();
            $table->string('route')->nullable();
            $table->string('nature')->nullable();
            $table->string('group')->nullable();

            $table->text('purpose')->nullable();
            $table->longText('eligibility')->nullable();

            $table->string('apply')->nullable();
            $table->string('activity')->nullable();
            $table->string('calendar')->nullable();

            $table->string('source')->nullable();
            $table->string('href')->nullable();
            $table->string('link_label')->nullable();

            $table->json('sources')->nullable();
            $table->json('links')->nullable();

            $table->text('note')->nullable();
            $table->text('status_note')->nullable();

            $table->boolean('wb_focus')->default(false);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exam_contents');
    }
};