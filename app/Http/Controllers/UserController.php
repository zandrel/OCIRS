<?php

namespace App\Http\Controllers;

use App\Models\report;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\VerifyUser;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;


class UserController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'fName' => 'required',
            'lName' => 'required',
            'sex' => 'required',
            'birthDate' => 'required | before:today',
            'civilStatus' => 'required',
            'street' => 'required',
            'region' => 'required',
            'province' => 'required',
            'municipality' => 'required',
            'barangay' => 'required',
            'username' => 'required',
            'password' => [
                'required',
                'string',
                'min:6',             // must be at least 6 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                // 'regex:/[@$!%*#?&]/', // must contain a special character
            ],
            'email' => 'required|email|unique:users',
            'mobileNum' => 'required|unique:users|regex:/^[0-9]{11}$/',
            'validID' => 'required',
            'selfieValidID' => 'required',
        ]);

        $user_data = new User;
        $user_data->FName = $request->input('fName');
        $user_data->MName = $request->input('mName');
        $user_data->LName = $request->input('lName');
        $user_data->Sex = $request->input('sex');
        $user_data->BirthDate = $request->input('birthDate');
        $user_data->CivilStatus = $request->input('civilStatus');
        $user_data->Street = $request->input('street');
        $user_data->Region = $request->input('region');
        $user_data->Province = $request->input('province');
        $user_data->Municipality = $request->input('municipality');
        $user_data->Barangay = $request->input('barangay');
        $user_data->username = $request->input('username');
        $user_data->password = Hash::make($request->input('password'));
        $user_data->Email = $request->input('email');
        $user_data->MobileNum = $request->input('mobileNum');
        $user_data->id_type = $request->input('id_type');
        if ($request->hasFile('validID')) {
            $destination_path = 'public/images/validID';
            $media = $request->file('validID');
            $media_name = $media->getClientOriginalName();
            $request->file('validID')->storeAs($destination_path, $media_name);
            $user_data['validID'] = $media_name;
        }
        if ($request->hasFile('selfieValidID')) {
            $destination_path = 'public/images/selfieValidID';
            $media = $request->file('selfieValidID');
            $media_name = $media->getClientOriginalName();
            $request->file('selfieValidID')->storeAs($destination_path, $media_name);
            $user_data['selfieValidID'] = $media_name;
        }
        $save = $user_data->save();
        $last_id = $user_data->id;
         
        $token =  $last_id.hash('sha256', Str::random(64));
        $verifyURL = route('verify',['token' =>$token, 'service'=>'Email_Verification']);

    VerifyUser::create([
        'user_id' => $last_id,
        'token' => $token,
      ]);

     $message = 'Dear <b>'.$request->input('fName'). '<b>';
     $message = 'Thanks for signing up with us, We just need you to verify your email address to complete setting up your account.';
 
     $mail_data =[
     'recipient' => $request->input('email'),
     'fromEmail' => $request->input('email'),
     'fromName' => $request->input('username'),
     'subject' => 'Email_Verification',
     'body' =>$message, 
     'actionLink'=> $verifyURL,
     ];

     Mail::send('email-template', $mail_data, function($message) use ($mail_data){
           $message ->to($mail_data['recipient'])
                    ->from($mail_data['fromEmail'], $mail_data['fromName'])
                    ->subject($mail_data['subject']);
     });
     if($save){
        return redirect()->back()->with('success','You need to verify your account.We have sent you an Activation Link,
        please check your gmail');
     }else{
        return redirect()->back()->with('fail','failed to register');
     }
       
    }

    public function verify(Request $request){
   $token = $request->token;
   $verifyUser = VerifyUser::where('token', $token)->first();
   
   if(!is_null($verifyUser )){
     $user_data = $verifyUser->user;
     
     if($verifyUser->user->email_verified == 0){
       User::where('id', $verifyUser->user->id)
       ->update(['email_verified' => 1]);
       
        return redirect('main')->with('info', 'Your email has been verified. You can now login')->with('verifiedEmail',
        $user_data->username);
     } else{
        return redirect('main')->with('info', 'Your email is already been verified. You can now login')->with('verifiedEmail',
        $user_data->username);
     }

   }
    }

    function home()
    {
        return view('home-screen');
    }

    function report()
    {
        return view('report-screen');
    }

    function search()
    {
        return view('searchloc-screen');
    }

    function news()
    {
        return view('news-screen');
    }

    function settings()
    {
        return view('settings-screen');
    }

    //____________________OCIRS
    function ocirs_userdashboard()
    {
        $year = Carbon::now()->year;

        // JANUARY
    $jan = 01;
    $date = \Carbon\Carbon::parse($year."-".$jan."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $january = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // FEBRUARY
    $feb = 02;
    $date = \Carbon\Carbon::parse($year."-".$feb."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $february = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

          // march
    $mar = 03;
    $date = \Carbon\Carbon::parse($year."-".$mar."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $march = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // april
    $apr = 04;
    $date = \Carbon\Carbon::parse($year."-".$apr."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $april = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // may
    $my = 05;
    $date = \Carbon\Carbon::parse($year."-".$my."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $may = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // june
    $jun = 06;
    $date = \Carbon\Carbon::parse($year."-".$jun."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $june = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

                // july
    $jul = 07;
    $date = \Carbon\Carbon::parse($year."-".$jul."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $july = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

    // august
    $augu = 8;
    $date = \Carbon\Carbon::parse($year."-".$augu."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $august = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

    
           // september
    $sept = 9;
    $date = \Carbon\Carbon::parse($year."-".$sept."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $september = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

              // october
    $oct = 10;
    $date = \Carbon\Carbon::parse($year."-".$oct."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $october = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

        // november
    $nov = 11;
    $date = \Carbon\Carbon::parse($year."-".$nov."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $november = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

      // december
      $dec = 12;
      $date = \Carbon\Carbon::parse($year."-".$dec."-01"); // universal truth month's first day is 1
      $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
      $end = $date->endOfMonth()->format('Y-m-d H:i:s');

      $december = DB::table('reports')
      ->whereBetween('created_at', [$start, $end])
      ->count();








    // $data = "";
    // foreach ($chart as $val) {
    //     $data .= "['" . $val->month . "', " . $val->totalcrime . "],";
    // }
    // $chartData = $data;

    // 
    // 

    






    // $brgycharts = DB::select(DB::raw('SELECT * FROM brgycharts'));

    $UgacS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $UgacN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $AnnafunanE = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan East")
    ->where('reportType', '=', "Crime")
    ->count();
    $AnnafunanW = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan West")
    ->where('reportType', '=', "Crime")
    ->count();
    $AtulayanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $AtulayanS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $Bagay = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Bagay")
    ->where('reportType', '=', "Crime")
    ->count();
    $Buntun = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Buntun")
    ->where('reportType', '=', "Crime")
    ->count();
    $Caggay = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caggay")
    ->where('reportType', '=', "Crime")
    ->count();
    $Capatan = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Capatan")
    ->where('reportType', '=', "Crime")
    ->count();
    $CarigN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $CarigS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $CaritanC = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Centro")
    ->where('reportType', '=', "Crime")
    ->count();
    $CaritanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $CaritanS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $CataggamanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Nuevo")
    ->where('reportType', '=', "Crime")
    ->count();
    $CataggamanP = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Pardo")
    ->where('reportType', '=', "Crime")
    ->count();
    $CataggamanV = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Viejo")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 1")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro2 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 2")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro3 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 3")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro4 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 4")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro5 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 5")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro6 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 6")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro7 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 7")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro8 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 8")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro9 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 9")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro10 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 10")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro11 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 11")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro12 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 12")
    ->where('reportType', '=', "Crime")
    ->count();
    $Dadda = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Dadda")
    ->where('reportType', '=', "Crime")
    ->count();
    $GosiN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $GosiS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $LarionA = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Alto")
    ->where('reportType', '=', "Crime")
    ->count();
    $LarionB = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Bajo")
    ->where('reportType', '=', "Crime")
    ->count();
    $Leonarda = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Leonarda")
    ->where('reportType', '=', "Crime")
    ->count();
    $LibagN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $LibagS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $LinaoE = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Crime")
    ->count();
    $LinaoN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Crime")
    ->count();
    $LinaoW = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao West")
    ->where('reportType', '=', "Crime")
    ->count();
    $NambbalanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Nambbalan Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $NamabbalanS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Namabbalan Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $PalluaN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $PalluaS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $Pengue = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pengue")
    ->where('reportType', '=', "Crime")
    ->count();
    $Reyes = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Reyes")
    ->where('reportType', '=', "Crime")
    ->count();
    $SanGabriel = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "San Gabriel")
    ->where('reportType', '=', "Crime")
    ->count();
    $Tagga = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tagga")
    ->where('reportType', '=', "Crime")
    ->count();
    $Tanza = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tanza")
    ->where('reportType', '=', "Crime")
    ->count();

    // INCIDENT

    $UgacS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $UgacN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $AnnafunanE1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan East")
    ->where('reportType', '=', "Incident")
    ->count();
    $AnnafunanW1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan West")
    ->where('reportType', '=', "Incident")
    ->count();
    $AtulayanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $AtulayanS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $Bagay1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Bagay")
    ->where('reportType', '=', "Incident")
    ->count();
    $Buntun1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Buntun")
    ->where('reportType', '=', "Incident")
    ->count();
    $Caggay1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caggay")
    ->where('reportType', '=', "Incident")
    ->count();
    $Capatan1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Capatan")
    ->where('reportType', '=', "Incident")
    ->count();
    $CarigN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $CarigS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $CaritanC1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Centro")
    ->where('reportType', '=', "Incident")
    ->count();
    $CaritanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $CaritanS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $CataggamanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Nuevo")
    ->where('reportType', '=', "Incident")
    ->count();
    $CataggamanP1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Pardo")
    ->where('reportType', '=', "Incident")
    ->count();
    $CataggamanV1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Viejo")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro1q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 1")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro2q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 2")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro3q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 3")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro4q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 4")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro5q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 5")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro6q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 6")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro7q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 7")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro8q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 8")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro9q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 9")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro10q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 10")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro11q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 11")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro12q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 12")
    ->where('reportType', '=', "Incident")
    ->count();
    $Dadda1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Dadda")
    ->where('reportType', '=', "Incident")
    ->count();
    $GosiN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $GosiS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $LarionA1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Alto")
    ->where('reportType', '=', "Incident")
    ->count();
    $LarionB1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Bajo")
    ->where('reportType', '=', "Incident")
    ->count();
    $Leonarda1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Leonarda")
    ->where('reportType', '=', "Incident")
    ->count();
    $LibagN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $LibagS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $LinaoE1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Incident")
    ->count();
    $LinaoN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Incident")
    ->count();
    $LinaoW1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao West")
    ->where('reportType', '=', "Incident")
    ->count();
    $NambbalanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Nambbalan Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $NamabbalanS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Namabbalan Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $PalluaN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $PalluaS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $Pengue1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pengue")
    ->where('reportType', '=', "Incident")
    ->count();
    $Reyes1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Reyes")
    ->where('reportType', '=', "Incident")
    ->count();
    $SanGabriel1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "San Gabriel")
    ->where('reportType', '=', "Incident")
    ->count();
    $Tagga1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tagga")
    ->where('reportType', '=', "Incident")
    ->count();
    $Tanza1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tanza")
    ->where('reportType', '=', "Incident")
    ->count();


    return view('ocirs.user-dashboard', [ 'january' => $january,
    'february' => $february,
    'march' => $march,
    'april' => $april,
    'may' => $may,
    'june' => $june,
    'july' => $july,
    'august' => $august,
    'september' => $september,
    'october' => $october,
    'november' => $november,
    'december' => $december,
    // Crime
    'UgacS' => $UgacS,
    'UgacN' => $UgacN,
    'AnnafunanE' => $AnnafunanE,
    'AnnafunanW' => $AnnafunanW,
    'AtulayanN' => $AtulayanN,
    'AtulayanS' => $AtulayanS,
    'Bagay' => $Bagay,
    'Buntun' => $Buntun,
    'Caggay' => $Caggay,
    'Capatan' => $Capatan,
    'CarigN' => $CarigN,
    'CarigS' => $CarigS,
    'CaritanC' => $CaritanC,
    'CaritanN' => $CaritanN,
    'CaritanS' => $CaritanS,
    'CataggamanN' => $CataggamanN,
    'CataggamanP' => $CataggamanP,
    'CataggamanV' => $CataggamanV,
    'Centro1' => $Centro1,
    'Centro2' => $Centro2,
    'Centro3' => $Centro3,
    'Centro4' => $Centro4,
    'Centro5' => $Centro5,
    'Centro6' => $Centro6,
    'Centro7' => $Centro7,
    'Centro8' => $Centro8,
    'Centro9' => $Centro9,
    'Centro10' => $Centro10,
    'Centro11' => $Centro11,
    'Centro12' => $Centro12,
    'Dadda' => $Dadda,
    'GosiN' => $GosiN,
    'GosiS' => $GosiS,
    'LarionA' => $LarionA,
    'LarionB' => $LarionB,
    'Leonarda' => $Leonarda,
    'LibagN' => $LibagN,
    'LibagS' => $LibagS,
    'LinaoE' => $LinaoE,
    'LinaoN' => $LinaoN,
    'LinaoW' => $LinaoW,
    'NambbalanN' => $NambbalanN,
    'NamabbalanS' => $NamabbalanS,
    'PalluaN' => $PalluaN,
    'PalluaS' => $PalluaS,
    'Pengue' => $Pengue,
    'Reyes' => $Reyes,
    'SanGabriel' => $SanGabriel,
    'Tagga' => $Tagga,
    'Tanza' => $Tanza,

    // INCIDENT
    'UgacS1' => $UgacS1,
    'UgacN1' => $UgacN1,
    'AnnafunanE1' => $AnnafunanE1,
    'AnnafunanW1' => $AnnafunanW1,
    'AtulayanN1' => $AtulayanN1,
    'AtulayanS1' => $AtulayanS1,
    'Bagay1' => $Bagay1,
    'Buntun1' => $Buntun1,
    'Caggay1' => $Caggay1,
    'Capatan1' => $Capatan1,
    'CarigN1' => $CarigN1,
    'CarigS1' => $CarigS1,
    'CaritanC1' => $CaritanC1,
    'CaritanN1' => $CaritanN1,
    'CaritanS1' => $CaritanS1,
    'CataggamanN1' => $CataggamanN1,
    'CataggamanP1' => $CataggamanP1,
    'CataggamanV1' => $CataggamanV1,
    'Centro1q' => $Centro1q,
    'Centro2q' => $Centro2q,
    'Centro3q' => $Centro3q,
    'Centro4q' => $Centro4q,
    'Centro5q' => $Centro5q,
    'Centro6q' => $Centro6q,
    'Centro7q' => $Centro7q,
    'Centro8q' => $Centro8q,
    'Centro9q' => $Centro9q,
    'Centro10q' => $Centro10q,
    'Centro11q' => $Centro11q,
    'Centro12q' => $Centro12q,
    'Dadda1' => $Dadda1,
    'GosiN1' => $GosiN1,
    'GosiS1' => $GosiS1,
    'LarionA1' => $LarionA1,
    'LarionB1' => $LarionB1,
    'Leonarda1' => $Leonarda1,
    'LibagN1' => $LibagN1,
    'LibagS1' => $LibagS1,
    'LinaoE1' => $LinaoE1,
    'LinaoN1' => $LinaoN1,
    'LinaoW1' => $LinaoW1,
    'NambbalanN1' => $NambbalanN1,
    'NamabbalanS1' => $NamabbalanS1,
    'PalluaN1' => $PalluaN1,
    'PalluaS1' => $PalluaS1,
    'Pengue1' => $Pengue1,
    'Reyes1' => $Reyes1,
    'SanGabriel1' => $SanGabriel1,
    'Tagga1' => $Tagga1,
    'Tanza1' => $Tanza1,]);

       
    }
    function ocirs_useraccount()
    {
        return view('ocirs.user-account');
    }
    function ocirs_usermessage()
    {
        return view('ocirs.user-message');
    }
    function ocirs_userfaq()
    {
        $faq = DB::select(DB::raw('SELECT * FROM faq'));
        return view('ocirs.user-faq',['faq' => $faq]);
    }
    function ocirs_userreport()
    {
        return view('ocirs.user-report');
    }
    function ocirs_userviewreport()
    {
        return view('ocirs.user-viewreport');
    }
    function ocirs_usersuccessreport()
    {
        return view('ocirs.user-successreport');
    }

    //ADMIN
    function ocirs_admindashboard()
    {
        return view('ocirs.admin-dashboard');
    }
    function ocirs_adminuseraccount()
    {
        return view('ocirs.admin-useraccount');
    }
    function ocirs_adminmessaging()
    {
        return view('ocirs.admin-messaging');
    }
    function ocirs_adminannouncement()
    {
      

        $year = Carbon::now()->year;

        // JANUARY
    $jan = 01;
    $date = \Carbon\Carbon::parse($year."-".$jan."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $january = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // FEBRUARY
    $feb = 02;
    $date = \Carbon\Carbon::parse($year."-".$feb."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $february = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

          // march
    $mar = 03;
    $date = \Carbon\Carbon::parse($year."-".$mar."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $march = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // april
    $apr = 04;
    $date = \Carbon\Carbon::parse($year."-".$apr."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $april = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // may
    $my = 05;
    $date = \Carbon\Carbon::parse($year."-".$my."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $may = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

           // june
    $jun = 06;
    $date = \Carbon\Carbon::parse($year."-".$jun."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $june = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

                // july
    $jul = 07;
    $date = \Carbon\Carbon::parse($year."-".$jul."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $july = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

    // august
    $augu = 8;
    $date = \Carbon\Carbon::parse($year."-".$augu."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $august = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

    
           // september
    $sept = 9;
    $date = \Carbon\Carbon::parse($year."-".$sept."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $september = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

              // october
    $oct = 10;
    $date = \Carbon\Carbon::parse($year."-".$oct."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $october = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

        // november
    $nov = 11;
    $date = \Carbon\Carbon::parse($year."-".$nov."-01"); // universal truth month's first day is 1
    $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
    $end = $date->endOfMonth()->format('Y-m-d H:i:s');

    $november = DB::table('reports')
    ->whereBetween('created_at', [$start, $end])
    ->count();

      // december
      $dec = 12;
      $date = \Carbon\Carbon::parse($year."-".$dec."-01"); // universal truth month's first day is 1
      $start = $date->startOfMonth()->format('Y-m-d H:i:s'); // 2000-02-01 00:00:00
      $end = $date->endOfMonth()->format('Y-m-d H:i:s');

      $december = DB::table('reports')
      ->whereBetween('created_at', [$start, $end])
      ->count();


    //   Crime
    $UgacS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $UgacN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $AnnafunanE = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan East")
    ->where('reportType', '=', "Crime")
    ->count();
    $AnnafunanW = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan West")
    ->where('reportType', '=', "Crime")
    ->count();
    $AtulayanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $AtulayanS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $Bagay = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Bagay")
    ->where('reportType', '=', "Crime")
    ->count();
    $Buntun = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Buntun")
    ->where('reportType', '=', "Crime")
    ->count();
    $Caggay = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caggay")
    ->where('reportType', '=', "Crime")
    ->count();
    $Capatan = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Capatan")
    ->where('reportType', '=', "Crime")
    ->count();
    $CarigN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $CarigS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $CaritanC = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Centro")
    ->where('reportType', '=', "Crime")
    ->count();
    $CaritanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $CaritanS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $CataggamanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Nuevo")
    ->where('reportType', '=', "Crime")
    ->count();
    $CataggamanP = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Pardo")
    ->where('reportType', '=', "Crime")
    ->count();
    $CataggamanV = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Viejo")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 1")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro2 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 2")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro3 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 3")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro4 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 4")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro5 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 5")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro6 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 6")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro7 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 7")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro8 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 8")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro9 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 9")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro10 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 10")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro11 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 11")
    ->where('reportType', '=', "Crime")
    ->count();
    $Centro12 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 12")
    ->where('reportType', '=', "Crime")
    ->count();
    $Dadda = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Dadda")
    ->where('reportType', '=', "Crime")
    ->count();
    $GosiN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $GosiS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $LarionA = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Alto")
    ->where('reportType', '=', "Crime")
    ->count();
    $LarionB = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Bajo")
    ->where('reportType', '=', "Crime")
    ->count();
    $Leonarda = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Leonarda")
    ->where('reportType', '=', "Crime")
    ->count();
    $LibagN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $LibagS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $LinaoE = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Crime")
    ->count();
    $LinaoN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Crime")
    ->count();
    $LinaoW = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao West")
    ->where('reportType', '=', "Crime")
    ->count();
    $NambbalanN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Nambbalan Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $NamabbalanS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Namabbalan Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $PalluaN = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Norte")
    ->where('reportType', '=', "Crime")
    ->count();
    $PalluaS = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Sur")
    ->where('reportType', '=', "Crime")
    ->count();
    $Pengue = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pengue")
    ->where('reportType', '=', "Crime")
    ->count();
    $Reyes = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Reyes")
    ->where('reportType', '=', "Crime")
    ->count();
    $SanGabriel = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "San Gabriel")
    ->where('reportType', '=', "Crime")
    ->count();
    $Tagga = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tagga")
    ->where('reportType', '=', "Crime")
    ->count();
    $Tanza = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tanza")
    ->where('reportType', '=', "Crime")
    ->count();

    // INCIDENT

    $UgacS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $UgacN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Ugac Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $AnnafunanE1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan East")
    ->where('reportType', '=', "Incident")
    ->count();
    $AnnafunanW1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Annafunan West")
    ->where('reportType', '=', "Incident")
    ->count();
    $AtulayanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $AtulayanS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Atulayan Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $Bagay1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Bagay")
    ->where('reportType', '=', "Incident")
    ->count();
    $Buntun1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Buntun")
    ->where('reportType', '=', "Incident")
    ->count();
    $Caggay1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caggay")
    ->where('reportType', '=', "Incident")
    ->count();
    $Capatan1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Capatan")
    ->where('reportType', '=', "Incident")
    ->count();
    $CarigN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $CarigS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Carig Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $CaritanC1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Centro")
    ->where('reportType', '=', "Incident")
    ->count();
    $CaritanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $CaritanS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Caritan Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $CataggamanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Nuevo")
    ->where('reportType', '=', "Incident")
    ->count();
    $CataggamanP1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Pardo")
    ->where('reportType', '=', "Incident")
    ->count();
    $CataggamanV1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Cataggaman Viejo")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro1q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 1")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro2q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 2")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro3q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 3")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro4q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 4")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro5q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 5")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro6q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 6")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro7q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 7")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro8q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 8")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro9q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 9")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro10q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 10")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro11q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 11")
    ->where('reportType', '=', "Incident")
    ->count();
    $Centro12q = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Centro 12")
    ->where('reportType', '=', "Incident")
    ->count();
    $Dadda1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Dadda")
    ->where('reportType', '=', "Incident")
    ->count();
    $GosiN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $GosiS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Gosi Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $LarionA1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Alto")
    ->where('reportType', '=', "Incident")
    ->count();
    $LarionB1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Larion Bajo")
    ->where('reportType', '=', "Incident")
    ->count();
    $Leonarda1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Leonarda")
    ->where('reportType', '=', "Incident")
    ->count();
    $LibagN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $LibagS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Libag Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $LinaoE1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Incident")
    ->count();
    $LinaoN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao East")
    ->where('reportType', '=', "Incident")
    ->count();
    $LinaoW1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Linao West")
    ->where('reportType', '=', "Incident")
    ->count();
    $NambbalanN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Nambbalan Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $NamabbalanS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Namabbalan Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $PalluaN1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Norte")
    ->where('reportType', '=', "Incident")
    ->count();
    $PalluaS1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pallua Sur")
    ->where('reportType', '=', "Incident")
    ->count();
    $Pengue1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Pengue")
    ->where('reportType', '=', "Incident")
    ->count();
    $Reyes1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Reyes")
    ->where('reportType', '=', "Incident")
    ->count();
    $SanGabriel1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "San Gabriel")
    ->where('reportType', '=', "Incident")
    ->count();
    $Tagga1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tagga")
    ->where('reportType', '=', "Incident")
    ->count();
    $Tanza1 = DB::table('reports')
    ->select('*')
    ->where('repoort_brgy', '=', "Tanza")
    ->where('reportType', '=', "Incident")
    ->count();

        $news1 = DB::table('news')->select('*')
        ->where('news_id', '=', 1)
        ->get();

        $news2 = DB::table('news')->select('*')
        ->where('news_id', '=', 2)
        ->get();

        $news3 = DB::table('news')->select('*')
        ->where('news_id', '=', 3)
        ->get();


        $announcement = DB::select('SELECT * FROM announcements');
        $faq = DB::select('SELECT * FROM faq');
        return view('ocirs.admin-announcement', ['faq' => $faq,'news1' => $news1,'news2' => $news2,'news3' => $news3
        ,'announcements' => $announcement,
        'january' => $january,
        'february' => $february,
        'march' => $march,
        'april' => $april,
        'may' => $may,
        'june' => $june,
        'july' => $july,
        'august' => $august,
        'september' => $september,
        'october' => $october,
        'november' => $november,
        'december' => $december,
        // Crime
           'UgacS' => $UgacS,
           'UgacN' => $UgacN,
           'AnnafunanE' => $AnnafunanE,
           'AnnafunanW' => $AnnafunanW,
           'AtulayanN' => $AtulayanN,
           'AtulayanS' => $AtulayanS,
           'Bagay' => $Bagay,
           'Buntun' => $Buntun,
           'Caggay' => $Caggay,
           'Capatan' => $Capatan,
           'CarigN' => $CarigN,
           'CarigS' => $CarigS,
           'CaritanC' => $CaritanC,
           'CaritanN' => $CaritanN,
           'CaritanS' => $CaritanS,
           'CataggamanN' => $CataggamanN,
           'CataggamanP' => $CataggamanP,
           'CataggamanV' => $CataggamanV,
           'Centro1' => $Centro1,
           'Centro2' => $Centro2,
           'Centro3' => $Centro3,
           'Centro4' => $Centro4,
           'Centro5' => $Centro5,
           'Centro6' => $Centro6,
           'Centro7' => $Centro7,
           'Centro8' => $Centro8,
           'Centro9' => $Centro9,
           'Centro10' => $Centro10,
           'Centro11' => $Centro11,
           'Centro12' => $Centro12,
           'Dadda' => $Dadda,
           'GosiN' => $GosiN,
           'GosiS' => $GosiS,
           'LarionA' => $LarionA,
           'LarionB' => $LarionB,
           'Leonarda' => $Leonarda,
           'LibagN' => $LibagN,
           'LibagS' => $LibagS,
           'LinaoE' => $LinaoE,
           'LinaoN' => $LinaoN,
           'LinaoW' => $LinaoW,
           'NambbalanN' => $NambbalanN,
           'NamabbalanS' => $NamabbalanS,
           'PalluaN' => $PalluaN,
           'PalluaS' => $PalluaS,
           'Pengue' => $Pengue,
           'Reyes' => $Reyes,
           'SanGabriel' => $SanGabriel,
           'Tagga' => $Tagga,
           'Tanza' => $Tanza,
   
           // INCIDENT
           'UgacS1' => $UgacS1,
           'UgacN1' => $UgacN1,
           'AnnafunanE1' => $AnnafunanE1,
           'AnnafunanW1' => $AnnafunanW1,
           'AtulayanN1' => $AtulayanN1,
           'AtulayanS1' => $AtulayanS1,
           'Bagay1' => $Bagay1,
           'Buntun1' => $Buntun1,
           'Caggay1' => $Caggay1,
           'Capatan1' => $Capatan1,
           'CarigN1' => $CarigN1,
           'CarigS1' => $CarigS1,
           'CaritanC1' => $CaritanC1,
           'CaritanN1' => $CaritanN1,
           'CaritanS1' => $CaritanS1,
           'CataggamanN1' => $CataggamanN1,
           'CataggamanP1' => $CataggamanP1,
           'CataggamanV1' => $CataggamanV1,
           'Centro1q' => $Centro1q,
           'Centro2q' => $Centro2q,
           'Centro3q' => $Centro3q,
           'Centro4q' => $Centro4q,
           'Centro5q' => $Centro5q,
           'Centro6q' => $Centro6q,
           'Centro7q' => $Centro7q,
           'Centro8q' => $Centro8q,
           'Centro9q' => $Centro9q,
           'Centro10q' => $Centro10q,
           'Centro11q' => $Centro11q,
           'Centro12q' => $Centro12q,
           'Dadda1' => $Dadda1,
           'GosiN1' => $GosiN1,
           'GosiS1' => $GosiS1,
           'LarionA1' => $LarionA1,
           'LarionB1' => $LarionB1,
           'Leonarda1' => $Leonarda1,
           'LibagN1' => $LibagN1,
           'LibagS1' => $LibagS1,
           'LinaoE1' => $LinaoE1,
           'LinaoN1' => $LinaoN1,
           'LinaoW1' => $LinaoW1,
           'NambbalanN1' => $NambbalanN1,
           'NamabbalanS1' => $NamabbalanS1,
           'PalluaN1' => $PalluaN1,
           'PalluaS1' => $PalluaS1,
           'Pengue1' => $Pengue1,
           'Reyes1' => $Reyes1,
           'SanGabriel1' => $SanGabriel1,
           'Tagga1' => $Tagga1,
           'Tanza1' => $Tanza1,

    
    ]);
    }
    function ocirs_adminarchive()
    {
        return view('ocirs.admin-archive');
    }
    function ocirs_admindata()
    {
        
        $UgacS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $UgacN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $AnnafunanE = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan East")
        ->where('reportType', '=', "Crime")
        ->count();
        $AnnafunanW = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan West")
        ->where('reportType', '=', "Crime")
        ->count();
        $AtulayanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $AtulayanS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $Bagay = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Bagay")
        ->where('reportType', '=', "Crime")
        ->count();
        $Buntun = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Buntun")
        ->where('reportType', '=', "Crime")
        ->count();
        $Caggay = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caggay")
        ->where('reportType', '=', "Crime")
        ->count();
        $Capatan = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Capatan")
        ->where('reportType', '=', "Crime")
        ->count();
        $CarigN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $CarigS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $CaritanC = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Centro")
        ->where('reportType', '=', "Crime")
        ->count();
        $CaritanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $CaritanS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $CataggamanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Nuevo")
        ->where('reportType', '=', "Crime")
        ->count();
        $CataggamanP = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Pardo")
        ->where('reportType', '=', "Crime")
        ->count();
        $CataggamanV = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Viejo")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 1")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro2 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 2")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro3 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 3")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro4 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 4")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro5 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 5")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro6 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 6")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro7 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 7")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro8 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 8")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro9 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 9")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro10 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 10")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro11 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 11")
        ->where('reportType', '=', "Crime")
        ->count();
        $Centro12 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 12")
        ->where('reportType', '=', "Crime")
        ->count();
        $Dadda = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Dadda")
        ->where('reportType', '=', "Crime")
        ->count();
        $GosiN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $GosiS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $LarionA = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Alto")
        ->where('reportType', '=', "Crime")
        ->count();
        $LarionB = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Bajo")
        ->where('reportType', '=', "Crime")
        ->count();
        $Leonarda = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Leonarda")
        ->where('reportType', '=', "Crime")
        ->count();
        $LibagN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $LibagS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $LinaoE = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Crime")
        ->count();
        $LinaoN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Crime")
        ->count();
        $LinaoW = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao West")
        ->where('reportType', '=', "Crime")
        ->count();
        $NambbalanN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Nambbalan Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $NamabbalanS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Namabbalan Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $PalluaN = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Norte")
        ->where('reportType', '=', "Crime")
        ->count();
        $PalluaS = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Sur")
        ->where('reportType', '=', "Crime")
        ->count();
        $Pengue = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pengue")
        ->where('reportType', '=', "Crime")
        ->count();
        $Reyes = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Reyes")
        ->where('reportType', '=', "Crime")
        ->count();
        $SanGabriel = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "San Gabriel")
        ->where('reportType', '=', "Crime")
        ->count();
        $Tagga = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tagga")
        ->where('reportType', '=', "Crime")
        ->count();
        $Tanza = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tanza")
        ->where('reportType', '=', "Crime")
        ->count();

        // INCIDENT

        $UgacS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $UgacN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $AnnafunanE1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan East")
        ->where('reportType', '=', "Incident")
        ->count();
        $AnnafunanW1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan West")
        ->where('reportType', '=', "Incident")
        ->count();
        $AtulayanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $AtulayanS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $Bagay1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Bagay")
        ->where('reportType', '=', "Incident")
        ->count();
        $Buntun1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Buntun")
        ->where('reportType', '=', "Incident")
        ->count();
        $Caggay1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caggay")
        ->where('reportType', '=', "Incident")
        ->count();
        $Capatan1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Capatan")
        ->where('reportType', '=', "Incident")
        ->count();
        $CarigN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $CarigS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $CaritanC1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Centro")
        ->where('reportType', '=', "Incident")
        ->count();
        $CaritanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $CaritanS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $CataggamanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Nuevo")
        ->where('reportType', '=', "Incident")
        ->count();
        $CataggamanP1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Pardo")
        ->where('reportType', '=', "Incident")
        ->count();
        $CataggamanV1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Viejo")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro1q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 1")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro2q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 2")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro3q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 3")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro4q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 4")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro5q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 5")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro6q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 6")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro7q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 7")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro8q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 8")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro9q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 9")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro10q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 10")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro11q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 11")
        ->where('reportType', '=', "Incident")
        ->count();
        $Centro12q = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 12")
        ->where('reportType', '=', "Incident")
        ->count();
        $Dadda1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Dadda")
        ->where('reportType', '=', "Incident")
        ->count();
        $GosiN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $GosiS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $LarionA1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Alto")
        ->where('reportType', '=', "Incident")
        ->count();
        $LarionB1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Bajo")
        ->where('reportType', '=', "Incident")
        ->count();
        $Leonarda1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Leonarda")
        ->where('reportType', '=', "Incident")
        ->count();
        $LibagN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $LibagS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $LinaoE1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Incident")
        ->count();
        $LinaoN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")
        ->where('reportType', '=', "Incident")
        ->count();
        $LinaoW1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao West")
        ->where('reportType', '=', "Incident")
        ->count();
        $NambbalanN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Nambbalan Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $NamabbalanS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Namabbalan Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $PalluaN1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Norte")
        ->where('reportType', '=', "Incident")
        ->count();
        $PalluaS1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Sur")
        ->where('reportType', '=', "Incident")
        ->count();
        $Pengue1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pengue")
        ->where('reportType', '=', "Incident")
        ->count();
        $Reyes1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Reyes")
        ->where('reportType', '=', "Incident")
        ->count();
        $SanGabriel1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "San Gabriel")
        ->where('reportType', '=', "Incident")
        ->count();
        $Tagga1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tagga")
        ->where('reportType', '=', "Incident")
        ->count();
        $Tanza1 = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tanza")
        ->where('reportType', '=', "Incident")
        ->count();

        // TOTAL CRIME N INCIDENT
        $UgacSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Sur")

        ->count();
        $UgacNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Ugac Norte")

        ->count();
        $AnnafunanEt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan East")

        ->count();
        $AnnafunanWt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Annafunan West")

        ->count();
        $AtulayanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Norte")

        ->count();
        $AtulayanSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Atulayan Sur")

        ->count();
        $Bagayt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Bagay")

        ->count();
        $Buntunt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Buntun")

        ->count();
        $Caggayt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caggay")

        ->count();
        $Capatant = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Capatan")

        ->count();
        $CarigNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Norte")

        ->count();
        $CarigSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Carig Sur")

        ->count();
        $CaritanCt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Centro")

        ->count();
        $CaritanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Norte")

        ->count();
        $CaritanSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Caritan Sur")

        ->count();
        $CataggamanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Nuevo")

        ->count();
        $CataggamanPt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Pardo")

        ->count();
        $CataggamanVt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Cataggaman Viejo")

        ->count();
        $Centro1t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 1")

        ->count();
        $Centro2t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 2")

        ->count();
        $Centro3t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 3")

        ->count();
        $Centro4t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 4")

        ->count();
        $Centro5t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 5")

        ->count();
        $Centro6t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 6")

        ->count();
        $Centro7t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 7")

        ->count();
        $Centro8t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 8")
        ->count();
        $Centro9t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 9")

        ->count();
        $Centro10t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 10")

        ->count();
        $Centro11t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 11")

        ->count();
        $Centro12t = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Centro 12")

        ->count();
        $Daddat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Dadda")

        ->count();
        $GosiNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Norte")

        ->count();
        $GosiSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Gosi Sur")

        ->count();
        $LarionAt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Alto")

        ->count();
        $LarionBt= DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Larion Bajo")

        ->count();
        $Leonardat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Leonarda")

        ->count();
        $LibagNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Norte")

        ->count();
        $LibagSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Libag Sur")

        ->count();
        $LinaoEt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")

        ->count();
        $LinaoNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao East")

        ->count();
        $LinaoWt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Linao West")

        ->count();
        $NambbalanNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Nambbalan Norte")

        ->count();
        $NamabbalanSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Namabbalan Sur")

        ->count();
        $PalluaNt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Norte")

        ->count();
        $PalluaSt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pallua Sur")

        ->count();
        $Penguet = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Pengue")

        ->count();
        $Reyest = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Reyes")

        ->count();
        $SanGabrielt = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "San Gabriel")

        ->count();
        $Taggat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tagga")

        ->count();
        $Tanzat = DB::table('reports')
        ->select('*')
        ->where('repoort_brgy', '=', "Tanza")
        ->count();



        return view('ocirs.admin-data',[
             // Crime
        'UgacS' => $UgacS,
        'UgacN' => $UgacN,
        'AnnafunanE' => $AnnafunanE,
        'AnnafunanW' => $AnnafunanW,
        'AtulayanN' => $AtulayanN,
        'AtulayanS' => $AtulayanS,
        'Bagay' => $Bagay,
        'Buntun' => $Buntun,
        'Caggay' => $Caggay,
        'Capatan' => $Capatan,
        'CarigN' => $CarigN,
        'CarigS' => $CarigS,
        'CaritanC' => $CaritanC,
        'CaritanN' => $CaritanN,
        'CaritanS' => $CaritanS,
        'CataggamanN' => $CataggamanN,
        'CataggamanP' => $CataggamanP,
        'CataggamanV' => $CataggamanV,
        'Centro1' => $Centro1,
        'Centro2' => $Centro2,
        'Centro3' => $Centro3,
        'Centro4' => $Centro4,
        'Centro5' => $Centro5,
        'Centro6' => $Centro6,
        'Centro7' => $Centro7,
        'Centro8' => $Centro8,
        'Centro9' => $Centro9,
        'Centro10' => $Centro10,
        'Centro11' => $Centro11,
        'Centro12' => $Centro12,
        'Dadda' => $Dadda,
        'GosiN' => $GosiN,
        'GosiS' => $GosiS,
        'LarionA' => $LarionA,
        'LarionB' => $LarionB,
        'Leonarda' => $Leonarda,
        'LibagN' => $LibagN,
        'LibagS' => $LibagS,
        'LinaoE' => $LinaoE,
        'LinaoN' => $LinaoN,
        'LinaoW' => $LinaoW,
        'NambbalanN' => $NambbalanN,
        'NamabbalanS' => $NamabbalanS,
        'PalluaN' => $PalluaN,
        'PalluaS' => $PalluaS,
        'Pengue' => $Pengue,
        'Reyes' => $Reyes,
        'SanGabriel' => $SanGabriel,
        'Tagga' => $Tagga,
        'Tanza' => $Tanza,

        // INCIDENT
        'UgacS1' => $UgacS1,
        'UgacN1' => $UgacN1,
        'AnnafunanE1' => $AnnafunanE1,
        'AnnafunanW1' => $AnnafunanW1,
        'AtulayanN1' => $AtulayanN1,
        'AtulayanS1' => $AtulayanS1,
        'Bagay1' => $Bagay1,
        'Buntun1' => $Buntun1,
        'Caggay1' => $Caggay1,
        'Capatan1' => $Capatan1,
        'CarigN1' => $CarigN1,
        'CarigS1' => $CarigS1,
        'CaritanC1' => $CaritanC1,
        'CaritanN1' => $CaritanN1,
        'CaritanS1' => $CaritanS1,
        'CataggamanN1' => $CataggamanN1,
        'CataggamanP1' => $CataggamanP1,
        'CataggamanV1' => $CataggamanV1,
        'Centro1q' => $Centro1q,
        'Centro2q' => $Centro2q,
        'Centro3q' => $Centro3q,
        'Centro4q' => $Centro4q,
        'Centro5q' => $Centro5q,
        'Centro6q' => $Centro6q,
        'Centro7q' => $Centro7q,
        'Centro8q' => $Centro8q,
        'Centro9q' => $Centro9q,
        'Centro10q' => $Centro10q,
        'Centro11q' => $Centro11q,
        'Centro12q' => $Centro12q,
        'Dadda1' => $Dadda1,
        'GosiN1' => $GosiN1,
        'GosiS1' => $GosiS1,
        'LarionA1' => $LarionA1,
        'LarionB1' => $LarionB1,
        'Leonarda1' => $Leonarda1,
        'LibagN1' => $LibagN1,
        'LibagS1' => $LibagS1,
        'LinaoE1' => $LinaoE1,
        'LinaoN1' => $LinaoN1,
        'LinaoW1' => $LinaoW1,
        'NambbalanN1' => $NambbalanN1,
        'NamabbalanS1' => $NamabbalanS1,
        'PalluaN1' => $PalluaN1,
        'PalluaS1' => $PalluaS1,
        'Pengue1' => $Pengue1,
        'Reyes1' => $Reyes1,
        'SanGabriel1' => $SanGabriel1,
        'Tagga1' => $Tagga1,
        'Tanza1' => $Tanza1,

                 // TOTAL 
                 'UgacSt' => $UgacSt,
                 'UgacNt' => $UgacNt,
                 'AnnafunanEt' => $AnnafunanEt,
                 'AnnafunanWt' => $AnnafunanWt,
                 'AtulayanNt' => $AtulayanNt,
                 'AtulayanSt' => $AtulayanSt,
                 'Bagayt' => $Bagayt,
                 'Buntunt' => $Buntunt,
                 'Caggayt' => $Caggayt,
                 'Capatant' => $Capatant,
                 'CarigNt' => $CarigNt,
                 'CarigSt' => $CarigSt,
                 'CaritanCt' => $CaritanCt,
                 'CaritanNt' => $CaritanNt,
                 'CaritanSt' => $CaritanSt,
                 'CataggamanNt' => $CataggamanNt,
                 'CataggamanPt' => $CataggamanPt,
                 'CataggamanVt' => $CataggamanVt,
                 'Centro1t' => $Centro1t,
                 'Centro2t' => $Centro2t,
                 'Centro3t' => $Centro3t,
                 'Centro4t' => $Centro4t,
                 'Centro5t' => $Centro5t,
                 'Centro6t' => $Centro6t,
                 'Centro7t' => $Centro7t,
                 'Centro8t' => $Centro8t,
                 'Centro9t' => $Centro9t,
                 'Centro10t' => $Centro10t,
                 'Centro11t' => $Centro11t,
                 'Centro12t' => $Centro12t,
                 'Daddat' => $Daddat,
                 'GosiNt' => $GosiNt,
                 'GosiSt' => $GosiSt,
                 'LarionAt' => $LarionAt,
                 'LarionBt' => $LarionBt,
                 'Leonardat' => $Leonardat,
                 'LibagNt' => $LibagNt,
                 'LibagSt' => $LibagSt,
                 'LinaoEt' => $LinaoEt,
                 'LinaoNt' => $LinaoNt,
                 'LinaoWt' => $LinaoWt,
                 'NambbalanNt' => $NambbalanNt,
                 'NamabbalanSt' => $NamabbalanSt,
                 'PalluaNt' => $PalluaNt,
                 'PalluaSt' => $PalluaSt,
                 'Penguet' => $Penguet,
                 'Reyest' => $Reyest,
                 'SanGabrielt' => $SanGabrielt,
                 'Taggat' => $Taggat,
                 'Tanzat' => $Tanzat,

        ]);
    }
    function ocirs_adminviewdetails()
    {
        return view('ocirs.admin-viewdetails');
    }
    function inactive()
    {
        return view('ocirs.inactive');
    }
    function ocirs_quickreport()
    {
        return view('ocirs.quick-report');
    }
    function ocirs_adminsetting()
    {
        return view('ocirs.admin-setting');
    }


    // FORGOT PASSWORD
    
    public function submitForgotPasswordForm (Request $request){
        $request->validate([
            'email'=>'required|email|exists:users,email'
        ]);

        $token = Str::random(64);

        DB::table('password_resets')->insert([
            'email'=>$request->input('email'),
            'token'=>$token,
            'created_at'=>Carbon::now()
        ]);

        Mail::send('forgetPassword',['token'=>$token],function($message) use($request) {
            $message->to($request->input('email'));
            $message->subject('Reset Password');
        });
        return back()->with('message', 'We have sent you a reset password link please check your email');
    }

    public function showResetPasswordForm ($token) {
        return view ('forgetpasswordLink', ['token'=>$token]);

    }

    public function submitResetPasswordForm (Request $request){
        $request->validate([
            'email'=>'required|email|exists:users,email',
            'password' => [
                'required',
                'string',
                'min:6',
                'confirmed',             
                'regex:/[a-z]/',      
                'regex:/[A-Z]/',      
                'regex:/[0-9]/',                      
            ],
            'password_confirmation' =>'required'
        ]);

        $password_reset_request = DB::table('password_resets')
        ->where('email',$request->input('email'))
        ->where('token',$request->token)
        ->first();

        if (!$password_reset_request) {
            return back () ->with('error', 'Invalid Token!');
        }

        User::where('email',$request->input('email'))
        ->update(['password'=>Hash::make($request->input('password'))] );

        DB::table('password_resets')
        ->where('email',$request->input('email'))
        ->delete();

        return redirect('/main')->with('message','Your password has been successfully updated! ');

    }

    public function storeguest (Request $request){  //functioon for guest user (adding information and report)
        $request->validate([    //validate guest user input
            'fName' => 'required',
            'lName' => 'required',
            'mobileNum' => 'required|unique:users|regex:/^[0-9]{11}$/',
            'narrative' => 'required',
            'reportType' => 'required',
            'date' => 'required',
            'time' => 'required',
            'media' => 'required',
            'reportstatus' => '',
            'location' => '',

        ]);
        $user_data = new User;  //create a new record for the guest
        $user_data->fName = $request->input('fName');
        $user_data->lName = $request->input('lName');
        $user_data->mobileNum = $request->input('mobileNum');
        $user_data->isGuest = "Yes";
        $save = $user_data->save();
        $last_id = $user_data->id;  //save the id of the guest user

        $report_data = new report();    // create a report
        $report_data->id = Str::random(6);
        $report_data->narrative = $request->input('narrative');
        $report_data->reportType = $request->input('reportType');
        $report_data->date = $request->input('date');
        $report_data->time = $request->input('time');
        $report_data->media = $request->input('media');
        $report_data->location = $request->input('location');
        
        $report_data->reportstatus = "Validating";
        $report_data->report_id =  $last_id;    //set the id of the user as a foreign key of the report
        $report_data->save();   //save the information

        return redirect('main')->with('success', 'Reported Successfully.'); 

        // 
        // DB::beginTransaction();
         

        // $update_user = User::where('news_id', )->create([
        //     'newsTitle' => $request->newsTitle,
        //     'newsDescrip' => $request->newsDescrip,
        //     'media' => $media_name
        // ]);
        
        // DB::commit();


        // DB::table('users')->insert([
        //     'fName' => $request->input('fName'),
        //     'lName' => $request->input('lName'),
        //     'mobileNum' => $request->input('mobileNum'),
        // ]);
    }


}
