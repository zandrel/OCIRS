//function for gmaps
function Map() {
    var location = new google.maps.LatLng(17.6132, 121.7270);
    var mapProperty = {
        center: location,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map'), mapProperty);
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: location
    });
    geocodePosition(marker.getPosition());
    google.maps.event.addListener(marker, 'dragend', function () {
        map.setCenter(marker.getPosition());
        geocodePosition(marker.getPosition());
        $("#latitude").val(marker.getPosition().lat());
        $("#longitude").val(marker.getPosition().lng());
    });

    currentLat = $("#latitude").val();
    currentLng = $("#longitude").val();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            $("#latitude").val(pos.lat);
            $("#longitude").val(pos.lng);

            marker.setPosition(pos);

            map.setCenter(marker.getPosition());
            geocodePosition(marker.getPosition());

        });
    }
}

function geocodePosition(pos) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({
            latLng: pos
        },

        function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $("#location-label").html(results[0].formatted_address);
                $("#location").val(results[0].formatted_address);
            } else {
                $("#location-label").html("Cannot determine address at this location");
            }
        });
}
