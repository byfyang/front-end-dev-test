console.log("working");

// scroll reveal
window.sr = ScrollReveal();
sr.reveal('.fadeInLeftBig', {duration: 1000, origin: 'bottom'});



// google maps
function initMap() {
       var uluru = {lat: 37.777769, lng: -122.411307};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 16,
         center: uluru
       });
       var marker = new google.maps.Marker({
         position: uluru,
         map: map
       });
     }




