<!-- Design by foolishdeveloper.com -->

<!DOCTYPE html>
<html lang="en">

<head>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAhWiJ06MRz8AP2rKI5LYZzbev7L4xxc8&callback=Map"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
	<meta charset="UTF-8">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link type="text/css" href="{{ asset('./ocirs_css/user-report.css') }}" rel="stylesheet">

</head>

<body>

	<div class="wrapper">


		<div class="form_container">
			<form name="form" action="{{ url('main/ocirs_userreport') }}" method="POST" enctype="multipart/form-data">
				{{ csrf_field() }}
				<div class="heading">
					<label>Salamat! Ang iyong sumbong ay mahalaga sa amin at lahat ng impormasyong inyong ibibigay ay
						aming pangangalagaan at mananatiling kompidensyal</label>
				</div>
				<div class="form_wrap">
					<div class="form_item">
						<label>Brief message/narrative of complaint <span>*</span></label>
						<textarea required name="narrative" placeholder="Type a message..." rows="10" cols="60">{{ old('narartive') }}</textarea>
					</div>
				</div>
				<div class="form_wrap">
					<div class="form_item">
						<label>Report Type <span>*</span></label>
						<select type="number" name="reportType" required>
							<option value="">Select type of crime</option>
							<option {{ old('reportType') === 'Crime' ? 'selected' : '' }} value="Crime">Crime</option>
							<option {{ old('reportType') === 'Earthquake' ? 'selected' : '' }} value="Incident">Incident</option>
						</select>
					</div>
				</div>
				<div class="form_wrap">
					<div class="form_item">
						<label>Location <span>*</span></label>
						<input  type="text" name="location" id="location">
						<input  type="hidden" id="latitude" name="latitude" />
						<input  type="hidden" id="longitude" name="longitude" />
						<div id="map"></div>
						<div class="error" id="phone"></div>
					</div>
				</div>
				<div class="form_item">
					<label>Upload Image/Video</label>

				</div>
				<div class="upload">
					<input type="file" style="padding: 5px" name="media">
				</div>
				<div class="form_item">
					<label>Date and Time of Crime/Incident <span>*</span></label>
				</div>

				<div class="form_wrap select_box">
					<div class="form_item">
						<label>Date <span>*</span></label>
						<input required type="date" name="date" placeholder="Type a message...">
						</select>
					</div>
					<div class="form_item">
						<label>Time <span>*</span></label>
						<input required type="time" name="time" placeholder="Type a message...">

					</div>

				</div>
				<input type="text" id="report_id" name="report_id" value=" {{ Auth::user()->id }}">
				<input type="text" id="report_id" name="reportstatus" value=" Validating">
				<div id="outer">
					<div class="inner">
						<a href="{{ url('/main/ocirs_userdashboard') }}" class="myButton">Close</a>
					</div>
					<a href="{{ url('/main/ocirs_usersuccessreport') }}">
						<input class="myButton2" type="submit" value="Submit Report">
					</a>
				</div>
			</form>

		</div>
	</div>

	<script src="../../js/map.js"></script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
<script async defer src="https://maps.googleapis.com/maps/api/jskey=AIzaSyAAhWiJ06MRz8AP2rKI5LYZzbev7L4xxc8&callback=Map"></script>

	
</body>

</html>