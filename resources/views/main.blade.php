@extends('layout.head')
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
@section('css')
    <link type="text/css" href="{{ asset('./css/main.css') }}" rel="stylesheet">
@endsection

@section('title', 'Sign in Form')


@section('content')


    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">

                <!-- START: SIGN IN -->
                <form action="{{ url('/main/checklogin') }}" class="sign-in-form" method="post">
                    {{ csrf_field() }}
                    <h2 class="title">Sign in</h2>

                    @if (isset(Auth::user()->username))
                        <script>
                            window.location = "/main/successlogin";
                        </script>
                    @endif
                  
                    <!-- BEGIN: Error Message-->
                    @if ($message = Session::get('error'))
                        <div class="alert alert-danger">
                            <button type="button" class="close" data-dismiss="alert">x</button>
                            <strong>{{ $message }}</strong>
                        </div>
                    @endif

                    
                    @if (count($errors) > 0)
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                    @if ($message = Session::get('message'))
                        <div class="alert alert-danger">
                            
                        <strong>{{ $message }}</strong>
                        </div>
                    @endif
                    @if ($info = Session::get('info'))
                        <div class="alert alert-danger">
                            
                        <strong>{{ $info }}</strong>
                        </div>
                    @endif
                    <!-- END: Error Message-->


                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" class="required" name="username" value="{{Session::get('verifiedEmail') ? Session::get('verifiedEmail') : old('username') }}"/>
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" class="required" name="password" id="password" />
                        <span>
                            <i class="fas fa-eye" id="eye" onclick="toggle()" value="Show password"></i>
                        </span>
                    </div>

                    <div class="remember">
                        <input type="checkbox" name="remember" value="remember">
                        <label>Remember Me</label>
                    </div>
                    <input type="submit" value="Login" class="btn solid" />
                    <div class="forgot">
                        <p> <a href="{{ url('/forgotpass') }}"> Forgot Password? </a> </p>
                    </div>
                </form>
                <!-- END: SIGN IN -->

            </div>
        </div>
    </div>



    <div class="panels-container">

        <!-- START: LEFT PANEL -->

        <div class="panel left-panel">
            <div class="content">
                <h3>New here ?</h3>
                <p>
                Sign up to be notified more about Rescue and Crime emergencies and Evacuation centers in your local area.
                </p>
                <button class="btn transparent" id="sign-up-btn"> <a style="text-decoration: none; color:white;"
                        href="{{ url('/registration') }}">
                        Sign up</a>
                </button>
            </div>
            <div style ="padding-right:13%"class="content">
                <h3>Quick Report</h3>
                <p>
                    Report Now! Click here to report a crime or incident immediately.
                </p>
                <button class="btn transparent" id="sign-up-btn"> <a style="text-decoration: none; color:white;"
                        href="{{ url('/quickreport') }}">
                        Report</a>
                </button>
            </div>
            <img src="img/log.png" class="image" alt="" />
        </div>

        <!-- END: LEFT PANEL -->

    </div>

    <!-- SCRIPTS -->
    <script src="./js/common/jquery-3.2.1.min.js"></script>
    <script src="./js/common/common_scripts.min.js"></script>
    <script src="./js/common/common_functions.min.js"></script>
    <script src="./js/function.js"></script>

    <script>
        //function toggle password
        function toggle() {
            var upass = document.getElementById('password');
            var toggleBtn = document.getElementById('eye');
            if (password.type == "password") {
                password.type = "text";
                eye.value = "Hide password";
                document.getElementById("eye").style.color = '#264653';
            } else {
                password.type = "password";
                eye.value = "Show password";
                document.getElementById("eye").style.color = '#ED8975';
            }
        }
    </script>
    <script>
        @if(session('success'))
            // alert(' {{ session('success') }} ');
            swal("Done!", "{{ session('success') }}", "success");
       @endif
    </script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    
@endsection
