<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\News;
use App\Models\Faq;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\report;
use App\Notifications\AccountStatusChanged;
use Pusher\Pusher;
use App\Models\notifications;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ReportData;

class TableController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('users')->select('*')
            ->where('role', '=', 0)
            ->where('acct_status', '=', 'Verified')
            ->where('acct_archive_status', '=', 'No')
            ->where('isGuest', '=', 'No')
            ->get();

        $userss = DB::table('users')->select('*')
            ->where('role', '=', 0)
            ->where('acct_status', '=', 'Pending')
            ->where('acct_archive_status', '=', 'No')
            ->where('isGuest', '=', 'No')
            ->get();

        //STATISTICS
        $statActive = DB::table('users')
            ->select(DB::raw('count(*) as countActive'))
            ->where('users.acct_status', '=', "Verified")
            ->where('users.role', '=', 0)
            ->get();

        $statInactive = DB::table('users')
            ->select(DB::raw('count(*) as countInactive'))
            ->where('users.acct_status', '=', "Pending")
            ->where('users.acct_archive_status', '=', "No")
            ->get();

        return view('ocirs.admin-useraccount')->with(['users' => $users, 'userss' => $userss, 'statActive' => $statActive, 'statInactive' => $statInactive]);
    }


    public function accountstatus($id)
    { {
            $users = DB::table('users')->where('id', $id)->get();
            return view('ocirs.admin-useraccount')->with(['users' => $users]);
        }
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = User::whereId($id)->first();

        if (!$user) {
            return back()->with('error', 'User Not Found');
        }
        return view('ocirs.admin-editacc')->with([
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) //function in updating/viewing user's account for verification
    {
        $request->validate([ //validate inputs
            'fName' => 'required', 'lName' => 'required', 'mName' => '',
            'acct_status' => 'required', 'sex' => 'required',
            'birthDate' => 'required | before:today',
            'civilStatus' => 'required', 'street' => 'required',
            'street2' => '', 'region' => 'required',
            'province' => 'required', 'province2' => '',
            'municipality' => 'required', 'municipality2' => '',
            'barangay' => 'required', 'barangay2' => '',
            'email' => [
                'required', 'email',
                Rule::unique('users')->ignore($id)
            ],
            'mobileNum' => [
                'required', 'regex:/^[0-9]{11}$/',
                Rule::unique('users')->ignore($id)
            ],
            'acct_status' => 'required'
        ]);

        try {
            DB::beginTransaction(); 
            $user = User::findOrFail($id);
            $previousStatus = User::find($user->id)->acct_status;
            $statusChanged = $request->acct_status != $user->acct_status;                         
            $update_user = User::where('id', $id)->update([
                'fName' => $request->fName, 'lName' => $request->lName,
                'mName' => $request->mName, 'sex' => $request->sex,
                'birthDate' => $request->birthDate, 'civilStatus' => $request->civilStatus,
                'street' => $request->street, 'street2' => $request->street2,
                'region' => $request->region, 'province' => $request->province,
                'province2' => $request->province2, 'municipality' => $request->municipality,
                'municipality2' => $request->municipality2, 'barangay' => $request->barangay,
                'barangay2' => $request->barangay2, 'email' => $request->email,
                'mobileNum' => $request->mobileNum, 'acct_status' => $request->acct_status
            ]);
            if (!$update_user) {
                DB::rollBack();
                return back()->with('error', 'Something went wrong while updating user data');
            }
            DB::commit();                        
            if ($statusChanged) {
                
                $updatedStatus = $request->acct_status;
                $user->notify(new AccountStatusChanged($previousStatus, $updatedStatus));
            }

           
            
            return redirect()->route('tables')->with('success', 'User Updated Successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function archive($id) //function in archiving user
    {
        try {
            DB::beginTransaction();
            $delete_user = User::whereId($id)->update([ //select the user through the id
                'acct_archive_status' => "Yes",
                'acct_status' => "Pending" //set the of the record into inactive after archiving
            ]);
            if (!$delete_user) {
                DB::rollBack();
                return back()->with('error', 'There is an error while archiving the user.');
            }
            DB::commit();   //redirect the route after success archive and throw a message
            return redirect()->route('tables')->with('success', 'User Archived Successfully.');
        } catch (\Throwable $th) {
        }
    }



    // 
    public function updateReport(Request $request, $idd)
    {
        $request->validate([
            'reportstatus' => '',
            'repoort_brgy' => ''

        ]);

        try {
            DB::beginTransaction();
            // Logic For Save User Data

            $update_user1 = Report::where('id', $idd)->update([
                'reportstatus' => $request->reportstatus,
                'repoort_brgy' => $request->repoort_brgy

            ]);

            if (!$update_user1) {
                DB::rollBack();

                return back()->with('error', 'Something went wrong while updating user data');
            }

            DB::commit();
           
       
            
            $report = Report::find($idd);
            $updated = $request->reportstatus;
            $notification = new notifications();
            $notification->user_id = $report->report_id;
            $notification->title = 'Report Status Updated';
            $notification->message = 'Your report status has been updated into: ' .$updated;
            $notification->save();
        
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
            $pusher->trigger('NewNotification' , 'send-notif', $notification);  //trigger for notification

            return redirect()->route('admindashboard')->with('success', 'Report Updated Successfully.');
            
            
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
            
        }
    }

    public function updateReport2(Request $request, $iddx, $uid) //function in editing the record form
    {
        $request->validate([ //validation oof input
            'reportstatus' => '',
            'narrative' => '', 'irf_entry' => '', 'blotter_entry' => '', 'copy_for' => '', 'administering_officer' => '',
            'administering_officer_phone' => '', 'deskofficer_name' => '', 'deskofficer_phone' => '', 'investigator_on_case' => '',
            'investigator_on_case_phone' => '', 'chief_of_head' => '', 'chief_of_head_phone' => '', 'susfname' => '',
            'susmname' => '',  'suslname' => '', 'susqualifier' => '', 'susnickname' => '', 'suscitizenship' => '',
            'sussex' => '', 'suscivilstatus' => '', 'susbirth' => '',
            'susage' => '',
            'susplaceofbirth' => '',
            'sushomephone' => '',
            'susmobilephone' => '',
            'susstreet' => '',
            'susbarangay' => '',
            'susmunicipality' => '',
            'susprovince' => '',
            'susstreet2' => '',
            'susbarangay2' => '',
            'susmunicipality2' => '',
            'susprovince2' => '',
            'sushighesteduc' => '',
            'susoccupation' => '',
            'suswordaddress' => '',
            'susrelationtovictim' => '',
            'susemail' => '',
            'susifrank' => '',
            'susunitassignment' => '',
            'susgroup' => '',
            'suscrimerecord' => '',
            'susspecifyrecord' => '',
            'susstatusrecord' => '',
            'susheight' => '',
            'susweight' => '',
            'susbuild' => '',
            'suscoloreyes' => '',
            'susdescripeyes' => '',
            'susdescriphair' => '',
            'susinfluence' => '',
            'chilguardian' => '',
            'chilguardianaddress' => '',
            'chilhomephone' => '',
            'chilmobilephone' => '',
            'vicfname' => '',
            'vicmname' => '',
            'viclnam' => '',
            'vicqualifier' => '',
            'vicnickname' => '',
            'viccitizenship' => '',
            'vicsex' => '',
            'viccivilstat' => '',
            'vicbirth' => '',
            'vicage' => '',
            'vicplaceofbirth' => '',
            'vichomephone' => '',
            'vicmobilephone' => '',
            'vicstreet' => '',
            'vicbarangay' => '',
            'vicmunicipality' => '',
            'vicprovince' => '',
            'vicstreet2' => '',
            'vicbarangay2' => '',
            'vicmunicipality2' => '',
            'vicprovince2' => '',
            'sussitio' => '',
            'sussitio2' => '',
            'vicsitio' => '',
            'vicsitio2' => '',


            'sex' => '',
            'birthDate' => '',
            'civilStatus' => '',
            'street' => '',
            'region' => '',
            'province' => '',
            'municipality' => '',
            'barangay' => '',
            'email' => '',
            'qualifier' => '',
            'nickname' => '',
            'citizenship' => '',
            'age' => '',
            'placeofbirth' => '',
            'homephone' => '',
            'citizenship' => '',
            'sitio' => '',
            'highesteduc' => '',
            'occupation' => '',
            'id_type' => '',



        ]);

        try {
            DB::beginTransaction();
            $updateuser = User::where('id', $uid)->update([ //saving data
                'sex' => $request->sex,
                'birthDate' => $request->birthDate,
                'civilStatus' => $request->civilStatus,
                'street' => $request->street,
                'region' => $request->region,
                'province' => $request->province,
                'municipality' => $request->municipality,
                'barangay' => $request->barangay,
                'email' => $request->email,
                'qualifier' => $request->qualifier,
                'nickname' => $request->nickname,
                'citizenship' => $request->citizenship,
                'age' => $request->age,
                'placeofbirth' => $request->placeofbirth,
                'homephone' => $request->homephone,
                'citizenship' => $request->citizenship,
                'sitio' => $request->sitio,
                'highesteduc' => $request->highesteduc,
                'occupation' => $request->occupation,
                'id_type' => $request->id_type,
                'mName' => $request->mName,

                'street2' => $request->street2,
                'sitio2' => $request->sitio2,
                'province2' => $request->province2,
                'municipality2' => $request->municipality2,


            ]);
            DB::commit();

            $update_user1 = Report::where('id', $iddx)->update([ //saving data

                'reportstatus' => $request->reportstatus,
                'narrative' => $request->narrative,
                'irf_entry' => $request->irf_entry,
                'blotter_entry' => $request->blotter_entry,
                'copy_for' => $request->copy_for,
                'administering_officer' => $request->administering_officer,
                'administering_officer_phone' => $request->administering_officer_phone,
                'deskofficer_name' => $request->deskofficer_name,
                'deskofficer_phone' => $request->deskofficer_phone,
                'investigator_on_case' => $request->investigator_on_case,
                'investigator_on_case_phone' => $request->investigator_on_case_phone,
                'chief_of_head' => $request->chief_of_head,
                'chief_of_head_phone' => $request->chief_of_head_phone,
                'susfname' => $request->susfname,
                'susmname' => $request->susmname,
                'suslname' => $request->suslname,
                'susqualifier' => $request->susqualifier,
                'susnickname' => $request->susnickname,
                'suscitizenship' => $request->suscitizenship,
                'sussex' => $request->sussex,
                'suscivilstatus' => $request->suscivilstatus,
                'susbirth' => $request->susbirth,
                'susage' => $request->susage,
                'susplaceofbirth' => $request->susplaceofbirth,
                'sushomephone' => $request->sushomephone,
                'susmobilephone' => $request->susmobilephone,
                'susstreet' => $request->susstreet,
                'susbarangay' => $request->susbarangay,
                'susmunicipality' => $request->susmunicipality,
                'susprovince' => $request->susprovince,
                'susstreet2' => $request->susstreet2,
                'susbarangay2' => $request->susbarangay2,
                'susmunicipality2' => $request->susmunicipality2,
                'susprovince2' => $request->susprovince2,
                'sushighesteduc' => $request->sushighesteduc,
                'susoccupation' => $request->susoccupation,
                'suswordaddress' => $request->suswordaddress,
                'susrelationtovictim' => $request->susrelationtovictim,
                'susemail' => $request->susemail,
                'susifrank' => $request->susifrank,
                'susunitassignment' => $request->susunitassignment,
                'susgroup' => $request->susgroup,
                'suscrimerecord' => $request->suscrimerecord,
                'susspecifyrecord' => $request->susspecifyrecord,
                'susstatusrecord' => $request->susstatusrecord,
                'susheight' => $request->susheight,
                'susweight' => $request->susweight,
                'susbuild' => $request->susbuild,
                'suscoloreyes' => $request->suscoloreyes,
                'susdescripeyes' => $request->susdescripeyes,
                'susdescriphair' => $request->susdescriphair,
                'susinfluence' => $request->susinfluence,
                'chilguardian' => $request->chilguardian,
                'chilguardianaddress' => $request->chilguardianaddress,
                'chilhomephone' => $request->chilhomephone,
                'chilmobilephone' => $request->chilmobilephone,
                'vicfname' => $request->vicfname,
                'vicmname' => $request->vicmname,
                'viclnam' => $request->viclnam,
                'vicqualifier' => $request->vicqualifier,
                'vicnickname' => $request->vicnickname,
                'viccitizenship' => $request->viccitizenship,
                'vicsex' => $request->vicsex,
                'viccivilstat' => $request->viccivilstat,
                'vicbirth' => $request->vicbirth,
                'vicage' => $request->vicage,
                'vicplaceofbirth' => $request->vicplaceofbirth,
                'vichomephone' => $request->vichomephone,
                'vicmobilephone' => $request->vicmobilephone,
                'vicstreet' => $request->vicstreet,
                'vicbarangay' => $request->vicbarangay,
                'vicmunicipality' => $request->vicmunicipality,
                'vicprovince' => $request->vicprovince,
                'vicstreet2' => $request->vicstreet2,
                'vicbarangay2' => $request->vicbarangay2,
                'vicmunicipality2' => $request->vicmunicipality2,
                'vicprovince2' => $request->vicprovince2,
                'sussitio' => $request->sussitio,
                'sussitio2' => $request->sussitio2,
                'vicsitio' => $request->vicsitio,
                'vicsitio2' => $request->vicsitio2
            ]);
            if (!$update_user1) { //rollback if an error occuured in updating
                DB::rollBack();
                return back()->with('error', 'Something went wrong while updating user data');
            }
            DB::commit();   //update the data and reddirect to the admin dashboard
            return redirect()->route('admindashboard')->with('success', 'Report Updated Successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }








    // Archive page

    public function getArchivelist()
    {

        // Archive users
        $usersss = DB::table('users')->select('*')
            ->where('role', '=', 0)
            ->where('acct_archive_status', '=', 'Yes')
            ->get();

        $rreports = DB::table('reports')->select('*')
            ->join('users', 'reports.report_id', '=', 'users.id')
            ->select('reports.*', 'users.fName', 'users.lName', 'users.mName', 'users.birthDate', 'users.civilStatus', 'users.street2', 'users.barangay2', 'users.municipality2', 'users.province2', 'users.email', 'users.id_type', 'users.validID', 'users.lName', 'users.selfieValidID', 'users.sex', 'users.id as userid', 'users.mobileNum', 'users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',)
            ->where('reports.report_archive_status', '=', "Yes")
            ->get();

        $viewreport = DB::table('reports')
            ->join('users', 'reports.report_id', '=', 'users.id')
            ->select('reports.*', 'users.fName', 'users.lName', 'users.id as userid', 'users.mobileNum', 'users.street', 'users.barangay', 'users.municipality', 'users.province', 'users.region',)
            ->where('reports.reportstatus', '=', "Dispatched")
            ->where('report_archive_status', '=', 'Yes')
            ->get();

        return view('ocirs.admin-archive')->with(['usersss' => $usersss, 'viewreport' => $viewreport, 'rreports' => $rreports]);
    }
    public function unarchive($ids)
    {
        try {
            DB::beginTransaction();
            $delete_user = User::whereId($ids)->update([
                'acct_archive_status' => "No",
                'acct_status' => "Pending"
            ]);

            if (!$delete_user) {
                DB::rollBack();
                return back()->with('error', 'There is an error while archiving the user.');
            }
            DB::commit();
            return redirect()->route('archive')->with('success', 'User Restored Successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
    public function delete($id)
    {
        try {
            DB::beginTransaction();
            $delete_user = User::whereId($id)->delete();

            if (!$delete_user) {
                DB::rollBack();
                return back()->with('error', 'There is an error while deleting the user.');
            }
            DB::commit();
            return redirect()->route('archive')->with('success', 'User Deleted Successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }





    // 
    // 
    // REPORT ARCHIVE
    public function unarchivereport($idt)
    {


        try {
            DB::beginTransaction();   // Logic For Update User Data                                     
            $update_user = Report::where('id', $idt)->update([
                'report_archive_status' => "No"
            ]);
            if (!$update_user) {
                DB::rollBack();
                return back()->with('error', 'Something went wrong while updating user data');
            }
            DB::commit();
            return redirect()->route('archive')->with('success', 'Report Restored Successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
    public function deletereport($idu)
    {
        try {
            DB::beginTransaction();
            $delete_user = Report::whereId($idu)->delete();

            if (!$delete_user) {
                DB::rollBack();
                return back()->with('error', 'There is an error while deleting the user.');
            }
            DB::commit();
            return redirect()->route('archive')->with('success', 'Report Deleted Successfully.');
        } catch (\Throwable $th) {
        }
    }

    // public function getNews()
    // {
    //     $news = DB::table('news')->select('*')
    //         ->where('role', '=', 0)
    //         ->where('acct_archive_status', '=', 'Yes')
    //         ->get();

    //     return view('ocirs.admin-archive')->with(['usersss' => $news]);
    // }

    public function updateNews(Request $request, $newss) //function in updating news
    {
        $request->validate([    //validating input
            'newsTitle' => 'required',
            'newsDescrip' => 'required',
            'media' => 'required',

        ]);
        $destination_path = 'public/image/news'; //destination path for the media to be upload
        $media = $request->file('media');
        $media_name = $media->getClientOriginalName();
        $path = $request->file('media')->storeAs($destination_path, $media_name);
        DB::beginTransaction();
        $update_user = News::where('news_id', $newss)->update([
            'newsTitle' => $request->newsTitle,
            'newsDescrip' => $request->newsDescrip,
            'media' => $media_name
        ]);

        if (!$update_user) {
            DB::rollBack();

            return back()->with('error', 'Something went wrong while updating user data');
        }
        DB::commit();   //commiting changes and returning view
        return redirect()->route('adminannouncement')->with('success', 'News Updated Successfully.');
    }

    //Dashboard archive
    public function archivereport($idz)
    {
        try {
            DB::beginTransaction();
            $delete_user = Report::whereId($idz)->update([
                'report_archive_status' => "Yes",
            ]);

            if (!$delete_user) {
                DB::rollBack();
                return back()->with('error', 'There is an error while archiving the user.');
            }
            DB::commit();
            return redirect()->route('admindashboard')->with('success', 'Report Archived Successfully.');
        } catch (\Throwable $th) {
        }
    }

    public function updatefaq(Request $request, $faqs) //function in updating news
    {


        $request->validate([
            'faq_question' => 'required',
            'faq_answer' => 'required',

        ]);

        $user_data = Faq::find($faqs);
        $user_data->faq_question = $request->faq_question;
        $user_data->faq_answer = $request->faq_answer;


        $user_data->save();
        session()->flash('statuscode', 'success');
        return redirect()->route('adminannouncement')->with('success', 'FAQ Updated Successfully.');
    }

    public function addfaq(Request $request) //function in updating news
    {


        $request->validate([
            'faq_question' => 'required',
            'faq_answer' => 'required',

        ]);

        $faq = new Faq;
        $faq->faq_question = $request->input('faq_question');
        $faq->faq_answer = $request->input('faq_answer');
        $faq->save();

        return redirect()->route('adminannouncement')->with('success', 'FAQ Added Successfully.');
    }
    public function exportExcel() 
    {


        return Excel::download(new ReportData, 'Crime And Incident Data.xlsx' );

    }
}
