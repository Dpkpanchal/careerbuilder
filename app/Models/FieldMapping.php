<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FieldMapping extends Model
{
    protected $fillable = [
        'mapping_key',
        'fields',
    ];

    protected $casts = [
        'fields' => 'array',
    ];

    /**
     * Get fields by mapping key.
     */
    public static function getFields(string $key): array
    {
        return static::where('mapping_key', $key)
            ->value('fields') ?? [];
    }
}