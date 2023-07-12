<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('fName');
            $table->string('mName')->nullable();
            $table->string('lName');
            $table->string('sex');
            $table->date('birthDate');
            $table->string('civilStatus');
            $table->string('street');
            $table->string('street2')->nullable();
            $table->string('region');
            $table->string('province');
            $table->string('province2')->nullable();
            $table->string('municipality');
            $table->string('municipality2')->nullable();
            $table->string('barangay');
            $table->string('barangay2')->nullable();
            $table->string('qualifier')->nullable();
            $table->string('nickname')->nullable();
            $table->string('occupation')->nullable();
            $table->string('highesteduc')->nullable();
            $table->string('username')->unique('username');
            $table->string('password');
            $table->string('email')->unique('email');
            $table->string('mobileNum');
            $table->string('profile')->nullable();
            $table->string('media')->nullable();
            $table->tinyInteger('role')->default(0);
            $table->string('acct_status')->default("Inactive");
            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
