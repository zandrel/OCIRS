
<!-- REPORT ARCHVIE -->

<!-- VIEW -->
<!--  -->
@foreach ($rreports as $user)
<div class="modal fade" id="viewmodalreport{{ $user->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl  modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h1 style="text-align: center;width:100%;"><b>Report Details</b></h1>
               
                <form>
                    @csrf
                    @method('PUT')
                    <div class="reportdet">
                        <table style="background-color: #8390A2; width:100%; padding:10%; margin-bottom:2%; margin-top:2%;">

                            <tr>
                                <td><b>Report Code:</b></td>
                                <td>{{ $user->id }}</td>
                                <td><b>Status</b></td>
                                <td>{{ $user->reportstatus }}</td>
                            </tr>
                        </table>
                    </div>


                    <div class="form first">

                        <div class="fields">
                            <div class="input-field">
                                <span class="title"><b>Brief message/narrative of complaint</b></span>
                            </div>

                            <div class="input-field">
                                <textarea disabled name="narrative" placeholder="Type a message..." rows="10" cols="150">{{ $user->narrative }}</textarea>

                            </div>

                            <div style="width:100;" class="input-field">
                                <span class="title"><b>Location</b></span>
                            </div>

                            <div class="input-field">
                                <textarea disabled name="narrative" placeholder="Type a message..." rows="3" cols="60">{{ $user->location }}</textarea>
                            </div>
                            <div class="input-field1">
                                <span class="title"><b>Date of Crime/Incident</b></span>
                                <textarea style="padding-left:10px; width:23%;" disabled name="narrative" placeholder="Type a message..." rows="1" cols="60">{{ $user->date }}</textarea>
                                <span class="title"><b>Time of Crime/Incident</b></span>
                                <textarea style="padding-left:10px; width:23%;" disabled name="narrative" placeholder="Type a message..." rows="1" cols="60">{{ $user->time }}</textarea>
                            </div>

                            <div class="input-field1">
                                <div>
                                <span  style=" margin-top:20%;" class="title"><b>Image</b></span>
                                </div>
                                <!-- <img  src="./assets/imagee.jpg" style="width: 250px; height: 250px;"> -->
                                <img src="{{ asset('storage/image/Reported_Files/') . '/' . $user->media }} " style="width: 350px; height: 250px;">
                            </div>


                          
                            <br><br>
                            <h1 style="text-align: center;"><b>Reporter Details</b></h1>
                            <table style="width:100%">
                                <tr>
                                    <td>User ID:</td>
                                    <td> <input disabled type="email" value="{{ $user->userid }}" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                                
                                    <td style="padding-left:10px">Full Name:</td>
                                    <td> <input disabled type="email" value="{{ $user->fName }} {{ $user->lName }}" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                               
                                <tr>
                                    <td>Contact:</td>
                                    <td> <input disabled type="email" value="{{ $user->mobileNum }}" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                              
                                    <td style="padding-left:10px">Home Address:</td>
                                    <td> <input disabled type="email" value="{{ $user->street }} {{ $user->barangay }} {{ $user->municipality }} {{ $user->province }} " class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></td>
                                </tr>
                            </table>
                            <br><br>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                               
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>

@endforeach




<!--  -->
<!-- Modal REPORT Restore -->
<!-- @foreach ($rreports as $user)
<div id="restorereport{{ $user->id }}" class="modal fade">

    <div class="modal-dialog modal-confirm modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xe938;</i>
                </div>
                <h4 class="modal-title w-100">Are you sure?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <p>Do you really want to restore these records?.</p>
            </div>
            <div class="modal-footer justify-content-center">

                <form method="POST" action="{{route ('unarchivereport' , ['reportt' => $user->id]
                            ) }}">

                    @csrf
                    @method('put')
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button submit" class="btn btn-success">Restore</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach -->

