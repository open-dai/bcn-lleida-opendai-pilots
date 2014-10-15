// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


//DRAW KML: http://developer.appcelerator.com/question/8041/google-maps-kml-into-titanium


var globalLatitude=-1;
var globalLongitude=-1;

var mapview;
var mapview2;
var mapview3;
var mapview4;
var route = null;

coordinates = require('coordinates');
var urlBusStops = "http://194.116.110.155:8080/apilleida/rest/json/datapublication/busstops/all";
var urlBusLines = "http://194.116.110.155:8080/apilleida/rest/json/datapublication/buslines/L";
var urlPointsOfInterest = "http://194.116.110.155:8080/apilleida/rest/json/datapublication/pois/category/";
var urlAlerts = "http://194.116.110.155:8080/apilleida/rest/json/accessibility/roadincidents/all";

var KML_reader = require('google_kml');

var serverCommunication = require('/lib/ServerCommunication.js');

function getBusStops(view, activityIndicator){
	
	activityIndicator.show();
	
    var url = urlBusStops;
	var json;
	var appReq = Ti.Network.createHTTPClient();
	var coord;
	appReq.open('GET', url);
	 
	//on load handler
	appReq.onload = function(){
		 
		 
		json = (eval('(' + this.responseText + ')'))
		coord = ToLL(json.data.entry[0].coordY,json.data.entry[0].coordX,31)
		//alert(coord.lat+","+coord.lon)
		
		//for (var i = 0; i< 1; i++){
		for (var i = 0; i< json.data.entry.length; i++){
			coord = ToLL(json.data.entry[i].coordY,json.data.entry[i].coordX,31)
			
			var point = Titanium.Map.createAnnotation({
                latitude:coord.lat,
                longitude:coord.lon,
                title: json.data.entry[i].name,
                subtitle: "Id: "+ json.data.entry[i].id,
                image:"images/busstop.png",
                animate:true,
            });

		view.addAnnotation(point)
		activityIndicator.hide();
		}
	};
	 
	//error handler
	appReq.onerror = function(e){
		alert('Error obteniendo los datos. Intente de nuevo.');
		activityIndicator.hide();
		
	};
	
	appReq.send();
	
}




function getBusLines(view, id, activityIndicator){

	activityIndicator.show();
	
	
	var url = urlBusLines+id
	if(id > 14 || id <1){
		id=1
	}
	var points=[]
	var lineColors = ["#ffe202", "#f12838", "#ff5A00","#0185d0", "#55a61d", "#4914a0","#c5c6c8", "#f54d97", "#000", "#6b3227", "#fff", "#c9997e", "#24b14c", "#aa0004"]
		var json;
		var appReq = Ti.Network.createHTTPClient();
		var coord;
		appReq.open('GET', url);
		 
		//on load handler
		appReq.onload = function(){
			 
			 
			json = (eval('(' + this.responseText + ')'))
			points=[]
			var str
			
			for (c = 0; c<json.data.entry.length; c++){
			    //var str = "\n0.6285512249,41.616116683,0 0.6278698179,41.6153639029,0 0.6278128049,41.615240937,0 0.6277741536,41.6151538347,0 0.6277359951,41.6150642401,0 0.6277620016,41.6149157095,0 0.6280573703,41.6147466374,0 0.6284069069,41.6145647697,0 0.6301880792,41.6136780052,0 0.6303441313,41.6135389206,0 0.6305103899,41.6133334551,0 "
				
				str = json.data.entry[c].coordinates
				var coordinates = str.split(',0 ');
				var tmp 
			
				for (var i = 0; i< coordinates.length-1; i++){
				    tmp = coordinates[i].split(',') 
				    points.push({latitude:parseFloat(tmp[1]),longitude:parseFloat(tmp[0])});
				    
				}
				
			}
			drawRoute(points, view, lineColors[id-1],id);
			activityIndicator.hide();
		};
		 
		//error handler
		appReq.onerror = function(e){
			alert('Error obteniendo los datos. Intente de nuevo.');
			activityIndicator.hide();
		};
		
		appReq.send();

}


function getPointOfInterest(view, id, activityIndicator){
	view.removeAllAnnotations()
	
	activityIndicator.show()
	
	//var url = "http://194.116.110.155:8080/apilleida/rest/json/datapublication/pois/category/"+id
	var url = urlPointsOfInterest + id;
		var appReq = Ti.Network.createHTTPClient();
		appReq.open('GET', url);
		 
		//on load handler
		appReq.onload = function(){
			var json;
			 json = (eval('(' + this.responseText + ')'))
			 
		       
			for (c = 0; c<json.data.entry.length; c++){
				str = json.data.entry[c].coordinates
				var tmp 
				   
				   coordinatesFromAddress2(json.data.entry[c].address,view,json.data.entry[c].name );
			}
			
			activityIndicator.hide();
		};
		 
		//error handler
		appReq.onerror = function(e){
			alert('Error obteniendo los datos. Intente de nuevo.');
			activityIndicator.hide();
		};
		
		appReq.send();

	
}

