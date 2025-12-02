<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasUlids, HasFactory;

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
