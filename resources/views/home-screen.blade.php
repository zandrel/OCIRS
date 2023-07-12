@extends('layout.dash-head')

@section('css')
    <link type="text/css" href="{{ asset('./css/home-screen-style.css') }}" rel="stylesheet">
@endsection

@section('content')

    <!-- initClock() that initializes the CPU clock and sets the system tick interval frequency  -->

    <body onload="initClock()">
        <div class="sidebar">
            <div class="logo-details">
                <img src="/img/logo.png" alt="">
                <span class="logo_name">ResQMe</span>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="{{ url('/main/home') }}" class="active">
                        <i class='bx bxs-home-heart'></i>
                        <span class="links_name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="{{ url('/main/report') }}">
                        <i class='bx bx-radio-circle-marked'></i>
                        <span class="links_name">Report Emergency</span>
                    </a>
                </li>
                <li>
                    <a href="{{ url('/main/search') }}">
                        <i class='bx bx-search-alt'></i>
                        <span class="links_name">Search Nearest Site</span>
                    </a>
                </li>
                <li>
                    <a href="{{ url('/main/news') }}">
                        <i class='bx bx-news'></i>
                        <span class="links_name">News</span>
                    </a>
                </li>
                <li>
                    <a href="{{ url('/main/settings') }}">
                        <i class='bx bxs-brightness'></i>
                        <span class="links_name">Settings</span>
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
                <div class="datetime">
                    <div class="date">
                        <span id="dayname">Day</span>,
                        <span id="month">Month</span>
                        <span id="daynum">00</span>,
                        <span id="year">Year</span>
                    </div>
                    <div class="time">
                        <span id="hour">00</span>:
                        <span id="minutes">00</span>:
                        <span id="seconds">00</span>
                        <span id="period">AM</span>
                    </div>
                </div>
                <div class="profile-details">
                    <img src="{{ asset('storage/images/profile/icon').Auth::user()->sex.('.png')}}" alt="">
                    <span class="user_name">
                        {{ Auth::user()->username }}
                    </span>
                </div>
            </nav>

            <!-- content of the dashboard, inlcudes report button section,
                            hotline numbers, reported activities -->

            <div class="home-content">
                <div class="cardBox">
                    <!-- button for report -->
                    <div class="card1">
                        <div>
                            <div class="card-content">
                                <a href="{{ url('/main/report') }}">
                                    REPORT EMERGENCY
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- card no idea -->
                    <!-- <div class="card">
                                    <div class="card-content">

                                    </div>
                                </div> -->
                </div>

                <!-- Hotline details -->
                <div class="details">
                    <div class="hotlines">
                        <div class="cardHeader">
                            <h2>Hotline Numbers</h2>
                        </div>
                        <table>
                            <tr>
                                <td width="60px">
                                    <i class='bx bxs-phone bx-tada'></i>
                                </td>
                                <td>
                                    <h4> City Command Center <br> <span>0916-887-2897</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <i class='bx bxs-phone bx-tada'></i>
                                </td>
                                <td>
                                    <h4> CDRRMO Operations Center <br> <span>0945-835-7924</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <i class='bx bxs-phone bx-tada'></i>
                                </td>
                                <td>
                                    <h4> Tuguegarao City Police Station <br> <span>0905-800-5118</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <i class='bx bxs-phone bx-tada'></i>
                                </td>
                                <td>
                                    <h4> RESCUE 1111 <br> <span>0906-622-9924</span></h4>
                                </td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <i class='bx bxs-phone bx-tada'></i>
                                </td>
                                <td>
                                    <h4> Bureau of Fire Protection (BFP) <br> <span>0917-811-3474</span></h4>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <!-- Recent reported activities -->
                    <div class="recentReports">
                        <div class="cardHeader">
                            <h2 class="title">Recent Reported Activities</h2>
                            <a href="#" class="btn">View All</a>
                        </div>
                        <table class="reports">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Date</td>
                                    <td>Report Type</td>
                                    <td>Status</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Medical</td>
                                    <td><span class="status received">Received</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Earthquake</td>
                                    <td><span class="status onGoing">On Going</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Accident</td>
                                    <td><span class="status pending">Pending</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Flood</td>
                                    <td><span class="status unResolved">Unresolved</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Accident</td>
                                    <td><span class="status resolved">Resolved</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Flood</td>
                                    <td><span class="status resolved">Resolved</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Flood</td>
                                    <td><span class="status resolved">Resolved</span></td>
                                    <td>Details</td>
                                </tr>
                                <tr>
                                    <td>Bob Beltran</td>
                                    <td>01/07/22</td>
                                    <td>Medical</td>
                                    <td><span class="status resolved">Resolved</span></td>
                                    <td>Details</td>
                                </tr>
                            </tbody>
                        </table>
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

        <script type="text/javascript">
            //function for clock, date and time
            function updateClock() {
                var now = new Date();
                var dname = now.getDay(),
                    mo = now.getMonth(),
                    dnum = now.getDate(),
                    yr = now.getFullYear(),
                    hou = now.getHours(),
                    min = now.getMinutes(),
                    sec = now.getSeconds(),
                    pe = "AM";

                if (hou >= 12) {
                    pe = "PM";
                }
                if (hou == 0) {
                    hou = 12;
                }
                if (hou > 12) {
                    hou = hou - 12;
                }

                Number.prototype.pad = function(digits) {
                    for (var n = this.toString(); n.length < digits; n = 0 + n);
                    return n;
                }

                var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October",
                    "November", "December"
                ];
                var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
                var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
                for (var i = 0; i < ids.length; i++)
                    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
            }

            function initClock() {
                updateClock();
                window.setInterval("updateClock()", 1);
            }
        </script>

        <script src="../../js/function.js"></script>

    </body>
@endsection
