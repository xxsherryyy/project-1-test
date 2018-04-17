

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=&apikey=vP8HIpf3zmjHbqSczAEciZsvep9p5Asw",
  async:true,
  dataType: "json",
  success: function(json) {
              // var i;
              // for (i = 0; i < json._embedded.events.length; i++) { 
              // var object = json[i] + "<br>";}

              // console.log(json._embedded.events);
              console.log(json);
              for (let i = 0; i < json._embedded.events[i].id.length; i++) {
                
               
              var eventID = json._embedded.events[i].id; };
              console.log(eventID);
              
              eventDetails(eventID)
              // Parse the response.
              
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
});



function eventDetails(id){
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events/" + id + ".json?apikey=vP8HIpf3zmjHbqSczAEciZsvep9p5Asw",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                
                
                
                var imgURL = json.images[0].url;

                console.log(imgURL);
                $(".carousel-inner").append("<div class = 'item'><img src = '" + imgURL + "'></div>");  
               
         
        

                
                console.log(json.name)
                console.log(json.dates.start.localDate);
                console.log(json.dates.start.localTime);
                console.log(json.priceRanges[0].min);
                console.log(json.priceRanges[0].max);
                console.log(json._embedded.venues[0].name);
              
                console.log(json.classifications[0].genre.name);
                console.log(json._embedded.venues[0].location);

                // console.log(json._embedded.attractions[0].externalLinks[i])
                // Parse the response.
                // Do other things.
              
                $(".image").append(json.images[0].url);
                

                var name = $(".name").append(json.name);
                var dates = $(".dates").append(json.dates.start.localDate);
                var time = $(".time").append(json.dates.start.localTime);
                var price = $(".price").append("$" + json.priceRanges[0].min + " - " + "$" + json.priceRanges[0].max)
                var venue = $(".location").append(json._embedded.venues[0].name);
                var genre = $(".genre").append(json.classifications[0].genre.name);

                $(".maps").append(json._embedded.venues[0].location.latitude);
                $(".maps").append(json._embedded.venues[0].location.longitude);

                var latitude = json._embedded.venues[0].location.latitude;
                
                var longitude = json._embedded.venues[0].location.longitude;
                init(latitude, longitude);
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};




function init() {
  // the mapOptions object contains the information to initialise the map to how we want it

  var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(lat, lng),
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
};

function loadScript() {
  var script = document.createElement('script');
  script.src = 'http://maps.googleapis.com/maps/api/js?AIzaSyDXQdwYkF8VGEH2ngWICRSZIdOd69ARa4E&sensor=false';
  document.body.appendChild(script);
}

window.onload = loadScript;

