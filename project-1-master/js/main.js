

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
                
                
                // // for (i=0; i < json.images.length; i++) {
                // var imgURL = json.images[0].url;

                // console.log(imgURL);
                // $(".carousel-inner").append("<div class = 'item'><img src = '" + imgURL + "'></div>");
                  
                // // };
                
               
         
        

                
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
                

                $(".name").append(json.name);
                $(".dates").append(json.dates.start.localDate);
                $(".time").append(json.dates.start.localTime);
                $(".price").append("$" + json.priceRanges[0].min + " - " + "$" + json.priceRanges[0].max)
                $(".location").append(json._embedded.venues[0].name);
                $(".genre").append(json.classifications[0].genre.name);

                $(".maps").append(json._embedded.venues[0].location.latitude);
                $(".maps").append(json._embedded.venues[0].location.longitude);
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
};



