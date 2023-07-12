<!DOCTYPE html>
<html>

<head>
    <style>
        *{
            font-family: 'Poppins', sans-serif;
        }
        body {
            background-color: white;
            height: 100%;
        }

        p {
            color: red;
        }
        .container{
            background-color:#0D2048;
  margin: auto;
  width: 50%;
  padding: 10px;
        }
    </style>
</head>

<body>
<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Poppins', sans-serif;">
        <tr>
            <td>
                <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                    align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="height:150px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <a href="" title="logo" target="_blank">
                                <img width="200" src="{{ asset('img/logo.png') }}" title="logo" alt="logo">
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td style="padding:0 35px;">
                                        <h1
                                            style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                            Your Account is Currently Unverified</h1>
                                        <span
                                            style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                         Please allow us to review and verify your account, you will be notified after one (1) to two (2) days before you can access your account. This is to ensure that all accounts are legitimate to avoid fraudulent report. We appreciate your patience and understanding. 
        
                                        </p>
                                        <a  href="{{ url('/main/logout') }}"
                                            style="background:#0D2048;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Ok</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height:40px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align:center;">
                            <p
                                style="font-size:14px; color:#0D2048; line-height:18px; margin:0 0 0;">
                        </td>
                    </tr>
                    <tr>
                        <td style="height:215px;">&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</html>