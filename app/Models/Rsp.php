<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rsp extends Model
{
    public const UPDATED_AT = 'UPDDATE';

    protected $table = 'RSP';
    protected $primaryKey = 'CODE';
    protected $fillable = [

    ];

    public $incrementing = false;
    public $timestamps = false;
}
