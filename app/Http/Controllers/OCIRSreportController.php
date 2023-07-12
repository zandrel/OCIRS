<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\report;
use Illuminate\Support\Str;
use App\Models\User;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use Pusher\Pusher;
use App\Models\notifications;
use App\Events\NewNotification;

class OCIRSreportController extends Controller

{
    
    public function addReport(Request $request, $notifications = null) //functioon to add a report
    {
        $request->validate([ //validating input by the uuser
            'report_id' => 'required',
            'narrative' => 'required',
            'reportType' => 'required',
            'date' => 'required',
            'time' => 'required',
            'media' => '',
            'reportstatus' => '',
            'location' => '',
        ]);
        $report = new report;
        $report->id = Str::random(6);
        $report->report_id = $request->input('report_id');
        $report->narrative = $request->input('narrative');
        $report->reportType = $request->input('reportType');
        $report->date = $request->input('date');
        $report->time = $request->input('time');
        $report->reportstatus = $request->input('reportstatus');
        $report->location = $request->input('location');

        if ($request->hasFile('media')) { //if users add a media
            $destination_path = 'public/image/Reported_Files'; //path where the media will be save
            $media = $request->file('media');
            $media_name = $media->getClientOriginalName();
            $path = $request->file('media')->storeAs($destination_path, $media_name);
            $report['media'] = $media_name;
        }
        $report->save();


    $users = User::where('role', '1')->get();   
    foreach($users as $user) {
    $notification = new notifications();
    $notification->user_id = $user->id;
    $notification->title = 'New Report Submitted';
    $notification->message = 'A new report has been submitted by user ' . auth()->user()->fName;
    $notification->save();
    }
    $options = array(
        'cluster' => 'ap1',
        'encrypted' => true
    );

    $pusher = new Pusher(   //sending pusher notification
        env('PUSHER_APP_KEY'),
        env('PUSHER_APP_SECRET'),
        env('PUSHER_APP_ID'),
        $options
    );
    $pusher->trigger('NewNotification', 'send-notif', $notification);  //trigger for notification

        return view('ocirs.user-successreport');
    }

    

    public function reportList()
    {

        $news = DB::select('SELECT * FROM news');
        $announcements = DB::select('SELECT * FROM announcements');
        return view('ocirs.user-dashboard', ['news' => $news, 'announcements' => $announcements]);
    }

    public function admin_showreportlist()  //funtion in retrieving report from the database
    {

        $listValidation = DB::table('reports') //query for validation reports
            ->join('users', 'reports.report_id', '=', 'users.id')
            ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mobileNum','users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',  )
            ->where('reports.reportstatus', '=', "Validating")
            ->where('report_archive_status', '=', 'No')
            ->get();

        $listDispatch = DB::table('reports') //query for dispatch reports
            ->join('users', 'reports.report_id', '=', 'users.id')
             ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mobileNum','users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',  )
            ->where('reports.reportstatus', '=', "Dispatched")
            ->where('report_archive_status', '=', 'No')
            ->get();

        $listProcessing = DB::table('reports') //query for processing reports
            ->join('users', 'reports.report_id', '=', 'users.id')
             ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mName', 'users.mobileNum','users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',
             'users.qualifier', 'users.nickname','users.sex','users.civilStatus', 'users.birthDate','users.street2','users.barangay2','users.municipality2', 'users.province2','users.highesteduc',
             'users.occupation', 'users.email','users.placeofbirth','users.homephone','users.citizenship','users.age','users.validID','users.selfieValidID','users.id_type','users.isGuest','users.sitio','users.sitio2')
            ->where('reports.reportstatus', '=', "Processing")
            ->where('report_archive_status', '=', 'No')
            ->get();

