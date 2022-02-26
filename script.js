
var marcadores = [
['Donde&Como : Santo Domingo','Esto es una iglesia', -96.72306937572398,17.06568482286825],
['Donde&Como : La Soledad ','Esto es una iglesia', -96.73001093265452,17.06351044616975]
];

var pos = {lat: 17.0601614, lng: -96.7254623};

function busqueda(){
alert('Estamos buscando el lugar mas cercano a usted con sus especificaciones');
limpiarRuta();
var masCercano = {
lat: 17.06568482286825, lng:  -96.72306937572398
};

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 14,
center: masCercano,

});

var marker = new google.maps.Marker({
position: pos,
icon: 'here.png',
title:'Tu ubicacion'

});
marker.setMap(map);


var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(pos);
infoWindow.setContent('Tu ubicacion');

google.maps.event.addListener(marker, 'click', (function(marker) {
return function() {
infoWindow.setContent('Tu ubicacion');
infoWindow.open(map, marker);
}
})(marker));

var marker = new google.maps.Marker({
position: masCercano,
icon: 'lugar.png',
title:'Donde&Como : Santo Domingo'

});

marker.setMap(map)

var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(masCercano);
infoWindow.setContent('Donde&Como : Santo Domingo');

google.maps.event.addListener(marker, 'click', (function(marker) {
return function() {
infoWindow.setContent('Donde&Como : Santo Domingo');
infoWindow.open(map, marker);
}
})(marker));

map.setZoom (12);
map.setCenter(masCercano);

directionsDisplay = new google.maps.DirectionsRenderer();
directionsService = new google.maps.DirectionsService();

var start = pos
var end = masCercano

var tm = document.getElementById("travelMode").value;
var us = "METRIC";
var request = {
origin: start,
destination: end,
travelMode: google.maps.DirectionsTravelMode[tm],
unitSystem: google.maps.DirectionsUnitSystem[us],
provideRouteAlternatives: true
};
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setMap(map);
directionsDisplay.setPanel(directions_panel);
directionsDisplay.setDirections(response);
} else {
alert("There is no directions available between these two points");
}
});

}

function initMap() {
var oax = {
lat: 17.0601614, lng: -96.7254623
};

var map = new google.maps.Map(document.getElementById('map'), {

zoom: 14,
center: oax,

});

var  i,temp,marker;
for (i = 0; i < marcadores.length; i++) {  
temp = {
lat: marcadores[i][3], lng: marcadores [i][2]
};
marker = new google.maps.Marker({
position: temp,
icon: 'lugar.png',
map: map,
animation: google.maps.Animation.DROP,

title: marcadores[i][0]

});

var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(temp);
infoWindow.setContent(marcadores[i][0]);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infoWindow.setContent(marcadores[i][0]);
infoWindow.open(map, marker);
}
})(marker, i));

google.maps.event.addListener(marker, 'dblclick', (function(marker) {
return function() {
ruta (marker.getPosition());
}
})(marker, i));



}	  

var infoWindow = new google.maps.InfoWindow({map: map});
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {


	
	
pos = {
lat: position.coords.latitude,
lng: position.coords.longitude
};

var marker = new google.maps.Marker({
position: pos,
icon: 'here.png',

title:'Tu ubicacion'

});

marker.setMap(map)

google.maps.event.addListener(marker, 'click', (function(marker) {
return function() {
infoWindow.setContent("Tu ubicacion");
infoWindow.open(map, marker);
}
})(marker));

infoWindow.setPosition(pos);
infoWindow.setContent('Estas aqui.');
map.setZoom (13);

map.setCenter(pos);
}, function() {
handleLocationError(true, infoWindow, map.getCenter());
});
}else {
// Browser doesn't support Geolocation
handleLocationError(false, infoWindow, map.getCenter());
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
'Error: The Geolocation service failed.' :
'Error: Your browser doesn\'t support geolocation.');
}


	
}

function verTodo(){

alert('Doble click en un punto marcada para saber como llegar');

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 13,
center: pos,

});

var  i,temp,marker;
for (i = 0; i < marcadores.length; i++) {  
temp = {
lat: marcadores[i][3], lng: marcadores [i][2]
};
marker = new google.maps.Marker({
position: temp,
icon: 'lugar.png',
map: map,
animation: google.maps.Animation.DROP,
title: marcadores[i][0]

});

var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(temp);
infoWindow.setContent(marcadores[i][0]);


google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infoWindow.setContent(marcadores[i][0]);
infoWindow.open(map, marker);
}
})(marker, i));


google.maps.event.addListener(marker, 'dblclick', (function(marker) {
return function() {
ruta (marker.getPosition());
}
})(marker, i));

}	  


var marker = new google.maps.Marker({
position: pos,
icon: 'here.png',
title:'Tu ubicacion'

});

marker.setMap(map);

google.maps.event.addListener(marker, 'click', (function(marker) {
return function() {
infoWindow.setContent("Tu ubicacion");
infoWindow.open(map, marker);
}
})(marker));

var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(pos);
infoWindow.setContent('Estas aqui.');

}

function limpiarRuta()
{
document.getElementById("directions_panel").innerHTML="";
}

function ruta(myPos){

var masCercano = myPos;

var map = new google.maps.Map(document.getElementById('map'), {
zoom: 14,
center: masCercano,

});

limpiarRuta();

var  i,temp,marker;
for (i = 0; i < marcadores.length; i++) {  
temp = {
lat: marcadores[i][3], lng: marcadores [i][2]
};
marker = new google.maps.Marker({
position: temp,
icon: 'lugar.png',
map: map,
animation: google.maps.Animation.DROP,

title: marcadores[i][0]

});

var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(temp);
infoWindow.setContent(marcadores[i][0]);

google.maps.event.addListener(marker, 'click', (function(marker, i) {
return function() {
infoWindow.setContent(marcadores[i][0]);
infoWindow.open(map, marker);
}
})(marker, i));


google.maps.event.addListener(marker, 'dblclick', (function(marker) {
return function() {
ruta (marker.getPosition());
}
})(marker, i));

}




var marker = new google.maps.Marker({
position: pos,
icon: 'here.png',
title:'Tu ubicacion'

});
marker.setMap(map);


var infoWindow = new google.maps.InfoWindow({map: map});
infoWindow.setPosition(pos);
infoWindow.setContent('Tu ubicacion');

google.maps.event.addListener(marker, 'click', (function(marker) {
return function() {
infoWindow.setContent('Tu ubicacion');
infoWindow.open(map, marker);
}
})(marker));


map.setZoom (12);
map.setCenter(masCercano);

directionsDisplay = new google.maps.DirectionsRenderer();
directionsService = new google.maps.DirectionsService();

var start = pos
var end = masCercano

var tm = document.getElementById("travelMode").value;
var us = "METRIC";
var request = {
origin: start,
destination: end,
travelMode: google.maps.DirectionsTravelMode[tm],
unitSystem: google.maps.DirectionsUnitSystem[us],
provideRouteAlternatives: true
};
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setMap(map);
directionsDisplay.setPanel(directions_panel);
directionsDisplay.setDirections(response);
} else {
alert("There is no directions available between these two points");
}
});

}
 