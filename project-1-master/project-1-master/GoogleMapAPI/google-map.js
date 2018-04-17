function init() {
    // the mapOptions object contains the information to initialise the map to how we want it
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(32.7767, -96.7970 ),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overviewMapControl: false
    };
    var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    var script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?AIzaSyDXQdwYkF8VGEH2ngWICRSZIdOd69ARa4E&sensor=false&callback=init';
    document.body.appendChild(script);
}

window.onload = loadScript;