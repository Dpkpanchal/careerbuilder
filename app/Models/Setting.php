<?php
// app/Models/Setting.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'value',
        'type',
        'group',
        'options',
        'label',
        'description',
        'order',
        'is_public',
    ];

    protected $casts = [
        'options' => 'array',
        'is_public' => 'boolean',
    ];

    public function getValueAttribute($value)
    {
        if ($this->type === 'boolean') {
            return (bool) $value;
        }
        
        if ($this->type === 'number') {
            return is_numeric($value) ? $value + 0 : $value;
        }

        return $value;
    }

    public function setValueAttribute($value)
    {
        if ($this->type === 'boolean') {
            $this->attributes['value'] = $value ? '1' : '0';
        } else {
            $this->attributes['value'] = $value;
        }
    }

    // Helper method to get setting value by key
    public static function getValue($key, $default = null)
    {
        $setting = static::where('key', $key)->first();
        return $setting ? $setting->value : $default;
    }

    // Helper method to set setting value
    public static function setValue($key, $value)
    {
        $setting = static::where('key', $key)->first();
        
        if ($setting) {
            $setting->update(['value' => $value]);
        }
        
        return $setting;
    }
}