<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://skywalkapps.github.io/bootstrap-notifications/stylesheets/bootstrap-notifications.css">

    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link type="text/css" href="{{ asset('./ocirs_css/admin-archive.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>


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
                <a href="{{ url('/main/ocirs_adminarchive') }}" class="active">
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

            <div class="collapse navbar-collapse">
           

               
           <ul style="padding-left: 95%;" class="nav navbar-nav">
               <li style="font-size: 21px; padding-bottom: 2px;" class="dropdown dropdown-notifications">
                   <a href="#notifications-panel" class="dropdown-toggle" data-toggle="dropdown">

                           <i style="margin-right:-2;" data-count="{{App\Models\notifications::unreadCount()}}" class="glyphicon glyphicon-bell notification-icon"></i>
                  
                       </a>        

                   <div class="dropdown-container">


                       <div class="dropdown-toolbar">


                           <div class="dropdown-toolbar-actions">

                               <a href="{{ route('markNotif') }}" class="btn btn-primary">Mark All As Read</a>
                           </div>
                           <h3 class="dropdown-toolbar-title">Notifications (<span class="notif-count">{{App\Models\notifications::unreadCount()}}</span>)</h3>

                       </div>
                       <ul class="dropdown-menu">

                           <li class="notification active">
                               <div class="media">
                                   <div class="media-left">
                                       <div class="media-object">
                                           <img src="https://api.adorable.io/avatars/71/` + avatar + `.png" class="img-circle" alt="50x50" style="width: 50px; height: 50px;">
                                       </div>
                                   </div>
                                   <div class="media-body">

                                   @foreach (Auth::user()->notifications as $notification)
                                   
                                       <strong class="notification-title">{{ $notification->title}}</strong>
                                       <p class="notification-desc">{{ $notification->message}}</p>
                                       <div class="notification-meta">
                                           <small class="timestamp">{{ $notification->created_at}}</small>
                                       </div>
                                     @endforeach 
                                   </div>
                               </div>
                           </li>
                       </ul>

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


        <div class="home-content">

            <div class="container-table">
            <h2>Reports</h2>
                <table id="dtBasicExample1" class="table table-sm table-hover " cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th class="th-sm">REPORT CODE

                            </th>
                            <th class="th-sm">LOCATION

                            </th>
                            <th class="th-sm">DATE

                            </th>
                            <th class="th-sm">TIME

                            </th>
                            <th class="th-sm">NAME
                            </th>
                            <th class="th-sm">STATUS

                            </th>
                            <th class="th-sm">

                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($rreports as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->location }}</td>
                            <td>{{ $user->date }}</td>
                            <td>{{ $user->time }}</td>
                            <td>{{ $user->fName }} {{ $user->lName }}</td>
                            <td>{{ $user->reportstatus }}</td>
                            <td>
                                <button title="View" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#viewmodalreport{{ $user->id }}"><i class="far fa-eye"></i></button>
                                <button title="Restore" class="btn btn-info btn-sm" data-toggle="modal" data-target="#restorereport{{ $user->id }}"> <i class="fas fa-trash-restore"></i></button>
                                <button title="Delete" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#deletereport{{ $user->id }}"> <i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>

                </table>



                @include('ocirs.modal.admin_archive_modal')
                <!--  -->
                <!--  -->
                <!--  -->

                <h2>User</h2>
                <table id="dtBasicExample" class="table table-sm table-hover " cellspacing="0" width="100%">
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
                            </th>
                            <th class="th-sm">
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($usersss as $user)
                        <tr>
                            <td>{{$user->id}}</td>
                            <td>{{$user->username}}</td>
                            <td>{{$user->fName}}</td>
                            <td>{{$user->lName}}</td>
                            <td>{{$user->mName}}</td>
                            <td>{{$user->acct_status}}</td>
                            <td><button title="View" class="btn btn-primary btn btn-sm" data-toggle="modal" data-target="#viewmodal{{ $user->id }}"><i class="far fa-eye"></i></button>
                                <button title="Restore" class="btn btn-info btn-sm" data-toggle="modal" data-target="#restore{{ $user->id }}"> <i class="fas fa-trash-restore"></i></button>
                                <button title="Delete" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete{{ $user->id }}"> <i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>


                </table>


            </div>

        </div>
    </section>
    <script src="../../js/function.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


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

    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>
    <script>
        function openCity(evt, cityName) {
            var i, x, tablinks;
            x = document.getElementsByClassName("city");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < x.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.firstElementChild.className += " w3-border-red";
        }
    </script>
    <script>
        $(document).ready(function() {

            $(document).ready(function() {
                $('#dtBasicExample1').DataTable();
                $('.dataTables_length').addClass('bs-select');
            });
            $('#dtBasicExample').DataTable();
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

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


<script src="../../js/common/jquery-3.2.1.min.js"></script>
    <script src="../../js/function.js"></script>


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
</body>
@endsection


</html>