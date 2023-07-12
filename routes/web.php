<?php

use App\Http\Controllers\OCIRSreportController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AccountManageController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('main');
});

Route::get('/main', function () {
    return view('main');
});

Route::get('/registration', function () {
    return view('registration');
});
Route::get('/quickreport', function () {
    return view('ocirs.quick-report');
});
Route::get('/forgotpass', function () {
    return view('forgot-password');
});

//OCIRS
//Route::get('/ocirs_userdashboard',[OCIRSreportController::class,'index']);


Route::get('main/inactive', 'App\Http\Controllers\UserController@inactive')->name('inactive_page');
Route::post('main/checklogin', 'App\Http\Controllers\AuthController@checklogin')->name('checklogin');

Route::get('main/logout', 'App\Http\Controllers\AuthController@logout')->name('logout');
Route::post('/registration', 'App\Http\Controllers\UserController@store')->name('registration');

Route::get('main/home', 'App\Http\Controllers\UserController@home')->name('home');
Route::get('main/report', 'App\Http\Controllers\UserController@report')->name('report');
Route::post('main/report', 'App\Http\Controllers\EmergencyController@store')->name('reportEmergency');
Route::get('main/search', 'App\Http\Controllers\UserController@search')->name('search');
Route::get('main/news', 'App\Http\Controllers\UserController@news')->name('news');
Route::get('main/settings', 'App\Http\Controllers\UserController@settings')->name('setting');
Route::post('main/settings', 'App\Http\Controllers\UserController@update')->name('update');
Route::post('main/profileUpdate', 'App\Http\Controllers\UserController@updateProfile')->name('profilePictureUpdate');
Route::get('/verify', 'App\Http\Controllers\UserController@verify')->name('verify');

//FORGOT PASS
Route::post('/forgotpass', 'App\Http\Controllers\UserController@submitForgotPasswordForm')->name('forgot.password.post');
Route::get('/reset-password/{token}', 'App\Http\Controllers\UserController@showResetPasswordForm')->name('reset.password.get');
Route::post('/reset-password', 'App\Http\Controllers\UserController@submitResetPasswordForm')->name('reset.password.post');

// guest
Route::put('main/guest', 'App\Http\Controllers\UserController@storeguest')->name('storeguestdb');

//Route user
Route::middleware(['auth', 'is_user_verify_email', 'user-role:user'])->group(function () {
    //OCIRS
    Route::get('main/successlogin', 'App\Http\Controllers\AuthController@successlogin')->name('successlogin');
    Route::get('main/ocirs_userdashboard', 'App\Http\Controllers\UserController@ocirs_userdashboard')->name('ocirs_userdashboard');
    Route::get('main/ocirs_useraccount', 'App\Http\Controllers\UserController@ocirs_useraccount')->name('ocirs_useraccount');
    Route::get('main/ocirs_usermessage', 'App\Http\Controllers\UserController@ocirs_usermessage')->name('ocirs_usermessage');
    Route::get('main/ocirs_userfaq', 'App\Http\Controllers\UserController@ocirs_userfaq')->name('ocirs_userfaq');
    Route::get('main/ocirs_userreport', 'App\Http\Controllers\UserController@ocirs_userreport')->name('ocirs_userreport');
    Route::get('main/ocirs_userviewreport', 'App\Http\Controllers\UserController@ocirs_userviewreport')->name('ocirs_userviewreport');
    Route::post('main/ocirs_userreport', 'App\Http\Controllers\OCIRSreportController@addReport')->name('report');
    Route::get('main/ocirs_userdashboard', 'App\Http\Controllers\AuthController@successlogin')->name('ocirs_userdashboard');
    
    Route::get('/notifCount', 'SendNotifController@countNotif')->name('notifCount');
    Route::get('main/ocirs_usersuccessreport', 'App\Http\Controllers\UserController@ocirs_usersuccessreport')->name('ocirs_usersuccessreport');
    Route::get('main/ocirs_userviewreport/{id}', 'App\Http\Controllers\UserDashboardDetailsController@viewDescrip')->name('ocirs_userviewreport');

    //change info
    Route::get('main/ocirs_useraccount', 'App\Http\Controllers\AccountManageController@getUsers')->name('ocirs_useraccount');
    Route::patch('main/ocirs_useraccount/{id}', 'App\Http\Controllers\AccountManageController@update')->name('ocirs_useraccount');

    //chang pass
    //Route::get('main/ocirs_useraccount', 'App\Http\Controllers\AccountManageController@changePassword')->name('ocirs_useraccount');
    //Route::post('main/ocirs_useraccount', 'App\Http\Controllers\AccountManageController@updatePassword')->name('ocirs_useraccount');
    Route::post('/update-password', [App\Http\Controllers\AccountManageController::class, 'updatePassword'])->name('update-password');

    //graph
    Route::get('main/ocirs_userdashboard', 'App\Http\Controllers\chartController@pieChart')->name('ocirs_userdashboard');
    Route::get('main/ocirs_userdashboard', 'App\Http\Controllers\AuthController@brgychart')->name('ocirs_userdashboard');
    Route::get('main/ocirs_userdashboard', 'App\Http\Controllers\AuthController@successlogin')->name('ocirs_userdashboard');
});