function getIncidents(view, activityIndicator){
	view.removeAllAnnotations()
	
	activityIndicator.show()

	var url = "http://194.116.110.155:8080/apilleida/rest/json/accessibility/roadincidents/all";
	//var url = urlAlerts;
	    var city = "Lleida"
	    var number
	    var street
	    var tmp
		var appReq = Ti.Network.createHTTPClient();
		
		
		appReq.open('GET', url);
		 
		//on load handler
		appReq.onload = function(){
			json = (eval('(' + this.responseText + ')'))
			
			for (i = 0; i<json.data.entry.length && i<10; i++){
				tmp = json.data.entry[i]
				number = tmp.number
				street = tmp.street
				coordinatesFromAddress(city, street, number, view, tmp.category)
			}
			activityIndicator.hide();
		};
		 
		//error handler
		appReq.onerror = function(e){
			alert('Error obteniendo los datos. Intente de nuevo.');
			activityIndicator.hide();
			//win1.remove(pb);
			
		};
		
		appReq.send();

	
}

function coordinatesFromAddress(city, street, number, view, text){
	   

	   //var url2 = "http://maps.googleapis.com/maps/api/geocode/json?address="+number+","+street+","+city+"&sensor=false";
	   
		url2 = "http://open.mapquestapi.com/nominatim/v1/search.php?format=json&q="+street+","+number+",Lleida"
	  	
		var appReq = Ti.Network.createHTTPClient();
		appReq.open('GET', url2);
		var lat
		var lon
		//on load handler
		appReq.onload = function(){
			
			json = (eval('(' + this.responseText + ')'))
			//lat = json.results[0].geometry.location.lat
			//lon = json.results[0].geometry.location.lng
			lat= json[0].lat
			lon = json[0].lon
				
			point = Titanium.Map.createAnnotation({
	
			longitude:lon,
			latitude:lat,
			title: text.toLowerCase(),
			subtitle: street,
			image:"images/crash.png",
			animate:true
		});
		view.addAnnotation(point)

		};
		 
		//error handler
		appReq.onerror = function(e){
			alert('Error obteniendo los datos. Intente de nuevo.');
			///pb.hide();
			//win1.remove(pb);
		};
		
		appReq.send();

}

function coordinatesFromAddress2(street, view, text){
	    //var url2 = "http://maps.googleapis.com/maps/api/geocode/json?address="+street+",Lleida&sensor=false";
		var url2 = "http://open.mapquestapi.com/nominatim/v1/search.php?format=json&q="+street+",Lleida"
		var lat
		var lon
		
		
		var appReq = Ti.Network.createHTTPClient();
		appReq.open('GET', url2);
		
		 
		//on load handler
		appReq.onload = function(){
			json = (eval('(' + this.responseText + ')'))
			//lat = json.results[0].geometry.location.lat
			//lon = json.results[0].geometry.location.lng
			lat= json[0].lat
			lon = json[0].lon
			
			point = Titanium.Map.createAnnotation({

				longitude:lon,
				latitude:lat,
				image:"images/pointOfInterest.png",
				title: text,
				subtitle: street,
				animate:true
		    });
		    view.addAnnotation(point)
		};
		 
		//error handler
		appReq.onerror = function(e){
			alert('Error obteniendo los datos. Intente de nuevo.');
			///pb.hide();
			//win1.remove(pb);
		};
		
		appReq.send();
}


function updateMap(map){
	map.refresh();
}


/*
 *   TAB 1
 */



// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    navBarHidden:true,
    fullscreen:true,
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'images/busStopBlack.png',
    title:'Parades de bus',
    window:win1
});



mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:41.616116683, longitude:0.6285512249, 
            latitudeDelta:0.07, longitudeDelta:0.07},
    animate:true,
    regionFit:true,
    userLocation:true
});

if(globalLatitude==-1){
	mapview.region.latitude = 41.612803
	mapview.region.longitude =  0.623178
}else{
	mapview.region.latitude = globalLatitude
	mapview.region.longitude = globalLongitude
}

