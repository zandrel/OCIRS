<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class notifications extends Model
{
    use HasFactory;

    

    protected $fillable = ['message', 'user_id'];

    protected $casts = [
        'read' => 'boolean'
    ];
    
    protected $attributes = [
        'read' => false,
      ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public static function unreadCount() {
        $userId = Auth::id();
        $falseColumns = self::where('user_id', $userId)->where('read', false)->count();
        return $falseColumns;
    }

    
}



