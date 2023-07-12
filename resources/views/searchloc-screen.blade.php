@extends('layout.dash-head')

@section('css')
    <link type="text/css" href="{{ asset('./css/searchloc-screen-style.css') }}" rel="stylesheet">
@endsection

@section('content')
    <div id="preloader">
        <div data-loader="circle-side"></div>
    </div><!-- /Preload -->
    <div id="loader_form">
        <div data-loader="circle-side-2"></div>
    </div><!-- /loader_form -->

    <body onload="initClock()">
        <div class="sidebar">
            <div class="logo-details">
                <img src="/img/logo.png" alt="">
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
                    <a href="{{ url('/main/search') }}" class="active">
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
                <div class="profile-details">
                    <img src="{{ asset('storage/images/profile/icon').Auth::user()->sex.('.png')}}" alt="">
                    <span class="user_name">{{ Auth::user()->username }}</span>
                </div>
            </nav>
            <div class="map-content">
                <div class="container">
                    <div class="title-search">
                        <div class="title">Search Nearest Agency Location</div>
                        <form>
                            <div class="input-box">
                                <input type="text" placeholder="Search...">
                                <span class="icon">
                                    <i class="uil uil-search search-icon"></i>
                                </span>
                                <i class="uil uil-times close-icon"></i>
                        </form>
                    </div>
                </div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121696.44245257709!2d121.75946124999999!3d17.6020783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385842b52fcfde3%3A0x7cc3ed9c883c90cc!2sTuguegarao%2C%20Cagayan!5e0!3m2!1sen!2sph!4v1658535358497!5m2!1sen!2sph"
                        style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
        <script>
            // function for side-bar
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
            // function for search-bar
            let inputBox = document.querySelector(".input-box"),
                searchIcon = document.querySelector(".icon"),
                closeIcon = document.querySelector(".close-icon");

            searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
            closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));
        </script>
        <script src="../../js/function.js"></script>

    </body>
@endsection
