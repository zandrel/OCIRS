<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link type="text/css" href="{{ asset('./ocirs_css/user-setting.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



</head>
@extends('layout.dash-head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
@section('css')
<link type="text/css" href="{{ asset('./ocirs_css/admin-setting.css') }}" rel="stylesheet">

@endsection

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
                <a href="{{ url('/main/ocirs_adminuseraccount') }}">
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
                <a href="{{ url('/main/ocirs_adminsetting') }}" class="active">
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
            <!-- automatic date and time -->

            <div class="profile-details">
                <img src="/ocirs_img/user.png" alt="">
                <span class="user_name">
                    {{ Auth::user()->fName }}
                    {{ Auth::user()->lName }}
                </span>
            </div>
        </nav>

        <!-- content of the dashboard, inlcudes report button section,
                            hotline numbers, reported activities -->

        <div class="home-content">
            <!-- dito tayo -->


            <div class="user-content">
                
        
                <div class="container">    
                
                    <div class="d-flex align-items-start" >
                        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">
                            <h3>Change Password <h3>
                                    <!-- edit user's password -->
                                    <table class="table">
                                        <div class="tab-pane" id="editpass">
                                            <div class="content">
                                                <form action="{{ route('adminupdatepass') }}" method="POST" id="editForm">
                                                    {{ csrf_field() }}
                                                    @if (session('status'))
                                                    <div class="alert alert-success" role="alert">
                                                        {{ session ('status') }}
                                                    </div>
                                                    @elseif (session('error'))
                                                    <div class="alert alert-danger" role="alert">
                                                        {{session('error') }}
                                                    </div>
                                                    @endif
                                                    <div class="user-details1" style="width: 215%;padding-left: 10%;">

                                                        <div class="input-box">
                                                            
                                                            <label for="floatingPassword">Current Password</label>
                                                            <input type="password" name="old_password" id="oldPasswordInput" class="form-control @error('old_password') is-invalid @enderror">
          
                                                            @error('old_password')
                                                            <span class="text-danger">{{$message}}
                                                            </span>

                                                            @enderror
                                                        </div>
                                                        <div class="input-box">
                                                            <label for="floatingPassword">New Password</label>
                                                            <input type="password" name="new_password" id="newPasswordInput" class="form-control @error('new_password') is-invalid @enderror">
                                                            @error('new_password')
                                                            <span class="text-danger">{{$message}}
                                                            </span>
                                                            @enderror
                                                        </div>
                                                        <div class="input-box">
                                                            <label for="floatingPassword">Confirm Password</label>
                                                            <input type="password" name="new_password_confirmation" id="confirmNewPasswordInput" class="form-control @error('new_password_confirmation') is-invalid @enderror">
                                                            @error('new_password_confirmation')
                                                            <span class="text-danger">{{$message}}
                                                            </span>
                                                            @enderror
                                                        </div>
                                                    </div>
                                                    <div class="bot">
                                                        <div class="button2">
                                                            <input type="submit" value="Update" class="btn btn-success">
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </table>




                        </div>



                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">

                        </div>
                    </div>
                </div>
            </div>
        </div>
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

</body>
@endsection


</html>