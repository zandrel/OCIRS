<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class news extends Model
{
    use HasFactory;

    protected $fillable = [
        'news_id',
        'newsTitle',
        'newsDescrip',
        'media',
    ];
    const UPDATED_AT = null;
}
