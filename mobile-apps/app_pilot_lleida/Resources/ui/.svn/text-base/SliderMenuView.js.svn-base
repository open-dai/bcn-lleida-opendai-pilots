var MASlidingMenu = require('/lib/MASlidingMenu');
var HomeView = require('/ui/HomeView');
var MenuView = require('/ui/MenuView');

Ti.include('/lib/');

var SlidingMenu = function(){ 
	var home = new HomeView();

	var state = 0;
	
	// Each row with a view property when clicked will change to that view (any view works except tabgroups and windows)
	// If the row does not have a view property, but the switch event still fires
	var data = [
		{ title:'Filler', hasDetail:true, view: home },
		{ title:'Back', hasDetail:true},
		{ title:'User Loc', hasDetail:true },
		{ title:'Click on map', hasDetail:true },
		{ title:'Address', hasDetail:true }
	];
	
	var menu = new MenuView({
		rowData: data
	});
	
	
	var slidingMenu = new MASlidingMenu({
		left: menu, // the menu... only accepts a tableview
		draggable: false // set false to only use the API to open / close
	});
	
	slidingMenu.orientationModes = [Titanium.UI.PORTRAIT];
	//slidingMenu.open();
	
	
	// event fired when user selects a view from the nav
	slidingMenu.addEventListener('buttonclick', function(e) {
		if(e.index == 1) {
			showMenuButton.backgroundImage = "/images/arrowRight.png"
			slidingMenu.slideView('view');
		}else if(e.index == 2) {
			searchByCurrentPosition(home);
		}else if(e.index == 3) {
			searchByMapPoint(home);
		}else if(e.index == 4){
			searchByAddress(home);
		}
		showMenuButton.backgroundImage = "/images/arrowRight.png"
	});
	
	
	// event fired when user selects a view from the nav
	slidingMenu.addEventListener('switch', function(e) {
		//alert(e.menuRow);
		//alert(e.index);
		//alert(e.view); // This is the new view your switching to
		home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.07, longitudeDelta:0.07}
		            
			home.getChildren()[1].setLocation(region);
			for (var d=home.children.length; d>2 ; d --) {
				if (home.children.hasOwnProperty(d)) {
		    		home.remove(home.children[d]);
		    	}
			}
			state = 0;
		showMenuButton.backgroundImage = "/images/arrowRight.png"
	});
	
	// event fired while user is dragging the view to expose the menu
	slidingMenu.addEventListener('sliding', function(e) {
		//alert(e.distance);
	});
	
	var showMenuButton = Ti.UI.createButton({
		backgroundImage:"/images/arrowRight.png",
		top:"40%",
		left:0,
		width:"25%",
		height:"20%"
	});
	
	showMenuButton.addEventListener('click', function(e) {
		//slidingMenu.open();
		if(showMenuButton.backgroundImage == "/images/arrowRight.png"){
			showMenuButton.backgroundImage = "/images/arrowLeft.png"
			slidingMenu.slideView('left');
		}else{
			showMenuButton.backgroundImage = "/images/arrowRight.png"
			slidingMenu.slideView('view');
		}
	});
	
	home.add(showMenuButton);
	
	//Expose / close the menu programaticly
		//slidingMenu.slideView('left');
		//slidingMenu.slideView('view');
	
	// Access the currently displayed view
		//slidingMenu.activeView();
	
	
	function searchByCurrentPosition(){
		if(state != 0){
			home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.01, longitudeDelta:0.01}
		            
			home.getChildren()[1].setLocation(region);
			for (var d=home.children.length; d>2 ; d --) {
				if (home.children.hasOwnProperty(d)) {
		    		home.remove(home.children[d]);
		    	}
			}
			state = 0;
		}
		
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
				image : "/images/marker.png",
				animate : true
			});
	
			home.getChildren()[1].addAnnotation(point);
			home.getChildren()[1].setLocation(region);
	
		})
	
	
	
	}
	
	var calculateLatLngfromPixels = function(mapview, xPixels, yPixels) {
	
			var lat = 0.0;
			var lon = 0.0;
		    var region = mapview.actualRegion || mapview.region;
		    var widthInPixels = mapview.rect.width;
		    var heightInPixels = mapview.rect.height;
		
		    // should invert because of the pixel reference frame
		    heightDegPerPixel = -region.latitudeDelta / heightInPixels; 
		    widthDegPerPixel = region.longitudeDelta / widthInPixels;
		
		    return {
	        	lat : (yPixels - heightInPixels / 2) * heightDegPerPixel + region.latitude,
	        	lon : (xPixels - widthInPixels / 2) * widthDegPerPixel + region.longitude
	    	};
	
		};
	
	function searchByMapPoint(){
		if(state != 0){
			home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.01, longitudeDelta:0.01}
		            
			home.getChildren()[1].setLocation(region);
			for (var d=home.children.length; d>2 ; d --) {
				if (home.children.hasOwnProperty(d)) {
		    		home.remove(home.children[d]);
		    	}
			}
			state = 0;
		}
		home.getChildren()[1].touchEnabled = false;
		state = 2;
		
		var container = Ti.UI.createView({
	    top : 0,
	    left : 0
		});
		container.add(home.getChildren()[1]);
		
		container.addEventListener('longpress', function(e) {
		    var coordinate = calculateLatLngfromPixels(home.getChildren()[1], e.x, e.y);
	
		    var lon = coordinate.lon;
		    var lat = coordinate.lat;
		    
		    //alert(lat)
		    
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
				image : "/images/marker.png",
				animate : true
			});
	
			
			home.getChildren()[1].removeAllAnnotations();
	
			home.getChildren()[1].addAnnotation(point);
			home.getChildren()[1].setLocation(region); 
			
			
			home.getChildren()[1].touchEnabled = true;
		});	
	}
	
	function searchByAddress(){
		if(state!=0){
			home.getChildren()[1].removeAllAnnotations();
			
			var region =  {latitude:41.616116683, longitude:0.6285512249, 
		            latitudeDelta:0.01, longitudeDelta:0.01}
		            
			home.getChildren()[1].setLocation(region);
	
			for (var d=home.children.length; d>2 ; d --) {
				if (home.children.hasOwnProperty(d)) {
		    		home.remove(home.children[d]);
		    	}
			}
			state = 0;
		}
	
		state = 3;
		//Create textfield
		var textField = Ti.UI.createTextField({
			borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			color : '#336699',
			top : 10,
			left : 10,
			width : 500,
			height : 90
		});
	
		//Create button
		sendTextBtn = Ti.UI.createButton({
			backgroundImage : "/images/search3.png",
			top : 10,
			height : 90,
			width : 90,
			left : 520
		});
	
		home.add(textField);
		home.add(sendTextBtn);
	
		//Get address from text field
	
		//Code to be executed when click on button
		sendTextBtn.addEventListener('click', function() {
			var address = textField.value
	
			url2 = "http://maps.google.com/maps/api/geocode/json?address=" + address + "&sensor=false"
	
			var appReq = Ti.Network.createHTTPClient();
			appReq.open('GET', url2);
			var lat
			var lon
			//on load handler
			appReq.onload = function() {
	
				json = (eval('(' + this.responseText + ')'))
				lat = json.results[0].geometry.location.lat
				lon = json.results[0].geometry.location.lng
	
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
					image : "/images/marker.png",
					animate : true
				});
				//alert("["+lat+"/"+lon+"]")
				//slidingMenu.activeView().getChildren(0).setLocation(region);
				//home.getChildren().get(0).addAnnotation(point);
	
				home.getChildren()[1].addAnnotation(point);
				home.getChildren()[1].setLocation(region);
	
			};
	
			//error handler
			appReq.onerror = function(e) {
				alert('Error obteniendo los datos. Intente de nuevo.');
				///pb.hide();
				//win1.remove(pb);
			};
	
			appReq.send();
		});
	
	}
	return slidingMenu
}
module.exports = SlidingMenu