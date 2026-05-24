<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CmMessage extends Model
{
    //
    protected $fillable = [
        'content',
        'image'
    ];
}
