<?php

namespace App\Http\Controllers;

use App\Models\Emergency;
use Illuminate\Http\Request;

class EmergencyController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'emergencyType' => 'required',
            'address' => 'required',
            // 'emergencyDate' => 'required | today',
            'media' => 'required'
        ]);

        $reportEmergency = new Emergency;
        $reportEmergency-> emergencyType = $request->input('emergencyType');
        $reportEmergency-> contactNumber = $request->input('contactNumber');
        $reportEmergency-> address = $request->input('address');
        $reportEmergency-> landmark = $request->input('landmark');
        $reportEmergency-> emergencyDetails = $request->input('emergencyDetails');
        // $reportEmergency-> emergencyDate = $request->input('emergencyDate');
        if($request->hasFile('media'))
        {
            $destination_path = 'public/images/emergency';
            $media = $request->file('media');
            $media_name = $media->getClientOriginalName();
            $path = $request->file('media')->storeAs($destination_path, $media_name);

            $reportEmergency['media'] = $media_name;
        }
        $reportEmergency->save();

         return redirect()->back()->with('status', 'Emergency Reported!');
    }
}
