<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        // Drop old constraint if exists
        DB::statement('ALTER TABLE iti_colleges DROP CONSTRAINT IF EXISTS iti_colleges_type_check');

        // Add new allowed values
        DB::statement("
            ALTER TABLE iti_colleges
            ADD CONSTRAINT iti_colleges_type_check
            CHECK (type IN ('Government', 'Private', 'sponsored', 'women', 'special'))
        ");
    }

    public function down()
    {
        // Optional: revert back to a single allowed value if needed
        DB::statement('ALTER TABLE iti_colleges DROP CONSTRAINT IF EXISTS iti_colleges_type_check');

        DB::statement("
            ALTER TABLE iti_colleges
            ADD CONSTRAINT iti_colleges_type_check
            CHECK (type IN ('Government', 'Private'))
        ");
    }
};
