<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://skywalkapps.github.io/bootstrap-notifications/stylesheets/bootstrap-notifications.css">

    <script src="./src/assets/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link type="text/css" href="{{ asset('./ocirs_css/user-dashboard.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    <!--PIE CHART--------------------------------------------------------------------------------------------------------->
    <script type="text/javascript">
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
             var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['January',  <?php echo $january; ?>],
          ['February',  <?php echo $february; ?>],
          ['March',  <?php echo $march; ?>],
          ['April',  <?php echo $april; ?>],
          ['May',  <?php echo $may; ?>],
          ['June',  <?php echo $june; ?>],
          ['July',  <?php echo $july; ?>],
          ['August',  <?php echo $august; ?>],
          ['September',  <?php echo $september; ?>],
          ['October',  <?php echo $october; ?>],
          ['November',  <?php echo $november; ?>],
          ['December',  <?php echo $december; ?>],
        ]);
            var options = {
                title: '',
                legend: {
                    position: 'none'
                },
            };
            var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
            chart.draw(data, options);
        }
    </script>
    <!-- crime bar CHART----------------------------------------------------------------------------------------------------->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {
            'packages': ['bar']
        });
        google.charts.setOnLoadCallback(drawStuff);

        function drawStuff() {
            var data = new google.visualization.arrayToDataTable([
          ['Barangay', 'Total'],

          ["Ugac Sur",  <?php echo $UgacS; ?>],
          ["Ugac Norte", <?php echo $UgacN; ?>],
          ["Annafunan East", <?php echo $AnnafunanE; ?>],
          ["Annafunan West", <?php echo $AnnafunanW; ?>],
          ['Atulayan Norte', <?php echo $AtulayanN; ?>],
          ["Atulayan Sur", <?php echo $AtulayanS; ?>],
          ["Bagay", <?php echo $Bagay; ?>],
          ["Buntun", <?php echo $Buntun; ?>],
          ["Caggay", <?php echo $Caggay; ?>],
          ['Capatan', <?php echo $Capatan; ?>],
          ["Carig Norte", <?php echo $CarigN; ?>],
          ["Carig Sur", <?php echo $CarigS; ?>],
          ["Caritan Centro", <?php echo $CaritanC; ?>],
          ["Caritan Norte", <?php echo $CaritanN; ?>],
          ["Caritan Sur", <?php echo $CaritanS; ?>],
          ["Cataggaman Nuevo", <?php echo $CataggamanN; ?>],
          ['Cataggaman Pardo', <?php echo $CataggamanP; ?>],
          ["Cataggaman Viejo", <?php echo $CataggamanV; ?>],
          ["Centro 1", <?php echo $Centro1; ?>],
          ["Centro 2", <?php echo $Centro2; ?>],
          ["Centro 3", <?php echo $Centro3; ?>],
          ['Centro 4', <?php echo $Centro4; ?>],
          ["Centro 5", <?php echo $Centro5; ?>],
          ["Centro 6", <?php echo $Centro6; ?>],
          ["Centro 7", <?php echo $Centro7; ?>],
          ["Centro 8", <?php echo $Centro8; ?>],
          ['Centro 9', <?php echo $Centro9; ?>],
          ["Centro 10", <?php echo $Centro10; ?>],
          ["Centro 11", <?php echo $Centro11; ?>],
          ["Centro 12", <?php echo $Centro12; ?>],
          ["Dadda", <?php echo $Dadda; ?>],
          ['Gosi Norte', <?php echo $GosiN; ?>],
          ["Gosi Sur", <?php echo $GosiS; ?>],
          ["Larion Alto", <?php echo $LarionA; ?>],
          ["Larion Bajo", <?php echo $LarionB; ?>],
          ["Leonarda", <?php echo $Leonarda; ?>],
          ['Libag Norte', <?php echo $LibagN; ?>],
          ["Libag Sur", <?php echo $LibagS; ?>],
          ["Linao East", <?php echo $LinaoE; ?>],
          ["Linao Norte", <?php echo $LinaoN; ?>],
          ["Linao West", <?php echo $LinaoW; ?>],
          ['Nambbalan Norte', <?php echo $NambbalanN; ?>],
          ["Nambbalan Sur", <?php echo $NamabbalanS; ?>],
          ["Pallua Norte", <?php echo $PalluaN; ?>],
          ["Pallua Sur", <?php echo $PalluaS; ?>],
          ["Pengue", <?php echo $Pengue; ?>],
          ["Reyes", <?php echo $Reyes; ?>],
          ["San Gabriel", <?php echo $SanGabriel; ?>],
          ["Tagga", <?php echo $Tagga; ?>],
          ["Tanza", <?php echo $Tanza; ?>],

          
      ]);
            var options = {
                width: 1500,
                legend: {
                    position: 'none'
                },
                chart: {
                    title: '',
                    subtitle: ''
                },
                axes: {
                    x: {
                        0: {
                            side: 'bottom',

                        } // Top x-axis.
                    }
                },
                bar: {
                    groupWidth: "50%"
                },
                colors: ['blue']
            };
            var chart = new google.charts.Bar(document.getElementById('barChart'));
            // Convert the Classic options to Material options.
            chart.draw(data, google.charts.Bar.convertOptions(options));
        };
    </script>
    <!--bar incident CHART----------------------------------------------------------------------------------------------------------------------------------->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
        google.charts.load('current', {
            'packages': ['bar']
        });
        google.charts.setOnLoadCallback(drawStuff);

        function drawStuff() {
            var data = new google.visualization.arrayToDataTable([
          ['Barangay', 'Total'],

          ["Ugac Sur",  <?php echo $UgacS1; ?>],
          ["Ugac Norte", <?php echo $UgacN1; ?>],
          ["Annafunan East", <?php echo $AnnafunanE1; ?>],
          ["Annafunan West", <?php echo $AnnafunanW1; ?>],
          ['Atulayan Norte', <?php echo $AtulayanN1; ?>],
          ["Atulayan Sur", <?php echo $AtulayanS1; ?>],
          ["Bagay", <?php echo $Bagay1; ?>],
          ["Buntun", <?php echo $Buntun1; ?>],
          ["Caggay", <?php echo $Caggay1; ?>],
          ['Capatan', <?php echo $Capatan1; ?>],
          ["Carig Norte", <?php echo $CarigN1; ?>],
          ["Carig Sur", <?php echo $CarigS1; ?>],
          ["Caritan Centro", <?php echo $CaritanC1; ?>],
          ["Caritan Norte", <?php echo $CaritanN1; ?>],
          ["Caritan Sur", <?php echo $CaritanS1; ?>],
          ["Cataggaman Nuevo", <?php echo $CataggamanN1; ?>],
          ['Cataggaman Pardo', <?php echo $CataggamanP1; ?>],
          ["Cataggaman Viejo", <?php echo $CataggamanV1; ?>],
          ["Centro 1", <?php echo $Centro1q; ?>],
          ["Centro 2", <?php echo $Centro2q; ?>],
          ["Centro 3", <?php echo $Centro3q; ?>],
          ['Centro 4', <?php echo $Centro4q; ?>],
          ["Centro 5", <?php echo $Centro5q; ?>],
          ["Centro 6", <?php echo $Centro6q; ?>],
          ["Centro 7", <?php echo $Centro7q; ?>],
          ["Centro 8", <?php echo $Centro8q; ?>],
          ['Centro 9', <?php echo $Centro9q; ?>],
          ["Centro 10", <?php echo $Centro10q; ?>],
          ["Centro 11", <?php echo $Centro11q; ?>],
          ["Centro 12", <?php echo $Centro12q; ?>],
          ["Dadda", <?php echo $Dadda1; ?>],
          ['Gosi Norte', <?php echo $GosiN1; ?>],
          ["Gosi Sur", <?php echo $GosiS1; ?>],
          ["Larion Alto", <?php echo $LarionA1; ?>],
          ["Larion Bajo", <?php echo $LarionB1; ?>],
          ["Leonarda", <?php echo $Leonarda1; ?>],
          ['Libag Norte', <?php echo $LibagN1; ?>],
          ["Libag Sur", <?php echo $LibagS1; ?>],
          ["Linao East", <?php echo $LinaoE1; ?>],
          ["Linao Norte", <?php echo $LinaoN1; ?>],
          ["Linao West", <?php echo $LinaoW1; ?>],
          ['Nambbalan Norte', <?php echo $NambbalanN1; ?>],
          ["Nambbalan Sur", <?php echo $NamabbalanS1; ?>],
          ["Pallua Norte", <?php echo $PalluaN1; ?>],
          ["Pallua Sur", <?php echo $PalluaS1; ?>],
          ["Pengue", <?php echo $Pengue1; ?>],
          ["Reyes", <?php echo $Reyes1; ?>],
          ["San Gabriel", <?php echo $SanGabriel1; ?>],
          ["Tagga", <?php echo $Tagga1; ?>],
          ["Tanza", <?php echo $Tanza1; ?>],
            ]);
            var options = {
                width: 2000,
                legend: {
                    position: 'none'
                },
                chart: {
                    title: '',
                    subtitle: ''
                },
                axes: {
                    x: {
                        0: {
                            side: 'bottom',

                        } // Top x-axis.
                    }
                },
                bar: {
                    groupWidth: "50%"
                },
                colors: ['green']
            };
            var chart = new google.charts.Bar(document.getElementById('barchart'));
            // Convert the Classic options to Material options.
            chart.draw(data, google.charts.Bar.convertOptions(options));
        };
    </script>

