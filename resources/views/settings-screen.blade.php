@extends('layout.dash-head')

@section('css')
    <link type="text/css" href="{{ asset('./css/settings-screen-style.css') }}" rel="stylesheet">
@endsection

@section('content')

    <body>



        <div class="sidebar">
            <div class="logo-details">
                <img src="{{ asset('img/logo.png') }}" alt="">
                <span class="logo_name">ResQMe</span>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="{{ url('/main/home') }}">
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
                    <a href="{{ url('/main/settings') }}" class="active">
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
            <!-- navifation -->
            <nav>
                <div class="sidebar-button">
                    <i class='bx bx-menu sidebarBtn'></i>
                </div>
            </nav>
            <div class="home-content">
                <div class="profile-pic">
                    <img src="{{ asset('storage/images/profile/icon') . Auth::user()->sex . '.png' }}" name="profile"
                        alt="">
                    <h1>{{ Auth::user()->username }}</h1>
                    <input type="file" id="profile_pic" name="filename" style="opacity: 0; height:1px; display:none">
                    <a href="javascript:void(0)" id="change_profile">Change profile photo</a>
                </div>

                <!-- card container in editing user information and acct -->
                <div class="card">
                    <div class="card-body">
                        <ul class="navbar">
                            <li>
                                <a href="#" class="tab active" data-id="basicinfo">
                                    <span class="icon"><i class="fas fa-info"></i></span>
                                    <span class="text">Edit User Information</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="tab" data-id="account">
                                    <span class="icon"><i class="fas fa-user"></i></span>
                                    <span class="text">Edit Account</span>
                                </a>
                            </li>
                        </ul>
                        <!-- Edit user's information -->
                        <div class="tab-content">
                            <div class="tab-pane active" id="basicinfo">
                                <div class="content">
                                    <p>Note: You may not be able to edit other of your information for some validation
                                        purposes.
                                    <p>
                                    <form action={{ url('/main/settings') }} method="POST" id="editForm">
                                        {{ csrf_field() }}
                                        <div class="user-details">
                                            <div class="input-box">
                                                <span class="details">Full Name</span>
                                                <input type="text" name="fName" id="fName"
                                                    value="{{ Auth::user()->fName }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Gender</span>
                                                <input type="text" name="sex" id="sex"
                                                    value="{{ Auth::user()->sex }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Date of Birth</span>
                                                <input type="date" name="birthDate" id="birthDate"
                                                    value="{{ Auth::user()->birthDate }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Place of Birth</span>
                                                <input type="text" name="sex" id="sex"
                                                    value="{{ Auth::user()->municipality }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Civil Status</span>
                                                <input type="text" name="civilStatus" id="civilStatus"
                                                    value="{{ Auth::user()->civilStatus }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Street (House no./Slot no./Block)</span>
                                                <input type="text" name="street" id="street"
                                                    value="{{ Auth::user()->street }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Region</span>
                                                <input type="text" name="region" id="region"
                                                    value="{{ Auth::user()->region }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Province</span>
                                                <input type="text" name="province" id="province"
                                                    value="{{ Auth::user()->province }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Municipality</span>
                                                <input type="text" name="municipality" id="municipality"
                                                    value="{{ Auth::user()->municipality }}" disabled>
                                            </div>
                                            <div class="input-box" style="    padding-bottom: 40px">
                                                <span class="details">Barangay</span>
                                                <input type="text" name="barangay" id="barangay"
                                                    value="{{ Auth::user()->barangay }}" disabled>
                                            </div>

                                            <div class="input-box">
                                                <span class="details">Email Address</span>
                                                <input type="text" name="email" id="email"
                                                    value="{{ Auth::user()->email }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Mobile Number</span>
                                                <input type="text" name="mobileNum" id="mobileNum"
                                                    value="{{ Auth::user()->mobileNum }}" disabled>
                                            </div>
                                        </div>
                                        <div class="bot">
                                            <div class="button">
                                                <input type="submit" value="Edit">
                                            </div>
                                            <div class="button2">
                                                <input type="submit" value="Save">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- edit user's account -->
                            <div class="tab-pane" id="account">
                                <div class="content">
                                    <form action="/main/settings" method="POST" id="editForm">
                                        <div class="user-details">
                                            <div class="input-box">
                                                <span class="details">Username</span>
                                                <input type="text" name="username" id="username"
                                                    value="{{ Auth::user()->username }}" disabled>
                                            </div>
                                            <div class="input-box">
                                                <span class="details">Password</span>
                                                <input type="password" name="password" id="password"
                                                    value="{{ Auth::user()->password }}" disabled>
                                            </div>
                                        </div>
                                        <div class="bot">
                                            <div class="button">
                                                <input type="submit" value="Edit">
                                            </div>
                                            <div class="button2">
                                                <input type="submit" value="Save">
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

            // script for profile button
            $(document).on('click', '#change_profile', function() {
                $('#profile_pic').click();
            });

            // script for profile crop
            $('#profile_pic').ijaboCropTool({
                preview: '.profile_picture',
                setRatio: 1,
                allowedExtensions: ['jpg', 'jpeg', 'png'],
                buttonsText: ['CROP', 'QUIT'],
                buttonsColor: ['#30bf7d', '#ee5155', -15],
                processUrl: '{{ route('profilePictureUpdate') }}',
                // withCSRF:['_token','{{ csrf_token() }}'],
                onSuccess: function(message, element, status) {
                    alert(message);
                },
                onError: function(message, element, status) {
                    alert(message);
                }
            });
        </script>
        <script src="../../js/function.js"></script>
        


    </body>
@endsection
