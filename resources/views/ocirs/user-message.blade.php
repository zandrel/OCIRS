

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
        
    <link type="text/css" href="{{ asset('./ocirs_css/user-message.css') }}" rel="stylesheet">
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
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
                    <box-icon name='cog'></box-icon>
                        <span class="links_name">Account</span>
                    </a>
                </li>
                <li>
                    <a href="{{ url('/chatify') }}"class="active">
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
                <main>                                                                 <!--div body1 start-->
                <div class="conversation">                                                    <!--div container start-->
            <div class="rightSide">
                <div class="headertan">
                    <div class="imgtext">
                        <div class="userimg">
                            <img src="/ocirs_img/user.png" class="cover">
                        </div>
                     <h4>Incharge Police officer <br> <span>online</span></h4>
                    </div>
                </div>
                                                                                    <!--Chat Box-->
                <div class="chatbox">
                    <div class="message user_message">
                       <!--nag lagay lang ako hahaha--> 
                       <p>pulis <br> <span>12:00</span></p>
                    </div>
                    <div class="message admin_message">
                        <!--nag lagay lang ako hahaha--> 
                        <p>how can i help you?<br> <span>12:01</span></p>
                     </div>
                </div>
                                                                                                             <!--Chat Box input-->
            <div class="chatbox_input">
                <input type="text" placeholder="Type a message">
                <ion-icon name="send"></ion-icon>
            </div>
            </div>
<!----------------------------------------------------------------------------------------------------------->            
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