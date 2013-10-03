
function timer(win1, goMapButton, mapRegion,medalContainer,mapRegion,mapView, accuracyImage,finLon, finLat,initLat, initLon,aux,fitxadist2,backButtonMap,resumeView,resetButton,iniciLabel2,finalLabel2,timeLabel2,distanceLabel2,velocityLabel2, caloriesLabel2,finishButton, backButton, lliureBackButton){
	Ti.Geolocation.purpose = "Recieve User Location";
	Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
	Titanium.Geolocation.accuracy=Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 3;

	//var flurry = require("sg.flurry");


	var currentLang = Ti.Locale.getCurrentLanguage();
	Titanium.App.Properties.setString("currentLanguage", currentLang);
	var selectedLang = Ti.App.Properties.getString("selectedLanguage");
	if(selectedLang==undefined){
		Ti.App.Properties.setString("selectedLanguage", 'ca');
		selectedLang='ca';
	}else{
		if(currentLang!==selectedLang){
			Ti.App.Properties.setString("currentLanguage", selectedLang);
		}
	}
	if(selectedLang=="en"){
		Ti.include('en.js');
	}else if(selectedLang=="es"){
		Ti.include('es.js');
	}else{
		Ti.include('ca.js');
	}

	var inMap=false;
	var TimerInit=true;
	var returnObject={};
	var end;
	var showMedals = require('medals');
	var fonts = require('fonts');
	var f = new fonts();
	var pixelate = require('pixelate').pixelate;
	var p = new pixelate();
	var tempsTotal=0;
	var latitude1, longitude1, latitude2, longitude2;
	var m=0;
	var s=0;
	var h=0;
	var inici=1;
	var resultat=0;
	var reset=false;
	var labelH, labelM, labelS;
	if (Ti.Platform.name === 'iPhone OS'){
		var far=false;
		var map = require('bencoding.map');
	}
	var timerIsRunning=false;
	var firstTime=true;
	var OnTheGo=true;
	var actualLat;
	var calories;
	var SavedActs = require('activities');
	var actualLon;
	var auxTime,auxH,auxM,auxS,totalmins;
	var pauseAux=true;
	var mapReg;
	/*var points=[];
	var customRoute = {
		name:"some name",
		points:points,
		color:"#00f",
		width:2
	};*/

	//variables de la edició de Jose
	var startDate ;
	var pauseDate = -1;

	var d = new Date();

	var day = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();

	/*function release(){
		resumeView.remove(iniciLabel);
		resumeView.remove(finalLabel);
		resumeView.remove(timeLabel);
		resumeView.remove(velocityLabel);
		resumeView.remove(caloriesLabel);
		resumeView.remove(achievedMedalsLabel);
		resumeView.remove(resetButtonLabel);
		resumeView.remove(display_lbl);

		iniciLabel=null;
		finalLabel=null;
		timeLabel=null;
		velocityLabel=null;
		caloriesLabel=null;
		achievedMedalsLabel=null;
		resetButtonLabel=null;
		display_lbl=null;
	}*/
	function resetRegion(){
		if(iniciLabel2.text==L('free')){
			Titanium.Geolocation.getCurrentPosition(function(h){
				if(inMap==true){
					if(h.error){
						Ti.API.info(h.error);
					}else{
						var SregionNow={
							latitude: h.coords.latitude,
							longitude: h.coords.longitude,
							animate:true,
							latitudeDelta:0.001,
							longitudeDelta:0.001
						};
						if (Ti.Platform.name == 'iPhone OS'){
							mapView.setLocation(SregionNow);
						}else{
							mapView.setRegion(SregionNow);
						}
					}
				}
			})
		}else{
			if (Ti.Platform.name == 'iPhone OS'){
				mapView.location = mapReg;
			}else{
				mapView.setRegion(mapReg);
			}
		}
	}
	if (Ti.Platform.name == 'iPhone OS'){
		var move2Me = function(e){
			var trackingMode = e.mode;
			if(inici==0){
				mapView.setUserTrackingMode({
					mode: 1,
					animated: true
				});
			}
		};
		mapView.addEventListener("userTrackingMode", move2Me);
	}
	var updateValues = function(auxAux, auxfinLon, auxfinLat, auxinitLat, auxinitLon, mapRegion){
		aux = auxAux;
		finLon = auxfinLon;
		finLat = auxfinLat;
		initLat = auxinitLat;
		initLon = auxinitLon;
		mapReg = mapRegion;
		if(iniciLabel2.text==L('free')){
			inMap=true;
		}
	}

	if (Ti.Platform.name == 'iPhone OS'){
		function activityIndShow(){
			win1.touchEnabled=false;
			activityIndicator.show();
		}

		function activityIndHide(){
			activityIndicator.hide();
			win1.touchEnabled=true;
		}
		var activityIndicator = Ti.UI.createActivityIndicator({
			style:Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
			zIndex: 6,
			height:Ti.UI.SIZE,
			width:Ti.UI.SIZE
		});
		activityIndicator.hide();
		win1.add(activityIndicator)
	}



	///FUNCTIONS ON
	function moveUp(){
		if(Ti.Platform.model=='iPhone5' ||Ti.Platform.model=='iPhone5,1' ||Ti.Platform.model=='iPhone5,2'){
			resumeView.animate({
				top: 240,
				duration: 1000,
				curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
			});
		}else{
			if (Ti.Platform.name == 'iPhone OS'){
				resumeView.animate({
					top: 150,
					duration: 1000,
					curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
				});
			}else{
				resumeView.top=p.vertical(150);
			}
		}
	}
	function moveDown(){
		if(Ti.Platform.model=='iPhone5' ||Ti.Platform.model=='iPhone5,1' ||Ti.Platform.model=='iPhone5,2'){
			resumeView.animate({
				top: 465,
				duration: 1000,
				curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
			});
		}else{
			if (Ti.Platform.name == 'iPhone OS'){
				resumeView.animate({
					top: 390,
					duration: 1000,
					curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
				});
			}else{
				resumeView.top=p.vertical(390);
			}
		}
	}
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
	function checkAccuracy (){
		Titanium.Geolocation.getCurrentPosition(function(e){
			if(inMap==true){
				if(!e.error){
					var accuracyAux = e.coords.accuracy;
					if (Ti.Platform.name === 'iPhone OS'){
						if(accuracyAux<=50){
							accuracyImage.backgroundImage='images/gpsgood.png';
						}
						if(accuracyAux>=50 && accuracyAux<=100){
							accuracyImage.backgroundImage='images/gpsmig.png';
						}
						if(accuracyAux>100){
							accuracyImage.backgroundImage='images/gpsbad.png';
						}
					}else{
						if(accuracyAux<=300){
							accuracyImage.backgroundImage='images/gpsgood.png';
						}
						if(accuracyAux>=300 && accuracyAux<=600){
							accuracyImage.backgroundImage='images/gpsmig.png';
						}
						if(accuracyAux>600){
							accuracyImage.backgroundImage='images/gpsbad.png';
						}
					}
				}
			}
		})
	}
	
	if (Ti.Platform.name === 'iPhone OS'){
		setInterval(function(e){
			if(inMap==true){
				checkAccuracy();
			}
		}, 1000);
	}
	
	function distTotal(mapView,k){
		if(k.error){
			Ti.API.info('error_distTotal: '+k.error);
		}else{
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
		};
	}
	
	function checkEnd(label,actualLat,actualLon,Lat,Lon){
		if(label.text==L('free')){
			label.color='#96BD0D';
		}else{
			end = distance(actualLat,actualLon,Lat,Lon);
			if(end<400){
				label.text=correct;
				label.color='#96BD0D';
			}else{
				label.text=incorrect;
				label.color='#E1001A';
			}
		}
	}
	function setRegionF(e){
		actualLat=e.coords.latitude;
		actualLon=e.coords.longitude;

		var regionNow={
			latitude: actualLat,
			longitude: actualLon,
			animate:true,
			latitudeDelta:0.001,
			longitudeDelta:0.001
		};
		if (Ti.Platform.name == 'iPhone OS'){
			mapView.setLocation(regionNow);
		}else{
			mapView.setRegion(regionNow);
		}
		if(iniciLabel2.text!==free){
			if(inici==1){
				checkEnd(iniciLabel2,actualLat,actualLon,initLat, initLon);
				inici=0;
			}
		}
	}
	var locFunc = function(k){
		if(!k.error){
			if(inMap==true){
				if (Ti.Platform.name === 'iPhone OS'){
					distTotal(mapView,k);
				}else{
					actualLat=k.coords.latitude;
					actualLon=k.coords.longitude;
					if(timerIsRunning){
						distTotal(mapView,k);
					}
				}
			}
		}
	}
	function callback(){
		Titanium.Geolocation.addEventListener('location',locFunc);
	}
	function checkMedals(){
		var saberDistancia = arrayDistance[aux];
		saberDistancia=parseInt(saberDistancia);
		saberDistancia=(saberDistancia*80)/100;
		if(iniciLabel2.text==free){
			Ti.API.info('ruta free');
		}else{
			if(iniciLabel2.text==correct && finalLabel2.text==correct && resultat>saberDistancia){
				var X = 'ruta'+aux;
				if(Ti.App.Properties.getString(X)=='false' || Ti.App.Properties.getString(X)===null){
					Ti.App.Properties.setString(X,'true');
					medalRoute.backgroundImage='images/medallas/'+ X +'.png';
				}
			}
		}	
		function SetDist(medal){
			if(Ti.App.Properties.getString(medal, null)===null || Ti.App.Properties.getString(medal)==='false'){
				Ti.App.Properties.setString(medal, 'true');
				if(velocityLabel2.text!=='- min/km'){
					medalDistance.backgroundImage='images/medallas/'+ medal +'.png';

				}
			}
		}
		if(resultat>3000){
			SetDist('distancia1');
			if(resultat>5000){
				SetDist('distancia2');
				if(resultat>10000){
					SetDist('distancia3');
					if(resultat>15000){
						SetDist('distancia4');
						if(resultat>21000){
							SetDist('distancia5');
							if(resultat>30000){
								SetDist('distancia6');
								if(resultat>42000){
									SetDist('distancia7');
									if(resultat>50000){
										SetDist('distancia8');
									}
								}
							}
						}
					}
				}
			}
		}
		function SetVelocity(medal){
			if(Ti.App.Properties.getString(medal, null)===null || Ti.App.Properties.getString(medal)==='false'){
				if(velocityLabel2.text!=='- min/km'){
					Ti.App.Properties.setString(medal, 'true');
					medalVel.backgroundImage='images/medallas/'+ medal +'.png';

				}
			}
		}	
		if(tempsTotal<=7){
			SetVelocity('velocidad1');
			if(tempsTotal<=6.5){
				SetVelocity('velocidad2');
				if(tempsTotal<=6){
					SetVelocity('velocidad3');
					if(tempsTotal<=5.5){
						SetVelocity('velocidad4');
						if(tempsTotal<=5){
							SetVelocity('velocidad5');
							if(tempsTotal<=4.5){
								SetVelocity('velocidad6');
								if(tempsTotal<=4){
									SetVelocity('velocidad7');
									if(tempsTotal<=3.5){
										SetVelocity('velocidad8');
									}
								}
							}
						}
					}
				}
			}
		}
		function SetCal(medal){
			if(Ti.App.Properties.getString(medal, null)===null || Ti.App.Properties.getString(medal)==='false'){
				Ti.App.Properties.setString(medal, 'true');
				medalCalories.backgroundImage='images/medallas/'+ medal +'.png';	
			}
		}
		if(calories>200){
			SetCal('cal1');
			if(calories>500){
				SetCal('cal2');
				if(calories>750){
					SetCal('cal3');
					if(calories>1000){
						SetCal('cal4');
						if(calories>1250){
							SetCal('cal5');
							if(calories>1500){
								SetCal('cal6');
								if(calories>2000){
									SetCal('cal7');
									if(calories>3000){
										SetCal('cal8');
									}
								}
							}
						}
					}
				}
			}
		}
		if(OnTheGo==true){
			if(Ti.App.Properties.getInt('LastDate', null)===null){
				Ti.App.Properties.setInt('LastDate', month);
			}
			if(Ti.App.Properties.getInt('counter', null)===null){
				Ti.App.Properties.setInt('counter', 0);
			}
			var DateValue=Ti.App.Properties.getInt('LastDate');
			if(DateValue<month){
				Ti.App.Properties.setInt('counter', 0);
			}
			var Y=(Ti.App.Properties.getInt('counter'));
			Y=Y+1;
			Ti.App.Properties.setInt('counter', Y);
			function SetTimes(medal){
				if(Ti.App.Properties.getString(medal, null)===null || Ti.App.Properties.getString(medal)==='false'){
					Ti.App.Properties.setString(medal, 'true');
					medalRutesMens.backgroundImage='images/medallas/'+ medal +'.png';
				}
			}
			if(Y>=4){
				SetTimes('activity1');
				if(Y>=6){
					SetTimes('activity2');
					if(Y>=8){
						SetTimes('activity3');
						if(Y>=12){
							SetTimes('activity4');
							if(Y>=16){
								SetTimes('activity5');
								if(Y>=20){
									SetTimes('activity6');
									if(Y>=25){
										SetTimes('activity7');
										if(Y>=31){
											SetTimes('activity8');
										}
									}
								}
							}
						}
					}
				}
			}
			OnTheGo=false;
		}
		var AllMedals = new showMedals(win1, medalContainer);
	}
	function resetOrBack (){
		if (Ti.Platform.name === 'iPhone OS'){
			activityIndShow();
		}
		inMap=false;
		firstTime=true;
		TimerInit=true;
		pauseDate = -1;
		startDate = null;
		reset=true;
		resultat=0;
		totalmins=0;
		OnTheGo=true;
		moveDown();
		inici=1;
		if (Ti.Platform.name === 'iPhone OS'){
			far=false;
			mapView.setUserTrackingMode({
				mode: 0,
				animated: true
			});
		}
		playButton.enabled=true;
		stopButton.hide();
		playButton.show();
		playButton.opacity=1;
		finishButton.show();
		if (Ti.Platform.name === 'iPhone OS'){
			medalBox.hide();
			achievedMedalsLabel.hide();
		}else{
			medalBox.visible=false;
			achievedMedalsLabel.visible=false;
			resumeView.visible=false;
		}
		if (Ti.Platform.name === 'iPhone OS'){
			mapView.removeEventListener("userTrackingMode", move2Me);
		}
		medalVel.backgroundImage='images/medallas/velocidadneutro.png';
		medalCalories.backgroundImage='images/medallas/caloriasneutro.png';
		medalDistance.backgroundImage='images/medallas/distancianeutro.png';
		medalRoute.backgroundImage='images/medallas/rutaneutro.png';
		medalRutesMens.backgroundImage='images/medallas/actividadesneutro.png';
		resetRegion();
		display_lbl.text='00:00:00';
		pauseAux=true;
		if (Ti.Platform.name === 'iPhone OS'){
			activityIndHide();
		}
	}
	function goPlay(){

		if (Ti.Platform.name === 'iPhone OS'){
			activityIndShow();
		}
		if(Titanium.Geolocation.locationServicesEnabled==false){
			Titanium.UI.createAlertDialog({title:'Barcelona corre', message:nogps,buttonNames:[aceptar] }).show();
		}else{
			if (Ti.Platform.name === 'iPhone OS'){
				checkAccuracy();
			}
			if(accuracyImage.backgroundImage=='images/gpsbad.png' && Ti.Platform.name !== 'android'){
				Ti.API.info('error_accuracyImage');
				moveDown();
				Titanium.UI.createAlertDialog({title:'Barcelona corre', message:lowAccuracy ,buttonNames:[aceptar] }).show();
			}else{
				stopButton.show();
				playButton.hide();
				my_timer.start();

				if(firstTime==true){
					if (Ti.Platform.name === 'iPhone OS'){
						callback();
					}else{
						timerIsRunning=true;
						Ti.App.auxWin=4;
					}
					try{
						Titanium.Geolocation.getCurrentPosition(function(e){
							if(!e.error){
								if (Ti.Platform.name === 'iPhone OS'){
									if(accuracyImage.backgroundImage=='images/gpsbad.png'){
										Ti.API.info('bad GPS accuracy');
									}else{
										if (Ti.Platform.name === 'iPhone OS'){
											mapView.setUserTrackingMode({
												mode: 1,
												animated: true
											});
										}
										setRegionF(e);
									}
								}else{
									Titanium.Geolocation.getCurrentPosition(function(e){
										if(inMap==true){
											actualLat=e.coords.latitude;
											actualLon=e.coords.longitude;
											if(inici==1){
												checkEnd(iniciLabel2,actualLat,actualLon,initLat, initLon);
												inici=0;
											}
										}
									})
								}
							}
						})
					}catch(h){
						Ti.API.info(h);
					}
				}
			}
		}
		if (Ti.Platform.name === 'iPhone OS'){
			activityIndHide();
		}
	}
	function backMapFunc(){
		if(pauseAux==false){
			my_timer.stop(true);
		}else{
			my_timer.stop();
		}
		resetOrBack();
		if(Ti.Platform.osname=="android"){
			timerIsRunning=false;
			Titanium.Geolocation.removeEventListener('location',locFunc);
		}
		Ti.App.removeEventListener('updateTimerUI', locationFunction);
	}
	var iniciLabel = Ti.UI.createLabel({
		text: initPointText,
		Color: "white",
		left: Ti.Platform.osname=="android"? p.horizontal(40):40,
		top: Ti.Platform.osname=="android"? p.vertical(80):80,
		font:{
			fontSize: "14dp"
		},
	});
	if(iniciLabel.text == 'Start Point:'){
		iniciLabel2.left = Ti.Platform.osname=="android"? p.horizontal(115):115;
		finalLabel2.left = Ti.Platform.osname=="android"? p.horizontal(110):110;
		timeLabel2.left = Ti.Platform.osname=="android"? p.horizontal(85):85;
	}
	var finalLabel = Ti.UI.createLabel({
		text: finalPointText,
		Color: "white",
		left: Ti.Platform.osname=="android"? p.horizontal(40):40,
		top: Ti.Platform.osname=="android"? p.vertical(100):100,
		font:{
			fontSize: "14dp"
		},
	});
	var timeLabel = Ti.UI.createLabel({
		text: timeLabelText,
		Color: "white",
		left: Ti.Platform.osname=="android"? p.horizontal(40):40,
		top: Ti.Platform.osname=="android"? p.vertical(120):120,
		font:{
			fontSize: "14dp"
		},
	});
	var distanceLabel = Ti.UI.createLabel({
		text: distanceLabelText,
		Color: "white",
		left: Ti.Platform.osname=="android"? p.horizontal(40):40,
		top: Ti.Platform.osname=="android"? p.vertical(140):140,
		font:{
			fontSize: "14dp"
		}
	});
	var velocityLabel = Ti.UI.createLabel({
		text: velocityLabelText,
		Color: "white",
		left: Ti.Platform.osname=="android"? p.horizontal(40):40,
		top: Ti.Platform.osname=="android"? p.vertical(160):160,
		font:{
			fontSize: "14dp"
		}
	});
	var caloriesLabel = Ti.UI.createLabel({
		text: calorieLabelText,
		Color: "white",
		left: Ti.Platform.osname=="android"? p.horizontal(40):40,
		top: Ti.Platform.osname=="android"? p.vertical(180):180,
		font:{
			fontSize: "14dp"
		}
	});
	if (Ti.Platform.name === 'iPhone OS'){	
		var achievedMedalsLabel = Ti.UI.createLabel({
			text: medalLabelText,
			Color: "white",
			left: Ti.Platform.osname=="android"? p.horizontal(40):40,
			top: Ti.Platform.osname=="android"? p.vertical(190):190,
			font:{
				fontSize: "14dp"
			}
		});
	}else{
		var achievedMedalsLabel = Ti.UI.createLabel({
			text: medalLabelText,
			Color: "white",
			left: Ti.Platform.osname=="android"? p.horizontal(40):40,
			top: Ti.Platform.osname=="android"? p.vertical(200):200,
			font:{
				fontSize: "14dp"
			},
			visible:false
		});
	}
	var playButton = Ti.UI.createButton({
		height:Ti.Platform.osname=="android"? p.vertical(60):60,
		width: Ti.Platform.osname=="android"? p.vertical(60):60,
		left:Ti.Platform.osname=="android"? p.vertical(67):67,
		top:Ti.Platform.osname=="android"? p.vertical(5):5,
		zIndex:  5,
		backgroundImage: "images/play.png"
	});
	var stopButton = Ti.UI.createButton({
		height:Ti.Platform.osname=="android"? p.vertical(60):60,
		width: Ti.Platform.osname=="android"? p.vertical(60):60,
		left: Ti.Platform.osname=="android"? p.vertical(67):67,
		top: Ti.Platform.osname=="android"? p.vertical(5):5,
		backgroundImage: "images/pause.png"
	});
	var marcador = Ti.UI.createView({
		height: Ti.Platform.osname=="android"? p.vertical(54):54,
		width: Ti.Platform.osname=="android"? p.vertical(174):174,
		top: Ti.Platform.osname=="android"? p.vertical(8):8,
		backgroundImage:"images/marcador.png"
	});
	var saveButton = Ti.UI.createButton({
		height:Ti.Platform.osname=="android"? p.vertical(44):44,
		width: Ti.Platform.osname=="android"? p.vertical(44):44,
		top:Ti.Platform.osname=="android"? p.vertical(20):20,
		left: Ti.Platform.osname=="android"? p.horizontal(20):15,
		backgroundImage: 'images/centrar.png'
	});
	var resetButtonLabel = Ti.UI.createLabel({
		text: reset,
		right: Ti.Platform.osname=="android"? p.horizontal(27):27,
		top:Ti.Platform.osname=="android"? p.vertical(42):42,
		textAlign:'center',
		color: 'white',
		font:{
			fontSize:'11dp'
		}
	});
	if (Ti.Platform.name === 'iPhone OS'){
		var medalBox = Ti.UI.createView({
			height: Ti.Platform.osname=="android"? p.vertical(60):60,
			width: Ti.Platform.osname=="android"? p.horizontal(320):320,
			top: Ti.Platform.osname=="android"? p.vertical(220):220
		});
	}else{
		var medalBox = Ti.UI.createView({
			height: Ti.Platform.osname=="android"? p.vertical(60):60,
			width: Ti.Platform.osname=="android"? p.horizontal(320):320,
			top: Ti.Platform.osname=="android"? p.vertical(220):220,
			visible:false
		});
	}
	var medalRoute =Ti.UI.createView({
		height:Ti.Platform.osname=="android"? p.horizontal(55):55,
		width: Ti.Platform.osname=="android"? p.horizontal(55):55,
		top: 0,
		left: Ti.Platform.osname=="android"? p.horizontal(12):15,
		backgroundImage: 'images/medallas/rutaneutro.png'
	});
	var medalDistance =Ti.UI.createView({
		height:Ti.Platform.osname=="android"? p.horizontal(55):55,
		width: Ti.Platform.osname=="android"? p.horizontal(55):55,
		top: 0,
		left: Ti.Platform.osname=="android"? p.horizontal(72):75,
		backgroundImage: 'images/medallas/distancianeutro.png'
	});
	var medalVel =Ti.UI.createView({
		height:Ti.Platform.osname=="android"? p.horizontal(55):55,
		width: Ti.Platform.osname=="android"? p.horizontal(55):55,
		top:0,
		backgroundImage: 'images/medallas/velocidadneutro.png'
	});
	var medalCalories =Ti.UI.createView({
		height:Ti.Platform.osname=="android"? p.horizontal(55):55,
		width: Ti.Platform.osname=="android"? p.horizontal(55):55,
		right: Ti.Platform.osname=="android"? p.horizontal(72):75,
		top:0,
		backgroundImage: 'images/medallas/caloriasneutro.png'
	});
	var medalRutesMens =Ti.UI.createView({
		height: Ti.Platform.osname=="android"? p.horizontal(55):55,
		width: Ti.Platform.osname=="android"? p.horizontal(55):55,
		right: Ti.Platform.osname=="android"? p.horizontal(12):15,
		top:0,
		backgroundImage: 'images/medallas/actividadesneutro.png'
	});
	var display_lbl =  Titanium.UI.createLabel({
		text:"00:00:00",
		height:Ti.Platform.osname=="android"? p.vertical(35):35,
		width: Ti.Platform.osname=="android"? p.vertical(100):100,
		top:Ti.Platform.osname=="android"? p.vertical(17):17,
		left:Ti.Platform.osname=="android"? p.vertical(130):130,
		color:'#fff',
		font:{
			fontSize:'25dp',
			fontWeight:'bold'
		},
		textAlign:'center'
	});
	if(Titanium.Platform.displayCaps.platformWidth<320){
		playButton.left=Ti.Platform.osname=="android"? p.horizontal(57):57;
		stopButton.left=Ti.Platform.osname=="android"? p.horizontal(57):57;
		display_lbl.width=Ti.Platform.osname=="android"? 'auto':100;
		finalLabel2.left=Ti.Platform.osname=="android"? p.horizontal(160):160;
		iniciLabel2.left= Ti.Platform.osname=="android"? p.horizontal(155):155;
		resetButton.left= Ti.Platform.osname=="android"? p.horizontal(220):220;
	}
	stopButton.hide();
	resumeView.add(medalBox);
	resumeView.add(saveButton);
	resumeView.add(resetButton);
	resumeView.add(iniciLabel);
	resumeView.add(iniciLabel2);
	resumeView.add(finalLabel);
	resumeView.add(finalLabel2);
	resumeView.add(timeLabel);
	resumeView.add(timeLabel2);
	resumeView.add(distanceLabel);
	resumeView.add(distanceLabel2);
	resumeView.add(velocityLabel);
	resumeView.add(velocityLabel2);
	resumeView.add(caloriesLabel);
	resumeView.add(caloriesLabel2);
	resumeView.add(achievedMedalsLabel);
	resumeView.add(marcador);
	//resumeView.add(resetButtonLabel);
	resumeView.add(playButton);
	resumeView.add(stopButton);
	resumeView.add(display_lbl);
	medalBox.add(medalDistance);
	medalBox.add(medalRoute);
	medalBox.add(medalVel);
	medalBox.add(medalCalories);
	medalBox.add(medalRutesMens);
	resumeView.add(medalBox);
	if (Ti.Platform.name === 'iPhone OS'){
		mapView.add(resumeView);
		medalBox.hide();
		achievedMedalsLabel.hide();
	}
	resumeView.add(finishButton);

	///VARS OFF

	var countDown =  function(h, m, s, display_lbl, auxTime, auxH, auxM, auxS  ) {
		return {
			timer:this.timer,
			total_sec: 0,
			start: function() {
				if(inMap==true){
					Ti.API.info('TimerInit:' + TimerInit);
					if(TimerInit == true){
						startDate = new Date().getTime();
						TimerInit=false;
					}
					if(pauseDate != -1){
						var nowTime = new Date().getTime();
						var pauseDifference = nowTime - pauseDate;
						startDate = startDate + pauseDifference;
						pauseDate = -1;
					}
					moveDown();
					this.timer = setInterval(function() {
						if(reset==true){
							s=0;
							m=0;
							h=0;
							reset=false;
						}

						var now = new Date().getTime();
						var difference = now - startDate;
						var timeDifference = new Date(difference);

						auxH = timeDifference.getUTCHours();
						auxM = timeDifference.getUTCMinutes();
						auxS = timeDifference.getUTCSeconds();
						labelH=auxH; 
						labelM=auxM;
						labelS=auxS;
						if(auxH<10){
							labelH='0'+auxH;
						}
						if(auxM<10){
							labelM='0'+auxM;
						}
						if(auxS<10){
							labelS='0'+auxS;
						}
						auxTime=labelH+':'+labelM+':'+labelS;
					//alert("Time: " + auxTime);
					display_lbl.text=auxTime;
					pauseAux=false;
				}, 500 );
				}
			},
			stop: function(leaving) {
				pauseDate = new Date().getTime();
				timeLabel2.text=labelH+'h '+labelM+'m '+labelS+'s';
				distanceLabel2.text=resultat+meters;
				totalmins= auxH*60+auxM+0.01*auxS;
				var totalHours =h+m/60 +s/3600;
				var KMH=resultat/totalHours;

				if(resultat==0 || resultat == 'NaN'){
					velocityLabel2.text='- min/km';
				}else{
					totalmins=(totalmins/(resultat/1000));
					totalmins=totalmins.toFixed(2);
					tempsTotal=totalmins;
					totalmins=Math.floor(totalmins);
					var totalsecs = (tempsTotal-totalmins)*60;
					totalsecs=Math.floor(totalsecs);
					if(totalsecs<10){
						velocityLabel2.text= totalmins+':0'+totalsecs +' min/km';
					}else{
						velocityLabel2.text= totalmins+':'+totalsecs +' min/km';
					}
				}
				var weight=Ti.App.Properties.getString('weight');
				weight=parseInt(weight);
				if(resultat==0){
					caloriesLabel2.text='0 cal';
				}else{
					calories = 0.75*weight*2.2*resultat/1000*0.62137;
					calories = calories.toFixed(2);
					caloriesLabel2.text=calories+' cal';
				}
				if(leaving){
					if (Ti.Platform.name === 'iPhone OS'){
						//flurry.endTimedEvent('intervalCursa',{end: 'end'});
						Titanium.Geolocation.removeEventListener('location',locFunc);
					}
					clearInterval(this.timer);
				}
				return this;
			}
		}
	}
	var my_timer = new countDown(h, m, s, display_lbl, auxTime, auxH, auxM, auxS);

	///Events ON

	playButton.addEventListener('click', function(e){
		goPlay();
	})


	stopButton.addEventListener('click', function(){
		moveUp();
		Titanium.Geolocation.getCurrentPosition(function(e){
			if(inMap==true){
				if(e.error){
					Ti.API.info('error_getCurrentPosition');
				}else{
					actualLat=e.coords.latitude;
					actualLon=e.coords.longitude;
					checkEnd(finalLabel2,actualLat,actualLon,finLat, finLon);
				}
			}
		})
		pauseAux=true;
		firstTime=true;
		if (Ti.Platform.name === 'iPhone OS'){
			checkAccuracy();
		}
		playButton.show();
		stopButton.hide();
		if (Ti.Platform.name === 'iPhone OS'){
			mapView.setUserTrackingMode({
				mode: 0,
				animated: true
			});
		}else{
			timerIsRunning=false;
			Ti.App.auxWin=2;
		}
		my_timer.stop(true);
	})
	resetButton.addEventListener('click', function(e){
		/*my_timer.stop(true);
		var dlg2 = Titanium.UI.createAlertDialog({
			message:L('resetButton'), 
			buttonNames: [L('yes'),L('no')]
		});
		dlg2.addEventListener('click', function(ev) {
			if (ev.index == 0) {
				resetOrBack();
				Ti.App.removeEventListener('updateTimerUI', locationFunction);
			} else if (ev.index == 1) { 
				goPlay();
			}
		});
dlg2.show();*/
if (Ti.Platform.name === 'iPhone OS'){
	if(far==false){
		if (Ti.Platform.name === 'iPhone OS'){
			mapView.setUserTrackingMode({
				mode: 0,
				animated: true
			});
			mapView.removeEventListener("userTrackingMode", move2Me);
		}
		resetRegion();
		far=true;
	}else{
		if (Ti.Platform.name === 'iPhone OS'){
			mapView.setUserTrackingMode({
				mode: 1,
				animated: true
			});
			mapView.addEventListener("userTrackingMode", move2Me);
		}
		Titanium.Geolocation.getCurrentPosition(function(e){
			if(inMap==true){
				if(e.error){
					Ti.API.info('error_getCurrentPosition');
				}else{
					actualLat=e.coords.latitude;
					actualLon=e.coords.longitude;

					var regionNow={
						latitude: actualLat,
						longitude: actualLon,
						animate:true,
						latitudeDelta:0.001,
						longitudeDelta:0.001
					};
					if (Ti.Platform.name === 'iPhone OS'){
						mapView.setLocation(regionNow);
					}else{
						mapView.setRegion(regionNow);
					}
				}
			}
		})
		far=false;
	}
}else{
	resetRegion();
}
})
if (Ti.Platform.name === 'iPhone OS'){
	backButtonMap.addEventListener('click',backMapFunc);
}
goMapButton.addEventListener('click', function(e){
	Ti.App.auxWin=2;
	inMap=true;
	if (Ti.Platform.osname == 'android'){
		resumeView.visible=true;
		callback();
	}
})
lliureBackButton.addEventListener('click',function(e){
	my_timer.stop(true);
	resetOrBack();
	Ti.App.removeEventListener('updateTimerUI', locationFunction);
})

win1.addEventListener('android:back',function(){
	if(Ti.App.auxWin==2){
		backMapFunc();
	}
	if(Ti.App.auxWin==4){
		Titanium.UI.createAlertDialog({title:'Barcelona corre', message:pause2back,buttonNames:['Aceptar'] }).show();
	}
	return false;
});
saveButton.addEventListener('click',function(q){
	if(actualLat==null  || actualLat==0){
		Titanium.Geolocation.getCurrentPosition(function(e){
			if(inMap==true){
				actualLat=e.coords.latitude;
				actualLon=e.coords.longitude;
			}
		})
	}else{
		var FregionNow={
			latitude: actualLat,
			longitude: actualLon,
			animate:true,
			latitudeDelta:0.001,
			longitudeDelta:0.001
		};
		if (Ti.Platform.name === 'iPhone OS'){
			mapView.setLocation(FregionNow);
		}else{
			var FregionNow={
				latitude: actualLat,
				longitude: actualLon,
				animate:true,
				latitudeDelta:0.001,
				longitudeDelta:0.001
			};
			mapView.setRegion(FregionNow);
		}
	}
})
function finish(){
	var dlg = Titanium.UI.createAlertDialog({
		message:finishButtonText, 
		buttonNames: [yes,no]
	});
	dlg.addEventListener('click', function(ev) {
		if (ev.index == 0) {
			checkMedals();
			finishButton.hide();
			playButton.enabled=false;
			playButton.show();
			playButton.opacity=0.5;
			if (Ti.Platform.name === 'iPhone OS'){
				medalBox.show();
				achievedMedalsLabel.show();
			}else{
				medalBox.visible=true;
				achievedMedalsLabel.visible=true;
			}
		} else if (ev.index == 1) { 
			goPlay();
		}
	});
	dlg.show();
}
finishButton.addEventListener('click', finish);
var locationFunction = function(e){
	resultat = e.metres;
};
Ti.App.addEventListener('updateTimerUI', locationFunction);
returnObject.updateValues=updateValues;
returnObject.timer= timer;
return returnObject;
};
module.exports=timer;