Route::get('/markNotif', 'App\Http\Controllers\SendNotifController@markNotification')->name('markNotif');

// Route agencyAdmin
Route::middleware(['auth', 'user-role:agencyadmin'])->group(function () {

    Route::get('main/ocirs_admindashboard', 'App\Http\Controllers\UserController@ocirs_admindashboard')->name('admindashboard');
    Route::get('main/ocirs_adminviewdetails', 'App\Http\Controllers\UserController@ocirs_adminviewdetails')->name('adminview');
    Route::get('main/ocirs_adminuseraccount', 'App\Http\Controllers\UserController@ocirs_adminuseraccount')->name('adminuseraccount');
    Route::get('main/ocirs_adminmessaging', 'App\Http\Controllers\UserController@ocirs_adminmessaging')->name('adminmessaging');
    Route::get('main/ocirs_adminannouncement', 'App\Http\Controllers\UserController@ocirs_adminannouncement')->name('adminannouncement');
    Route::get('main/ocirs_adminarchive', 'App\Http\Controllers\UserController@ocirs_adminarchive')->name('adminarchive');
    Route::get('main/ocirs_admindashboard', 'App\Http\Controllers\OCIRSreportController@admin_showreportlist')->name('admindashboard');
    Route::post('main/ocirs_admindashboard', 'App\Http\Controllers\OCIRSreportController@updateUserInfo')->name('adminuseredit');
    Route::get('main/ocirs_adminuseraccount', 'App\Http\Controllers\TableController@index')->name('tables');
    Route::get('main/ocirs_admineditacc/{user}', 'App\Http\Controllers\TableController@edit')->name('admineditacc');
    Route::put('main/ocirs_admineditacc/{user}', 'App\Http\Controllers\TableController@update')->name('adminupdateacc');
    Route::put('main/ocirs_admindashboardd/{userr}', 'App\Http\Controllers\TableController@archivereport')->name('archivereports');
    Route::put('main/ocirs_adminuseraccount/{user}', 'App\Http\Controllers\TableController@archive')->name('adminarchiveacc');
    Route::put('main/ocirs_admindashboard/{user}', 'App\Http\Controllers\TableController@updateReport')->name('adminupdatereport');
    Route::put('main/ocirs_admindashboarddd/{preport}/{xsd}', 'App\Http\Controllers\TableController@updateReport2')->name('admin_updatereport');
    Route::get('main/ocirs_adminarchive', 'App\Http\Controllers\TableController@getArchivelist')->name('archive');
    Route::put('main/ocirs_adminarchive/{user}', 'App\Http\Controllers\TableController@unarchive')->name('unarchive');
    Route::put('main/ocirs_adminarchive/{users}', 'App\Http\Controllers\TableController@delete')->name('deletearchive');
    Route::put('main/ocirs_adminarchivee/{reportt}', 'App\Http\Controllers\TableController@unarchivereport')->name('unarchivereport');
    Route::put('main/ocirs_adminarchiveee/{reportts}', 'App\Http\Controllers\TableController@deletereport')->name('deletearchivereport');
    Route::put('main/ocirs_adminannouncement/{newss}', 'App\Http\Controllers\TableController@updateNews')->name('updateNewsss');
    Route::post('main/ocirs_adminannouncement/{anno_id}', 'App\Http\Controllers\SendNotifController@sendMessage')->name('admineditanno');
    Route::post('/mark-as-read', 'App\Http\Controllers\SendNotifController@markNotification')->name('markNotification');
    Route::put('main/ocirs_updatefaq/{faq}', 'App\Http\Controllers\TableController@updatefaq')->name('updateFaq');
    Route::get('main/ocirs_adminsetting', 'App\Http\Controllers\SendNotifController@markNotification')->name('admindsetting');
    Route::put('main/ocirs_adminannouncement/', 'App\Http\Controllers\TableController@addfaq')->name('addfaqs');
    Route::get('main/ocirs_admindata', 'App\Http\Controllers\UserController@ocirs_admindata')->name('data');
    // PDF Convert
    Route::get('main/ocirs_admindashboardd/{pdf}', 'App\Http\Controllers\PDFController@pdfGeneration')->name('pdfgenerate');
    Route::get('main/ocirs_pdfview', 'App\Http\Controllers\PDFController@pdfview')->name('viewpdf');

    Route::put('main/ocirs_excel', 'App\Http\Controllers\TableController@exportExcel')->name('data.download');
    Route::post('/adminupdate-password', [App\Http\Controllers\AccountManageController::class, 'adminupdatePassword'])->name('adminupdatepass');


    



});

// Route SuperAdmin
Route::middleware(['auth', 'user-role:superadmin'])->group(function () {
});
