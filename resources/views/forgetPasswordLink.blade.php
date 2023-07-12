@extends('layout.head')


@section('css')
    <link type="text/css" href="{{ asset('./css/registration.css') }}" rel="stylesheet">
@endsection
@section('title', 'Forgot Password')


@section('content')


    <div class="container">
        <div class="forms-container">
            <div class="signin-signup">

                <!-- START: FORGOT PASS -->
                <form action="{{ route('reset.password.post') }}" class="sign-up-form" method="post">
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">

                    @if (count($errors) > 0)
                        <div class="alert alert-danger" style="margin-bottom: 15;">
                            <ul style="list-style: none">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="email_address" class="form-control" placeholder="Email" class="required"
                            name="email" required autofocus value="{{ old('email') }}" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password" class="form-control required" placeholder=" New Password"
                            name="password" required autofocus />
                        <span>
                            <i class="fas fa-eye" id="eye" onclick="toggle()" value="Show password"
                                aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password-confirm" class="form-control required"
                            placeholder=" Confirm New Password" name="password_confirmation" required autofocus />
                        <span>
                            <i class="fas fa-eye" id="eye1" onclick="toggle1()" value="Show password"
                                aria-hidden="true"></i>
                        </span>
                    </div>
                    <input type="submit" value="Send" class="btn solid" />
                </form>

                <!-- END: FORGOT PASS -->

            </div>
        </div>
    </div>



    <div class="panels-container">

        <!-- START: RIGHT PANEL -->

        <div class="panel right-panel">
            <div class="content">
                <h3>Reset Password</h3>
                <p>
                    Input the required information to reset your password.
                </p>
                <button class="btn transparent" id="sign-in-btn"> <a style="text-decoration: none; color:white;"
                        href="{{ url('/main') }}">
                        Sign in
                </button>
            </div>
           <!-- <img src="img/forgotpass.svg" class="image" alt="" /> -->
        </div>

        <!-- END: RIGHT PANEL -->

    </div>


    <!-- SCRIPTS -->
    <script src="./js/common/jquery-3.2.1.min.js"></script>
    <script src="./js/common/common_scripts.min.js"></script>
    <script src="./js/common/common_functions.min.js"></script>
    <script src="./js/function.js"></script>
    <script>
        //function toggle password 
        function toggle() {
            var password = document.querySelector('[name=password] ');
            if (password.getAttribute('type') === 'password') {
                password.setAttribute('type', 'text');
                document.getElementById("eye").style.
                color = '#264653';
            } else {
                password.setAttribute('type', 'password');
                document.getElementById("eye").style.
                color = '#ED8975';
            }
        }

        function toggle1() {
            var password = document.querySelector('[name=password_confirmation] ');
            if (password.getAttribute('type') === 'password') {
                password.setAttribute('type', 'text');
                document.getElementById("eye1").style.
                color = '#264653';
            } else {
                password.setAttribute('type', 'password');
                document.getElementById("eye1").style.
                color = '#ED8975';
            }
        }
    </script>
@endsection
