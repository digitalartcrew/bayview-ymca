$(function(){
//Create A Map
  var center = [39.4, -78];
  var map = L.map('map', {
      zoom: 14,
      center: new L.LatLng(center[0], center[1]),
      layers: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    });

//Add A Map Layer
    map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')); //base layer
  
  //Search Bar for Map
  map.addControl( new L.Control.Search({
      url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
      jsonpParam: 'json_callback',
      propertyName: 'display_name',
      propertyLoc: ['lat','lon'],
      circleLocation: false,
      markerLocation: false,      
      autoType: false,
      autoCollapse: true,
      minLength: 2
    }) );

  var options = {
    lng: function(d){
        return d[0];
    },
    lat: function(d){
        return d[1];
    },
    duration: 800
};

var pingLayer = L.pingLayer(options).addTo(map);
pingLayer.radiusScale().range([2, 18]);
pingLayer.opacityScale().range([1, 0]);

var latFn = d3.random.normal(center[0], 1);
var longFn = d3.random.normal(center[1], 1);

var paused = false;
var update = function(){
    if(!paused) {
      pingLayer.ping([longFn(), latFn()]);
      window.setTimeout(update, 100 + Math.random()*400);
    }
};
window.setTimeout(update);

function togglePlay() {
    paused = !paused;
    d3.select('button').text((paused)? 'Play' : 'Pause');

    if(!paused) {
        window.setTimeout(update);
    }
};




});