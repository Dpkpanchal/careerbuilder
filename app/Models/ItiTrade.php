<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItiTrade extends Model
{
    protected $fillable = ['iti_college_id', 'name', 'duration'];

    public function college()
    {
        return $this->belongsTo(ItiCollege::class, 'iti_college_id');
    }
}
