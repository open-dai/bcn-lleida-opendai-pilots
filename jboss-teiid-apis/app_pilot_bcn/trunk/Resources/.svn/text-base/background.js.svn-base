
Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
Titanium.Geolocation.accuracy=Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 3;
Ti.App.Properties.getInt('serviceTime');
var latitude1, longitude1, latitude2, longitude2;
var resultat = Ti.App.Properties.getInt('serviceDistance');
var firstTime=true;
Ti.App.Properties.setString('goBG', 'true');
function distance(lat1, lon1, lat2, lon2) {
	var R = 6371000; // m (change this constant to get miles)
	var dLat = (lat2-lat1) * Math.PI / 180;
	var dLon = (lon2-lon1) * Math.PI / 180;
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
	Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	return Math.round(d);
}	
function distTotal(k){
	if(firstTime==false){
		longitude2 = k.coords.longitude;
		latitude2 = k.coords.latitude;
		var D = distance(latitude1, longitude1, latitude2, longitude2);
		D= parseInt(D);
		resultat=resultat+D;
		Ti.App.Properties.setInt('serviceDistance', resultat);
	}else{
		firstTime=false;
	}
	longitude1 = k.coords.longitude;
	latitude1 = k.coords.latitude;
}
var locationFunction = function(k){
	if(!k.error){
		distTotal(k);
	}
}
Titanium.Geolocation.addEventListener('location',locationFunction);