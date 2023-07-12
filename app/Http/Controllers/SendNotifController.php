<?php

namespace App\Http\Controllers;

use App\Models\announcement;
use App\Models\notifications;
use App\Models\User;
use Illuminate\Http\Request;
use Pusher\Pusher;
use Illuminate\Support\Facades\DB;
class SendNotifController extends Controller
{
    public function announcement()
    {
        return view('ocirs.admin-announcement');
    }
    public function sendMessage(Request $request, $anno_id) //function for updating announcement and sending notification to the user
    {
        $request->validate([    //validation of input
            'anno_title' => 'required',
            'anno_descrip' => 'required'
        ]);
        $announcement = Announcement::find($anno_id);
        $announcement->anno_title = $request->anno_title;
        $announcement->anno_descrip = $request->anno_descrip;
        $announcement->update();

        $users = User::where('role', '0')->get();
        foreach($users as $user) {
            $notification = new notifications();
            $notification->user_id = $user->id;
            $notification->title = $request->anno_title;
            $notification->message = $request->anno_descrip;
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
        return redirect()->route('adminannouncement')->with('success', 'Announcement Updated Successfully.');    //returning view after updating
    }

    function editAnnouncement(Request $request, $anno_id){

        DB::beginTransaction();


        $update_user = announcement::where('anno_id', $anno_id)->update([
            'anno_title' => $request->anno_title,
            'anno_descrip' => $request->anno_descrip,

        ]);


        DB::commit();

        

      
        return redirect()->route('adminannouncement')->with('success', 'News Updated Successfully.');

        
    
    }

    public function markNotification(Request $request)
    {
        $user = $request->user();
        $notifications = $user->notifications()->where('read', false)->update(['read' => true]);
       
        // Delete all read notifications
    Notifications::where('read', true)->delete();
        return redirect()->back();      
    }



}
