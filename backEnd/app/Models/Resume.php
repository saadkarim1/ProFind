<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Resume extends Model
{
    use SoftDeletes, HasUuids;
    protected $fillable = [
        'user_id',
        'file_name',
        'cv_url',
        'preview_url',
        'public_id',
        'is_primary',
    ];

    public $incrementing = false;
    protected $keyType = 'string';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
