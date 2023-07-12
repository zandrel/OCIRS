<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="UTF-8">
    <link type="text/css" href="{{ asset('./css/news-screen-style.css') }}" rel="stylesheet">
    <!-- Boxicons CDN Link -->
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <div id="preloader">
        <div data-loader="circle-side"></div>
    </div><!-- /Preload -->
    <div id="loader_form">
        <div data-loader="circle-side-2"></div>
    </div><!-- /loader_form -->

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
                <a href="{{ url('/main/search') }}">
                    <i class='bx bx-search-alt'></i>
                    <span class="links_name">Search Nearest Site</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/news') }}" class="active">
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
                <span class="dashboard"></span>
            </div>
            <div class="profile-details">
                <img src="{{ asset('storage/images/profile/icon').Auth::user()->sex.('.png')}}" alt="">
                <span class="user_name">{{ Auth::user()->username }}</span>
            </div>
        </nav>
        <div class="home-content">
            <!-- News containers -->
            <div class="container">
                <div class="title">News</div>
                <div class="grid">
                    <div class="card">
                        <div class="card_img">
                            <img src="/img/news1.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h2 class="card_title">Lorem ipsum dolor sit</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum porro, illum totam
                                nostrum sit delectus nisi sint magni perspiciatis adipisci?</p>
                            <a href="#" class="read_more">Read article</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card_img">
                            <img src="/img/news2.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h2 class="card_title">Lorem ipsum dolor sit</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio quidem, est labore
                                earum reprehenderit quibusdam id iure delectus nemo.</p>
                            <a href="#" class="read_more">Read article</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card_img">
                            <img src="/img/news3.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h2 class="card_title">Lorem ipsum dolor sit</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio quidem, est labore
                                earum reprehenderit quibusdam id iure delectus nemo.</p>
                            <a href="#" class="read_more">Read article</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card_img">
                            <img src="/img/news4.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h2 class="card_title">Lorem ipsum dolor sit</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum porro, illum totam
                                nostrum sit delectus nisi sint magni perspiciatis adipisci?</p>
                            <a href="#" class="read_more">Read article</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card_img">
                            <img src="/img/news5.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h2 class="card_title">Lorem ipsum dolor sit</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio quidem, est labore
                                earum reprehenderit quibusdam id iure delectus nemo.</p>
                            <a href="#" class="read_more">Read article</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card_img">
                            <img src="/img/news6.jpg" alt="">
                        </div>
                        <div class="card_body">
                            <h2 class="card_title">Lorem ipsum dolor sit</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio quidem, est labore
                                earum reprehenderit quibusdam id iure delectus nemo.</p>
                            <a href="#" class="read_more">Read article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        //function for sidebar
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

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="../../js/function.js"></script>

</body>

</html>
