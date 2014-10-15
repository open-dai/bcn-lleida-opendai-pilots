/*
 Code by BDigital
 */

var PollutionView = function() {

	var setDataToPollutionView = function(fitxaInfo2, color1, color2, topBarColor, myOption) {

		if (fitxaInfo2.children && fitxaInfo2.children.length > 0) {
			// Make a copy of the array
			var children = fitxaInfo2.children.slice(0);
			var numChildren = children.length;
			for ( i = 0; i < numChildren; i++) {
				fitxaInfo2.remove(children[i]);
			}
		}

		//This list contains the zone where run trip belongs to
		var zoneCurses = [7, 6, 4, 3, 5, 6, 3, 5, 6, 3, 2, 5, 1, 2, 5, 1, 4, 4, 4, 1, 6, 1, 1];
		
		var neighborhoodCurses = ["Ciutadella", "Eixample", "Gràcia - St. Gervasi", "Palau Reial", "Parc Vall d’Hebron", "Poblenou", "Sants"];

		//fitxaTopBar.backgroundColor="#BED049";
		fitxaTopBar.backgroundColor = topBarColor;

		var aux = myOption;
		

		var image_path;

		if (myOption < 10) {
			image_path = "/images/air_quality_green.png";
		} else if (myOption < 18) {
			image_path = "/images/air_quality_blue.png";
		} else {
			image_path = "/images/air_quality_red.png";
		}

		var color3 = '#BBCCAA';

		var color4 = '#334411';
		var fitxaView2 = [];
		var colorBar2 = [];
		var fitxaRow2 = [];

		var buttonInfo1 = Titanium.UI.createButton({
			color : 'black',
			font : {
				fontSize : '14dp'
			},
			textAlign : "left",
			text : "Button",
			backgroundImage : "images/info2.png",
			height : Ti.Platform.osname == "android" ? p.horizontal(22) : 22,
			width : Ti.Platform.osname == "android" ? p.horizontal(22) : 22,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});

		var buttonInfo2 = Titanium.UI.createButton({
			color : 'black',
			font : {
				fontSize : '14dp'
			},
			textAlign : "left",
			text : "Button",
			backgroundImage : "images/info2.png",
			height : Ti.Platform.osname == "android" ? p.horizontal(22) : 22,
			width : Ti.Platform.osname == "android" ? p.horizontal(22) : 22,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});

		var buttonInfo3 = Titanium.UI.createButton({
			color : 'black',
			font : {
				fontSize : '14dp'
			},
			textAlign : "left",
			text : "Button",
			backgroundImage : "images/info2.png",
			height : Ti.Platform.osname == "android" ? p.horizontal(22) : 22,
			width : Ti.Platform.osname == "android" ? p.horizontal(22) : 22,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		
		var label00 = Ti.UI.createView({
			backgroundColor : '#000',
			height : '100%',
			width : '100%',
			opacity : 0.7,
			visible : false,
			borderColor : '#000000',
			borderWidth : 2,
			modal : true

		});
		
		var infoDialog1 = Ti.UI.createView({
			width : "90%",
			height : "45%",
			color : '#fff',
			backgroundColor : '"#EFC9BE"',
			opacity : 0.95,
			visible : false,
			borderRadius : 10,
			backgroundColor : '#ffffff',
			borderColor : '#000000',
			borderWidth : 2,
			modal : true

		});

		var label1 = Ti.UI.createLabel({
			width : '98%',
			height : '45%',
			top : "30%",
			text : weather_msg + new Date().getHours() + ":00 h"+"\n\n"+general_info_source,
			textAlign : 'center',
			color : '#444',
			backgroundColor : '#ccc',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 12,
			}
		});

		var label12 = Ti.UI.createLabel({
			width : Ti.Platform.osname == "android" ? '30%' : '60%',
			height : 'auto',
			left : "2%",
			bottom : "2%",
			top : "75%",
			text : source,
			textAlign : 'center',
			color : '#444',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 14,
			}
		});

		var buttonIcon1 = Ti.UI.createButton({
			bottom : "5%",
			backgroundImage : "/images/weather_icon.gif",
			width : Ti.Platform.osname == "android" ? 150 : 75,
			height : Ti.Platform.osname == "android" ? 50 : 25,
		});
		if (Ti.Platform.osname != "android") {
			buttonIcon1.right = 10;
		}

		buttonIcon1.addEventListener('click', function() {
			Titanium.Platform.openURL("http://meteo.cat/servmet/index.html");
		});

		infoDialog1.add(label1);
		infoDialog1.add(label12);
		infoDialog1.add(buttonIcon1);

		var cancel = Ti.UI.createButton({
			width : Ti.Platform.osname == "android" ? 60 : 30,
			height : Ti.Platform.osname == "android" ? 60 : 30,
			top : 2,
			right : 2,
			backgroundImage : '/images/cancelRed.png'
		});
		cancel.addEventListener('click', function(e) {
			buttonInfo1.backgroundImage = "images/info2.png";
			label00.hide();
			infoDialog1.hide();
		});
		infoDialog1.add(cancel);

		var infoDialog2 = Ti.UI.createView({
			width : "90%",
			height :  Ti.Platform.osname == "android" ? "70%" : "82%",
			color : '#fff',
			backgroundColor : '"#EFC9BE"',
			opacity : 0.95,
			visible : false,
			borderRadius : 10,
			backgroundColor : '#ffffff',
			borderColor : '#000000',
			borderWidth : 2,
		});

		var label = Ti.UI.createLabel({
			//text:'This is a custom alert box.\n\nAre you sure that you really want to do that?',
			width : '98%',
			height : '45%',
			left : '1%',
			top : '15%',
			textAlign : 'center',
			color : '#fff',
			backgroundColor : '#aaa',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 14,
			},
			backgroundImage : Ti.App.ImageInfo
		});

		Ti.App.myLabel = label;
		Ti.App.myLabel.backgroundImage = image_path;

		var buttonIcon2 = Ti.UI.createButton({
			bottom : "1%",
			backgroundImage : "/images/pollution_icon.gif",
			width : Ti.Platform.osname == "android" ? 240 : 120,
			height : Ti.Platform.osname == "android" ? 100 : 50,
		});

		if (Ti.Platform.osname != "android") {
			buttonIcon2.right = 10;
		}

		buttonIcon2.addEventListener('click', function() {
			Titanium.Platform.openURL("http://www20.gencat.cat/portal/site/mediambient/menuitem.8f64ca3109a92b904e9cac3bb0c0e1a0/?vgnextoid=b990be8edd927210VgnVCM1000008d0c1e0aRCRD&vgnextchannel=b990be8edd927210VgnVCM1000008d0c1e0aRCRD");
		});

		var label2 = Ti.UI.createLabel({
			//text:'This is a custom alert box.\n\nAre you sure that you really want to do that?',
			width : '98%',
			height : 'auto',
			left : "1%",
			top : "65%",
			textAlign : 'center',
			color : '#444',
			backgroundColor : '#ccc',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 14,
			},
			text : Ti.Platform.osname == "android" ?pollution_update_TS + new Date().getHours() + ":00 h \n\n "+pollution_update_TS2+" " +neighborhoodCurses[zoneCurses[aux - 1]-1]:pollution_update_TS + new Date().getHours() + ":00 h.  "+pollution_update_TS2+" " +neighborhoodCurses[zoneCurses[aux - 1]-1]
		});
		var label22 = Ti.UI.createLabel({
			//text:'This is a custom alert box.\n\nAre you sure that you really want to do that?',
			width : Ti.Platform.osname == "android" ? '30%' : '60%',
			height : 'auto',
			left : "2%",
			bottom : "1%",
			text : source,
			textAlign : 'center',
			color : '#444',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 14,
			}
		});

		infoDialog2.add(label);
		infoDialog2.add(label2);
		infoDialog2.add(label22);
		infoDialog2.add(buttonIcon2);

		var cancel = Ti.UI.createButton({
			width : Ti.Platform.osname == "android" ? 60 : 30,
			height : Ti.Platform.osname == "android" ? 60 : 30,
			//top:Ti.Platform.osname=="android"? '89%':'85%',
			top : 2,
			right : 2,
			backgroundImage : '/images/cancelRed.png'
		});
		cancel.addEventListener('click', function(e) {
			buttonInfo2.backgroundImage = "images/info2.png";
			label00.hide();
			infoDialog2.hide();
		});
		infoDialog2.add(cancel);

		var infoDialog3 = Ti.UI.createView({
			width : "85%",
			height : "45%",
			color : '#fff',
			backgroundColor : '"#EFC9BE"',
			opacity : 0.95,
			visible : false,
			borderRadius : 10,
			backgroundColor : '#ffffff',
			borderColor : '#000000',
			borderWidth : 2
		});

		var label3 = Ti.UI.createLabel({
			width : '98%',
			height : '45%',
			top : "20%",
			text :  pollen_msg + new Date().getHours() + ":00 h"+"\n\n"+general_info_source,
			textAlign : 'center',
			color : '#444',
			backgroundColor : '#ccc',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 12,
			}
		});

		var label32 = Ti.UI.createLabel({
			//text:'This is a custom alert box.\n\nAre you sure that you really want to do that?',
			width : Ti.Platform.osname == "android" ? '30%' : '60%',
			height : 'auto',
			left : "2%",
			top : "75%",
			text : source,
			textAlign : 'center',
			color : '#444',
			opacity : 0.95,
			font : {
				fontWeight : 'bold',
				fontSize : Ti.Platform.osname == "android" ? 40 : 14,
			}
		});

		var buttonIcon3 = Ti.UI.createButton({
			bottom : "4%",
			backgroundImage : "/images/pollen_icon.png",
			width : Ti.Platform.osname == "android" ? 180 : 90,
			height : Ti.Platform.osname == "android" ? 70 : 35,
		});
		if (Ti.Platform.osname != "android") {
			buttonIcon3.right = 10;
		}

		buttonIcon3.addEventListener('click', function() {
			Titanium.Platform.openURL("http://lap.uab.cat/aerobiologia/ca/aboutus");
		});

		infoDialog3.add(buttonIcon3);

		infoDialog3.add(label3);
		infoDialog3.add(label32);

		var cancel = Ti.UI.createButton({
			width : Ti.Platform.osname == "android" ? 60 : 30,
			height : Ti.Platform.osname == "android" ? 60 : 30,
			//top:Ti.Platform.osname=="android"? '89%':'85%',
			top : 2,
			right : 2,
			backgroundImage : '/images/cancelRed.png'
		});
		cancel.addEventListener('click', function(e) {
			buttonInfo3.backgroundImage = "images/info2.png";
			label00.hide();
			infoDialog3.hide();
		});
		infoDialog3.add(cancel);

		buttonInfo1.addEventListener('click', function(e) {
			win1.add(label00);			
			label00.show();
			
			win1.add(infoDialog1);
			infoDialog1.show();
		});

		buttonInfo2.addEventListener('click', function(e) {
			
			win1.add(label00);			
			label00.show();
			
			win1.add(infoDialog2);
			//getPollutionActualizationTimeSP();
			infoDialog2.show();
		});

		buttonInfo3.addEventListener('click', function(e) {
			win1.add(label00);			
			label00.show();
						
			win1.add(infoDialog3);
			infoDialog3.show();
		});

		var weather = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.NewsGothic,
				fontWeight : 'bold'
			},
			background : "#000",
			textAlign : "left",
			text : weather_title,
			height : 200,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var temperature_title1 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : prediction,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var temperature_value1 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(145) : 145
		});

		var weatherImage1 = Titanium.UI.createImageView({
			image : '',
			left : Ti.Platform.osname == "android" ? 0 : 25,
			top : Ti.Platform.osname == "android" ? 0 : 0,
			height : Ti.UI.SIZE,
			width : Ti.UI.FILL
		});

		var temperature_title2 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : afternoon,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var temperature_value2 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(145) : 145
		});

		var weatherImage2 = Titanium.UI.createImageView({
			image : '',
			left : Ti.Platform.osname == "android" ? p.horizontal(200) : p.horizontal(235),
			top : Ti.Platform.osname == "android" ? 0 : 0,
			height : Ti.UI.SIZE,
			width : Ti.UI.FILL
		});

		var morning_text = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : Ti.Platform.osname == "android" ? 30 : 14,
			},
			text : morning,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(110) : 110
		});

		var afternoon_text = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : Ti.Platform.osname == "android" ? 30 : 14,
			},
			text : afternoon,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(200) : 200
		});

		var temperature_title3 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : temperature_max,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var temperature_value3 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(145) : 145
		});

		var temperature_icon3 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "ºC",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 25,
			left : Ti.Platform.osname == "android" ? p.horizontal(155) : 155
		});

		var temperature_title4 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : temperature_min,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var temperature_value4 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(145) : 145
		});

		var temperature_icon4 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "ºC",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 25,
			left : Ti.Platform.osname == "android" ? p.horizontal(155) : 155
		});

		var title = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.NewsGothic,
				fontWeight : 'bold'
			},
			textAlign : "left",
			text : pollution,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var measuring_unit = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '10dp'
			},
			textAlign : "left",
			text : "",//"µg/m³",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(150) : 150
		});

		var title2 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "left",
			text : pollen,
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var measuring_unit2 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '10dp'
			},
			textAlign : "left",
			text : "",//"ranking",
			width : Ti.Platform.osname == "android" ? p.horizontal(60) : 60,
			left : Ti.Platform.osname == "android" ? p.horizontal(150) : 150
		});

		var contamination_title1 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "SO2",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});
		var contamination_icon1 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			height : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		var contamination_value1 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(125) : 125
		});

		var contamination_title2 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "NO",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});
		var contamination_icon2 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			height : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		var contamination_value2 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(125) : 125
		});

		var contamination_title3 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "NO2",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});
		var contamination_icon3 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			height : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		var contamination_value3 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(125) : 125
		});

		var contamination_title4 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "O3",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});
		var contamination_icon4 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			height : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		var contamination_value4 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(125) : 125
		});

		var contamination_title5 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "CO",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});
		var contamination_icon5 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			height : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		var contamination_value5 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(125) : 125
		});

		var contamination_title6 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "PM10",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});
		var contamination_icon6 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			width : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			height : Ti.Platform.osname == "android" ? p.horizontal(25) : 13,
			left : Ti.Platform.osname == "android" ? p.horizontal(250) : 250
		});
		var contamination_value6 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(125) : 125
		});
		
		var pollen_title1 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Urticaceae",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value1 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title2 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Gramineae (Poaceae)",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value2 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title3 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Olea",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value3 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title4 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Artemisia",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value4 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title5 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Castanea",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value5 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title6 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Chenopodiaceae/Amaranthaceae",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value6 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title7 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Plantago",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value7 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title8 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Palmae (Arecaceae)",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value8 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title9 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Pinus",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value9 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title10 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Polygonaceae totum",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value10 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});
		
		var pollen_title11 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Alternaria",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value11 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var pollen_title12 = Ti.UI.createLabel({
			color : 'white',
			font : {
				fontSize : '12dp',
				fontFamily : f.Impact,
				fontWeight : 'bold',

			},
			textAlign : "right",
			text : "Cladosporium",
			width : Ti.Platform.osname == "android" ? p.horizontal(85) : 85,
			left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
		});

		var pollen_value12 = Ti.UI.createLabel({
			color : 'black',
			font : {
				fontSize : '14dp',
				fontFamily : f.electroFont
			},
			textAlign : "left",
			width : Ti.Platform.osname == "android" ? p.horizontal(105) : 105,
			height : Ti.Platform.osname == "android" ? p.vertical(12) : 12,
			left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100
		});

		var aI = Ti.UI.createActivityIndicator({
			color : color2,
			font : {
				fontFamily : 'Helvetica Neue',
				fontSize : Ti.Platform.osname == "android" ?40:26,
				fontWeight : 'bold'
			},
			message : loading,
			top : "40%",
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE
		});

		var numRowsOnScreen = Ti.Platform.osname == "android" ? 24 : 25;
		
		for ( i = 0; i < numRowsOnScreen; i++) {

			fitxaRow2[i] = Ti.UI.createView({
				top : 0,
				backgroundColor : "#3D3D3F",
				width : Ti.Platform.osname == "android" ? p.horizontal(320) : 320,
				left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0,
				height : Ti.Platform.osname == "android" ? p.vertical(35) : 35,
			});
			fitxaView2[i] = Ti.UI.createView({
				top : 0,
				backgroundColor : "#3D3D3F",
				width : Ti.Platform.osname == "android" ? p.horizontal(95) : 95,
				left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0,
				height : Ti.Platform.osname == "android" ? p.vertical(35) : 35
			});
			colorBar2[i] = Ti.UI.createView({
				width : Ti.Platform.osname == "android" ? p.vertical(225) : 225,
				height : Ti.Platform.osname == "android" ? p.vertical(35) : 35,
				left : Ti.Platform.osname == "android" ? p.horizontal(95) : 95,
				backgroundColor : color1,
				text : "Prueba",
				right : 0
			});

			if (i % 2 == 1) {
				fitxaView2[i].backgroundColor = "#4D4D4D";
				colorBar2[i].backgroundColor = color2;
			}

			fitxaRow2[i].add(colorBar2[i]);
			fitxaRow2[i].add(fitxaView2[i]);

			fitxaInfo2.add(fitxaRow2[i]);
		}

		fitxaRow2[0].add(weather);
		fitxaRow2[0].add(buttonInfo1);

		fitxaRow2[1].add(temperature_title1);
		fitxaRow2[1].add(temperature_value1);
		fitxaRow2[1].add(weatherImage1);
		fitxaRow2[1].add(weatherImage2);
		fitxaRow2[1].add(morning_text);
		fitxaRow2[1].add(afternoon_text);

		fitxaRow2[2].add(temperature_title3);
		fitxaRow2[2].add(temperature_value3);
		fitxaRow2[2].add(temperature_icon3);

		fitxaRow2[3].add(temperature_title4);
		fitxaRow2[3].add(temperature_value4);
		fitxaRow2[3].add(temperature_icon4);

		fitxaRow2[4].add(title);
		fitxaRow2[4].add(measuring_unit);
		fitxaRow2[4].add(buttonInfo2);

		fitxaRow2[11].add(title2);
		fitxaRow2[11].add(measuring_unit2);
		fitxaRow2[11].add(buttonInfo3);

		fitxaRow2[5].add(contamination_title1);
		fitxaRow2[5].add(contamination_icon1);
		fitxaRow2[5].add(contamination_value1);

		fitxaRow2[6].add(contamination_title2);
		fitxaRow2[6].add(contamination_icon2);
		fitxaRow2[6].add(contamination_value2);

		fitxaRow2[7].add(contamination_title3);
		fitxaRow2[7].add(contamination_icon3);
		fitxaRow2[7].add(contamination_value3);

		fitxaRow2[8].add(contamination_title4);
		fitxaRow2[8].add(contamination_icon4);
		fitxaRow2[8].add(contamination_value4);

		fitxaRow2[9].add(contamination_title5);
		fitxaRow2[9].add(contamination_icon5);
		fitxaRow2[9].add(contamination_value5);
		
		fitxaRow2[10].add(contamination_title6);
		fitxaRow2[10].add(contamination_icon6);
		fitxaRow2[10].add(contamination_value6);

		fitxaRow2[12].add(pollen_title1);
		fitxaRow2[12].add(pollen_value1);

		fitxaRow2[13].add(pollen_title2);
		fitxaRow2[13].add(pollen_value2);

		fitxaRow2[14].add(pollen_title3);
		fitxaRow2[14].add(pollen_value3);

		fitxaRow2[15].add(pollen_title4);
		fitxaRow2[15].add(pollen_value4);

		fitxaRow2[16].add(pollen_title5);
		fitxaRow2[16].add(pollen_value5);

		fitxaRow2[17].add(pollen_title6);
		fitxaRow2[17].add(pollen_value6);

		fitxaRow2[18].add(pollen_title7);
		fitxaRow2[18].add(pollen_value7);

		fitxaRow2[19].add(pollen_title8);
		fitxaRow2[19].add(pollen_value8);

		fitxaRow2[20].add(pollen_title9);
		fitxaRow2[20].add(pollen_value9);

		fitxaRow2[21].add(pollen_title10);
		fitxaRow2[21].add(pollen_value10);

		fitxaRow2[22].add(pollen_title11);
		fitxaRow2[22].add(pollen_value11);

		fitxaRow2[23].add(pollen_title12);
		fitxaRow2[23].add(pollen_value12);

		//GET DATA FROM API
		var getPollutionData = function(label1, label2, label3, label4, label5, label6, aux) {

			var url = "http://bcn.opendai.eu/pollution/zone/" + zoneCurses[aux - 1];

			var json;
			var appReq = Ti.Network.createHTTPClient();
			appReq.timeout = 60000;
			appReq.open('GET', url);

			label1.text = "";
			label2.text = "";
			label3.text = "";
			label4.text = "";
			label5.text = "";

			contamination_icon1.backgroundImage = 'images/transparent.png';
			contamination_icon2.backgroundImage = 'images/transparent.png';
			contamination_icon3.backgroundImage = 'images/transparent.png';
			contamination_icon4.backgroundImage = 'images/transparent.png';
			contamination_icon5.backgroundImage = 'images/transparent.png';

			//on load handler
			appReq.onload = function() {

				json = (eval('(' + this.responseText + ')'));

				if (json[json.length - 4].so2 == null) {
					//fitxaInfo2.remove(fitxaRow2[1]);
					label1.text = unknown;
					label1.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				} else {
					value = json[json.length - 4].so2;
					label1.font = {
						fontSize : '14dp',
						fontFamily : f.electroFont
					};
					if (value < 200) {
						contamination_icon1.backgroundImage = "images/green_flag.png";
					} else if (value <= 350) {
						contamination_icon1.backgroundImage = "images/orange_flag.png";
					} else {
						contamination_icon1.backgroundImage = "images/red_flag.png";
					}
					label1.text = "    " + value;
				}
				if (json[json.length - 4].no == null) {
					//fitxaInfo2.remove(fitxaRow2[2]);
					label2.text = unknown;
					label2.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				} else {
					//There are no air quality values refered to NO
					contamination_icon2.backgroundImage = "images/orange_flag.png";
					label2.text = "    " + json[json.length - 4].no;
					label2.font = {
						fontSize : '14dp',
						fontFamily : f.electroFont
					};
					value = json[json.length - 4].no;
					if (value < 115) {
						contamination_icon2.backgroundImage = "images/green_flag.png";
					} else if (value <= 240) {
						contamination_icon2.backgroundImage = "images/orange_flag.png";
					} else {
						contamination_icon2.backgroundImage = "images/red_flag.png";
					}
					label2.text = "    " + value;
				}
				if (json[json.length - 4].no2 == null) {
					//fitxaInfo2.remove(fitxaRow2[3]);
					label3.text = unknown;
					label3.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				} else {
					value = json[json.length - 4].no2;
					label3.font = {
						fontSize : '14dp',
						fontFamily : f.electroFont
					};
					if (value < 115) {
						contamination_icon3.backgroundImage = "images/green_flag.png";
					} else if (value <= 240) {
						contamination_icon3.backgroundImage = "images/orange_flag.png";
					} else {
						contamination_icon3.backgroundImage = "images/red_flag.png";
					}
					label3.text = "    " + value;
				}
				if (json[json.length - 4].o3 == null) {
					//fitxaInfo2.remove(fitxaRow2[4]);
					label4.text = unknown;
					label4.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};

				} else {

					value = json[json.length - 4].o3;
					label4.font = {
						fontSize : '14dp',
						fontFamily : f.electroFont
					};
					if (value <= 90) {
						contamination_icon4.backgroundImage = "images/green_flag.png";
					} else if (value <= 180) {
						contamination_icon4.backgroundImage = "images/orange_flag.png";
					} else {
						contamination_icon4.backgroundImage = "images/red_flag.png";
					}
					label4.text = "    " + value;
				}
				if (json[json.length - 4].co == null) {
					//fitxaInfo2.remove(fitxaRow2[5]);
					label5.text = unknown;
					label5.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				} else {
					value = parseFloat(json[json.length - 4].co.replace(",", ".")) * 10;
					label5.font = {
						fontSize : '14dp',
						fontFamily : f.electroFont
					};
					if (value <= 6) {
						contamination_icon5.backgroundImage = "images/green_flag.png";
					} else if (value <= 10) {
						contamination_icon5.backgroundImage = "images/orange_flag.png";
					} else {
						contamination_icon5.backgroundImage = "images/red_flag.png";
					}
					//Co measuring units are mg/m3
					label5.text = "    " + parseFloat(json[json.length - 4].co.replace(",", ".")) * 10;
				};
				
				if (json[json.length - 4].pm10 == null) {
					//fitxaInfo2.remove(fitxaRow2[5]);
					label6.text = unknown;
					label6.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				} else {
					value = parseFloat(json[json.length - 4].pm10);
					label6.font = {
						fontSize : '14dp',
						fontFamily : f.electroFont
					};
					if (value <= 35) {
						contamination_icon6.backgroundImage = "images/green_flag.png";
					} else if (value <= 50) {
						contamination_icon6.backgroundImage = "images/orange_flag.png";
					} else {
						contamination_icon6.backgroundImage = "images/red_flag.png";
					}
					//Co measuring units are mg/m3
					label6.text = "    " + value;
				};
				//addAllContaminationViews();

				hideActivityIndicator();
			};

			//error handler
			appReq.onerror = function(e) {
				//alert("There was an error retrieving the remote data. Try again.");

				label1.text = unknown;
				label1.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				label1.textAlign = "left";
				label1.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				label1.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				label1.height = "100%";
				
				label2.text = unknown;
				label2.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				label2.textAlign = "left";
				label2.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				label2.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				label2.height = "100%";
				
				label3.text = unknown;
				label3.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				label3.textAlign = "left";
				label3.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				label3.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				label3.height = "100%";
				
				
				label4.text = unknown;
				label4.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				label4.textAlign = "left";
				label4.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				label4.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				label4.height = "100%";
				
				label5.text = unknown;
				label5.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				label5.textAlign = "left";
				label5.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				label5.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				label5.height = "100%";
				
				
				label6.text = unknown;
				label6.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				label6.textAlign = "left";
				label6.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				label6.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				label6.height = "100%";
				
				
				contamination_icon1.backgroundImage = '';
				contamination_icon2.backgroundImage = '';
				contamination_icon3.backgroundImage = '';
				contamination_icon4.backgroundImage = '';
				contamination_icon5.backgroundImage = '';
				hideActivityIndicator();
			};

			appReq.send();
		};


		var loadingWin = Titanium.UI.createView({
			backgroundColor : '#000',
			height : '100%',
			width : '100%',
			opacity : 0.7,
			tabBarHidden : true,
		});

		var showActivityIndicator = function() {

			loadingWin.add(aI);
			aI.show();

			win1.add(loadingWin);
			loadingWin.show();
		};

		var hideActivityIndicator = function() {
			aI.hide();
			loadingWin.hide();
			win1.remove(loadingWin);
		};

		var getPollenData = function() {
			var url = "http://bcn.opendai.eu/polen/all";
			var json;
			var appReq = Ti.Network.createHTTPClient();
			appReq.timeout = 60000;
			appReq.open('GET', url);

			//on load handler
			appReq.onload = function() {

				json = (eval('(' + this.responseText + ')'));

				//pollen_value1.backgroundImage = selectImage(json[0].concentracion);
				if ('concentracion' in json[0]) {
					pollen_value1.backgroundImage = selectImage(json[0].concentracion);
				} else {
					pollen_value1.text = unknown;
					pollen_value1.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[1]) {
					pollen_value2.backgroundImage = selectImage(json[1].concentracion);
				} else {
					pollen_value2.text = unknown;
					pollen_value2.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[2]) {
					pollen_value3.backgroundImage = selectImage(json[2].concentracion);
				} else {
					pollen_value3.text = unknown;
					pollen_value3.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[3]) {
					pollen_value4.backgroundImage = selectImage(json[3].concentracion);
				} else {
					pollen_value4.text = unknown;
					pollen_value4.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[4]) {
					pollen_value5.backgroundImage = selectImage(json[4].concentracion);
				} else {
					pollen_value5.text = unknown;
					pollen_value5.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[5]) {
					pollen_value6.backgroundImage = selectImage(json[5].concentracion);
				} else {
					pollen_value6.text = unknown;
					pollen_value6.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[6]) {
					pollen_value7.backgroundImage = selectImage(json[6].concentracion);
				} else {
					pollen_value7.text = unknown;
					pollen_value7.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[7]) {
					pollen_value8.backgroundImage = selectImage(json[7].concentracion);
				} else {
					pollen_value8.text = unknown;
					pollen_value8.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[8]) {
					pollen_value9.backgroundImage = selectImage(json[8].concentracion);
				} else {
					pollen_value9.text = unknown;
					pollen_value9.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				// Removed for datasource modification: http://lap.uab.cat/aerobiologia/es/forecast/barcelona 	
				if ('concentracion' in json[9]) {
					pollen_value10.backgroundImage = selectImage(json[9].concentracion);
				} else {
					pollen_value10.text = unknown;
					pollen_value10.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

				if ('concentracion' in json[10]) {
					pollen_value11.backgroundImage = selectImage(json[10].concentracion);
				} else {
					pollen_value11.text = unknown;
					pollen_value11.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}
				
				if ('concentracion' in json[11]) {
					pollen_value12.backgroundImage = selectImage(json[11].concentracion);
				} else {
					pollen_value12.text = unknown;
					pollen_value12.font = {
						fontSize : '10dp',
						fontFamily : f.electroFont
					};
				}

			};

			//error handler
			appReq.onerror = function(e) {
				pollen_value1.text = unknown;
				pollen_value1.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value1.textAlign = "left";
				pollen_value1.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value1.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value1.height = "100%";
				
				pollen_value2.text = unknown;
				pollen_value2.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value2.textAlign = "left";
				pollen_value2.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value2.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value2.height = "100%";
				
				pollen_value3.text = unknown;
				pollen_value3.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value3.textAlign = "left";
				pollen_value3.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value3.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value3.height = "100%";
				
				pollen_value4.text = unknown;
				pollen_value4.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value4.textAlign = "left";
				pollen_value4.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value4.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value4.height = "100%";
				
				
				pollen_value5.text = unknown;
				pollen_value5.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value5.textAlign = "left";
				pollen_value5.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value5.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value5.height = "100%";
				
				pollen_value6.text = unknown;
				pollen_value6.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value6.textAlign = "left";
				pollen_value6.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value6.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value6.height = "100%";
				
				pollen_value7.text = unknown;
				pollen_value7.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value7.textAlign = "left";
				pollen_value7.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value7.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value7.height = "100%";
				
				
				pollen_value8.text = unknown;
				pollen_value8.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value8.textAlign = "left";
				pollen_value8.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value8.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value8.height = "100%";
				
				pollen_value9.text = unknown;
				pollen_value9.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value9.textAlign = "left";
				pollen_value9.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value9.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value9.height = "100%";
				
				pollen_value10.text = unknown;
				pollen_value10.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value10.textAlign = "left";
				pollen_value10.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value10.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value10.height = "100%";
				
				pollen_value11.text = unknown;
				pollen_value11.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value11.textAlign = "left";
				pollen_value11.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value11.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value11.height = "100%";
				
				pollen_value12.text = unknown;
				pollen_value12.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				
				pollen_value12.textAlign = "left";
				pollen_value12.width = Ti.Platform.osname == "android" ? p.horizontal(85) : 85;
				pollen_value12.left = Ti.Platform.osname = "android" ? p.horizontal(145) : 145;
				pollen_value12.height = "100%";
			};

			appReq.send();
		};

		//GET DATA FROM API
		var getWeatherData = function() {

			//var url = "http://api.openweathermap.org/data/2.5/weather?q=Barcelona,es";
			var url = "http://bcn.opendai.eu/weather";
			var json;
			showActivityIndicator();

			var appReq = Ti.Network.createHTTPClient();
			appReq.timeout = 60000;
			appReq.open('GET', url);

			temperature_value3.text = "";
			temperature_value4.text = "";

			//on load handler
			appReq.onload = function() {

				json = (eval('(' + this.responseText + ')'));
				temperature_value3.text = json.max;
				temperature_value4.text = json.min;

				weatherImage1.image = json.prediction.morning;
				weatherImage2.image = json.prediction.afternoon;
			};

			//error handler
			appReq.onerror = function(e) {
				//alert('There was an error retrieving the remote data. Try again.');

				temperature_value3.text = unknown;
				temperature_value4.text = unknown;

				temperature_value3.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};
				temperature_value4.font = {
					fontSize : '10dp',
					fontFamily : f.electroFont
				};

				weatherImage1.image = "/images/weather/unknown.png";
				weatherImage2.image = "/images/weather/unknown.png";

				fitxaRow2[2].remove(temperature_icon3);
				fitxaRow2[3].remove(temperature_icon4);

			};

			appReq.send();
		};
		Ti.App.addEventListener('getData', function(data) {
			getWeatherData();
			getPollutionData(contamination_value1, contamination_value2, contamination_value3, contamination_value4, contamination_value5, contamination_value6, aux);
			getPollenData();
		});

	};

	return setDataToPollutionView;
};

module.exports = PollutionView;