var pb=Ti.UI.createActivityIndicator({
  color: '#000',
  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
  message: "Carregant",
  top:150,
  left:50,
  style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

var buttonShowBusStops = Titanium.UI.createButton({
   backgroundImage: "/images/search2.png",
   backgroundSelectedImage: "/images/search1.png",
   top: 40,
   width: 300,
   height: 100
});

/*
buttonShowData.addEventListener('click',function(e)
{
   getIncidents(win4,mapview4, pb4);
});
*/



buttonShowBusStops.addEventListener('click', function(e) {
	getBusStops(mapview, pb)
});



win1.add(mapview);
win1.add(pb);
win1.add(buttonShowBusStops);



/*
win1.addEventListener('open', function(e) {
	 getBusStops(mapview, pb)
});
*/




/*
 *   TAB 2
 */


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Rutes',
    navBarHidden:true,
    fullscreen:true,
    backgroundColor:'#fff'
});


var pb2=Ti.UI.createActivityIndicator({
  color: '#000',
  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
  message: "Carregant",
  top:150,
  left:50,
  style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

var tab2 = Titanium.UI.createTab({  
    icon:'images/map.png',
    title:'Routes',
    window:win2
});

mapview2 = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:41.616116683, longitude:0.6285512249, 
            latitudeDelta:0.07, longitudeDelta:0.07},
    animate:true,
    regionFit:true,
    userLocation:true
});



if(globalLatitude==-1){
	mapview2.region.latitude = 41.616116683
	mapview2.region.longitude =  0.6285512249
}else{
	mapview2.region.latitude = globalLatitude
	mapview2.region.longitude = globalLongitude
}


var picker = Ti.UI.createPicker({
  top:0
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'L1'});
data[1]=Ti.UI.createPickerRow({title:'L2'});
data[2]=Ti.UI.createPickerRow({title:'L3'});
data[3]=Ti.UI.createPickerRow({title:'L4'});
data[4]=Ti.UI.createPickerRow({title:'L5'});
data[5]=Ti.UI.createPickerRow({title:'L6'});
data[6]=Ti.UI.createPickerRow({title:'L7'});
data[7]=Ti.UI.createPickerRow({title:'L8'});
data[8]=Ti.UI.createPickerRow({title:'L9'});
data[9]=Ti.UI.createPickerRow({title:'L10'});



picker.add(data);
picker.selectionIndicator = true;



picker.addEventListener('change',function(e)
{
    getBusLines(mapview2, e.row.title.substring(1), pb2)
});


win2.addEventListener('open', function(e) {
	getBusLines(mapview2,'1',pb2);
});



/*
 *   TAB 3
 */


var win3 = Titanium.UI.createWindow({  
    title:'Punts d'+"' "+'interest',
    navBarHidden:true,
    fullscreen:true,
    backgroundColor:'#fff'
});

var tab3 = Titanium.UI.createTab({  
    icon:'images/pointOfInterest.png',
    title:'Punts d'+"' "+'interest',
    window:win3
});

var pb3=Ti.UI.createActivityIndicator({
	  color: '#000',
	  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
	  message: 'Carregant',
	  top:150,
	  left:50,
	  style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

mapview3 = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:41.616116683, longitude:0.6285512249, 
            latitudeDelta:0.07, longitudeDelta:0.07},
    animate:true,
    regionFit:true,
    userLocation:true
});


if(globalLatitude==-1){
	mapview3.region.latitude = 41.612803
	mapview3.region.longitude =  0.623178
}else{
	mapview3.region.latitude = globalLatitude
	mapview3.region.longitude = globalLongitude
}


//getPointOfInterest(mapview3, 1)

var picker2 = Ti.UI.createPicker({
  top:0
});

var data2 = [];
data2[0]=Ti.UI.createPickerRow({title:'Hoteles', id:1});
data2[1]=Ti.UI.createPickerRow({title:'Restaurantes', id:2});
data2[2]=Ti.UI.createPickerRow({title:'Centros de educación', id:3});
data2[3]=Ti.UI.createPickerRow({title:'Centros deportivos', id:4});
data2[4]=Ti.UI.createPickerRow({title:'Farmacias', id:5});
data2[5]=Ti.UI.createPickerRow({title:'Centros sanitarios', id:6});
data2[6]=Ti.UI.createPickerRow({title:'Puntos de información', id:7});
data2[7]=Ti.UI.createPickerRow({title:'Otros', id:8});//centros de drogodependencia, hacienda, 
data2[8]=Ti.UI.createPickerRow({title:'Legislación', id:9});//registro civil, juzgado
data2[9]=Ti.UI.createPickerRow({title:'Negocios', id:10}); //Mercado, oficina de atención al autónomo
data2[10]=Ti.UI.createPickerRow({title:'Parkings', id:11});//Parkings, Depósito de vehículos




