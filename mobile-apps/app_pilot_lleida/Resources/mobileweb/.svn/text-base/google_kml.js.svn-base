function google_kml(map, url,mapRegion,finalPointLat,finalPointLon, initPointLat, initPointLon){
    if(Ti.Platform.osname == "android")
    {
        var mapModule = require('ti.map');    
    }
    else
    {
        var mapModule = Ti.Map;
    }
    

    var returnObject={};
    var goog = {
        maps: {
            kml: {}
        }
    };

    (function() {

        goog.maps.kml.addRoutesToMap = function(map, url,finalPointLat,finalPointLon, initPointLat, initPointLon) {
            try{
                var kmlfile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, url);
                var kml = Titanium.XML.parseString(kmlfile.read().text);
                goog.maps.kml.addRoutes(map, kml);
            } catch(e){
                Ti.API.info('error_kml: '+k.error);
            }
        };
        goog.maps.kml.addRoutes = function(map, kml) {
            var xml = kml.responseXML;
            var lat, lon;
            var minLat, maxLat, minLon, maxLon;
            var points = [];
            var coords = kml.documentElement.getElementsByTagName("LineString");
            for (var cc = 0; cc < coords.length; cc++) {
                var line = coords.item(cc);
                var str = line.firstChild.text.split(" ");
                for (dd = 0; dd < str.length; dd++) {
                    var loc = str[dd].split(',');
                    if (loc[0] && loc[1]) {
                        points.push({
                           latitude: loc[1],
                           longitude: loc[0]
                       });
                        lat=(loc[1]);
                        lon=(loc[0]);
                        if(dd==0){
                            minLat=lat;
                            maxLat=lat;
                            minLon=lon;
                            maxLon=lon;
                        }else{
                            minLat = Math.min(lat, minLat);
                            maxLat = Math.max(lat, maxLat);
                            minLon = Math.min(lon, minLon);
                            maxLon = Math.max(lon, maxLon);
                        }
                    }
                    if(dd==0){
                        var startPoint= mapModule.createAnnotation({
                            animate:true,
                            image: 'images/mapaplay.png',
                            latitude:lat,
                            longitude:lon,
                            added:false, 
                            deleted:false,
                            changed:false,
                            beforeChangeStatus:null,
                            originalComment:null
                        });
                        if (Titanium.Platform.name == 'android'){
                            if(Titanium.Platform.displayCaps.density=='xhigh' || Titanium.Platform.displayCaps.density=='high'){
                                startPoint.image='images/mapaplayAndroid-h.png';
                            }else{
                             startPoint.image='images/mapaplayAndroid-m.png';
                         }
                     }
                     initPointLat=lat;
                     initPointLon=lon;    
                     map.addAnnotation(startPoint);
                 }
             }
         }
         var  endPoint= mapModule.createAnnotation({
            animate:true,
            image: 'images/mapastop.png',
            latitude:lat,
            longitude:lon,
            added:false, 
            deleted:false, 
            changed:false,
            beforeChangeStatus:null,
            originalComment:null
        })
         if (Titanium.Platform.name == 'android'){
            if(Titanium.Platform.displayCaps.density=='xhigh' || Titanium.Platform.displayCaps.density=='high'){
                endPoint.image='images/mapastopAndroid-h.png';
            }else{
             endPoint.image='images/mapastopAndroid-m.png';
         }
     }
     finalPointLat=lat;
     finalPointLon=lon;
     map.addAnnotation(endPoint);
     if(Ti.Platform.osname == "android"){
        route = mapModule.createRoute({
            points:points,
            color:"red",
            width:4
        });
    }else{
        route = {
            name:"boston",
            points:points,
            color:"red",
            width:4
        }; 
    }

    var point={};
    map.addRoute(route);

    var poiCenter = {}; var delta = 0.02;
    var deltaLat = maxLat - minLat;
    var deltaLon = maxLon - minLon;

    delta = Math.max(deltaLat, deltaLon);
    delta= delta+0.021
    delta = delta * 0.55;

    poiCenter.lat = maxLat - parseFloat((maxLat - minLat) / 2);
    poiCenter.lon = maxLon - parseFloat((maxLon - minLon) / 2);
    var region = { latitude: poiCenter.lat, longitude: poiCenter.lon, latitudeDelta: delta, longitudeDelta: delta };

    mapRegion=region;
    if (Ti.Platform.name === 'iPhone OS'){
        map.location = region;
    }else{
        map.setRegion(region);
    }
};
goog.maps.kml.addRoutesToMap(map,url,finalPointLat,finalPointLon, initPointLat, initPointLon);
})();
returnObject.mapRegion=mapRegion;
returnObject.initPointLat=initPointLat;
returnObject.initPointLon=initPointLon;
returnObject.finalPointLat=finalPointLat;
returnObject.finalPointLon=finalPointLon;
returnObject.google_kml= google_kml;
return returnObject;
};

module.exports=google_kml;