        $listUnresolve = DB::table('reports')  //query for unresolve reports
            ->join('users', 'reports.report_id', '=', 'users.id')
            ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mName', 'users.mobileNum','users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',
            'users.qualifier', 'users.nickname','users.sex','users.civilStatus', 'users.birthDate','users.street2','users.barangay2','users.municipality2', 'users.province2','users.highesteduc',
            'users.occupation', 'users.email','users.placeofbirth','users.homephone','users.citizenship','users.age','users.validID','users.selfieValidID','users.id_type','users.isGuest','users.sitio','users.sitio2') 
            ->where('reports.reportstatus', '=', "Unresolved")
            ->where('report_archive_status', '=', 'No')
            ->get();

        $listResolve = DB::table('reports') //query for resolve reports
            ->join('users', 'reports.report_id', '=', 'users.id')
            ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mName', 'users.mobileNum','users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',
            'users.qualifier', 'users.nickname','users.sex','users.civilStatus', 'users.birthDate','users.street2','users.barangay2','users.municipality2', 'users.province2','users.highesteduc',
            'users.occupation', 'users.email','users.placeofbirth','users.homephone','users.citizenship','users.age','users.validID','users.selfieValidID','users.id_type','users.isGuest','users.sitio','users.sitio2') 
            ->where('reports.reportstatus', '=', "Resolved")
            ->where('report_archive_status', '=', 'No')
            ->get();

            $countpending = DB::table('reports') //query for count pending reports
            ->select(DB::raw('count(*) as countingp'))
            ->where('reports.report_archive_status', '=', "No")
            ->where(function($query) {
                $query->orWhere('reports.reportstatus', '=', "Processing")
                      ->orWhere('reports.reportstatus', '=', "Dispatched")
                      ->orWhere('reports.reportstatus', '=', "Validating");
            })
            ->get();

        $countunresolve = DB::table('reports')  //query for count unresolve reports
            ->select(DB::raw('count(*) as countingunresolve'))
            ->where('reports.reportstatus', '=', "Unresolved")
            ->where('reports.report_archive_status', '=', "No")
            ->get();

        $countresolve = DB::table('reports')    //query for count resolve reports
        ->select(DB::raw('count(*) as countingresolve'))
        ->where('reports.reportstatus', '=', "Resolved")
        ->where('reports.report_archive_status', '=', "No")
        ->get();

        return view('ocirs.admin-dashboard', ['listValidation' => $listValidation, 'listDispatch' => $listDispatch, 'listProcessing' => $listProcessing, 'listUnresolve' => $listUnresolve, 'listResolve' => $listResolve, 'countpending' => $countpending, 'countunresolve' => $countunresolve, 'countresolve' => $countresolve]);
    }

    public function updateUserInfo(Request $request, $userID)
    {
        $request->validate([
            'birthDate' => 'required | before:-4 years',
            'email' => 'email |unique:users',
            'mobileNum' => 'regex:/^[0-9]{11}$/ |unique:users',
        ]);

        $user_data = User::find($userID);
        $user_data->fName = $request->fName;
        $user_data->mName = $request->mName;
        $user_data->lName = $request->lName;
        $user_data->sex = $request->sex;
        $user_data->birthDate = $request->birthDate;
        $user_data->civilStatus = $request->civilStatus;
        $user_data->street = $request->street;
        $user_data->region = $request->region;
        $user_data->province = $request->province;
        $user_data->municipality = $request->municipality;
        $user_data->barangay = $request->barangay;
        $user_data->username = $request->username;
        $user_data->email = $request->email;
        $user_data->mobileNum = $request->mobileNum;
        if ($request->hasFile('profile')) {
            $destination_path = 'storage/images/profile/';
            $new_name = 'UIMG_' . date('Ymd') . uniqid() . '.jpg';
            $path = $request->file('profile')->storeAs($destination_path, $new_name);
            $user_data['profile'] = $new_name;
        };
        $user_data->save();
        session()->flash('statuscode', 'success');
        return redirect()->back()->with('status', 'User Information Updated Successfully');
    }

    
}
