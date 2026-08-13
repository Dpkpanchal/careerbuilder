<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MinorityScheme extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject',
        'web_link',
        'is_active'
    ];
}
