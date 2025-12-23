<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        "title",
        "description",
        "link",
        "sector",
        "image",
        "city",
    ];


    public $incrementing = false;
    protected $keyType = 'string';
    public function offers()
    {
        return $this->hasMany(Offer::class);
    }
}
