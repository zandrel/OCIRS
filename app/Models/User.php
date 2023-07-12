<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Dotenv\Parser\Value;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function notifications()
{
    return $this->hasMany(notifications::class);
}

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fName',
        'mName',
        'lName',
        'sex',
        'birthDate',
        'civilStatus',
        'street',
        'street2',
        'region',
        'sitio',
        'sitio2',
        'province',
        'province2',
        'municipality',
        'municipality2',
        'barangay',
        'barangay2',
        'username',
        'password',
        'email',
        'mobileNum',
        'qualifier',
        'nickname',
        'profile',
        'highesteduc',
        'occupation',
        'role',
        'remember_token',
        'acct_status',
        'acct_archive_status',
        'email_verified',
        'placeofbirth',
        'homephone',
        'citizenship',
        'age',
        'validID',
        'selfieValidID',
        'id_type',
        'last_login_time',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $timestamps = false;

    protected function role(): Attribute
    {

            return new Attribute(
                get: fn($value) => ["user", "agencyadmin", "superadmin"][$value],
            );
    }
    function posts() {    
        return $this->hasMany(Report::class);
    }

    public static function generateUserid(int $length = 8): string
    {
        $user_id = Str::random($length); //Generate random string
        $exists = DB::table('users')
            ->where('id', '=', $user_id)
            ->get(['id']); //Find matches for id = generated id
        if (isset($exists[0]->userID)) { //id exists in users table
            return self::generateUserid(); //Retry with another generated id
        }
        return $user_id; //Return the generated id as it does not exist in the DB
    }
}
