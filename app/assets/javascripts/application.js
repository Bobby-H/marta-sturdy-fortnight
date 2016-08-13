// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function (){

    function initialize() {
      var myLatLng = new google.maps.LatLng(33.756301, -84.388521);
      var mapOptions = {
      center: myLatLng,
      zoom: 8
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var image = "<%= asset_path 'peach.png'%>"
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello world",
        animation: google.maps.Animation.DROP
      });
      var contentString = '<h2>Atlanta</h2>'+'<p>SouthernPlayalisticCadillacFunkyMusic</p>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);
      });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    var mapOptions = {
      center: { lat: -36.848738, lng: 174.752173},
      zoom: 15,
      scrollwheel: false
    }
});
