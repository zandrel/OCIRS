<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">

    <link type="text/css" href="{{ asset('./ocirs_css/admin-data.css') }}" rel="stylesheet">


    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb60SsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>


    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <link rel="stylesheet" href="node_modules/mdbootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/mdbootstrap/css/mdb.min.css">
    <link rel="stylesheet" href="node_modules/mdbootstrap/css/style.css">

</head>
@extends('layout.dash-head')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


@section('content')


<body>
    <div class="sidebar">
        <div class="logo-details">
            <img src="/img/logo.png" alt="">
            <span class="logo_name">Crime and Incident Reporting</span>
        </div>
        <ul class="nav-links">
            <li>
                <a href="{{ url('/main/ocirs_admindashboard') }}">
                    <i class='bx bxs-home-heart'></i>
                    <span class="links_name">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminuseraccount') }}">
                    <i class='bx bx-radio-circle-marked'></i>
                    <span class="links_name">User's Account</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/chatify') }}">
                    <i class='bx bx-message-dots'></i>
                    <span class="links_name">Messaging</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminannouncement') }}">
                    <i class='bx bx-news'></i>
                    <span class="links_name">Announcement</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_admindata') }}" class="active">
                    <i class='bx bx-file'></i>
                    <span class="links_name">Data</span>

                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminarchive') }}">
                    <i class='bx bx-archive-in'></i>
                    <span class="links_name">Archive</span>

                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminsetting') }}">
                    <i class='bx bx-cog'></i>
                    <span class="links_name">Setting</span>

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
            <!-- automatic date and time -->

            <div class="profile-details">
                <img src="/ocirs_img/user.png" alt="">
                <span class="user_name">
                    {{ Auth::user()->fName }}
                    {{ Auth::user()->lName }}
                </span>
            </div>
        </nav>

        <!-- content of the dashboard, inlcudes report button section,
                            hotline numbers, reported activities -->

        <div class="home-content">
            <div class="content">
                <table id="dtBasicExample" class="table table-sm" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th class="th-sm">Barangay

                            </th>
                            <th class="th-sm">Crime

                            </th>
                            <th class="th-sm">Incident

                            </th>
                            <th class="th-sm">Total

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ugac Sur</td>
                            <td><?php echo $UgacS; ?></td>
                            <td><?php echo $UgacS1; ?></td>
                            <td><?php echo $UgacSt; ?></td>
                        </tr>
                        <tr>
                            <td>Ugac Norte</td>
                            <td><?php echo $UgacN; ?></td>
                            <td><?php echo $UgacN1; ?></td>
                            <td><?php echo $UgacNt; ?></td>
                        </tr>
                        <tr>
                            <td>Annafunan East</td>
                            <td><?php echo $AnnafunanE; ?></td>
                            <td><?php echo $AnnafunanE1; ?></td>
                            <td><?php echo $AnnafunanEt; ?></td>
                        </tr>
                        <tr>
                            <td>Annafunan West</td>
                            <td><?php echo $AnnafunanW; ?></td>
                            <td><?php echo $AnnafunanW1; ?></td>
                            <td><?php echo $AnnafunanWt; ?></td>
                        </tr>
                        <tr>
                            <td>Atulayan Norte</td>
                            <td><?php echo $AtulayanN; ?></td>
                            <td><?php echo $AtulayanN1; ?></td>
                            <td><?php echo $AtulayanNt; ?></td>
                        </tr>
                        <tr>
                            <td>Atulayan Sur</td>
                            <td><?php echo $AtulayanS; ?></td>
                            <td><?php echo $AtulayanS1; ?></td>
                            <td><?php echo $AtulayanSt; ?></td>
                        </tr>
                        <tr>
                            <td>Bagay</td>
                            <td><?php echo $Bagay; ?></td>
                            <td><?php echo $Bagay1; ?></td>
                            <td><?php echo $Bagayt; ?></td>
                        </tr>
                        <tr>
                            <td>Buntun</td>
                            <td><?php echo $Buntun; ?></td>
                            <td><?php echo $Buntun1; ?></td>
                            <td><?php echo $Buntunt; ?></td>
                        </tr>
                        <tr>
                            <td>Caggay</td>
                            <td><?php echo $Caggay; ?></td>
                            <td><?php echo $Caggay1; ?></td>
                            <td><?php echo $Caggayt; ?></td>
                        </tr>
                        <tr>
                            <td>Capatan</td>
                            <td><?php echo $Capatan; ?></td>
                            <td><?php echo $Capatan1; ?></td>
                            <td><?php echo $Capatant; ?></td>
                        </tr>
                        <tr>
                            <td>Carig Norte</td>
                            <td><?php echo $CarigN; ?></td>
                            <td><?php echo $CarigN1; ?></td>
                            <td><?php echo $CarigNt; ?></td>
                        </tr>
                        <tr>
                            <td>Carig Sur</td>
                            <td><?php echo $CarigS; ?></td>
                            <td><?php echo $CarigS1; ?></td>
                            <td><?php echo $CarigSt; ?></td>
                        </tr>
                        <tr>
                            <td>Caritan Centro</td>
                            <td><?php echo $CaritanC; ?></td>
                            <td><?php echo $CaritanC1; ?></td>
                            <td><?php echo $CaritanCt; ?></td>
                        </tr>
                        <tr>
                            <td>Caritan Norte</td>
                            <td><?php echo $CaritanN; ?></td>
                            <td><?php echo $CaritanN1; ?></td>
                            <td><?php echo $CaritanNt; ?></td>
                        </tr>
                        <tr>
                            <td>Caritan Sur</td>
                            <td><?php echo $CaritanS; ?></td>
                            <td><?php echo $CaritanS1; ?></td>
                            <td><?php echo $CaritanSt; ?></td>
                        </tr>
                        <tr>
                            <td>Cataggaman Nuevo</td>
                            <td><?php echo $CataggamanN; ?></td>
                            <td><?php echo $CataggamanN1; ?></td>
                            <td><?php echo $CataggamanNt; ?></td>
                        </tr>
                        <tr>
                            <td>Cataggaman Pardo</td>
                            <td><?php echo $CataggamanP; ?></td>
                            <td><?php echo $CataggamanP1; ?></td>
                            <td><?php echo $CataggamanPt; ?></td>
                        </tr>
                        <tr>
                            <td>Cataggaman Viejo</td>
                            <td><?php echo $CataggamanV; ?></td>
                            <td><?php echo $CataggamanV1; ?></td>
                            <td><?php echo $CataggamanVt; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 1</td>
                            <td><?php echo $Centro1; ?></td>
                            <td><?php echo $Centro1q; ?></td>
                            <td><?php echo $Centro1t; ?></td>
                        </tr>
                        <tr>
                            <td>Centro 2</td>
                            <td><?php echo $Centro2; ?></td>
                            <td><?php echo $Centro2q; ?></td>
                            <td><?php echo $Centro2t; ?></td>
                        </tr>
                        <tr>
                            <td>Centro 3</td>
                            <td><?php echo $Centro3; ?></td>
                            <td><?php echo $Centro3q; ?></td>
                            <td><?php echo $Centro3t; ?></td>
                        </tr>
                        <tr>
                            <td>Centro 4</td>
                            <td><?php echo $Centro4; ?></td>
                            <td><?php echo $Centro4q; ?></td>
                            <td><?php echo $Centro4t; ?></td>
                        </tr>
                        <tr>
                            <td>Centro 5</td>
                            <td><?php echo $Centro5; ?></td>
                            <td><?php echo $Centro5q; ?></td>
                            <td><?php echo $Centro5t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 6</td>
                            <td><?php echo $Centro6; ?></td>
                            <td><?php echo $Centro6q; ?></td>
                            <td><?php echo $Centro6t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 7</td>
                            <td><?php echo $Centro7; ?></td>
                            <td><?php echo $Centro7q; ?></td>
                            <td><?php echo $Centro7t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 8</td>
                            <td><?php echo $Centro8; ?></td>
                            <td><?php echo $Centro8q; ?></td>
                            <td><?php echo $Centro8t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 9</td>
                            <td><?php echo $Centro9; ?></td>
                            <td><?php echo $Centro9q; ?></td>
                            <td><?php echo $Centro9t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 10</td>
                            <td><?php echo $Centro10; ?></td>
                            <td><?php echo $Centro10q; ?></td>
                            <td><?php echo $Centro10t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 11</td>
                            <td><?php echo $Centro11; ?></td>
                            <td><?php echo $Centro11q; ?></td>
                            <td><?php echo $Centro11t; ?></td>

                        </tr>
                        <tr>
                            <td>Centro 12</td>
                            <td><?php echo $Centro12; ?></td>
                            <td><?php echo $Centro12q; ?></td>
                            <td><?php echo $Centro12t; ?></td>

                        </tr>
                        <tr>
                            <td>Dadda</td>
                            <td><?php echo $Dadda; ?></td>
                            <td><?php echo $Dadda1; ?></td>
                            <td><?php echo $Daddat; ?></td>

                        </tr>
                        <tr>
                            <td>Gosi Norte</td>
                            <td><?php echo $GosiN; ?></td>
                            <td><?php echo $GosiN1; ?></td>
                            <td><?php echo $GosiNt; ?></td>

                        </tr>
                        <tr>
                            <td>Gosi Sur</td>
                            <td><?php echo $GosiS; ?></td>
                            <td><?php echo $GosiS1; ?></td>
                            <td><?php echo $GosiSt; ?></td>

                        </tr>
                        <tr>
                            <td>Larion Alto</td>
                            <td><?php echo $LarionA; ?></td>
                            <td><?php echo $LarionA1; ?></td>
                            <td><?php echo $LarionAt; ?></td>
                        </tr>
                        <tr>
                            <td>Larion Bajo</td>
                            <td><?php echo $LarionB; ?></td>
                            <td><?php echo $LarionB1; ?></td>
                            <td><?php echo $LarionBt; ?></td>

                        </tr>
                        <tr>
                            <td>Leonarda</td>
                            <td><?php echo $Leonarda; ?></td>
                            <td><?php echo $Leonarda1; ?></td>
                            <td><?php echo $Leonardat; ?></td>

                        </tr>
                        <tr>
                            <td>Libag Norte</td>
                            <td><?php echo $LibagN; ?></td>
                            <td><?php echo $LibagN1; ?></td>
                            <td><?php echo $LibagNt; ?></td>

                        </tr>
                        <tr>
                            <td>Libag Sur</td>
                            <td><?php echo $LibagS; ?></td>
                            <td><?php echo $LibagS1; ?></td>
                            <td><?php echo $LibagSt; ?></td>

                        </tr>
                        <tr>
                            <td>Linao East</td>
                            <td><?php echo $LinaoE; ?></td>
                            <td><?php echo $LinaoE1; ?></td>
                            <td><?php echo $LinaoEt; ?></td>

                        </tr>
                        <tr>
                            <td>Linao Norte</td>
                            <td><?php echo $LinaoN; ?></td>
                            <td><?php echo $LinaoN1; ?></td>
                            <td><?php echo $LinaoNt; ?></td>
                        </tr>
                        <tr>
                            <td>Libag West</td>
                            <td><?php echo $LinaoW; ?></td>
                            <td><?php echo $LinaoW1; ?></td>
                            <td><?php echo $LinaoWt; ?></td>

                        </tr>
                        <tr>
                            <td>Namabbalan Norte</td>
                            <td><?php echo $NambbalanN; ?></td>
                            <td><?php echo $NambbalanN1; ?></td>
                            <td><?php echo $NambbalanNt; ?></td>

                        </tr>
                        <tr>
                            <td>Namabbalan Sur</td>
                            <td><?php echo $NamabbalanS; ?></td>
                            <td><?php echo $NamabbalanS1; ?></td>
                            <td><?php echo $NamabbalanSt; ?></td>

                        </tr>
                        <tr>
                            <td>Pallua Norte</td>
                            <td><?php echo $PalluaN; ?></td>
                            <td><?php echo $PalluaN1; ?></td>
                            <td><?php echo $PalluaNt; ?></td>

                        </tr>
                        <tr>
                            <td>Pallua Sur</td>
                            <td><?php echo $PalluaS; ?></td>
                            <td><?php echo $PalluaS1; ?></td>
                            <td><?php echo $PalluaSt; ?></td>

                        </tr>
                        <tr>
                            <td>Pengue</td>
                            <td><?php echo $Pengue; ?></td>
                            <td><?php echo $Pengue1; ?></td>
                            <td><?php echo $Penguet; ?></td>

                        </tr>
                        <tr>
                            <td>Reyes</td>
                            <td><?php echo $Reyes; ?></td>
                            <td><?php echo $Reyes1; ?></td>
                            <td><?php echo $Reyest; ?></td>

                        </tr>
                        <tr>
                            <td>San Gabriel</td>
                            <td><?php echo $SanGabriel; ?></td>
                            <td><?php echo $SanGabriel1; ?></td>
                            <td><?php echo $SanGabrielt; ?></td>

                        </tr>
                        <tr>
                            <td>Tagga</td>
                            <td><?php echo $Tagga; ?></td>
                            <td><?php echo $Tagga1; ?></td>
                            <td><?php echo $Taggat; ?></td>

                        </tr>
                        <tr>
                            <td>Tanza</td>
                            <td><?php echo $Tanza; ?></td>
                            <td><?php echo $Tanza1; ?></td>
                            <td><?php echo $Tanzat; ?></td>
                        </tr>
                </table>


                <form action="{{ route('data.download') }}" method="post" target="__blank" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    {{ method_field('put') }}
                    <button class="dbutton" type="submit">Download</button>
                </form>





            </div>

        </div>
    </section>


    <script type="text/javascript">
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
    </script>

    <script src="../../js/common/jquery-3.2.1.min.js"></script>
    <script src="../../js/function.js"></script>

    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>

    <script type="text/javascript" src="node_modules/mdbootstrap/js/jquery.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/popper.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="node_modules/mdbootstrap/js/mdb.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#dtBasicExample').DataTable();
            $('.dataTables_length').addClass('bs-select');
        });
    </script>
</body>
@endsection

</html>