</head>
@extends('layout.dash-head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
@section('css')
<link type="text/css" href="{{ asset('./ocirs_css/user-dashboard.css') }}" rel="stylesheet">

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
                <a href="{{ url('/main/ocirs_userdashboard') }}" class="active">
                    <i class='bx bxs-home-heart'></i>
                    <span class="links_name">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_useraccount') }}">
                    <i class='bx bx-radio-circle-marked'></i>
                    <span class="links_name">Account</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/chatify') }}">
                    <i class='bx bx-search-alt'></i>
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
            <main>
                <div class="banner">
                    <button class="reportnow">
                        <a href="{{ url('/main/ocirs_userreport') }}">
                            Report Now</a>
                    </button>
                </div>
                <div class="details">
                    <div class="stats">
                        <div class="cardHeader">
                            <h2>Status Guide</h2>
                        </div>
                        <table>
                            <tr>
                                <td width="60px">
                                    <button type="button" class="btn stat1">Validating </button>
                                </td>
                                <td>
                                    <p class="card-text">Report is under review by the PNP, this will only takes a minute to verify.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <button type="button" class="btn stat2">Dispatched </button>
                                </td>
                                <td>
                                    <p class="card-text">PNP personnel is already dispatched in the crime or incident location.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <button type="button" class="btn stat3">Processing </button>
                                </td>
                                <td>
                                    <p class="card-text">Report is being processed by the assigned PNP personnel regarding the information of the crime/incident</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <button type="button" class="btn stat4">Unresolved </button>
                                </td>
                                <td>
                                    <p class="card-text">Report is not yet settled, the following report is excerpt from the Police Blotter.</p>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <button type="button" class="btn stat5">Resolved </button>
                                </td>
                                <td>
                                    <p class="card-text">Report has been resolved.</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <!-- Recent reported activities -->
                    <div class="recentReports">
                        <div class="cardHeader">
                            <h2 class="title">Report Log</h2>
                        </div>
                        <table id="table_id" class="reports">
                            <thead>
                                <tr>
                                    <th>Report Code</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($reports as $reportss)
                                <tr>
                                    <td>{{ $reportss->id }}</td>
                                    <td>{{ $reportss->time }}</td>
                                    <td>{{ $reportss->date }}</td>
                                    <td> <p value ="{{ $reportss->reportstatus }}" class="btn">{{ $reportss->reportstatus }} </p></td>
                                    <td> <a href="{{ url('/main/ocirs_userviewreport/'.$reportss->id) }}"><span class="la la-eye"></span></a></td>
                                </tr>
                                @endforeach
                            <tbody>

                        </table>
                    </div>
                </div>
                <div class="title1">
                    <p>Latest Crime News</p>
                </div>
                <div class="cards1">
                    <div class="card">
                        <div class="card-single">
                            <div class="news1">
                                @foreach ($dnews1 as $displaynews1)
                                <!-- <img src="/ocirs_img/news2.png" width="100%"> -->
                                <img src="{{ asset('storage/image/news/') . '/' . $displaynews1->media }}" width="100%">
                                @endforeach
                                @foreach ($news as $newss)
                                @if ($newss->news_id == 1)
                                <h1><b>{{ $newss->newsTitle }}</b></h1>
                                <p>{{ $newss->newsDescrip }}
                                </p>
                                @endif
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-single">
                            <div class="news1">
                                @foreach ($dnews2 as $displaynews2)
                                <!-- <img src="/ocirs_img/news2.png" width="100%"> -->
                                <img src="{{ asset('storage/image/news/') . '/' . $displaynews2->media }}" width="100%">
                                @endforeach
                                @foreach ($news as $newss)
                                @if ($newss->news_id == 2)
                                <h1><b>{{ $newss->newsTitle }}</b></h1>
                                <p>{{ $newss->newsDescrip }}
                                </p>
                                @endif
                                @endforeach
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-single">
                            <div class="news1">
                                @foreach ($dnews3 as $displaynews3)
                                <!-- <img src="/ocirs_img/news2.png" width="100%"> -->
                                <img src="{{ asset('storage/image/news/') . '/' . $displaynews3->media }}" width="100%">
                                @endforeach
                                @foreach ($news as $newss)
                                @if ($newss->news_id == 3)
                                <h1><b>{{ $newss->newsTitle }}</b></h1>
                                <p>{{ $newss->newsDescrip }}
                                </p>
                                @endif
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cards3">
                    <div class="cards5">
                        <div class="title1">
                            <p> Monthly Crime/Incident Graph</p>
                        </div>
                        <div class="cards10">
                            <div id="pieChart" class="pie" style="width: 400px; height:400px;"></div>
                        </div>
                    </div>
                    <!--announcement-->
                    <div class="card6">
                        <div class="card-single1">
                            <div class="announcement">
                                <h1><b>Announcements</b></h1>

                                @foreach ($announcements as $announcementss)
                                @if ($announcementss->anno_id == 1)
                                <div class="inside">
                                    <h5><span class="la la-bullhorn"></span> {{ $announcementss->anno_title }}</h5>
                                    <br>
                                    <p>{{ $announcementss->anno_descrip }}</p>
                                    @endif
                                    @endforeach
                                    <br>
                                    @foreach ($announcements as $announcementss)
                                    @if ($announcementss->anno_id == 2)
                                    <h5><span class="la la-bullhorn"></span> {{ $announcementss->anno_title }}</h5>
                                    <br>
                                    <p>{{ $announcementss->anno_descrip }}</p>
                                    @endif
                                    @endforeach<br> @foreach ($announcements as $announcementss)
                                    @if ($announcementss->anno_id == 3)
                                    <h5><span class="la la-bullhorn"></span> {{ $announcementss->anno_title }}</h5>
                                    <br>
                                    <p>{{ $announcementss->anno_descrip }}</p>
                                    @endif
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---crime bar graph-->
                <div class="title1">
                    <p>Crime Graph</p>
                </div>
                <div class="cards2">
                    <div id="barChart" class="bar"></div>
                </div>
                <!---incident bar graph-->
                <div class="title1">
                    <p>Incident Graph</p>
                </div>
                <div class="cards9">
                    <div id="barchart" class="bar"></div>
                </div>
                <!---pie graph-->
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
    <script>
        $(document).ready(function() {
            $('#table_id').DataTable();
        });
    </script>

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