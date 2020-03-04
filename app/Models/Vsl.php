<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vsl extends Model
{
    public const UPDATED_AT = 'UPDDATE';

    protected $table = 'VSL';
    protected $primaryKey = 'CODE';
    protected $fillable = [

    ];

    public $incrementing = false;
    public $timestamps = false;
}
