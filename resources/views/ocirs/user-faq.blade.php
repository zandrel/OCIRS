<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
    <script src="./src/assets/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <link type="text/css" href="{{ asset('./ocirs_css/user-faq.css') }}" rel="stylesheet">
    <!--faqs-->
    <link href="https://fonts.googleleapis.com/css?family=Open+Sans:100,300,400&display=swap" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootsrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/font-awesome.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://skywalkapps.github.io/bootstrap-notifications/stylesheets/bootstrap-notifications.css">

</head>
@extends('layout.dash-head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


@section('content')

<!-- initClock() that initializes the CPU clock and sets the system tick interval frequency  -->

<body onload="initClock()">
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
                <a href="{{ url('/main/ocirs_useraccount') }}">
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
                <a href="{{ url('/main/ocirs_userfaq') }}" class="active">
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
            <div class="banner">
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <main>
                <!----------------------------------------------------------------------------------------------->
                <section id="faqs">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="accordion mt-5" id="accordionExample">
                                @foreach ($faq as $faqs)
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h2 class="clearfix mb-0">
                                                <a class="btn btn-link" data-toggle="collapse" data-target="#collapseOne{{ $faqs->id }}" aria-expanded="true" aria-controls="collapseOne">{{ $faqs->faq_question }} <i class="fa fa-angle-down"></i></a>
                                            </h2>
                                        </div>
                                        <div id="collapseOne{{ $faqs->id }}" class="collapse" arial-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                            {{ $faqs->faq_answer }}
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                    <!-- <div class="card">
                                        <div class="card-header" id="headingTwo">
                                            <h2 class="clearfix mb-0">
                                                <a class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit.? <i class="fa fa-angle-down"></i></a>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" arial-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt labore ex repudiandae deserunt nam hic voluptatibus.
                                                Officiis mollitia, repellendus soluta doloremque cumque eaque? Perferendis beatae harum rerum recusandae. Vel, sequi?
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingThree">
                                            <h2 class="clearfix mb-0">
                                                <a class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Lorem ipsum dolor sit amet, consectetur adipisicing elit.? <i class="fa fa-angle-down"></i></a>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" class="collapse" arial-labelledby="headingThree" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt labore ex repudiandae deserunt nam hic voluptatibus.
                                                Officiis mollitia, repellendus soluta doloremque cumque eaque? Perferendis beatae harum rerum recusandae. Vel, sequi?
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingFour">
                                            <h2 class="clearfix mb-0">
                                                <a class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">Lorem ipsum dolor sit amet, consectetur adipisicing elit.? <i class="fa fa-angle-down"></i></a>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" class="collapse" arial-labelledby="headingFour" data-parent="#accordionExample">
                                            <div class="card-body">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt labore ex repudiandae deserunt nam hic voluptatibus.
                                                Officiis mollitia, repellendus soluta doloremque cumque eaque? Perferendis beatae harum rerum recusandae. Vel, sequi?
                                            </div>
                                        </div>

                                    </div> -->

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!----------------------------------------------------------------------------------------------->
            </main>
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
                @foreach (Auth::user()->notifications as $notification)
                  <strong class="notification-title">` + notification.title + `</strong>
                  <p class="notification-desc">` + notification.message + `</p>
                  
                  <div class="notification-meta">
                    <small class="timestamp">about a minute ago</small>
                  </div>
                  @foreach (Auth::user()->notifications as $notification)
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

</body>
@endsection


</html>