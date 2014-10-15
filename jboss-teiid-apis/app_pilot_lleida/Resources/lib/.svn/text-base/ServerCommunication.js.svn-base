



Ti.include('/lib/utils.js');

var getBusLinesFromServer = function(view, id, activityIndicator,view2,title) {

	if (Titanium.Network.online == true){
		activityIndicator.show();
	
		var url = urlBusLines + id;
		if (id > 14 || id < 1) {
			id = 1;
		}
		var points = [];
		var lineColors = ["#ffe202", "#f12838", "#ff5A00", "#0185d0", "#55a61d", "#4914a0", "#c5c6c8", "#f54d97", "#000", "#6b3227", "#fff", "#c9997e", "#24b14c", "#aa0004"];
		var json;
		var appReq = Ti.Network.createHTTPClient();
		var coord;
		
		
		appReq.open('GET', url);
		
		Ti.API.info("GET to: "+url);
	
		//on load handler
		appReq.onload = function() {
	
			json = (eval('(' + this.responseText + ')'));
			points = [];
			for ( var c = 0; c < json.length ; c++) {
				var str = json[c].coordinates;
		
				var coordinates = str.split(',0 ');
				
				var tmp;
	
				for (var i = 0; i < coordinates.length - 1; i++) {
					tmp = coordinates[i].split(',');
					
					
					points.push({
						latitude : parseFloat(tmp[1]),
						longitude : parseFloat(tmp[0])
					});
	
				}
	
			}
			drawRoute(points, view, lineColors[id - 1], id, activityIndicator);
			view2.text = "Bus lines: "+title;
			
		};
	
		//error handler
		appReq.onerror = function(e) {
			alert('Error getting data. Please, try again..');
			activityIndicator.hide();
		};
	
		appReq.send();
	}else{
		alert("No internet connection available");
	}
};

 
var getBusStopsFromServer = function(view){
	activityIndicator.show();
	
    var url = urlBusStops;
	var json;
	var appReq = Ti.Network.createHTTPClient();
	var coord;
	appReq.open('GET', url);
	 
	//on load handler
	appReq.onload = function(){
		 
		
		json = (eval('(' + this.responseText + ')'));
		if(json.length == 0){
			
		}else{
			for (var i = 0; i< json.length; i++){
				drawBusStop2(view,json[i]);
			}
		}
		activityIndicator.hide();
	};
	 
	//error handler
	appReq.onerror = function(e){
		alert('Error getting data. Please, try again..');
		activityIndicator.hide();	
	};
	
	appReq.send();
};


var getBusStopsNearlyFromServer = function(view, lat, lng, activityIndicator, view2,title){
	activityIndicator.show();
	
    var url = urlBusStopsNear+"?lat="+lat+"&lng="+lng+"&r="+searchingRadius;
	var json;
	var appReq = Ti.Network.createHTTPClient();
	var coord;
	appReq.open('GET', url);
	 
	//on load handler
	appReq.onload = function(){
		 
		
		json = (eval('(' + this.responseText + ')'));
		if(json.length == 0){
			alert("There are not bus stops near. Are you in Lleida?");
		}else{
			for (var i = 0; i< json.length; i++){
				drawBusStop(view,json[i]);
			}
		}
		activityIndicator.hide();
	};
	 
	//error handler
	appReq.onerror = function(e){
		alert('Error getting data. Please, try again..');
		activityIndicator.hide();	
	};
	
	appReq.send();
};

var getFeaturesFromServerToPicker = function(picker){
	
	if (Titanium.Network.online == true){
		var url = accessibilityAllFeatures;
		var myData = [];
		var json;
		var appReq = Ti.Network.createHTTPClient();
		
		appReq.open('GET', url);
	
		//on load handler
		appReq.onload = function() {
	
			json = (eval('(' + this.responseText + ')'));
			//json = json.data.entry;
			
			for (var i = 0; i< json.length; i++) {
				json2 = json[i];
				myData.push(Ti.UI.createPickerRow({
					title : json2.name.toLowerCase(),
					value : json2.id_feature
				}));
				i++;
			}
			picker.add(myData); 
	
			
	
		};
	
		//error handler
		appReq.onerror = function(e) {
			alert('Error getting data. Please, try again..');
		};
	
		appReq.send();
	}else{
		alert("No internet conectiona available");
	}
};


var getFeaturesFromServerToList= function(tableview){
	
	var rows = [];
	if (Titanium.Network.online == true){
		var url = accessibilityAllFeatures;
		var myData = [];
		var json;
		var appReq = Ti.Network.createHTTPClient();
		
		appReq.open('GET', url);
	
		//on load handler
		appReq.onload = function() {
	
			json = (eval('(' + this.responseText + ')'));
			//json = json.data.entry;
			
			for (var i = 0; i< json.length; i++) {
				json2 = json[i];

				rows[i]=Ti.UI.createTableViewRow({
					color: "black",
					height: Ti.Platform.osname=="android"? 30:30,
					title: json2.name.toLowerCase(),
					borderRadius : 1.2,
					borderColor : '#222222'
				});
				
			}
			tableview.data = rows;
	
			
	
		};
	
		//error handler
		appReq.onerror = function(e) {
			alert('Error getting data. Please, try again..');
		};
	
		appReq.send();
	}else{
		alert("No internet conectiona available");
	}
};