@foreach ($rreports as $user)
<div id="restorereport{{ $user->id }}" class="modal fade">

    <div class="modal-dialog modal-confirm modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xe938;</i>
                </div>
                <h4 class="modal-title w-100">Are you sure?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <p>Do you really want to restore these recorasdds?.</p>
            </div>
            <div class="modal-footer justify-content-center">

                <form method="POST" action="{{route ('unarchivereport' , ['reportt' => $user->id]
                            ) }}">

                    @csrf
                    @method('put')
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button submit" class="btn btn-success">Restore</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
<!--  -->
<!--  -->

<!--  -->

<!--  -->
<!--  -->
<!-- Modal REPORT Delete -->
@foreach ($rreports as $user)
<div id="deletereport{{ $user->id }}" class="modal fade">
    <div class="modal-dialog modal-confirm1 modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xe92b;</i>
                </div>
                <h4 class="modal-title w-100">Are you sure?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <p>Do you really want to permanently delete these records?. These changes cannot be undone.</p>
            </div>
            <div class="modal-footer justify-content-center">

                <form method="POST" action="{{route ('deletearchivereport' , ['reportts' => $user->id]
                            ) }}">

                    @csrf
                    @method('put')
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button submit" class="btn btn-danger">Delete</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
<!--  -->
<!--  -->



<!-- USER view-->
@foreach ($usersss as $validation)
<div class="modal fade" id="viewmodal{{ $validation->id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog modal-xl  modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">View Archive User</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">


                <form>

                    <div class="form-group row">


                        {{-- First Name --}}
                        <div class="col-sm-6 mb-3 mb-sm-20 ">
                            <span style="color:red;">*</span>First Name</label>
                            <input type="text" disabled class="form-control form-control-user @error('fName') is-invalid @enderror" id="exampleName" placeholder="First Name" name="fName" value="{{ $validation->fName }}">

                            @error('fName')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>


                        {{-- Last Name --}}
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Last Name</label>
                            <input disabled type="text" class="form-control form-control-user @error('lName') is-invalid @enderror" id="examplelName" placeholder="Last Name" name="lName" value="{{ $validation->lName }}">

                            @error('lName')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>

                        {{-- Middle Name --}}
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Middle Name</label>
                            <input disabled type="text" class="form-control form-control-user @error('mName') is-invalid @enderror" id="examplemName" placeholder="Middle Name" name="mName" value="{{ $validation->mName }}">

                            @error('mName')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red">*</span>Sex</label>
                            <input disabled type="text" class="form-control form-control-user @error('mName') is-invalid @enderror" id="examplemName" placeholder="Middle Name" name="mName" value="{{ $validation->sex }}">

                            @error('sex')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Birthdate</label>
                            <input disabled type="text" class="form-control form-control-user @error('birthDate') is-invalid @enderror" id="examplembirthdate" placeholder="Birthdate" name="birthDate" value="{{ $validation->birthDate }}">

                            @error('birthDate')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red">*</span>Civil Status</label>

                            <input disabled type="text" class="form-control form-control-user @error('birthDate') is-invalid @enderror" id="examplemcivilStatus" placeholder="civilStatus" name="civilStatus" value="{{ $validation->civilStatus }}">

                            @error('civilStatus')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Street</label>
                            <input disabled type="text" class="form-control form-control-user @error('street') is-invalid @enderror" id="exampleStreet" placeholder="Street" name="street" value="{{ $validation->street }}">

                            @error('street')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Barangay</label>
                            <input disabled type="text" class="form-control form-control-user @error('barangay') is-invalid @enderror" id="examplemBarangay" placeholder="Barangay" name="barangay" value="{{ $validation->barangay }}">

                            @error('barangay')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Municipality</label>
                            <input disabled type="text" class="form-control form-control-user @error('municipality') is-invalid @enderror" id="examplemMunicipality" placeholder="Municipality" name="municipality" value="{{ $validation->municipality }}">

                            @error('municipality')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Province</label>
                            <input disabled type="text" class="form-control form-control-user @error('province') is-invalid @enderror" id="examplemProvince" placeholder="Province" name="province" value="{{ $validation->province }}">

                            @error('province')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span></span>Street (Other Address)</label>
                            <input disabled type="text" class="form-control form-control-user @error('street2') is-invalid @enderror" id="examplemStreet2" placeholder="Street" name="street2" value="{{ $validation->street2 }}">

                            @error('street2')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Region</label>
                            <input disabled type="text" class="form-control form-control-user @error('region') is-invalid @enderror" id="examplemregion" placeholder="Street" name="region" value="{{ $validation->region }}">
                            @error('region')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span></span>Barangay (Other Address)</label>
                            <input disabled type="text" class="form-control form-control-user @error('barangay2') is-invalid @enderror" id="examplemBara" placeholder="Barangay" name="barangay2" value="{{ $validation->barangay2 }}">

                            @error('barangay2')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span></span>Municipality (Other Address)</label>
                            <input disabled type="text" class="form-control form-control-user @error('municipality') is-invalid @enderror" id="examplemMuni" placeholder="Municipality" name="municipality2" value="{{ $validation->municipality2 }}">

                            @error('municipality2')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span></span>Province (Other Address)</label>
                            <input disabled type="text" class="form-control form-control-user @error('province') is-invalid @enderror" id="examplemProvi" placeholder="Province" name="province2" value="{{ $validation->province2 }}">

                            @error('province2')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Email</label>
                            <input disabled type="text" class="form-control form-control-user @error('email') is-invalid @enderror" id="examplemEmail" placeholder="Email" name="email" value="{{ $validation->email }}">

                            @error('email')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Mobile Number</label>
                            <input disabled type="text" class="form-control form-control-user @error('mobileNum') is-invalid @enderror" id="examplemMobile" placeholder="Mobile Number" name="mobileNum" value="{{ $validation->mobileNum }}">

                            @error('mobileNum')
                            <span class="text-danger">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="col-sm-6 mb-3 mb-sm-10">
                                <span style="color:red;">*</span>Presented ID</label>
                                <input disabled type="text" class="form-control form-control-user @error('id_type') is-invalid @enderror" id="examplemMobile" placeholder="Mobile Number" name="id_type" value="{{ $validation->id_type }}">

                                @error('id_type')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Valid ID</label>
                            <img src="{{ asset('storage/images/validID/') . '/' . $validation->validID }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                            </div>

                            <div class="col-sm-6 mb-3 mb-sm-20">
                            <span style="color:red;">*</span>Selfie w/ Valid ID</label>
                            <img src="{{ asset('storage/images/selfieValidID/') . '/' . $validation->selfieValidID }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                            </div>

                    </div>


                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             
            </div>
        </div>
    </div>
