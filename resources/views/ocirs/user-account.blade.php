@extends('layout.dash-head')

<head>
    @section('css')
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <link type="text/css" href="{{ asset('./ocirs_css/user-account.css') }}" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://skywalkapps.github.io/bootstrap-notifications/stylesheets/bootstrap-notifications.css">
    @endsection
</head>
@section('content')

<body>



    <div class="sidebar">
        <div class="logo-details">
            <img src="/img/logo.png" alt="">
            <span class="logo_name">Crime and Incident Reporting</span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="{{ url('/main/ocirs_userdashboard') }}">
                    <i class='bx bxs-home-heart'></i>
                    <span class="links_name">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_useraccount') }}" class="active">
                    <i class='bx bx-cog'></i>
                    <span class="links_name">Account</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/chatify') }}">
                    <i class='bx bx-message-dots'></i>
                    <span class="links_name">Message Us</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_userfaq') }}">
                    <i class='bx bx-news'></i>
                    <span class="links_name">FAQs</span>
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
        <!-- navifation -->
        <nav>
            <div class="sidebar-button">
                <i class='bx bx-menu sidebarBtn'></i>

            </div>
            <!-- automatic date and time -->

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
                <img src="{{ asset('/ocirs_img/user.png')}}" alt="">
                <span class="user_name">
                    {{ Auth::user()->fName }}
                    {{ Auth::user()->lName }}
                </span>
            </div>
        </nav>
        <div class="home-content">

            <!-- card container in editing user information and acct -->
            <div class="card">
                <div class="card-body">
                    <ul class="navbar">
                        <li>
                            <a href="#" class="tab active" data-id="basicinfo">
                                <span class="icon"><i class="fas fa-info"></i></span>
                                <span class="text">Personal Information</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tab" data-id="account">
                                <span class="icon"><i class="fas fa-user"></i></span>
                                <span class="text">Contact Information</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="tab" data-id="pass">
                                <span class="icon"><i class="fas fa-user"></i></span>
                                <span class="text">Privacy</span>
                            </a>
                        </li>
                    </ul>
                    <!-- Personal information -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="basicinfo">

                            <div class="content">
                                <p>Note: You may not be able to edit other of your information for some validation
                                    purposes.
                                <p>
                                <form action={{ url('/main/ocirs_useraccount') }} method="POST" id="editForm">
                                    {{ csrf_field() }}
                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">First Name</span>
                                            <input type="hidden" name="id" id="id" value="{{ Auth::user()->id }}" disabled>
                                            <input type="text" name="fName" id="fName" value="{{ Auth::user()->fName }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Middle Name</span>
                                            <input type="text" name="mName" id="mName" value="{{ Auth::user()->mName }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Last Name</span>
                                            <input type="text" name="lName" id="lName" value="{{ Auth::user()->lName }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Gender</span>
                                            <input type="text" name="sex" id="sex" value="{{ Auth::user()->sex }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Birthdate</span>
                                            <input type="date" name="birthDate" id="birthDate" value="{{ Auth::user()->birthDate }}" disabled>
                                        </div>
                                        <div class="input-box" style="padding-bottom: 40px">
                                            <span class="details">Civil Status</span>
                                            <input type="text" name="civilStatus" id="civilStatus" value="{{ Auth::user()->civilStatus }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Qualifier</span>
                                            <input type="text" class="qualifier" name="qualifier" value="{{ Auth::user()->qualifier }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Nickname</span>
                                            <input type="text" name="nickname" value="{{ Auth::user()->nickname }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Occupation</span>
                                            <input type="text" name="occupation" value="{{ Auth::user()->occupation }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Highest Educational Attainment</span>
                                            <input type="text" name="highesteduc" value="{{ Auth::user()->highesteduc }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Place of Birth</span>
                                            <input type="text" name="placeofbirth" value="{{ Auth::user()->placeofbirth }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Citizenship</span>
                                            <input type="text" name="citizenship" value="{{ Auth::user()->citizenship }}" disabled>
                                        </div>

                                    </div>
                                    <div class="bot">

                                        <div class="button">

                                            <a href="#UpdateProfile{{ Auth::user()->id }}" class="btn btn-danger edit" data-toggle="modal">Edit</a>

                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>

                        <!-- modal -->
                        @include('ocirs.modal.edit')


                        <!-- edit user's account -->
                        <div class="tab-pane" id="account">
                            <div class="content">
                                <form action="/main/settings" method="POST" id="editForm">
                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">Email Address</span>
                                            <input type="text" name="email" id="email" value="{{ Auth::user()->email }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Contact Number</span>
                                            <input type="text" name="mobileNum" id="mobileNum" value="{{ Auth::user()->mobileNum }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Home Phone</span>
                                            <input type="text" name="homephone" id="homephone" value="{{ Auth::user()->homephone }}" disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Current Address</span>
                                            <input type="text" name="address" id="address" value="{{ Auth::user()->street }}, {{ Auth::user()->barangay }}, {{ Auth::user()->municipality }}, {{ Auth::user()->province }} " disabled>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Other Address</span>
                                            <input type="text" name="address" id="address" value="{{ Auth::user()->street2 }}, {{ Auth::user()->barangay2 }}, {{ Auth::user()->municipality2 }}, {{ Auth::user()->province2 }} " disabled>
                                        </div>
                                    </div>
                                    <div class="bot">
                                        <div class="button">
                                            <a href="#UpdateContact{{ Auth::user()->id }}" class="btn btn-danger edit" data-toggle="modal">Edit</a>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab-pane" id="pass">
                            <div class="content">

                                <form action="{{ route('update-password') }}" method="POST" id="editForm">
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
                                    <div class="user-details1">

                                        <div class="input-box">
                                            <span class="details">Old Password</span>
                                            <input type="password" name="old_password" id="oldPasswordInput" class="form-control @error('old_password') is-invalid @enderror">
                                            @error('old_password')
                                            <span class="text-danger">{{$message}}
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="input-box">
                                            <span class="details">New Password</span>
                                            <input type="password" name="new_password" id="newPasswordInput" class="form-control @error('new_password') is-invalid @enderror">
                                            @error('new_password')
                                            <span class="text-danger">{{$message}}
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Confirm Password</span>
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
                    </div>

                </div>
            </div>
        </div>

    </section>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="../../js/common/jquery-3.2.1.min.js"></script>
    <script src="../../js/common/ijaboCropTool.min.js"></script>
    <script>
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

        // script for card
        $(document).ready(function() {
            // Add active class on tab click
            $(".tab").on("click", function() {
                var categoryId = $(this).data("id");

                $(".tab, .tab-pane").removeClass("active");
                $(this).addClass("active");
                $("#" + categoryId).addClass("active");
            });
        });


        $('#editForm').on('submit', function(e) {
            e.preventDefault();

            var form = $(this).serialize();
            var url = $(this).attr('action');
            $.post(url, form, function(data) {
                $('#editmodal').modal('hide');

            })
        });
    </script>
    <script>
        @if(session('success'))
        // alert(' {{ session('success') }} ');
        swal("Done!", "{{ session('success') }}", "success");
        @endif
    </script>

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

    <script src="../../js/function.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

</body>
@endsection