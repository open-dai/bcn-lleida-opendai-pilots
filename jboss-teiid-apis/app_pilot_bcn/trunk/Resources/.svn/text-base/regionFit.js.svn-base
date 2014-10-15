//centra en el mapa els punts de annotations i fa zoom pq es vegin tots
function regionFit(map, annotaions){
	var returnObject={};
	var maxLat, maxLon, minLat, minLon, latitudeDelta, longitudeDelta, centerLat, centerLon;
	var totalSumLat = 0;
	var totalSumLon = 0;

	for(var i = 0; i < 10; i++) {
		if((i == 0) || (map.annotations[i].latitude > maxLat))
			maxLat = map.annotations[i].latitude;
		if((i == 0) || (map.annotations[i].longitude > maxLon))
			maxLon = map.annotations[i].longitude;
		if((i == 0) || (map.annotations[i].latitude < minLat))
			minLat = map.annotations[i].latitude;
		if((i == 0) || (map.annotations[i].longitude < minLon))
			minLon = map.annotations[i].longitude;
		totalSumLat += map.annotations[i].latitude;
		totalSumLon += map.annotations[i].longitude;
	}
	if(annotations.length != 0) {
		//centerLat = totalSumLat / parseInt(10);
		//centerLon = totalSumLon / parseInt(10);
		centerLat = clatitude;
		centerLon = clongitude;
	} else {
		centerLat = 0;
		centerLon = 0;
	}
	latitudeDelta = Math.abs(maxLat - minLat);
	longitudeDelta = Math.abs(maxLon - minLon);

	var region = {
		latitude : centerLat,
		longitude :centerLon,
		animate : true,
		latitudeDelta : latitudeDelta,
		longitudeDelta : longitudeDelta
	};
	map.setRegion(region);
	returnObject.regionFit= regionFit;
	return returnObject;
};

module.exports=regionFit;