<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class announcement extends Model
{
    use HasFactory;

    protected $fillable = [
        'anno_id',
        'anno_title',
        'anno_descrip',
    ];
    const UPDATED_AT = null;
    const CREATED_AT = null;
    
    protected $primaryKey = 'anno_id';
}