</div>
@endforeach

<!--  -->
<!-- Restore -->
<!--  -->
<!--  -->
<!-- Modal Restore -->
@foreach ($usersss as $user)
<div id="restore{{ $user->id }}" class="modal fade">

    <div class="modal-dialog modal-confirm modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xe938;</i>
                </div>
                <h4 class="modal-title w-100">Are you sure?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <p>Do you really want to restore these records?.</p>
            </div>
            <div class="modal-footer justify-content-center">

                <form method="POST" action="{{route ('unarchive' , ['user' => $user->id]
                            ) }}">

                    @csrf
                    @method('put')
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button submit" class="btn btn-success">Restore</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
<!--  -->
<!--  -->

<!--  -->

<!--  -->
<!--  -->
<!-- Modal Delete -->
@foreach ($usersss as $user)
<div id="delete{{ $user->id }}" class="modal fade">
    <div class="modal-dialog modal-confirm1 modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xe92b;</i>
                </div>
                <h4 class="modal-title w-100">Are you sure?</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <p>Do you really want to permanently delete these records?. These changes cannot be undone.</p>
            </div>
            <div class="modal-footer justify-content-center">

                <form method="POST" action="{{route ('deletearchive' , ['users' => $user->id]
                            ) }}">

                    @csrf
                    @method('put')
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button submit" class="btn btn-danger">Delete</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
<!--  -->
<!--  -->





