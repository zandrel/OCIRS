<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <!----======== CSS ======== -->

    <!----===== Iconscout CSS ===== -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link type="text/css" href="{{ asset('./ocirs_css/user-successreport.css') }}" rel="stylesheet">

    <title>Successful</title>
</head>

<body>

    <div class="container">


        <header>Report Submitted</header>

        <form action="#">
            <div class="form first">
                <div class="input-field">
                    <div class="img">
                        <img src="/ocirs_img/pnp.png" style="width: 120px; height: 130px;">
                    </div>

                    <div class="lbl">
                        <label>The Tuguegarao Police Department has received your report. Please be patient while we review your report and determine what kind of
                            action we will take. Police will be dispatched to your location as soon as possible. Thank you very much.
                        </label>
                    </div>
                </div>

            </div>

        </form>
        <div class="btn">
            <button class="nextBtn">
                <a href="{{ url('/main/ocirs_userdashboard') }}" class="myButton">
                <span class="btnText">Ok</span>
                </a>
            </button>
        </div>




    </div>




</body>

</html>