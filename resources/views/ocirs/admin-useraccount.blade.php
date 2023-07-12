<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <link type="text/css" href="{{ asset('./ocirs_css/admin-useraccount.css') }}" rel="stylesheet">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



</head>
@extends('layout.dash-head')
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

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
        <div class="navtop">
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
        </div>
        <!-- content of the dashboard, inlcudes report button section,
                            hotline numbers, reported activities -->

        <div class="home-content">
            <!-- dito tayo -->


            <div class="home-content">
                <div class="overview-boxes">
                    <div class="box1">

                        <p><b>Accounts</b></p>


                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Number of
                                Verified Accounts </div>
                            @foreach ($statActive as $statact)
                            <div class="number">{{ $statact->countActive }}</div>
                            @endforeach
                        </div>
                        <div class="one">
                            <Span>
                                <i class="la la-user"></i>
                            </Span>
                        </div>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Number of
                                Pending Accounts </div>
                            @foreach ($statInactive as $statinact)
                            <div class="number">{{ $statinact->countInactive }}</div>
                            @endforeach

                        </div>
                        <Span>
                            <div class="two">
                                <Span>
                                    <i class="la la-user-times"></i>
                                </Span>
                            </div>
                        </Span>
                    </div>

                </div>



            </div>
            <div class="container-table">
                <input type="radio" checked name="slider" id="blog">
                <input type="radio" name="slider" id="code">
                <nav>
                    <label for="blog" class="blog"><i class="la la-bars"></i>Verified Accounts</label>
                    <label for="code" class="code"><i class="la la-tasks"></i>Pending Accounts</label>
                    <div class="slider"></div>
                </nav>
                <section class="table">
                    <div class="content content-1">


                        <table id="dtBasicExample" class="table  table-sm" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm">ID

                                    </th>
                                    <th class="th-sm">USERNAME

                                    </th>
                                    <th class="th-sm">FIRST NAME

                                    </th>
                                    <th class="th-sm">LAST NAME

                                    </th>
                                    <th class="th-sm">MIDDLE NAME
                                    </th>
                                    <th class="th-sm">ACCOUNT STATUS

                                    </th>
                                    <th class="th-sm">LAST LOG IN
                                    </th>
                                    <th class="th-sm">
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach($users as $user)
                                <tr>
                                    <td>{{$user->id}}</td>
                                    <td>{{$user->username}}</td>
                                    <td>{{$user->fName}}</td>
                                    <td>{{$user->lName}}</td>
                                    <td>{{$user->mName}}</td>
                                    <td>{{$user->acct_status}}</td>
                                    <td>{{$user->last_login_time}}</td>
                                    <td style="display:flex">
                                        <a href="{{route('admineditacc', ['user' => $user->id]) }}" class="btn btn-primary btn btn-sm"><i class="fa fa-pen"></i></a>
                                        <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirm">
                                            <i class="fas fa-archive"></i>
                                        </button>

                                    </td>
                                </tr>
                                @endforeach

                            </tbody>

                        </table>
                    </div>

                    <!--  -->
                    <!--  -->
                    <!-- Modal Confirmation -->
                    @foreach($users as $user)
                    <div id="confirm" class="modal fade">
                        <div class="modal-dialog modal-confirm modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header flex-column">
                                    <div class="icon-box">
                                        <i class="material-icons">&#xe149;</i>
                                    </div>
                                    <h4 class="modal-title w-100">Are you sure?</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <p>Do you really want to archive these records? This process can be undone in the Archive Page.</p>
                                </div>
                                <div class="modal-footer justify-content-center">
                                    @foreach($users as $user)
                                    <form method="POST" action="{{route ('adminarchiveacc' , ['user' => $user->id]
                            ) }}">
                                        @endforeach
                                        @csrf
                                        @method('put')
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button submit" class="btn btn-danger">Archive</button>
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



                    <div class="content content-2">

                        <table id="dtBasicExample1" class="table table-sm" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm">ID

                                    </th>
                                    <th class="th-sm">USERNAME

                                    </th>
                                    <th class="th-sm">FIRST NAME

                                    </th>
                                    <th class="th-sm">LAST NAME

                                    </th>
                                    <th class="th-sm">MIDDLE NAME
                                    </th>
                                    <th class="th-sm">ACCOUNT STATUS

                                    </th>
                                    <th class="th-sm">LAST LOG IN
                                    </th>
                               
                                    <th class="th-sm">
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach($userss as $userx)
                                <tr>
                                    <td>{{$userx->id}}</td>
                                    <td>{{$userx->username}}</td>
                                    <td>{{$userx->fName}}</td>
                                    <td>{{$userx->lName}}</td>
                                    <td>{{$userx->mName}}</td>
                                    <td>{{$userx->acct_status}}</td>
                                    <td>{{$userx->last_login_time}}</td>
                                    <td style="display:flex">
                                        <a href="{{route('admineditacc', ['user' => $userx->id]) }}" class="btn btn-primary btn btn-sm"><i class="fa fa-pen"></i></a>

                                        <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmm">
                                            <i class="fas fa-archive"></i>
                                        </button>

                                    </td>
                                </tr>
                                @endforeach

                            </tbody>

                        </table>
                        <!--  -->

                    </div>
                </section>
                <!-- Modal Confirmation -->
          
                <div id="confirmm" class="modal fade">
                    <div class="modal-dialog modal-confirm modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header flex-column">
                                <div class="icon-box">
                                    <i class="material-icons">&#xe149;</i>
                                </div>
                                <h4 class="modal-title w-100">Are you sure?</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <p>Do you really want to archive these records? This process can be undone in the Archive Page.</p>
                            </div>
                            <div class="modal-footer justify-content-center">
                                @foreach($userss as $userx)
                                <form method="POST" action="{{route ('adminarchiveacc' , ['user' => $userx->id]
                            ) }}">
                                    @endforeach
                                    @csrf
                                    @method('put')
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button submit" class="btn btn-danger">Archive</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
         
                <!--  -->
                <!--  -->

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

    <script>
        @if(session('success'))
        // alert(' {{ session('success') }} ');
        swal("Done!", "{{ session('success') }}", "success");
        @endif
    </script>

    <script src="../../js/common/jquery-3.2.1.min.js"></script>
    <script src="../../js/function.js"></script>

    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        $(document).ready(function() {
            $('#dtBasicExample1').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        function myFunction() {
            if (!confirm("Delete User?"))
                event.preventDefault();
        }
    </script>
</body>
@endsection

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</html>