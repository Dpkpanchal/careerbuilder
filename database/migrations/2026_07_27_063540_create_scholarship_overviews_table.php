<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('scholarship_overviews', function (Blueprint $table) {
            $table->id();

            // Hero
            $table->string('hero_title')->default('Scholarships & Educational Support');
            $table->string('hero_breadcrumb')->default('Scholarships → Overview');

            // "How this section helps you" block
            $table->string('intro_title')->default('How this section helps you');
            $table->string('intro_subtitle')->nullable();
            $table->text('paragraph_1')->nullable();
            $table->text('paragraph_2')->nullable();

            // 3 stat cards -> stored as JSON: [{label, value, meta}, ...]
            $table->json('stats')->nullable();

            // Quick access box -> [{text, link_url, link_label}, ...]
            $table->json('quick_access_items')->nullable();
            $table->text('quick_access_note')->nullable();

            // Rules section -> two columns of plain strings
            $table->json('rules_left')->nullable();
            $table->json('rules_right')->nullable();

            // Note under the schemes table
            $table->text('table_note')->nullable();

            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('scholarship_overviews');
    }
};
