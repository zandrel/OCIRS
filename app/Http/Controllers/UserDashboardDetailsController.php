<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserDashboardDetailsController extends Controller
{
    public function newsList()
    {
        $news = DB::select('SELECT * FROM news');
        return view('ocirs.user-dashboard', ['reports' => $news]);
    }
    public function viewDescrip($id)
    {
        $reportDescrip = DB::table('reports')->select('*')->where('id', '=', $id)->get();
        return view('ocirs.user-viewreport', compact('reportDescrip'));
    }
}