picker2.add(data2);
picker2.selectionIndicator = true;


picker2.addEventListener('change',function(e)
{
	//mapview3.removeAllAnnotations();
	
    getPointOfInterest(mapview3, e.row.id, pb3);
});


/*
win3.addEventListener('open', function(e) {
	 getPointOfInterest(mapview3, 1, pb3)
});
*/
win3.addEventListener('open', function(e) {
	 getPointOfInterest(mapview3, 1, pb3)
});



/*
 *   TAB 4
 */

var win4 = Titanium.UI.createWindow({  
    title:'Alertes',
    navBarHidden:true,
    fullscreen:true,    
    backgroundColor:'#fff'
});

var pb4=Ti.UI.createActivityIndicator({
	  color: '#000',
	  font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
	  message: 'Carregant',
	  top:150,
	  left:50,
	  style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

var tab4 = Titanium.UI.createTab({  
    icon:'images/alert.png',
    title:'Alertes',
    window:win4
});

mapview4 = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:41.616116683, longitude:0.6285512249, 
            latitudeDelta:0.07, longitudeDelta:0.07},
    animate:true,
    regionFit:true,
    userLocation:true
});

if(globalLatitude==-1){
	mapview4.region.latitude = 41.612803
	mapview4.region.longitude =  0.623178
}else{
	mapview4.region.latitude = globalLatitude
	mapview4.region.longitude = globalLongitude
}


var buttonShowData = Titanium.UI.createButton({
   title: 'Mostra Dades',
   top: 40,
   width: 300,
   height: 100
});

/*
buttonShowData.addEventListener('click',function(e)
{
   getIncidents(win4,mapview4, pb4);
});
*/



win4.addEventListener('open', function(e) {
	getIncidents(mapview4, pb4);
});








//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4); 


tab1.addEventListener('click', function() {
	win1.add(mapview);
	win1.add(buttonShowBusStops);
    win1.add(pb);
    
   
    win2.remove(mapview2);
    win2.remove(pb2);
    win2.remove(picker);
    
    win3.remove(mapview3);
    win3.remove(picker2);
	win3.remove(pb3);

	win4.remove(mapview4);
	win4.remove(pb4);
});

tab2.addEventListener('click', function() {
    
    win1.remove(mapview);
    win1.remove(buttonShowBusStops);
    win1.remove(pb);
   
    win2.add(mapview2);
    win2.add(pb2);
    win2.add(picker);
    
    win3.remove(mapview3);
    win3.remove(picker2);    
	win3.remove(pb3);

	win4.remove(mapview4);
	win4.remove(pb4);

});

tab3.addEventListener('click', function() {

    win1.remove(buttonShowBusStops);
    win1.remove(pb);
    win1.remove(mapview);
   
    win2.remove(pb2);
    win2.remove(picker);
    win2.remove(mapview2);
    
    win3.add(picker2);
    win3.add(mapview3);
	win3.add(pb3);

	win4.remove(mapview4);
	win4.remove(pb4);
});

tab4.addEventListener('click', function() {
    win1.remove(buttonShowBusStops);
    win1.remove(pb);
    win1.remove(mapview);
   
    win2.remove(pb2);
    win2.remove(picker);
    win2.remove(mapview2);
    
    win3.remove(picker2);
    win3.remove(mapview3);
	win3.remove(pb3);

	win4.add(mapview4);
	win4.add(pb4);
     
});

// open tab group
tabGroup.open();

function drawRoute(routePoints, view, color,id){
	// route object
	//view.removeAllAnnotations()
	
	view.removeAllAnnotations();
	//view.removeAllRoutes();
	
	if(route !=null){
		view.removeRoute(route)
	}
	//view.hide();
	route={
		name: "L"+id,
	    points:routePoints,
	    color:color,
	    width:8
	};
	view.addRoute(route);
	//view.fireEvent('click');
    //view.updateLayout({top:0});
	view.setLocation(routePoints[0]);
	//view.show();
}




