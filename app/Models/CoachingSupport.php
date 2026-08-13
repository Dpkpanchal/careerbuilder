<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CoachingSupport extends Model
{
    //
     use HasFactory;

    protected $fillable = [
        'subject',
        'institution_name',
        'web_contact',
        'note',
        'is_active'
    ];
}
