<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'fName'  => 'Juan',
            'mName'  => 'Reyes',
            'lName'  => 'Dela Cruz',
            'sex'  => 'Male',
            'birthDate'  => '2000/08/16',
            'civilStatus'  => 'Single',
            'street'  => 'Purok 2',
            'region' => 'Region 2',
            'province' => 'Cagayan',
            'municipality' => 'Tuguegarao',
            'barangay' => 'Robinson',
            'qualifier'=> 'Jr.', //--------
           'nickname'=> 'Domingsu',
            'occupation'=> 'Driver',
           'highesteduc'=> 'Highschool Graduate',//-----------
            'username' => 'user',
            'password' => Hash::make('user123'),
            'email'=> 'juan@admin.com',
            'mobileNum' => '09685345211',

    ]);
    }
}
