<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerifyUser extends Model
{
    use HasFactory;

    public $table = 'verify_users';

     /**
     * Write code on Method
     *
     * @return response()   
     */
    protected $fillable  = [
        'user_id',
        'token',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id' );
    }
}