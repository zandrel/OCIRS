<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Carbon;
use App\Models\report;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    //function to authenticate user login

    function checklogin(Request $request)
    {
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'

        ]);

        $user_data = array(
            'username' => $request->get('username'),
            'password' => $request->get('password')
        );

        $remember = $request->input('remember');

        if (Auth::attempt($user_data, $remember)) {

            if (auth()->user()->acct_status == 'Verified') {
                if (auth()->user()->role == 'agencyadmin') {

              

                    return redirect()->route('admindashboard');
                } else if (auth()->user()->role == 'superadmin') {
                    return redirect()->route('');
                } else {
                   
                    
                    User::whereId(auth()->user()->id)->update([
                        'last_login_time' => now()
                    ]);

                    return redirect('main/successlogin');
                }
            } else {
                Auth::logout();
                return redirect()->route('inactive_page');
            }


        } else {
            return back()->with('error', 'Wrong Login Details');
        }



    }

    //function when login is successful

    function successlogin()
    {
        // 
        //   $visitor = Visitor::select(
        //                 DB::raw("year(created_at) as year"),
        //                 DB::raw("SUM(click) as total_click"),
        //                 DB::raw("SUM(viewer) as total_viewer")) 
        //             ->orderBy(DB::raw("YEAR(created_at)"))
        //             ->groupBy(DB::raw("YEAR(created_at)"))
        //             ->get();
  
        // $result[] = ['Year','Click','Viewer'];
        // foreach ($visitor as $key => $value) {
        //     $result[++$key] = [$value->year, (int)$value->total_click, (int)$value->total_viewer];
        // }
  
        // return view('google-line-chart')
        //         ->with('visitor',json_encode($result));
                // 
        //graph
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

        $user_data = Auth::user()->id;
        $reports = DB::table('reports')->select('*')->where('report_id', '=', $user_data)->get();
        $news = DB::select('SELECT * FROM news');
        $announcements = DB::select('SELECT * FROM announcements');
        $users = DB::select('SELECT * FROM users');

        $dnews1 = DB::table('news')->select('*')->where('news_id', '=', 1 )->get();
        $dnews2 = DB::table('news')->select('*')->where('news_id', '=', 2 )->get();
        $dnews3 = DB::table('news')->select('*')->where('news_id', '=', 3 )->get();

        return view('ocirs.user-dashboard', ['dnews1' => $dnews1,'dnews2' => $dnews2,'dnews3' => $dnews3,'reports' => $reports, 'news' => $news, 'announcements' => $announcements, 'users' => $users, 
    
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

    //function to logout user

    function logout()
    {
        Auth::logout();
        return redirect('/main');
    }

    function index()
    {
        $user_data = User::all();
        return response()->json($user_data);
    }
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $input = $request->all();
        $user->fill($input)->save();
        return redirect('main/ocirs_useraccount');
    }
}
