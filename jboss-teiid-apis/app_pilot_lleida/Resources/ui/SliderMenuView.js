var MASlidingMenu = require('/lib/MASlidingMenu');
var HomeView = require('/ui/HomeView');
var MenuView = require('/ui/MenuView');

Ti.include('/lib/ServerCommunication.js');
Ti.include('/lib/utils.js');

Ti.include('/utils/variables.js');

var SlidingMenu = function(){ 
	var home = new HomeView();
	
	
	var showBusStops = function() {
		var activityIndicator = home.getChildren()[2];
		activityIndicator.show();
		var json;
		var coord;

		/*
		json = (eval('(' + getBusStopsFromServer() + ')'));
		//coord = ToLL(json[0].geo.lat, json[0].geo.lng, 31);

		for (var i = 0; i < json.data.entry.length; i++) {
			//coord = ToLL(json.data.entry[i].coordY, json.data.entry[i].coordX, 31);
			
			var point = Titanium.Map.createAnnotation({
				latitude : json[i].geo.lat,
				longitude : json[0].geo.lng,
				title : json.data.entry[i].name,
				subtitle : "Id: " + json.data.entry[i].id,
				image : "/images/busstop.png",
				animate : true,
			});

			home.getChildren()[1].addAnnotation(point);
			activityIndicator.hide();
		}
		*/
		 getBusStopsFromServer(home.getChildren()[1]);
	};

	var state = 0;
	
	// Each row with a view property when clicked will change to that view (any view works except tabgroups and windows)
	// If the row does not have a view property, but the switch event still fires
	if(Ti.App.optionChoosed == optionBusLines){ 
		var data = [
			{ title:'Filler', hasDetail:true, view: home },
			{ title:'Picker', hasDetail:false}
		];		

		
		getBusLinesFromServer(home.getChildren()[1],1, home.getChildren()[2], home.getChildren()[3], "L1");
		
		home.getChildren()[3].text = "Bus Lines";
		//home.getChildren()[2].hide();
	}else if(Ti.App.optionChoosed == optionPublicIncidents){ 
		var data = [
			{ title:'Filler', hasDetail:true, view: home },
			{ title:'Picker', hasDetail:false}
		];		
		
		getAlertsFromServer(home.getChildren()[1],Ti.App.NumDaySpan, home.getChildren()[2],home.getChildren()[3],"");
		
		home.getChildren()[3].text = "Public Incidents";
	}else if(Ti.App.optionChoosed == optionAccesibilityCategories){ 
		var data = [
			{ title:'Filler', hasDetail:true, view: home },
			{ title:'Picker', hasDetail:false}
		];
		
		
		home.getChildren()[3].text = "Accesibility Points";
		//getPointsFromCategory(home.getChildren()[1],1, home.getChildren()[2]);
	}else if(Ti.App.optionChoosed == optionAccesibilityFeatures){ 
		var data = [
			{ title:'Filler', hasDetail:true, view: home },
			{ title:'Picker', hasDetail:false}
		];
		
		getPointsFromFeature(home.getChildren()[1],1, home.getChildren()[2],home.getChildren()[3],"obstacles on the pavement");
		
		home.getChildren()[3].text = "Accesibility Points";
		
	}else{
		var data = [
			{ title:'Filler', hasDetail:true, view: home },
			{ title:'User Loc', hasDetail:true },
			{ title:'Click on map', hasDetail:true },
			{ title:'Address', hasDetail:true },
		];
		
		//showBusStops();
		home.getChildren()[3].text = "Bus Stops";
	}
		
	var menu = new MenuView({
		rowData: data
	});
	
	
	var slidingMenu = new MASlidingMenu({
		left: menu, // the menu... only accepts a tableview
		draggable: false // set false to only use the API to open / close
	});
	
	slidingMenu.orientationModes = [Titanium.UI.PORTRAIT];
	
	Ti.App.addEventListener('busLines', function(data) {
		getBusLinesFromServer(home.getChildren()[1], data.id, home.getChildren()[2], home.getChildren()[3],data.title);
	});

	Ti.App.addEventListener('publicIncidents', function(data) {
		getAlertsFromServer(home.getChildren()[1], data.id, home.getChildren()[2], home.getChildren()[3],data.title);
	});

	Ti.App.addEventListener('accesibilityCategories', function(data) {
		getPointsFromCategory(home.getChildren()[1], data.id, home.getChildren()[2], home.getChildren()[3],data.title);
	});

	Ti.App.addEventListener('accesibilityFeatures', function(data) {
		getPointsFromFeature(home.getChildren()[1], data.id, home.getChildren()[2], home.getChildren()[3],data.title);
	}); 
	
	Ti.App.addEventListener('openWindow', function(data) {
		home.getChildren()[4].show();
	}); 
	
	Ti.App.addEventListener('closeWindow', function(data) {
		home.getChildren()[4].hide();
	}); 


	// event fired when user selects a view from the nav
	slidingMenu.addEventListener('buttonclick', function(e) {

		if(e.index == 1 && e.rowData.id != 'Picker') {
			searchByCurrentPosition(home);
		}else if(e.index == 2 && e.rowData.id != 'Picker') {
			searchByMapPoint(home);
		}else if(e.index == 3 && e.rowData.id != 'Picker'){
			searchByAddress(home);
		}
		
		
		showMenuButton.backgroundImage = "/images/arrowRight.png";
	});
	
	
	// event fired when user selects a view from the nav
	slidingMenu.addEventListener('switch', function(e) {
		home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.07, longitudeDelta:0.07};
		    home.getChildren()[1].setLocation(region);
		   
			state = 0;
		showMenuButton.backgroundImage = "/images/arrowRight.png";
	});
	
	var showMenuButton = Ti.UI.createButton({
		backgroundImage:"/images/arrowRight.png",
		top:"40%",
		left:0,
		width:"25%",
		height:"20%"
	});
	
	showMenuButton.addEventListener('click', function(e) {
		if(showMenuButton.backgroundImage == "/images/arrowRight.png"){
			showMenuButton.backgroundImage = "/images/arrowLeft.png";
			slidingMenu.slideView('left');
		}else{
			showMenuButton.backgroundImage = "/images/arrowRight.png";
			slidingMenu.slideView('view');
		}
	});
	
	home.add(showMenuButton);
	
	
	function searchByCurrentPosition(){
		if(state != 0){
			home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.01, longitudeDelta:0.01};
		            
			home.getChildren()[1].setLocation(region);
			for (var d=home.children.length; d>4 ; d --) {
				if (home.children.hasOwnProperty(d)) {
		    		home.remove(home.children[d]);
		    	}
			}
			state = 0;
		}
		
		home.getChildren()[1].removeAllAnnotations();
		
		state = 1;
		var lat;
		var lon;
		Titanium.Geolocation.getCurrentPosition(function(e) {
			lat = e.coords.latitude;
			lon = e.coords.longitude;
	
			var region = {
				latitude : lat,
				longitude : lon,
				animate : true,
				latitudeDelta : 0.01,
				longitudeDelta : 0.01
			};
	
			var point = Titanium.Map.createAnnotation({
				longitude : lon,
				latitude : lat,
				title : "You are here:     ",
				subtitle : "[" + lat + "/" + lon + "]",
				image : Ti.Platform.osname == "android"?"/images/marker@2x.png":"/images/marker.png",
				animate : true
			});
	
			home.getChildren()[1].addAnnotation(point);
			home.getChildren()[1].setLocation(region);
			
			getBusStopsNearlyFromServer(home.getChildren()[1],lat,lon,home.getChildren()[2]);
	
		});
	
	
	
	} 
	
	
	
	function searchByMapPoint(){
		
		if (state != 0) {
			home.getChildren()[1].removeAllAnnotations();

			var region = {
				latitude : 41.616116683,
				longitude : 0.6285512249,
				latitudeDelta : 0.01,
				longitudeDelta : 0.01
			};

			home.getChildren()[1].setLocation(region);
			for (var d = home.children.length; d > 4; d--) {
				if (home.children.hasOwnProperty(d)) {
					home.remove(home.children[d]);
				}
			}
			state = 0;
		}
		home.getChildren()[1].removeAllAnnotations();
		home.getChildren()[1].touchEnabled = false;
		state = 2;


		alert("Longpress on the map to choose place to search around");
		var container = Ti.UI.createView({
			top : 0,
			left : 0
		});
		container.add(home.getChildren()[1]);

		container.addEventListener('longpress', function(e) {
			var coordinate = calculateLatLngfromPixels(home.getChildren()[1], e.x, e.y);

			var lon = coordinate.lon;
			var lat = coordinate.lat;


			var region = {
				latitude : lat,
				longitude : lon,
				animate : true,
				latitudeDelta : 0.01,
				longitudeDelta : 0.01
			};

			var point = Titanium.Map.createAnnotation({
				longitude : lon,
				latitude : lat,
				title : "You are here:     ",
				subtitle : "[" + lat + "/" + lon + "]",
				image : Ti.Platform.osname == "android" ? "/images/marker@2x.png" : "/images/marker.png",
				animate : true
			});

			home.getChildren()[1].removeAllAnnotations();

			home.getChildren()[1].addAnnotation(point);
			home.getChildren()[1].setLocation(region);

			home.getChildren()[1].touchEnabled = true;
			
			getBusStopsNearlyFromServer(home.getChildren()[1],lat,lon,home.getChildren()[2]);

		});
		}

	function searchByAddress(){
		if(state!=0){
			home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.01, longitudeDelta:0.01};
		            
			home.getChildren()[1].setLocation(region);
	
			for (var d=home.children.length; d>4 ; d --) {
				if (home.children.hasOwnProperty(d)) {
		    		home.remove(home.children[d]);
		    	}
			}
			state = 0;
		}
	
	
		home.getChildren()[1].removeAllAnnotations();
		state = 3;
		//Create textfield
		var textField = Ti.UI.createTextField({
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color : '#336699',
			top : "15%",
			left : "5%",
			width : "65%",
			height : "10%"
		});
	
		//Create button
		sendTextBtn = Ti.UI.createButton({
			title:"Search",
			top : "15%",
			color: 'white',
			backgroundImage: "/images/botonTopBar.png",
			backgroundSelectedImage : "/images/botonTopBarClicked.png",
			height : "10%",
			width : "20%",
			left : "75%"
		});
	
		home.add(textField);
		home.add(sendTextBtn);
		textField.show();

		//Get address from text field
	
		//Code to be executed when click on button
		sendTextBtn.addEventListener('click', function() {
			home.getChildren()[1].removeAllAnnotations();
			var address = textField.value;
			if(address != "") {
		
				url2 = geocodingUrl+"?street=" + escape(address) + "&city=lerida&bb="+lleida_bounding_box;
				var appReq = Ti.Network.createHTTPClient();
				appReq.open('GET', url2);
				var lat;
				var lon;
				//on load handler
				appReq.onload = function() {

					if (this.responseText != "[]") {
						json = this.responseText.split("[");
						json = json[2].split("]");
						json = json[0].split(",");

						lat = json[0];
						lon = json[1];
					

						var region = {
							latitude : lat,
							longitude : lon,
							animate : true,
							latitudeDelta : 0.01,
							longitudeDelta : 0.01
						};

						var point = Titanium.Map.createAnnotation({
							longitude : lon,
							latitude : lat,
							title : "You are here:     ",
							subtitle : "[" + lat + "/" + lon + "]",
							image : Ti.Platform.osname == "android" ? "/images/marker@2x.png" : "/images/marker.png",
							animate : true
						});

						home.getChildren()[1].addAnnotation(point);
						home.getChildren()[1].setLocation(region);

						getBusStopsNearlyFromServer(home.getChildren()[1], lat, lon, home.getChildren()[2]);
					} else {
						alert("Address not found");
					}

				};	
				//error handler
				appReq.onerror = function(e) {
					
					alert('Error obteniendo los datos. Intente de nuevo. \n e');

				};
		
				appReq.send();
		
			}else {
				alert("Address is empty");
			}
	
		});
			
		
	}
	
	
	return slidingMenu;
};
module.exports = SlidingMenu;