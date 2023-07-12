<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <link type="text/css" href="{{ asset('./ocirs_css/admin-editacc.css') }}" rel="stylesheet">


    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



</head>
@extends('layout.dash-head')
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

@section('content')


<body>
    <div class="sidebar">

        <div class="logo-details">
            <img src="/img/logo.png" alt="">
            <span class="logo_name">Crime and Incident Reporting</span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="{{ url('/main/ocirs_admindashboard') }}">
                    <i class='bx bxs-home-heart'></i>
                    <span class="links_name">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminuseraccount') }}" class="active">
                    <i class='bx bx-radio-circle-marked'></i>
                    <span class="links_name">User's Account</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/chatify') }}">
                    <i class='bx bx-message-dots'></i>
                    <span class="links_name">Messaging</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminannouncement') }}">
                    <i class='bx bx-news'></i>
                    <span class="links_name">Announcement</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_admindata') }}">
                <i class='bx bx-file' ></i>
                    <span class="links_name">Data</span>

                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminarchive') }}">
                    <i class='bx bx-archive-in'></i>
                    <span class="links_name">Archive</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminsetting') }}">
                <i class='bx bx-cog'></i>
                    <span class="links_name">Setting</span>

                </a>
            </li>


            <li class="log_out">
                <a href="{{ url('/main/logout') }}">
                    <i class='bx bx-log-out'></i>
                    <span class="links_name">Log out</span>
                </a>
            </li>
        </ul>
    </div>

    <section class="home-section">
        <nav>
            <div class="sidebar-button">
                <i class='bx bx-menu sidebarBtn'></i>

            </div>


            <div class="profile-details">
                <img src="/ocirs_img/user.png" alt="">
                <span class="user_name">
                    {{ Auth::user()->fName }}
                    {{ Auth::user()->lName }}
                </span>
            </div>
        </nav>

        <div class="container-fluid">

            <!-- Page Heading -->


            {{-- Alert Messages --}}


            <!-- DataTales Example -->
            <form method="POST" action="{{route('adminupdateacc', ['user' => $user->id])}}">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-dark">Edit User</h6>
                    </div>
                    <div class="card-body">
                        <div class="d-sm-flex justify-content-between mb-4">
                            <h1 class="h4 mb-0 text-gray-800">View/Edit Users</h1>
                            {{-- Status --}}

                            <h1 class="h4 mb-0 text-gray-800 d-flex justify-content-center mr-1">Status:&nbsp;

                                <select class="form-select form-select-sm mr-4" style="margin-top:-8px;" aria-label="form-select-lg example" name="acct_status" id="acct_status">
                                    <option disabled value="{{ old('acct_status') ? old('acct_status') : $user->acct_status }}">
                                        {{ $user->acct_status }}
                                    </option>
                                    <option value="Verified">Verified</option>
                                    <option value="Pending">Pending</option>
                                </select>
                                @error('lName')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </h1>
                            <button type="button" class="btn btn-warning">{{ $user->acct_status }} </button>

                        </div>
                        @csrf
                        @method('PUT')
                        <div class="form-group row">


                            {{-- First Name --}}
                            <div class="col-sm-6 mb-3 mb-sm-20 ">
                                <span style="color:red;">*</span>First Name</label>
                                <input type="text" class="form-control form-control-user @error('fName') is-invalid @enderror" id="exampleName" placeholder="First Name" name="fName" value="{{ old('fName') ? old('fName') : $user->fName }}">

                                @error('fName')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>


                            {{-- Last Name --}}
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Last Name</label>
                                <input type="text" class="form-control form-control-user @error('lName') is-invalid @enderror" id="examplelName" placeholder="Last Name" name="lName" value="{{ old('lName') ? old('lName') : $user->lName }}">

                                @error('lName')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>

                            {{-- Middle Name --}}
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Middle Name</label>
                                <input type="text" class="form-control form-control-user @error('mName') is-invalid @enderror" id="examplemName" placeholder="Middle Name" name="mName" value="{{ old('mName') ? old('mName') : $user->mName }}">

                                @error('mName')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red">*</span>Sex</label>
                                <select class="form-select form-select-user @error('sex') is-invalid @enderror" name="sex" id="sex">
                                    <option disabled value="{{ old('sex') ? old('sex') : $user->sex }}">
                                        {{ $user->sex }}
                                    </option>
                                    <option value="Female">Female</option>
                                    <option value="Male">Male</option>
                                </select>
                                @error('sex')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Birthdate</label>
                                <input type="date" class="form-control form-control-user @error('birthDate') is-invalid @enderror" id="examplembirthdate" placeholder="Birthdate" name="birthDate" value="{{ old('birthDate') ? old('birthDate') : $user->birthDate }}">

                                @error('birthDate')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red">*</span>Civil Status</label>
                                <select class="form-select" name="civilStatus" id="civilStatus">
                                    <option disabled value="{{ old('civilStatus') ? old('civilStatus') : $user->civilStatus }}">
                                        {{ $user->civilStatus }}
                                    </option>
                                    <option value="Married">Married</option>
                                    <option value="Single">Single</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widower">Widower</option>
                                </select>
                                @error('civilStatus')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Street</label>
                                <input type="text" class="form-control form-control-user @error('street') is-invalid @enderror" id="exampleStreet" placeholder="Street" name="street" value="{{ old('street') ? old('street') : $user->street}}">

                                @error('street')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Barangay</label>
                                <input type="text" class="form-control form-control-user @error('barangay') is-invalid @enderror" id="examplemBarangay" placeholder="Barangay" name="barangay" value="{{ old('barangay') ? old('barangay') : $user->barangay }}">

                                @error('barangay')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Municipality</label>
                                <input type="text" class="form-control form-control-user @error('municipality') is-invalid @enderror" id="examplemMunicipality" placeholder="Municipality" name="municipality" value="{{ old('municipality') ? old('municipality') : $user->municipality }}">

                                @error('municipality')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Province</label>
                                <input type="text" class="form-control form-control-user @error('province') is-invalid @enderror" id="examplemProvince" placeholder="Province" name="province" value="{{ old('province') ? old('province') : $user->province}}">

                                @error('province')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span></span>Street (Other Address)</label>
                                <input type="text" class="form-control form-control-user @error('street2') is-invalid @enderror" id="examplemStreet2" placeholder="Street" name="street2" value="{{ old('street2') ? old('street2') : $user->street2}}">

                                @error('street2')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Region</label>
                                <input type="text" class="form-control form-control-user @error('region') is-invalid @enderror" id="examplemregion" placeholder="Street" name="region" value="{{ old('region') ? old('region') : $user->region}}">
                                @error('region')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span></span>Barangay (Other Address)</label>
                                <input type="text" class="form-control form-control-user @error('barangay2') is-invalid @enderror" id="examplemBara" placeholder="Barangay" name="barangay2" value="{{ old('barangay2') ? old('barangay2') : $user->barangay2}}">

                                @error('barangay2')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span></span>Municipality (Other Address)</label>
                                <input type="text" class="form-control form-control-user @error('municipality') is-invalid @enderror" id="examplemMuni" placeholder="Municipality" name="municipality2" value="{{ old('municipality2') ? old('municipality2') : $user->municipality2 }}">

                                @error('municipality2')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span></span>Province (Other Address)</label>
                                <input type="text" class="form-control form-control-user @error('province') is-invalid @enderror" id="examplemProvi" placeholder="Province" name="province2" value="{{ old('province2') ? old('province2') : $user->province2}}">

                                @error('province2')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Email</label>
                                <input type="text" class="form-control form-control-user @error('email') is-invalid @enderror" id="examplemEmail" placeholder="Email" name="email" value="{{ old('email') ? old('email') : $user->email }}">

                                @error('email')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <span style="color:red;">*</span>Mobile Number</label>
                                <input type="text" class="form-control form-control-user @error('mobileNum') is-invalid @enderror" id="examplemMobile" placeholder="Mobile Number" name="mobileNum" value="{{ old('mobileNum') ? old('mobileNum') : $user->mobileNum }}">

                                @error('mobileNum')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                              
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-10">
                                <span style="color:red;">*</span>Presented ID</label>
                                <input type="text" class="form-control form-control-user @error('id_type') is-invalid @enderror" id="examplemMobile" placeholder="Mobile Number" name="id_type" value="{{ old('id_type') ? old('id_type') : $user->id_type }}">

                                @error('id_type')
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                              
                              </div>
                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <div>
                            <span style="color:red;">*</span>Valid ID</label>
                            </div>
                            <img src="{{ asset('storage/images/validID/') . '/' . $user->validID }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                            </div>

                            <div class="col-sm-6 mb-3 mb-sm-20">
                                <div>
                            <span style="color:red;">*</span>Selfie w/ Valid ID</label>
                            </div>
                            <img src="{{ asset('storage/images/selfieValidID/') . '/' . $user->selfieValidID }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                            </div>
                           
                        </div>
                        <div class="btnwarning11" Style="padding-left:84%;">
                        {{-- Save Button --}}
                        <button type="submit" class="btn btn-success btn-user btn-block">
                            Update
                        </button>
                        </div>
            </form>
        </div>

    </section>


    <script type="text/javascript">
        // function for sidebar
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        sidebarBtn.onclick = function() {
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else
                sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    </script>

    <script src="../../js/common/jquery-3.2.1.min.js"></script>
    <script src="../../js/function.js"></script>


    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
    <script>
        $(document).ready(function() {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });
    </script>
</body>
@endsection


</html>