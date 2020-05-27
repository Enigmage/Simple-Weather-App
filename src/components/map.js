var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZW5pZ21hZ2UiLCJhIjoiY2s1Y2hleHlpMXF4bDNtcGF2cWRvcGFycyJ9.ND2XJVXH2y0F1lJ3jOWJiA';
var map = new mapboxgl.Map({
container: "this",
style: 'mapbox://styles/mapbox/streets-v11'
});