<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/charts.css/dist/charts.min.css">
    <link rel="stylesheet" href="https://unpkg.com/charts.css/dist/charts.min.css">
    <script src="./src/assets/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    <title>Announcement</title>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet" href="{{ asset('./css/common/ijaboCropTool.min.css') }}">
    <link type="text/css" href="{{ asset('./ocirs_css/admin-announcement.css') }}" rel="stylesheet">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
@extends('layout.dash-head')
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
@section('css')


@endsection

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
                <a href="{{ url('/main/ocirs_adminmessaging') }}">
                    <i class='bx bx-search-alt'></i>
                    <span class="links_name">Messaging</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_adminuserdashboard') }}" class="active">
                    <i class='bx bx-news'></i>
                    <span class="links_name">Announcement</span>
                </a>
            </li>
            <li>
                <a href="{{ url('/main/ocirs_admindata') }}">
                <i class='bx bx-file' ></i>
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

        <div class="main-content">
            <div class="graph">
                <div class="title2">
                    <p><b>Crime/Incident Graph</b></p>
                </div>

                <div class="card4 ">
                    <div class="barangay">
                        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                        <script type="text/javascript">
                            google.charts.load('current', {
                                'packages': ['bar']
                            });
                            google.charts.setOnLoadCallback(drawStuff);

                           
                            function drawStuff() {
                                var data = new google.visualization.arrayToDataTable([
          ['Barangay', 'Total'],

          ["Ugac Sur",  <?php echo $UgacS; ?>],
          ["Ugac Norte", <?php echo $UgacN; ?>],
          ["Annafunan East", <?php echo $AnnafunanE; ?>],
          ["Annafunan West", <?php echo $AnnafunanW; ?>],
          ['Atulayan Norte', <?php echo $AtulayanN; ?>],
          ["Atulayan Sur", <?php echo $AtulayanS; ?>],
          ["Bagay", <?php echo $Bagay; ?>],
          ["Buntun", <?php echo $Buntun; ?>],
          ["Caggay", <?php echo $Caggay; ?>],
          ['Capatan', <?php echo $Capatan; ?>],
          ["Carig Norte", <?php echo $CarigN; ?>],
          ["Carig Sur", <?php echo $CarigS; ?>],
          ["Caritan Centro", <?php echo $CaritanC; ?>],
          ["Caritan Norte", <?php echo $CaritanN; ?>],
          ["Caritan Sur", <?php echo $CaritanS; ?>],
          ["Cataggaman Nuevo", <?php echo $CataggamanN; ?>],
          ['Cataggaman Pardo', <?php echo $CataggamanP; ?>],
          ["Cataggaman Viejo", <?php echo $CataggamanV; ?>],
          ["Centro 1", <?php echo $Centro1; ?>],
          ["Centro 2", <?php echo $Centro2; ?>],
          ["Centro 3", <?php echo $Centro3; ?>],
          ['Centro 4', <?php echo $Centro4; ?>],
          ["Centro 5", <?php echo $Centro5; ?>],
          ["Centro 6", <?php echo $Centro6; ?>],
          ["Centro 7", <?php echo $Centro7; ?>],
          ["Centro 8", <?php echo $Centro8; ?>],
          ['Centro 9', <?php echo $Centro9; ?>],
          ["Centro 10", <?php echo $Centro10; ?>],
          ["Centro 11", <?php echo $Centro11; ?>],
          ["Centro 12", <?php echo $Centro12; ?>],
          ["Dadda", <?php echo $Dadda; ?>],
          ['Gosi Norte', <?php echo $GosiN; ?>],
          ["Gosi Sur", <?php echo $GosiS; ?>],
          ["Larion Alto", <?php echo $LarionA; ?>],
          ["Larion Bajo", <?php echo $LarionB; ?>],
          ["Leonarda", <?php echo $Leonarda; ?>],
          ['Libag Norte', <?php echo $LibagN; ?>],
          ["Libag Sur", <?php echo $LibagS; ?>],
          ["Linao East", <?php echo $LinaoE; ?>],
          ["Linao Norte", <?php echo $LinaoN; ?>],
          ["Linao West", <?php echo $LinaoW; ?>],
          ['Nambbalan Norte', <?php echo $NambbalanN; ?>],
          ["Nambbalan Sur", <?php echo $NamabbalanS; ?>],
          ["Pallua Norte", <?php echo $PalluaN; ?>],
          ["Pallua Sur", <?php echo $PalluaS; ?>],
          ["Pengue", <?php echo $Pengue; ?>],
          ["Reyes", <?php echo $Reyes; ?>],
          ["San Gabriel", <?php echo $SanGabriel; ?>],
          ["Tagga", <?php echo $Tagga; ?>],
          ["Tanza", <?php echo $Tanza; ?>],

                                ]);

                                var options = {
                                    width: 1500,
                                    legend: {
                                        position: 'none'
                                    },
                                    chart: {
                                        title: '',
                                        subtitle: ''
                                    },
                                    axes: {
                                        x: {
                                            0: {
                                                side: 'bottom',

                                            } // Top x-axis.
                                        }
                                    },
                                    bar: {
                                        groupWidth: "50%"
                                    },
                                    colors: ['blue']
                                };

                                var chart = new google.charts.Bar(document.getElementById('barChart'));
                                // Convert the Classic options to Material options.
                                chart.draw(data, google.charts.Bar.convertOptions(options));
                            };
                        </script>
                        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                        <script type="text/javascript">
                            google.charts.load('current', {
                                'packages': ['bar']
                            });
                            google.charts.setOnLoadCallback(drawStuff);

                            function drawStuff() {
                                var data = new google.visualization.arrayToDataTable([
          ['Barangay', 'Total'],

          ["Ugac Sur",  <?php echo $UgacS1; ?>],
          ["Ugac Norte", <?php echo $UgacN1; ?>],
          ["Annafunan East", <?php echo $AnnafunanE1; ?>],
          ["Annafunan West", <?php echo $AnnafunanW1; ?>],
          ['Atulayan Norte', <?php echo $AtulayanN1; ?>],
          ["Atulayan Sur", <?php echo $AtulayanS1; ?>],
          ["Bagay", <?php echo $Bagay1; ?>],
          ["Buntun", <?php echo $Buntun1; ?>],
          ["Caggay", <?php echo $Caggay1; ?>],
          ['Capatan', <?php echo $Capatan1; ?>],
          ["Carig Norte", <?php echo $CarigN1; ?>],
          ["Carig Sur", <?php echo $CarigS1; ?>],
          ["Caritan Centro", <?php echo $CaritanC1; ?>],
          ["Caritan Norte", <?php echo $CaritanN1; ?>],
          ["Caritan Sur", <?php echo $CaritanS1; ?>],
          ["Cataggaman Nuevo", <?php echo $CataggamanN1; ?>],
          ['Cataggaman Pardo', <?php echo $CataggamanP1; ?>],
          ["Cataggaman Viejo", <?php echo $CataggamanV1; ?>],
          ["Centro 1", <?php echo $Centro1q; ?>],
          ["Centro 2", <?php echo $Centro2q; ?>],
          ["Centro 3", <?php echo $Centro3q; ?>],
          ['Centro 4', <?php echo $Centro4q; ?>],
          ["Centro 5", <?php echo $Centro5q; ?>],
          ["Centro 6", <?php echo $Centro6q; ?>],
          ["Centro 7", <?php echo $Centro7q; ?>],
          ["Centro 8", <?php echo $Centro8q; ?>],
          ['Centro 9', <?php echo $Centro9q; ?>],
          ["Centro 10", <?php echo $Centro10q; ?>],
          ["Centro 11", <?php echo $Centro11q; ?>],
          ["Centro 12", <?php echo $Centro12q; ?>],
          ["Dadda", <?php echo $Dadda1; ?>],
          ['Gosi Norte', <?php echo $GosiN1; ?>],
          ["Gosi Sur", <?php echo $GosiS1; ?>],
          ["Larion Alto", <?php echo $LarionA1; ?>],
          ["Larion Bajo", <?php echo $LarionB1; ?>],
          ["Leonarda", <?php echo $Leonarda1; ?>],
          ['Libag Norte', <?php echo $LibagN1; ?>],
          ["Libag Sur", <?php echo $LibagS1; ?>],
          ["Linao East", <?php echo $LinaoE1; ?>],
          ["Linao Norte", <?php echo $LinaoN1; ?>],
          ["Linao West", <?php echo $LinaoW1; ?>],
          ['Nambbalan Norte', <?php echo $NambbalanN1; ?>],
          ["Nambbalan Sur", <?php echo $NamabbalanS1; ?>],
          ["Pallua Norte", <?php echo $PalluaN1; ?>],
          ["Pallua Sur", <?php echo $PalluaS1; ?>],
          ["Pengue", <?php echo $Pengue1; ?>],
          ["Reyes", <?php echo $Reyes1; ?>],
          ["San Gabriel", <?php echo $SanGabriel1; ?>],
          ["Tagga", <?php echo $Tagga1; ?>],
          ["Tanza", <?php echo $Tanza1; ?>],
                                ]);
                                var options = {
                                    width: 1500,
                                    legend: {
                                        position: 'none'
                                    },
                                    chart: {
                                        title: '',
                                        subtitle: ''
                                    },
                                    axes: {
                                        x: {
                                            0: {
                                                side: 'bottom',
                                            } // Top x-axis.
                                        }
                                    },
                                    bar: {
                                        groupWidth: "50%"
                                    },
                                    colors: ['green']
                                };
                                var chart = new google.charts.Bar(document.getElementById('barchart2'));
                                // Convert the Classic options to Material options.
                                chart.draw(data, google.charts.Bar.convertOptions(options));
                            };
                        </script>
                        <div class="title1">
                            <!---crime bar graph-->
                            <p>Crime Graph</p>
                        </div>
                        <div class="cards2">
                            <div id="barChart" class="bar"></div>
                        </div>
                        <!---incident bar graph-->
                        <div class="title1">
                            <p>Incident Graph</p>
                        </div>
                        <div class="cards9">
                            <div id="barchart2" class="bar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!---pie bar graph-->
            <div class="title1">
                <p>Monthly Graph</p>
            </div>
            <div class="cards5 ">
                <script type="text/javascript">
                    google.charts.load('current', {
                        'packages': ['corechart']
                    });
                    google.charts.setOnLoadCallback(drawChart);

                    function drawChart() {
                        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['January',  <?php echo $january; ?>],
          ['February',  <?php echo $february; ?>],
          ['March',  <?php echo $march; ?>],
          ['April',  <?php echo $april; ?>],
          ['May',  <?php echo $may; ?>],
          ['June',  <?php echo $june; ?>],
          ['July',  <?php echo $july; ?>],
          ['August',  <?php echo $august; ?>],
          ['September',  <?php echo $september; ?>],
          ['October',  <?php echo $october; ?>],
          ['November',  <?php echo $november; ?>],
          ['December',  <?php echo $december; ?>],
                        ]);
                        var options = {
                            title: '',
                            legend: {
                                position: 'none'
                            },
                        };
                        var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
                        chart.draw(data, options);
                    }
                </script>
                <div class="cards10">
                    <div id="pieChart" class="pie" style="width: 400px; height:400px;"></div>
                </div>
            </div>
        </div>

        <div class="grid-container">
            <div class="grid-item">
                <div class="grid-item">

                    <table class="table" style="margin-bottom:10px; margin-left:20px; width:95%; ">
                        <thead>
                            <tr>
                                <th scope="col">FAQs ID</th><br>
                                <th scope="col">FAQs Subject</th>
                                <th scope="col">FAQs Details</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($faq as $faqs)
                            <tr style="width:10px;">
                                <td style="margin: 10px; padding-right:70px; padding-left:30px;">{{ $faqs->id }}</td>
                                <td style="margin: 10px;">{{ $faqs->faq_question }}</td>
                                <td style="margin: 10px;">
                                    {{ $faqs->faq_answer }}
                                </td>

                                <td style="padding-top: 12px;">

                                    <button style="margin:2px; " class="btn btn-primary" type="button" data-bs-toggle="modal" title="Edit Announcement" data-bs-target="#EditfaqModal{{ $faqs->id }}">
                                        <i class="fa-xs fa fa-pen"></i></button>
                                </td>

                            </tr>


                            <!-- Edit faq Modal -->
                            <div class="modal fade modal-lg" id="EditfaqModal{{ $faqs->id }}" tabindex="-1" aria-labelledby="EditAnnouncementModal" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <form method="POST" action="{{route ('updateFaq' , ['faq' => $faqs->id])}}">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="EditAnnouncementModalLabel">
                                                    Edit FAQ Information</h1>
                                                <i type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></i>
                                            </div>
                                            <div class="modal-body">
                                                <div class="mb-1">
                                                    <label for="AnnouncementSubject" class="form-label">FAQ
                                                        Subject</label>
                                                    <input required type="text" class="form-control" id="faq_question" name="faq_question" value="{{ $faqs->faq_question }}">
                                                    <span class="message">

                                                    </span>
                                                </div>
                                                <div class="mb-1">
                                                    <label for="AnnouncementDetails" class="form-label">FAQ
                                                        Details</label>
                                                    <textarea required type="text" class="form-control" id="faq_answer" value="{{ $faqs->faq_answer }}" name="faq_answer">{{ $faqs->faq_answer }}</textarea>
                                                    <span class="message">

                                                    </span>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background: #264653">Close</button>
                                                <button type="submit" class="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            @endforeach
                        </tbody>
                    </table>
                    <div class="add-user">
                        <button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#AddfaqModal"> Add FAQ

                    </div>
                </div>
            </div>

            <div class="modal fade modal-lg" id="AddfaqModal" tabindex="-1" aria-labelledby="AddAnnouncementModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <form action="{{route ('addfaqs' )}}" method="POST">
                        @csrf
                                            @method('PUT')
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="AddAnnouncementModalLabel">
                                    Add FAQ Information</h1>
                                <i type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></i>
                            </div>
                            <div class="modal-body">
                            
                                <div class="mb-1">
                                    <label for="AnnouncementSubject" class="form-label">FAQ
                                        Subject</label>
                                    <input required type="text" class="form-control" id="faq_question" name="faq_question">
                                    <span class="message">
                                        @error('AnnouncementSubject')
                                        {{ $message }}
                                        @enderror
                                    </span>
                                </div>
                                <div class="mb-1">
                                    <label for="AnnouncementDetails" class="form-label">FAQ
                                        Answer</label>
                                    <textarea required type="text" class="form-control" id="faq_answer" name="faq_answer"></textarea>
                                    <span class="message">
                                        @error('AnnouncementDetails')
                                        {{ $message }}
                                        @enderror
                                    </span>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background: #264653">Close</button>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!---------------------------------------------------------------------------->
            <div class="grid-container1">
                <div class="grid-item" style="padding:20px; margin-left:20px;">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Announcement ID</th>
                                <th scope="col">Announcement Title</th>
                                <th scope="col">Announcement Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($announcements as $announcement)
                            <tr>
                                <td style="padding-top: 20px; padding-right:150;">{{ $announcement->anno_id }}</td>
                                <td style="padding-top: 20px;">{{ $announcement->anno_title }}</td>
                                <td style="padding-top: 20px;">{{ $announcement->anno_descrip }}</td>
                                <td style="padding-top: 20px;">

                                    <button type="button" data-bs-toggle="modal" title="Edit Announcement" class="btn btn-danger btn-sm" data-bs-target="#EditAnnouncementModal{{ $announcement->anno_id }}">
                                        <i style=" margin:5px; font-size:10px;" class='fa-xs fa fa-pen '></i></button>
                                    <input type="hidden" class="deletebtn_val_id" value="{{ $announcement->anno_id }}">
                </div>

                </td>
                </tr>
                @endforeach





                @foreach ($announcements as $announcement)
                <!-- Edit Announcement Modal -->
                <div class="modal fade modal-lg" id="EditAnnouncementModal{{ $announcement->anno_id }}" tabindex="-1" aria-labelledby="EditAnnouncementModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form action="{{route ('admineditanno' , ['anno_id' => $announcement->anno_id])}}" method="POST" enctype="multipart/form-data">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="EditAnnouncementModalLabel">
                                        Edit Announcement Information</h1>
                                    <i type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></i>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-1">
                                        <label for="anno_title" class="form-label">Announcement
                                            Subject</label>
                                        <input type="text" class="form-control" id="anno_title" name="anno_title" value="{{ $announcement->anno_title }}">
                                        <span class="message">
                                            @error('anno_title')
                                            {{ $message }}
                                            @enderror
                                        </span>
                                    </div>
                                    <div class="mb-1">
                                        <label for="anno_descrip" class="form-label">Announcement
                                            Details</label>
                                        <textarea type="text" class="form-control" value="{{ $announcement->anno_descrip }}" id="anno_descrip" name="anno_descrip">{{ $announcement->anno_descrip }}</textarea>
                                        <span class="message">
                                            @error('anno_descrip')
                                            {{ $message }}
                                            @enderror
                                        </span>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="background: #264653">Close</button>
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>
                                @csrf

                            </form>

                        </div>
                    </div>
                </div>
                @endforeach
                </tbody>
                </table>

            </div>
        </div>
        <div class="grid-container">
        </div>
        </div>
        </div>

        </div>


        <div class="grid-container1">
            <!--  -->
            <!--  -->
            @foreach($news1 as $newss1)

            <div class="grid-item">
                <div class="crime">
                    <h1><b>Crime News</b></h1>
                    <!-- @if(session('success'))
                    <span class="text-success">
                        <h5>{{ session('success')}}</h5>
                    </span>
                    @endif -->
                    <div class="form_item">
                        <form method="POST" action="{{route('updateNewsss', [$newss1->news_id])}}" enctype="multipart/form-data">

                            <label><b>Crime Title</b></label>
                            <br>
                            <textarea name="newsTitle" required id="newsTitle" value="{{$newss1->newsTitle}}" rows="1" cols="60">{{$newss1->newsTitle}}</textarea>
                            <div class="upload">
                                <div class="mb-3">
                                    @csrf
                                    @method('PUT')
                                    <input required class="form-control" type="file" id="media" name="media">
                                </div>
                            </div>
                            <label><b>Crime Description</b></label>
                            <!-- <input name="newsTitle" id="newsTitle" value="{{$newss1->newsTitle}}" rows="1" cols="60"> -->
                            <textarea required name="newsDescrip" id="newsDescrip" placeholder="Type a message..." rows="10" cols="60">{{$newss1->newsDescrip}}</textarea>

                            <a href="javascript:void(0)" id="change_profile"><button>Update</button></a>
                        </form>
                    </div>
                    @endforeach
                    <!--  -->
                    <!--  -->
                    @foreach($news2 as $newss2)
                    <div class="form_item">
                        <form method="POST" action="{{route('updateNewsss', [$newss2->news_id])}}" enctype="multipart/form-data">

                            <label><b>Crime Title</b></label>
                            <br>
                            <textarea name="newsTitle" required id="newsTitle" value="{{$newss2->newsTitle}}" rows="1" cols="60">{{$newss2->newsTitle}}</textarea>
                            <div class="upload">
                                <div class="mb-3">
                                    @csrf
                                    @method('PUT')
                                    <input required class="form-control" type="file" id="media" name="media">
                                </div>
                            </div>
                            <label><b>Crime Description</b></label>
                            <!-- <input name="newsTitle" id="newsTitle" value="{{$newss1->newsTitle}}" rows="1" cols="60"> -->
                            <textarea required name="newsDescrip" id="newsDescrip" placeholder="Type a message..." rows="10" cols="60">{{$newss2->newsDescrip}}</textarea>

                            <button type="submit">Update</button>
                        </form>
                    </div>
                    @endforeach
                    <!--  -->
                    <!--  -->
                    @foreach($news3 as $newss3)
                    <div class="form_item">
                        <form method="POST" action="{{route('updateNewsss', [$newss3->news_id])}}" enctype="multipart/form-data">

                            <label><b>Crime Title</b></label>
                            <br>
                            <textarea required name="newsTitle" id="newsTitle" value="{{$newss3->newsTitle}}" rows="1" cols="60">{{$newss3->newsTitle}}</textarea>
                            <div class="upload">
                                <div class="mb-3">
                                    @csrf
                                    @method('PUT')
                                    <input required class="form-control" type="file" id="media" name="media">
                                </div>
                            </div>
                            <label><b>Crime Description</b></label>
                            <!-- <input name="newsTitle" id="newsTitle" value="{{$newss1->newsTitle}}" rows="1" cols="60"> -->
                            <textarea required name="newsDescrip" id="newsDescrip" placeholder="Type a message..." rows="10" cols="60">{{$newss3->newsDescrip}}</textarea>

                            <button type="submit">Update</button>
                        </form>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>


    </section>








    </main>
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




    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
    <script src="../../js/common/jquery-3.2.1.min.js"></script>
    <script src="../../js/common/ijaboCropTool.min.js"></script>
    <script src="../../js/function.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

    <script>
        @if(session('success'))
        // alert(' {{ session('success') }} ');
        swal("Done!", "{{ session('success') }}", "success");
        @endif
    </script>
</body>
@endsection


</html>