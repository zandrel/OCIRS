<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AccountManageController extends Controller
{
    public function getUsers()
    {
        $users = User::all();

        return view('ocirs.user-account')->with('users', $users);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $input = $request->all();
        $user->fill($input)->save();
        // return redirect('/');
        return redirect()->route('ocirs_useraccount')->with('success', 'Information Updated Successfully.');
    }

    public function changePassword()
    {
        return view('ocirs.user-account');
    }

    public function updatePassword(Request $request)
{
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => [
                'required',
                'confirmed',
                'string',
                'min:6',             // must be at least 6 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                // 'regex:/[@$!%*#?&]/', // must contain a special character
            ],
        ]);

         #Match The Old Password
         if(!Hash::check($request->old_password, auth()->user()->password)){
            return back()->with("error", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with("success", "Password changed successfully!");
        //dd($request->all());
}


public function adminupdatePassword(Request $request)
{
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => [
                'required',
                'confirmed',
                'string',
                'min:6',             // must be at least 6 characters in length
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                // 'regex:/[@$!%*#?&]/', // must contain a special character
            ],
        ]);

         #Match The Old Password
         if(!Hash::check($request->old_password, auth()->user()->password)){
            return back()->with("error", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::whereId(auth()->user()->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with("success", "Password changed successfully!");
        //dd($request->all());
}


}
