<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LoanSection extends Model
{
    //
    protected $fillable = [
        'type',
        'icon',
        'title',
        'description',
        'short',
        'link',
        'order',
    ];
}
