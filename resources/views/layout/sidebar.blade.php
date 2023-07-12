@section('side-bar')
    <div class="sidebar">
        <div class="logo-details">
            <img src="/img/logo.png" alt="">
            <span class="logo_name">ResQMe</span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="{{ url('main/home') }}" @yield('home-active')>
                    <i class='bx bxs-home-heart'></i>
                    <span class="links_name">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="{{ url('main/report') }}" @yield('report-active')>
                    <i class='bx bx-radio-circle-marked'></i>
                    <span class="links_name">Report Emergency</span>
                </a>
            </li>
            <li>
                <a href="{{ url('main/search') }}" @yield('search-active')>
                    <i class='bx bx-search-alt'></i>
                    <span class="links_name">Search Nearest Site</span>
                </a>
            </li>
            <li>
                <a href="{{ url('main/news') }}" @yield('news-active')>
                    <i class='bx bx-news'></i>
                    <span class="links_name">News</span>
                </a>
            </li>
            <li>
                <a href="{{ url('main/settings') }}" @yield('settings-active')>
                    <i class='bx bxs-brightness'></i>
                    <span class="links_name">Settings</span>
                </a>
            </li>


            <li class="log_out">
                <a href="{{ url('main/logout') }}">
                    <i class='bx bx-log-out'></i>
                    <span class="links_name">Log out</span>
                </a>
            </li>
        </ul>
    </div>
@endsection
