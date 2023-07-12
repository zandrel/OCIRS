

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
    <script src="./src/assets/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <title>Dashboard</title>
    <link rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
        
    <link type="text/css" href="{{ asset('./ocirs_css/user-dashboard.css') }}" rel="stylesheet">

</head>
@extends('layout.dash-head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
@section('css')
    <link type="text/css" href="{{ asset('./ocirs_css/user-viewreport.css') }}" rel="stylesheet">
    
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
                    <i class='bx bx-cog'></i>
                        <span class="links_name">Account</span>
                    </a>
                </li>
                <li>
                    <a href="{{ url('/chatify') }}">
                    <i class='bx bx-message-dots' ></i>
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
            <div class="container">
        

                <h1 style="text-align: center;"><b>Report Details</b></h1>
        
                <form action="#">
                    <div class="form first">
        
                            <div class="fields">
                                <div class="input-field">
                                    <span class="title"><b>Brief message/narrative of complaint</b></span>
                                </div>
                                @foreach ($reportDescrip as $reportDescrips)
                                <div class="input-field">
                                <label>{{ $reportDescrips -> narrative }}</label>
                                </div>
                                
                                <div class="input-field">
                                <span class="title"><b>Location</b></span>
                                </div>
        
                                <div class="input-field">
                                <label>{{ $reportDescrips -> location }}</label>
                                </div>
        
                                <div class="input-field1">
                                <span class="title"><b>Image</b></span>
                                <img src="{{ asset('storage/image/Reported_Files/') . '/' . $reportDescrips->media }}"
                                    name="profile" alt="" style="width: 450px; height: 250px;">
                                    
                                </div>
        
        
                                <div class="input-field1">
                                <span class="title">Date of Crime/Incident</span>
                                <label>{{ $reportDescrips -> date }}</label>
                                <span class="title">Time of Crime/Incident</span>
                                <label>{{ $reportDescrips -> time }}</label>
                                </div>
                                @endforeach
        
                                                
                            </div>
        
                    </div>
                </form>
            </div>

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

       

        <script src="../../js/function.js"></script>

    </body>
@endsection


</html>