<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImportantWebLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'subject',
        'web_link',
        'is_active'
    ];
}