var getCategoriesFromServerToPicker = function(picker){
	
	if (Titanium.Network.online == true){
		var url = accessibilityAllCategories;
		var myData = [];
		var json;
		var json2;
		var appReq = Ti.Network.createHTTPClient();
		
		appReq.open('GET', url);
	
		//on load handler
		appReq.onload = function() {
	
			
			json = (eval('(' + this.responseText + ')'));
			//json = json.data.entry;
	
			for (var i = 0; i< json.length; i++) {
				json2 = json[i];
				myData.push(Ti.UI.createPickerRow({
					title : json2.name.toLowerCase(),
					value : json2.id_category
				}));
			}
			picker.add(myData); 
			appReq.abort();	
			
	
		};
	
		//error handler
		appReq.onerror = function(e) {
			alert('Error getting data. Please, try again..');
			appReq.abort();
		};
	
		appReq.send();
	}else{
		alert("No internet conection available");
	}
};


function getPointsFromCategory(view, id_category,activityIndicator, view2, title){
	if (Titanium.Network.online == true){
		view.removeAllAnnotations();
		
		activityIndicator.show();
	
		var url = accessibilitySingleCategory+id_category;
		//var url = urlAlerts;
		    var city = "Lleida";
		    var number;
		    var street;
		    var tmp;
			var appReq = Ti.Network.createHTTPClient({timeout : 9000});
			
			
			appReq.open('GET', url);
			 
			//on load handler
			appReq.onload = function(){
				json = (eval('(' + this.responseText + ')'));
				//alert("Numero de puntos recibido: "+json.length)
				for (var c = 0; c<json.length && c < 12; c++){
					if(json[c].id != 10){
						drawPointOfInterest(view, json[c]);
					}
				}
				
				activityIndicator.hide();
				appReq.abort();
			};
			 
			//error handler
			appReq.onerror = function(e){
				alert('Error getting data. Please, try again..');
				activityIndicator.hide();
				appReq.abort();

			};
			
			appReq.send();
	}else{
		alert("No internet conection available");
	}
	
	view2.text = "Accesibility Points: "+title;

	
};

function getPointsFromFeature(view, id_feature,activityIndicator, view2, title){
	
		
	if (Titanium.Network.online == true){
		view.removeAllAnnotations();
		
		//alert(id_feature)
		activityIndicator.show();
	
		var url = accessibilitySingleFeature+id_feature;
		//var url = urlAlerts;
		    var city = "Lleida";
		    var number;
		    var street;
			var appReq = Ti.Network.createHTTPClient({timeout : 9000});
			
			
			appReq.open('GET', url);
			 
			//on load handler
			appReq.onload = function(){
			
				json = (eval('(' + this.responseText + ')'));
				
				
				if(json.length == 0 ){ alert("There are no results for this query");}
				//alert("Numero de puntos recibido: "+json.length)
				
				
				for (var c = 0; c<json.length && c < 15; c++){
					drawPointOfInterest(view, json[c]);
					

					//alert(c)
				}
				//fitZoomRegion(view);
				activityIndicator.hide();
				appReq.abort();
			};
			 
			//error handler
			appReq.onerror = function(e){
				alert('Error getting data. Please, try again.');
				activityIndicator.hide();
				appReq.abort();
				//win1.remove(pb);
				
			};
			
			appReq.send();
	}else{
		alert("No internet conection available");
	}


	view2.text = "Accesibility Points: "+title;
	
}



function getAlertsFromServer(view, day_span,activityIndicator, view2, title){
	if (Titanium.Network.online == true){
		view.removeAllAnnotations();
		
		activityIndicator.show();
	
		var url = alertsUrl+day_span;
		//var url = urlAlerts;
		    var city = "Lleida";
		    var number;
		    var street;
		    var tmp;
			var appReq = Ti.Network.createHTTPClient({timeout : 9000});
			
			
			appReq.open('GET', url);
			 
			//on load handler
			appReq.onload = function(){
				json = (eval('(' + this.responseText + ')'));
				//json = json.data.entry
				for (i = 0; i<json.length; i++){
					
					tmp = json[i];
					drawAlert(view, tmp);
				}
				activityIndicator.hide();
			};
			 
			//error handler
			appReq.onerror = function(e){
				alert('Error getting data. Please, try again...');
				
				activityIndicator.hide();
				//win1.remove(pb);
				
			};
			
			appReq.send();
	}else{
		alert("No internet conection available");
	}


	view2.text = "Public Incidents: "+title;
	
}