////////////////////////////////////////////////////////////////////////////////////////////
//
// ToLL - function to compute Latitude and Longitude given UTM Northing and Easting in meters
//
//  Description:
//    This member function converts input north and east coordinates
//    to the corresponding Northing and Easting values relative to the defined
//    UTM zone.  Refer to the reference in this file's header.
//
//  Parameters:
//    north   - (i) Northing (meters)
//    east    - (i) Easting (meters)
//    utmZone - (i) UTM Zone of the North and East parameters
//    lat     - (o) Latitude in degrees 
//    lon     - (o) Longitude in degrees
//
function ToLL(north,east,utmZone)
{ 
  // This is the lambda knot value in the reference
  var LngOrigin = DegToRad(utmZone * 6 - 183)

  // The following set of class constants define characteristics of the
  // ellipsoid, as defined my the WGS84 datum.  These values need to be
  // changed if a different dataum is used.    

  var FalseNorth = 0.  // South or North?
  //if (lat < 0.) FalseNorth = 10000000.  // South or North?
  //else          FalseNorth = 0.   

  var Ecc = 0.081819190842622       // Eccentricity
  var EccSq = Ecc * Ecc
  var Ecc2Sq = EccSq / (1. - EccSq)
  var Ecc2 = Math.sqrt(Ecc2Sq)      // Secondary eccentricity
  var E1 = ( 1 - Math.sqrt(1-EccSq) ) / ( 1 + Math.sqrt(1-EccSq) )
  var E12 = E1 * E1
  var E13 = E12 * E1
  var E14 = E13 * E1

  var SemiMajor = 6378137.0         // Ellipsoidal semi-major axis (Meters)
  var FalseEast = 500000.0          // UTM East bias (Meters)
  var ScaleFactor = 0.9996          // Scale at natural origin

  // Calculate the Cassini projection parameters

  var M1 = (north - FalseNorth) / ScaleFactor
  var Mu1 = M1 / ( SemiMajor * (1 - EccSq/4.0 - 3.0*EccSq*EccSq/64.0 -
    5.0*EccSq*EccSq*EccSq/256.0) )

  var Phi1 = Mu1 + (3.0*E1/2.0 - 27.0*E13/32.0) * Math.sin(2.0*Mu1)
    + (21.0*E12/16.0 - 55.0*E14/32.0)           * Math.sin(4.0*Mu1)
    + (151.0*E13/96.0)                          * Math.sin(6.0*Mu1)
    + (1097.0*E14/512.0)                        * Math.sin(8.0*Mu1)

  var sin2phi1 = Math.sin(Phi1) * Math.sin(Phi1)
  var Rho1 = (SemiMajor * (1.0-EccSq) ) / Math.pow(1.0-EccSq*sin2phi1,1.5)
  var Nu1 = SemiMajor / Math.sqrt(1.0-EccSq*sin2phi1)

  // Compute parameters as defined in the POSC specification.  T, C and D

  var T1 = Math.tan(Phi1) * Math.tan(Phi1)
  var T12 = T1 * T1
  var C1 = Ecc2Sq * Math.cos(Phi1) * Math.cos(Phi1)
  var C12 = C1 * C1
  var D  = (east - FalseEast) / (ScaleFactor * Nu1)
  var D2 = D * D
  var D3 = D2 * D
  var D4 = D3 * D
  var D5 = D4 * D
  var D6 = D5 * D

  // Compute the Latitude and Longitude and convert to degrees
  var lat = Phi1 - Nu1*Math.tan(Phi1)/Rho1 *
    ( D2/2.0 - (5.0 + 3.0*T1 + 10.0*C1 - 4.0*C12 - 9.0*Ecc2Sq)*D4/24.0
     + (61.0 + 90.0*T1 + 298.0*C1 + 45.0*T12 - 252.0*Ecc2Sq - 3.0*C12)*D6/720.0 )

  lat = RadToDeg(lat)

  var lon = LngOrigin + 
    ( D - (1.0 + 2.0*T1 + C1)*D3/6.0
      + (5.0 - 2.0*C1 + 28.0*T1 - 3.0*C12 + 8.0*Ecc2Sq + 24.0*T12)*D5/120.0) / Math.cos(Phi1)

  console.log("----"+LngOrigin+""+D+""+T1+""+C1+""+D3+""+C12+""+Ecc2Sq+""+T12+""+D5+""+Phi1)
  lon = RadToDeg(lon)

  // Create a object to store the calculated Latitude and Longitude values
  var sendLatLon = new PC_LatLon(lat,lon)

  // Returns a PC_LatLon object
  return sendLatLon
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//  RadToDeg - function that inputs a value in radians and returns a value in degrees
//
function RadToDeg(value)
{
  return ( value * 180.0 / Math.PI )
}

////////////////////////////////////////////////////////////////////////////////////////////
//
//  DegToRad - function that inputs a value in degrees and returns a value in radians
//
function DegToRad(value)
{
  return ( value * Math.PI / 180.0)
}

////////////////////////////////////////////////////////////////////////////////////////////
//
// PC_LatLon - this psuedo class is used to store lat/lon values computed by the ToLL 
//  function.
//
function PC_LatLon(inLat,inLon)
{
  this.lat       = inLat     // Store Latitude in decimal degrees
  this.lon       = inLon     // Store Longitude in decimal degrees
}