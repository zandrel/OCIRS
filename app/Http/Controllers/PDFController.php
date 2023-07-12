<?php

namespace App\Http\Controllers;
use PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\report;
use App\Models\User;
class PDFController extends Controller

{
    //
    public function pdfGeneration($id){

      PDF::setOptions([
            'dpi' => 150,
            'defaultFont' => 'Cursive',
            'fontHeightRatio' => 1,
            'isPhpEnabled' => true,  
        ]);
        

        $listResolvee = DB::table('reports')
            ->join('users', 'reports.report_id', '=', 'users.id')
            ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mName', 'users.mobileNum','users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',
            'users.qualifier', 'users.nickname','users.sex','users.civilStatus', 'users.birthDate','users.street2','users.barangay2','users.municipality2', 'users.province2','users.highesteduc',
            'users.occupation', 'users.email','users.placeofbirth','users.homephone','users.citizenship','users.age','users.sitio','users.sitio2','users.id_type') 
            ->where('reports.id', '=', $id)
            ->first();


            
        $pdf_view = PDF::loadView('ocirs.pdf_convert',['listResolvee' => $listResolvee]);
        return $pdf_view -> stream('report.pdf');
    }

    public function pdfview(){
        return view('ocirs.pdf_view');
    }
}



  

        // $listResolvee = DB::table('reports')->where('report_id', '=', $id)->get();

        //  $listResolvee = DB::table('reports')
        //  ->where('report_id', '=', $id)
        //  ->first();
         
        //  view()->share('listResolvee', $listResolvee);
            //  $listResolvee = User::where('id', $id->id)->first();