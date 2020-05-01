$(document).ready(function() {

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-12.981344, -38.453683),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map($("#map").get(0), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-12.981344, -38.453683),
        map: map
    });

});
