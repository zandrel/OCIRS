@extends('layout.dash-head')

@section('css')
    <link type="text/css" href="{{ asset('./css/report-screen-style.css') }}" rel="stylesheet">
@endsection

@section('content')

    <div id="preloader">
        <div data-loader="circle-side"></div>
    </div><!-- /Preload -->
    <div id="loader_form">
        <div data-loader="circle-side-2"></div>
    </div><!-- /loader_form -->

    <body onload="SetDate();">
        <!-- sidebar -->
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
                    <a class="active" href="{{ url('/main/report') }}">
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
            <!-- navigation -->
            <nav>
                <div class="sidebar-button">
                    <i class='bx bx-menu sidebarBtn'></i>
                </div>
                <div class="profile-details">
                    <img src="{{ asset('storage/images/profile/icon').Auth::user()->sex.('.png')}}" alt="">
                    <span class="user_name"> {{ Auth::user()->username }}</span>
                </div>
            </nav>

            <!-- content -->
            <div class="report-content">
                <div class="container">
                    <div class="title">Report Emergency</div>
                    <div class="content">
                        @if (count($errors) > 0)
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form action="{{ url('main/report') }}" method="POST" enctype="multipart/form-data">
                            {{ csrf_field() }}
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Type of Emergency</span>
                                    <select type="number" required name="emergencyType">
                                        <option>Select type of Crime</option>
                                        <option {{ old('emergencyType') === 'Accident' ? 'selected' : '' }}
                                            value="Accident">Accident</option>
                                        <option {{ old('emergencyType') === 'Earthquake' ? 'selected' : '' }}
                                            value="Earthquake">Earthquake</option>
                                        <option {{ old('emergencyType') === 'Fire' ? 'selected' : '' }} value="Fire">
                                            Fire</option>
                                        <option {{ old('emergencyType') === 'Flood' ? 'selected' : '' }} value="Flood">
                                            Flood</option>
                                        <option {{ old('emergencyType') === 'Medical' ? 'selected' : '' }} value="Medical">
                                            Medical</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Date</span>
                                    <input type="date" id="emergencyDate" name="emergencyDate" disabled>
                                </div>
                                <div class="input-box">
                                    <span class="details">Contact Number <em>(in case your registered number is not available)</em></span>
                                    <input type="text" placeholder="Enter your contact number"
                                        name="contactNumber">
                                </div>
                                <div class="input-box">
                                    <span class="details">Upload Photo/Video</span>
                                    <input type="file" required style="padding: 5px" name="media" required>
                                </div>
                                <div class="input-box">
                                    <input type="hidden" id="latitude" name="latitude" />
                                    <input type="hidden" id="longitude" name="longitude" />
                                    <span class="details">Pin Location</span>
                                    {{-- <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#location-modal">
                                        Choose Location
                                    </button> --}}
                                    <!-- embedded map -->
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121696.45076788042!2d121.68942068789018!3d17.60206596015861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385842b52fcfde3%3A0x7cc3ed9c883c90cc!2sTuguegarao%2C%20Cagayan!5e0!3m2!1sen!2sph!4v1658071082112!5m2!1sen!2sph"
                                        style="border:0;" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div class="input-box2">
                                    <span class="details">
                                        <div class="input-boxL">
                                            <span class="details">Address</span>
                                            <input type="text" name="address" id="address"
                                                value="{{ old('address') }}">
                                        </div>
                                    </span>
                                    <div class="input-boxL">
                                        <span class="details">Landmark</span>
                                        <input type="text" name="landmark" value="{{ old('landmark') }}">
                                    </div>
                                    <div class="input-boxL">
                                        <span class="details">Emergency Details</span>
                                        <textarea name="emergencyDetails"> {{ old('emergencyDetails') }}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" value="REPORT">
                            </div>
                        </form>
                    </div>
        </section>
        <!-- Modal -->
        <div class="modal-dialog modal-dialog-centered" id="location-modal" tabindex="-1"
            aria-labelledby="location-modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="address-label">Choose Location</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div id="map"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        {{-- function for sidebar --}}
        <script>
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

        {{-- function for automatic date --}}
        <script>
            function SetDate() {
                var date = new Date();

                var day = date.getDate();
                var month = date.getMonth() + 1;
                var year = date.getFullYear();

                if (month < 10) month = "0" + month;
                if (day < 10) day = "0" + day;

                var today = year + "-" + month + "-" + day;


                document.getElementById('emergencyDate').value = today;
            }
        </script>
        {{-- function for gmaps --}}
        {{-- <script>
            function initModal() {
                $("location-modal").modal()
                var location = new google.maps.LatLng(0, 0);
                var mapProperty = {
                    center: location,
                    zoom: 50,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                map = new google.maps.Map(document.getElementById('map'), mapProperty);
                marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    position: location
                });
                geocodePosition(marker.getPosition());
                google.maps.event.addListener(marker, 'dragend', function() {
                    map.setCenter(marker.getPosition());
                    geocodePosition(marker.getPosition());
                    $("#latitude").val(marker.getPosition().lat());
                    $("#longitude").val(marker.getPosition().lng());
                });

                currentLat = $("#latitude").val();
                currentLng = $("#longitude").val();

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        $("#latitude").val(pos.lat);
                        $("#longitude").val(pos.lng);

                        marker.setPosition(pos);

                        map.setCenter(marker.getPosition());
                        geocodePosition(marker.getPosition());

                    })
                }
            }

            function getcodePosition(pos) {
                geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                        latLng: pos
                    },

                    function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            $("#address-label").html(results[0].formatted_address);
                            $("#address").val(results[0].formatted_address);
                        } else {
                            $("#address-label").html("cannot determine address at this location");
                        }
                    });
            }
        </script> --}}
        <script src="../../js/function.js"></script>
    </body>
@endsection
