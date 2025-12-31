<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = [
        'user_id',
        'file_name',
        'cv_url',
        'public_id',
        'is_primary',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
