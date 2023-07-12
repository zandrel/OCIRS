<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://skywalkapps.github.io/bootstrap-notifications/stylesheets/bootstrap-notifications.css">
    <link rel="stylesheet" href="node_modules/mdbootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/mdbootstrap/css/mdb.min.css">
    <link rel="stylesheet" href="node_modules/mdbootstrap/css/style.css">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <link type="text/css" href="{{ asset('./ocirs_css/admin-dashboard.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

</head>
@extends('layout.dash-head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


@section('content')


<body>
    <div class="sidebar">
        <div class="logo-details">
            <img src="/img/logo.png" alt="">
            <span class="logo_name">Crime and Incident Reporting</span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="{{ url('/main/ocirs_admindashboard') }}" class="active">
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
                <div class="collapse navbar-collapse">
                <ul style="padding-left: 95%;"  class="nav navbar-nav">
                    <li style="font-size: 21px; padding-bottom: 2px;" class="dropdown dropdown-notifications">
                        <a href="#notifications-panel" class="dropdown-toggle" data-toggle="dropdown">
                            <i style="margin-right:-2;" data-count="0" class="glyphicon glyphicon-bell notification-icon"></i>
                        </a>

                        <div class="dropdown-container">
                            <div class="dropdown-toolbar">
                                <div class="dropdown-toolbar-actions">
                                    <a href="#">Mark all as read</a>
                                </div>
                                <h3 class="dropdown-toolbar-title">Notifications (<span class="notif-count">0</span>)</h3>
                            </div>
                            <ul class="dropdown-menu">
                            </ul>
                            <div class="dropdown-footer text-center">
                                <a href="#">View All</a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
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

            <div class="overview-boxes">
                <div class="box1">
                    <p><b>Reports</b></p>
                </div>
                <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Number of Pending Reports</div>
                        @foreach ($countpending as $pending)
                        <div class="number">{{ $pending->countingp }}</div>
                        @endforeach
                    </div>

                </div>
                <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Number of Unresolved Reports</div>
                        @foreach ($countunresolve as $cunresolve)
                        <div class="number">{{ $cunresolve->countingunresolve }}</div>
                        @endforeach
                    </div>

                </div>
                <div class="box">
                    <div class="right-side">
                        <div class="box-topic">Number of Resolved Reports</div>
                        @foreach ($countresolve as $cresolve)
                        <div class="number">{{ $cresolve->countingresolve }}</div>
                        @endforeach
                    </div>

                </div>
            </div>


            <div class="container-table">
                <input type="radio" name="slider" checked id="home">
                <input type="radio" name="slider" id="blog">
                <input type="radio" name="slider" id="code">
                <input type="radio" name="slider" id="help">
                <input type="radio" name="slider" id="about">
                <nav>
                    <label for="home" class="home"><i class="la la-question-circle"></i>Recent Reports</label>
                    <label for="blog" class="blog"><i class="la la-bars"></i>Dispatch Reports</label>
                    <label for="code" class="code"><i class="la la-tasks"></i>Processing Reports</label>
                    <label for="help" class="help"><i class="la la-list-ul"></i>Unresolve Reports</label>
                    <label for="about" class="about"><i class="la la-list-alt"></i>Resolved Reports</label>
                    <div class="slider"></div>
                </nav>
                <section class="table">
                    <div class="content content-1">
                        <table id="dtBasicExample" class="table table-sm table-hover table-striped" cellspacing="0" width="100%">
                            <thead class="tablehead">
                                <tr>
                                    <th class="th-sm reportth">Report Code

                                    </th>
                                    <th class="th-sm locth">Location

                                    </th>
                                    <th class="th-sm locdate">Date

                                    </th>
                                    <th class="th-sm loctime">Time

                                    </th>
                                    <th class="th-sm locname">Name
                                    </th>
                                    <th class="th-sm locstat">Status

                                    </th>
                                    <th class="th-sm locaction  ">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($listValidation as $validation)
                                <tr>
                                    <td>{{ $validation->id }}</td>
                                    <td>{{ $validation->location }}</td>
                                    <td>{{ $validation->date }}</td>
                                    <td>{{ $validation->time }}</td>
                                    <td>{{ $validation->fName }} {{ $validation->lName }}</td>
                                    <td>{{ $validation->reportstatus }}</td>
                                    <td><button title="View" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#viewmodal{{ $validation->id }}"><i class="fa-xs far fa-eye amber-text" aria-hidden="true"></i></button>
                                        <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirm{{ $validation->id }}">
                                            <i class="fas fa-archive fa-xs"></i>
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
                    @foreach($listValidation as $validation)
                    <div id="confirm{{ $validation->id }}" class="modal fade">
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

                                    <form method="POST" action="{{route ('archivereports' , ['userr' => $validation->id]
                            ) }}">

                                        @csrf
                                        @method('put')
                                        <button type="button" class="btn btn-secondary  btn-sm" data-dismiss="modal">Cancel</button>
                                        <button type="button submit" class="btn btn-danger btn-sm">Archive</button>
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
                    <!-- Modal Confirmation -->
                    @foreach ($listDispatch as $dispatch)
                    <div id="confirmm{{ $dispatch->id }}" class="modal fade">
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

                                    <form method="POST" action="{{route ('archivereports' , ['userr' => $dispatch->id]
                            ) }}">

                                        @csrf
                                        @method('put')
                                        <button type="button" class="btn btn-secondary  btn-sm" data-dismiss="modal">Cancel</button>
                                        <button type="button submit" class="btn btn-danger  btn-sm">Archive</button>
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
                    <!--  -->
                    <div class="content content-2">
                        <table id="dtBasicExample1" class="table table-sm table-hover table-striped" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm reportth">Report Code

                                    </th>
                                    <th class="th-sm locth">Location

                                    </th>
                                    <th class="th-sm locdate">Date

                                    </th>
                                    <th class="th-sm loctime">Time

                                    </th>
                                    <th class="th-sm locname">Name
                                    </th>
                                    <th class="th-sm locstat">Status

                                    </th>
                                    <th class="th-sm locaction  ">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($listDispatch as $dispatch)
                                <tr>
                                    <td>{{ $dispatch->id }}</td>
                                    <td>{{ $dispatch->location }}</td>
                                    <td>{{ $dispatch->date }}</td>
                                    <td>{{ $dispatch->time }}</td>
                                    <td>{{ $dispatch->fName }} {{ $dispatch->lName }}</td>
                                    <td>{{ $dispatch->reportstatus }}</td>
                                    <td><button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#viewmodalx{{ $dispatch->id }}"><i class="far fa-xs fa-eye" aria-hidden="true"></i></button>
                                        <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmm{{ $dispatch->id }}">
                                            <i class="fas fa-archive fa-xs"></i>
                                        </button>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>


                        </table>
                    </div>

                    @include('ocirs.modal.admin_dashboard_modal')
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <!--  -->
                    <div class="content content-3">
                        <table id="dtBasicExample2" class="table table-sm table-hover table-striped" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm reportth">Report Code

                                    </th>
                                    <th class="th-sm locth">Location

                                    </th>
                                    <th class="th-sm locdate">Date

                                    </th>
                                    <th class="th-sm loctime">Time

                                    </th>
                                    <th class="th-sm locname">Name
                                    </th>
                                    <th class="th-sm locstat">Status

                                    </th>
                                    <th class="th-sm locaction  ">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($listProcessing as $processing)
                                <tr>
                                    <td>{{ $processing->id }}</td>
                                    <td>{{ $processing->location }}</td>
                                    <td>{{ $processing->date }}</td>
                                    <td>{{ $processing->time }}</td>
                                    <td>{{ $processing->fName }} {{ $processing->lName }}</td>
                                    <td>{{ $processing->reportstatus }}</td>
                                    <td><button title="View/Update" type="button" class="btn btn-primary  btn-sm" data-toggle="modal" data-target="#modalform{{ $processing->id }}"><i class="far fa-eye  fa-xs amber-text" aria-hidden="true"></i></button>
                                        <button title="Archive" type="button" data-toggle="modal" data-target="#confirmproc{{ $processing->id }}" class="btn btn-danger btn-sm"> <i class="fas fa-archive fa-xs"></i></button>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>


                        </table>

                    </div>

                    <!--  -->
                    <!--  -->
                    <!-- Modal Confirmation -->
                    @foreach ($listProcessing as $processing)
                    <div id="confirmproc{{ $processing->id }}" class="modal fade">
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

                                    <form method="POST" action="{{route ('archivereports' , ['userr' => $processing->id]
                            ) }}">

                                        @csrf
                                        @method('put')
                                        <button type="button" class="btn btn-secondary  btn-sm" data-dismiss="modal">Cancel</button>
                                        <button type="button submit" class="btn btn-danger btn-sm">Archive</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    <!--  -->
                    <!--  -->
                    <div class="content content-4">
                        <table id="dtBasicExample3" class="table table-sm table-hover table-striped" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm reportth">Report Code

                                    </th>
                                    <th class="th-sm locth">Location

                                    </th>
                                    <th class="th-sm locdate">Date

                                    </th>
                                    <th class="th-sm loctime">Time

                                    </th>
                                    <th class="th-sm locname">Name
                                    </th>
                                    <th class="th-sm locstat">Status

                                    </th>
                                    <th class="th-sm locaction  ">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($listUnresolve as $unresolve)
                                <tr>
                                    <td>{{ $unresolve->id }}</td>
                                    <td>{{ $unresolve->location }}</td>
                                    <td>{{ $unresolve->date }}</td>
                                    <td>{{ $unresolve->time }}</td>
                                    <td>{{ $unresolve->fName }} {{ $unresolve->lName }}</td>
                                    <td>{{ $unresolve->reportstatus }}</td>
                                    <td><button title="View/Update" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalunresolve{{ $unresolve->id }}"><i class="far fa-eye  fa-xs amber-text" aria-hidden="true"></i></button>

                                        <button title="Archive " type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmun{{ $unresolve->id }}"> <i class="fas fa-archive fa-xs"></i></button>
                                    </td>

                                </tr>
                                @endforeach
                            </tbody>


                        </table>

                    </div>
                    @foreach ($listUnresolve as $unresolve)
                    <div id="confirmun{{ $unresolve->id }}" class="modal fade">
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

                                    <form method="POST" action="{{route ('archivereports' , ['userr' => $unresolve->id]
                            ) }}">

                                        @csrf
                                        @method('put')
                                        <button type="button" class="btn btn-secondary  btn-sm" data-dismiss="modal">Cancel</button>
                                        <button type="button submit" class="btn btn-danger btn-sm">Archive</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                    <div class="content content-5">
                        <table id="dtBasicExample4" class="table table-sm table-hover table-striped" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm reportth">Report Code

                                    </th>
                                    <th class="th-sm locth">Location

                                    </th>
                                    <th class="th-sm locdate">Date

                                    </th>
                                    <th class="th-sm loctime">Time

                                    </th>
                                    <th class="th-sm locname">Name
                                    </th>
                                    <th class="th-sm locstat">Status

                                    </th>
                                    <th class="th-sm locaction  ">

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($listResolve as $resolve)
                                <tr>
                                    <td>{{ $resolve->id }}</td>
                                    <td>{{ $resolve->location }}</td>
                                    <td>{{ $resolve->date }}</td>
                                    <td>{{ $resolve->time }}</td>
                                    <td>{{ $resolve->fName }} {{ $resolve->lName }}</td>
                                    <td>{{ $resolve->reportstatus }}</td>
                                    <td><button title="View/Update" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalresolve{{ $resolve->id }}"><i class="far fa-eye  fa-xs" aria-hidden="true"></i></button>
                                        <a href="{{route('pdfgenerate', [$resolve->id])}}"> <button title="Download" type="button" class="btn btn-warning btn-sm"> <i class="far fa-file-pdf fa-xs"></i></button></a>
                                        <button title="Archive" type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmreso{{ $resolve->id }}"><i class="fas fa-archive fa-xs"></i></button>
                                        <!-- <a href="{{route('viewpdf')}}"> <button class="btn btn-danger btn-sm"><i class="fas fa-archive fa-xs"></i></button></a> -->
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>


                            @foreach ($listResolve as $resolve)
                            <div id="confirmreso{{ $resolve->id }}" class="modal fade">
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

                                            <form method="POST" action="{{route ('archivereports' , ['userr' => $resolve->id]
                            ) }}">

                                                @csrf
                                                @method('put')
                                                <button type="button" class="btn btn-secondary  btn-sm" data-dismiss="modal">Cancel</button>
                                                <button type="button submit" class="btn btn-danger btn-sm">Archive</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            @endforeach

                        </table>

                    </div>
                </section>

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

    <script>
        $(document).ready(function() {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        $(document).ready(function() {
            $('#dtBasicExample1').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        $(document).ready(function() {
            $('#dtBasicExample2').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        $(document).ready(function() {
            $('#dtBasicExample3').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });

        $(document).ready(function() {
            $('#dtBasicExample4').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });
    </script>
    <script>
        @if(session('success'))
        // alert(' {{ session('success') }} ');
        swal("Done!", "{{ session('success') }}", "success");
        @endif
    </script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/jquery.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/popper.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/mdb.min.js"></script>
</body>
@endsection

<script>
    $(document).ready(function() {
        $('#dtBasicExample').DataTable();
        $('.dataTables_length').addClass('bs-select');
    });
</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://js.pusher.com/4.3/pusher.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script type="text/javascript">
        var notificationsWrapper = $('.dropdown-notifications');
        var notificationsToggle = notificationsWrapper.find('a[data-toggle]');
        var notificationsCountElem = notificationsToggle.find('i[data-count]');
        var notificationsCount = parseInt(notificationsCountElem.data('count'));
        var notifications = notificationsWrapper.find('ul.dropdown-menu');


        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher('8af5ed0661216b514280', {
            cluster: 'ap1',
            encrypted: true
        });

        // Subscribe to the channel we specified in our Laravel Event
        var channel = pusher.subscribe('NewNotification');

        // Bind a function to a Event (the full Laravel class)




        channel.bind("send-notif", function(notification) {



            var existingNotifications = notifications.html();
            var avatar = Math.floor(Math.random() * (71 - 20 + 1)) + 20;
            var newNotificationHtml = `
          <li class="notification active">
              <div class="media">
                <div class="media-left">
                  <div class="media-object">
                    <img src="https://api.adorable.io/avatars/71/` + avatar + `.png" class="img-circle" alt="50x50" style="width: 50px; height: 50px;">
                  </div>
                </div>
                <div class="media-body">
                  <strong class="notification-title">` + notification.title + `</strong>
                  <p class="notification-desc">` + notification.message + `</p>
                  
                  <div class="notification-meta">
                    <small class="timestamp">about a minute ago</small>
                  </div>
                </div>
              </div>
          </li>
        `;
            notifications.html(newNotificationHtml + existingNotifications);

            notificationsCount += 1;
            notificationsCountElem.attr('data-count', notificationsCount);
            notificationsWrapper.find('.notif-count').text(notificationsCount);
            notificationsWrapper.show();

        });
    </script>

</html>