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
                <form action="{{ route('forgot.password.post') }}" class="sign-up-form" method="post">
                    @csrf
                    @if (Session::has('message'))
                        <div class="alert alert-success"  style="margin-bottom: 20;" role="alert">
                            {{ Session::get('message') }}
                        </div>
                    @endif

                    @if ($errors->has('email'))
                        <div class="text-danger" role="alert" style="margin-bottom: 20;">
                            {{ $errors->first('email') }}
                        </div>
                    @endif
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" id="email_address" class="form-control" placeholder="Type Email Here"
                            class="required" name="email" required autofocus />

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
                <h3>Forgot Password ?</h3>
                <p>
                    We will send you an email to reset your password.
                </p>
                <button class="btn transparent" id="sign-in-btn"> <a style="text-decoration: none; color:white;"
                        href="{{ url('/main') }}">
                        Sign in
                </button>
            </div>
            <img src="img/forgotpass.svg" class="image" alt="" />
        </div>

        <!-- END: RIGHT PANEL -->

    </div>


    <!-- SCRIPTS -->
    <script src="./js/common/jquery-3.2.1.min.js"></script>
    <script src="./js/common/common_scripts.min.js"></script>
    <script src="./js/common/common_functions.min.js"></script>
    <script src="./js/function.js"></script>
@endsection