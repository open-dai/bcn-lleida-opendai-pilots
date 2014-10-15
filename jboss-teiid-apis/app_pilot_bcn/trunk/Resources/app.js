var PollutionView = require ('pollution_view');

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
/*
var flurry = require('sg.flurry');
if (Ti.Platform.osname != "android") {
	flurry.secureTransport(true);
	flurry.logUncaughtExceptions(true);
	flurry.startSession('M5YKMZ5P8K87FG5FP9MH');
} else {
	flurry.onStartSession('YPQPSWBRN5DRDT9QH27M');
}
*/

/*Adding Google Analytics*/

var gaModule = require('Ti.Google.Analytics');
var analytics = new gaModule('UA-52482477-1');

// Call the next function if you want to reset the analytics to a new first time visit.
// This is useful for development only and should not go into a production app.
//analytics.reset();

// The analytics object functions must be called on app.js otherwise it will loose it's context
Ti.App.addEventListener('analytics_trackPageview', function(e){
	analytics.trackPageview('/Android' + e.pageUrl);
});

Ti.App.addEventListener('analytics_trackEvent', function(e){
	analytics.trackEvent(e.category, e.action, e.label, e.value);
});

// Starts a new session as long as analytics.enabled = true
// Function takes an integer which is the dispatch interval in seconds
analytics.start(10,true);

var color1="#DFE8AD";
var color2="#EAEFBD";
var charIdioma;
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
	charIdioma = 'English';
}else if(selectedLang=="es"){
	Ti.include('es.js');
	charIdioma = 'Español';
}else{
	Ti.include('ca.js');
	charIdioma = 'Català';
}

Ti.Geolocation.purpose = "Recieve User Location";
Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
Titanium.Geolocation.accuracy=Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 3;
var KML_reader = require('google_kml');
var showMedals = require('medals');
var initial = require('initialView');
var timer = require('timer2');
var showCurses = require('curses');
var regionFit = require('regionFit');
var fonts = require('fonts');
var pixelate = require('pixelate').pixelate;
var p = new pixelate();
var finalPointLat=0;
var finalPointLon=0; 
var initPointLat=0;
var aux;

Ti.App.auxWin=0;
if (Ti.Platform.name === 'iPhone OS'){
	var map = require('bencoding.map');
}


var initPointLon=0;
var initLat, initLon, finLon, finLat;
var mapRegion={};
var f = new fonts();
var anotherRoute=false;
var SavedActs = require('activities');
Ti.App.addEventListener('resume', function(e){


	var metres = Ti.App.Properties.getInt('serviceDistance');
	Ti.App.fireEvent('updateTimerUI',{
		'metres': metres
	});
});

if (Ti.Platform.name === 'iPhone OS'){
	Ti.API.info('Registering background services');
	var service = Ti.App.iOS.registerBackgroundService({url:'background.js'});
	Ti.API.info('*** Press home button to pause application ***');
}
//functions on

function activityIndShow(){
	win1.touchEnabled=false;
	activityIndicator.show();
}

function activityIndHide (){
	activityIndicator.hide();
	win1.touchEnabled=true;
}
function useKML (mapView, path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon){
	if(Ti.Platform.name === 'iPhone OS'){
		activityIndShow();
	}else{
		scrollableViewInit.height= Ti.Platform.osname=="android"? p.vertical(436):460;
		Ti.App.addEventListener('android:back', backbuttonFunc);		
	}
	mapView.removeAllAnnotations();
	scrollableView.scrollToView(fitxaInfo);
	if(Ti.Platform.name === 'iPhone OS'){
		if(auxClick===true){
			mapView.removeRoute(route);
		}
	}
	iniciLabel2.text=incorrect;
	finalLabel2.text=incorrect;
	fitxaText1.text=arrayRoute[aux];
	fitxaImage1.backgroundImage='images/fotosrutas/'+aux+'1.jpg';
	fitxaImage2.backgroundImage='images/fotosrutas/'+aux+'2.jpg';
	fitxaImage3.backgroundImage='images/fotosrutas/'+aux+'3.jpg';
	numberRuta.text=''+aux;
	fitxaText2.text=routesbot[aux];
	fitxadist2.text=arrayDistance[aux];
	fitxasign2.text=arraySign[aux];
	fitxaterrain2.text=arrayTerrain[aux];
	fitxaday2.text=arrayDay[aux];
	fitxadesnivellP2.text=arrayDesP[aux];
	fitxadesnivellA2.text=arrayDesA[aux];
	fitxaEspVerds2.backgroundImage=arrayEspV[aux];
	fitxaWater2.backgroundImage=arrayWater[aux];
	fitxatime2.text=arrayTime[aux];
	fitxadif2.text=arrayDif[aux];
	fitxadif2.font= {fontSize:'14dp', fontFamily:f.electroFont};
	fitxadif3.backgroundImage=arrayDif_image[aux];
	fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(140):140;
	if(fitxadif2.text=='MITJANA' || fitxadif2.text=='MEDIA' || fitxadif2.text=='MEDIUM'){
		fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(170):170;
	}
	if(fitxadif2.text=='MITJANA-BAIXA' || fitxadif2.text=='BAIXA-MITJANA' || fitxadif2.text=='MITJANA-ALTA' || fitxadif2.text=='MEDIA-BAJA' || fitxadif2.text=='BAJA-MEDIA' || fitxadif2.text=='MEDIA-ALTA' || fitxadif2.text=='MEDIUM-LOW' || fitxadif2.text=='LOW-MEDIUM' || fitxadif2.text=='MEDIUM-HIGH'){
		fitxadif2.font={fontSize:'12dp', fontFamily:f.electroFont};
		fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(202):202;
	}
	if(fitxadif2.text=='BAIXA' || fitxadif2.text=='BAJA' || fitxadif2.text=='LOW'){
		fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(150):150;
	}
	fitxa.backgroundColor="#E0E8AD";

	color1="#DFE8AD";
	color2="#EAEFBD";
	fitxaTopBar.backgroundColor="#BED049";
	
	Ti.App.myOption = aux;
	myOption = aux;
	
	
	
	if(aux>10 &&aux<19){
		color1="#A6BADD";
		color2="#BCCFE8";
		fitxa.backgroundColor="#A6BADD";
		fitxaTopBar.backgroundColor="#53A4DB";
	}else{
		if(aux>=18){
			color1="#E29DAF";
			color2="#EFD2D0";
			fitxa.backgroundColor="#DA938B";
			fitxaTopBar.backgroundColor="#B81037";
		}
	}
	for(Q=0;Q<10;Q++){
		colorBar[Q].backgroundColor=color1;
		if(Q%2==1){
			colorBar[Q].backgroundColor=color2;
		}
	}
	var KML = new KML_reader(mapView, path,mapRegion,finalPointLat,finalPointLon, initPointLat, initPointLon);
	initLat=KML.initPointLat; 
	initLon=KML.initPointLon; 
	finLon=KML.finalPointLon;
	finLat=KML.finalPointLat;
	mapRegion=KML.mapRegion;
	auxClick=true;
	topBarTitle.text = fitxaLabel;
	anotherRoute=true;
	callback();
	if (Ti.Platform.name === 'iPhone OS'){
		tabs.animate({
			bottom: -55,
			duration: 500,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
		});
		activityIndHide();
	}else{
		tabs.hide();
	}
	Ti.App.auxWin=1;
};
function removeViews(){
	goMapButton.show();
	scrollableViewInit.scrollToView(fitxa);
	backButton.show();
	win1.add(goMapButton);
	SavedButton.hide();
}
function Remove(buttonAux,table,fitxa,topBarTitle,tablecurses,cursaView,win1,backButton,backButton2){
	backButton2.hide();
	backButton.hide();
	goMapButton.hide();
	backButtonMap.hide();
	scrollableCurses.scrollToView(tablecurses);
}
function backbuttonFunc(){
	if (Ti.Platform.name === 'iPhone OS'){
		activityIndShow();
		tabs.animate({
			bottom: 0,
			duration: 500,
			curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
		});
	}else{
		scrollableViewInit.height= p.vertical(365);
		scrollableViewInit.top= p.vertical(43);
		tabs.show();
	}
	topBarTitle.text = routes;
	scrollableViewInit.scrollToView(table);
	scrollableView.scrollToView(fitxaInfo);
	backButton.hide();
	goMapButton.hide();
	if (Ti.Platform.name === 'iPhone OS'){
		activityIndHide();
	}
}
function backbuttonMapFunc(){
	topBarTitle.text = fitxaLabel;
	scrollableViewInit.scrollToView(fitxa);
	scrollableView.scrollToView(fitxaInfo);
	if (Ti.Platform.name === 'iPhone OS'){
		backButton.show();
		backButtonMap.hide();
	}else{
		mapContainer.hide();
	}
	goMapButton.show();
	accuracyImage.hide();
}
//functions off


var win1 = Titanium.UI.createWindow({  
	title:"bcncorre",
	backgroundColor:'#fff'
});
var SavedButton = Ti.UI.createButton({
	backgroundImage: "images/go.png",
	height:44,
	width:60,
	top:0,
	right:2
})
var accuracyImage = Ti.UI.createView({
	backgroundImage: 'images/gpsbad.png',
	top:Ti.Platform.osname=="android"? p.vertical(8):8,
	right:Ti.Platform.osname=="android"? p.horizontal(10):10,
	width: Ti.Platform.osname=="android"? p.horizontal(44):44,
	height:Ti.Platform.osname=="android"? p.vertical(44):44
})

var lliureBackButton = Ti.UI.createButton({
	backgroundImage: "images/back.png",
	height:Ti.Platform.osname=="android"? p.vertical(40):40,
	width: Ti.Platform.osname=="android"? p.horizontal(40):40,
	top:Ti.Platform.osname=="android"? p.vertical(2):2,
	zIndex:6,
	left:Ti.Platform.osname=="android"? p.horizontal(2):2
})

lliureBackButton.hide();
if (Ti.Platform.name === 'iPhone OS'){
	var activityIndicator = Ti.UI.createActivityIndicator({
		style:Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
		zIndex: 6,
		height:Ti.UI.SIZE,
		width:Ti.UI.SIZE
	});
	win1.add(activityIndicator);
}
var configView = Ti.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
	width:Ti.Platform.osname=="android"? p.horizontal(320):320,
	height: Ti.Platform.osname=="android"? p.vertical(381):381,
	zIndex:1,
	disableBounce: false,
	top:Ti.Platform.osname=="android"? p.vertical(44):44,
	backgroundImage: 'images/fondonegro.png'
});
var tabs = Titanium.UI.createView({
	zIndex: 4, 
	backgroundColor: "#1A171A",
	bottom:0,
	borderColor: 'black',
	borderWidth: 2,
	height: Ti.Platform.osname=="android"? p.vertical(55):55,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320
});
var theInitial = new initial(tabs,win1,configView);

if(Titanium.Platform.displayCaps.platformWidth<320){
	var resetButton = Ti.UI.createButton({
		height:Ti.Platform.osname=="android"? p.vertical(44):44,
		width: Ti.Platform.osname=="android"? p.vertical(44):44,
		top:Ti.Platform.osname=="android"? p.vertical(20):20,
		left: Ti.Platform.osname=="android"? p.horizontal(270):255,
		backgroundImage: 'images/centrarruta.png'
	});
}else{
	var resetButton = Ti.UI.createButton({
		height:Ti.Platform.osname=="android"? p.vertical(44):44,
		width: Ti.Platform.osname=="android"? p.vertical(44):44,
		top:Ti.Platform.osname=="android"? p.vertical(20):20,
		right: Ti.Platform.osname=="android"? p.horizontal(20):15,
		backgroundImage: 'images/centrarruta.png'
	});
}
var caloriesLabel2 = Ti.UI.createLabel({
	text: calorieLabelText,
	Color: "white",
	textAlign:'left',
	left: Ti.Platform.osname=="android"? p.horizontal(100):100,
	top: Ti.Platform.osname=="android"? p.vertical(180):180,
	font:{
		fontSize: "14dp"
	},
})
var velocityLabel2 = Ti.UI.createLabel({
	text: '- min/km',
	Color: "white",
	textAlign:'left',
	left: Ti.Platform.osname=="android"? p.horizontal(125):125,
	top: Ti.Platform.osname=="android"? p.vertical(160):160,
	font:{
		fontSize: "14dp"
	},
})
var distanceLabel2 = Ti.UI.createLabel({
	text: distanceLabelText,
	Color: "white",
	textAlign:'left',
	left: Ti.Platform.osname=="android"? p.horizontal(120):120,
	top: Ti.Platform.osname=="android"? p.vertical(140):140,
	font:{
		fontSize: "14dp"
	},
})
var timeLabel2 = Ti.UI.createLabel({
	text: timeLabelText,
	Color: "white",
	left: Ti.Platform.osname=="android"? p.horizontal(100):100,
	top: Ti.Platform.osname=="android"? p.vertical(120):120,
	font:{
		fontSize: "14dp"
	},
})
var finalLabel2 = Ti.UI.createLabel({
	text: incorrect,
	Color: "#E1001A",
	left: Ti.Platform.osname=="android"? p.horizontal(150):150,
	top: Ti.Platform.osname=="android"? p.vertical(100):100,
	font:{
		fontSize: "14dp"
	},
})
var iniciLabel2 = Ti.UI.createLabel({
	text: incorrect,
	Color: "#E1001A",
	left: Ti.Platform.osname=="android"? p.horizontal(135):135,
	top: Ti.Platform.osname=="android"? p.vertical(80):80,
	font:{
		fontSize: "14dp"
	},
})

var topBar = Titanium.UI.createView({  
	backgroundColor: "#1A171A",
	top:0,
	zIndex:5,
	borderColor: 'black',
	height: Ti.Platform.osname=="android"? p.vertical(44):44,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320
});

if (Ti.Platform.name === 'iPhone OS'){	
	var languageButton = Ti.UI.createButton({
		backgroundImage: "images/botonidioma.png",
		height: Ti.Platform.osname=="android"? p.vertical(30):30,
		width:Ti.Platform.osname=="android"? p.horizontal(90):90,
		zIndex:6,
		top:0,
		visible:false,
		top: Ti.Platform.osname=="android"? p.vertical(7):7,
		right:Ti.Platform.osname=="android"? p.horizontal(2):2
	});
}else{
	var languageButton = Ti.UI.createView({
		backgroundImage: "images/botonidioma.png",
		height: Ti.Platform.osname=="android"? p.vertical(30):30,
		width:Ti.Platform.osname=="android"? p.horizontal(90):90,
		zIndex:6,
		top:0,
		visible:false,
		top: Ti.Platform.osname=="android"? p.vertical(7):7,
		right:Ti.Platform.osname=="android"? p.horizontal(2):2
	});
}
var labelLanguageButton = Ti.UI.createLabel({
	height: Ti.Platform.osname=="android"? p.vertical(30):30,
	width:Ti.Platform.osname=="android"? p.horizontal(90):90,
	text: charIdioma,
	color:'white',
	font:{
		fontSize: "16dp",
		fontFamily: f.Helv57C
	},
	textAlign:'center'
})
languageButton.add(labelLanguageButton);
var backButton = Ti.UI.createButton({
	backgroundImage: "images/back.png",
	height: Ti.Platform.osname=="android"? p.vertical(40):40,
	width:Ti.Platform.osname=="android"? p.horizontal(40):40,
	top:2,
	zIndex:6,
	left:Ti.Platform.osname=="android"? p.horizontal(2):2
});
var backButtonMap= Ti.UI.createButton({
	backgroundImage: "images/back.png",
	height: Ti.Platform.osname=="android"? p.vertical(40):40,
	width:Ti.Platform.osname=="android"? p.horizontal(40):40,
	top:2,
	zIndex:6,
	left:Ti.Platform.osname=="android"? p.horizontal(2):2
});
var backButton2 = Ti.UI.createButton({
	backgroundImage: "images/back.png",
	height:  Ti.Platform.osname=="android"? p.vertical(40):40,
	width:Ti.Platform.osname=="android"? p.horizontal(40):40,
	top:2,
	zIndex:6,
	left:Ti.Platform.osname=="android"? p.horizontal(2):2
});
var goMapButton = Ti.UI.createButton({
	backgroundImage: "images/go.png",
	height: Ti.Platform.osname=="android"? p.vertical(44):44,
	width:Ti.Platform.osname=="android"? p.horizontal(60):60,
	zIndex:6,
	top:0,
	right:Ti.Platform.osname=="android"? p.horizontal(2):2
});

backButtonMap.hide();
backButton.hide();
backButton2.hide();
var routeButton = Ti.UI.createView({
	left:Ti.Platform.osname=="android"? p.horizontal(0):0,
	height: Ti.Platform.osname=="android"? p.vertical(55):55,
	width: Ti.Platform.osname=="android"? p.horizontal(80):80,
	backgroundImage: "images/rutassel.png"
});
var routeLabel = Ti.UI.createLabel({
	bottom: Ti.Platform.osname=="android"? p.vertical(8):8,
	color: '#F19300',
	font:{
		fontSize: "10dp",
		fontFamily:f.Helv57C
	},
	text: routes,
	height: Ti.Platform.osname=="android"? p.vertical(15):15
})
var midButton = Ti.UI.createView({
	left:Ti.Platform.osname=="android"? p.horizontal(80):80,
	height: Ti.Platform.osname=="android"? p.vertical(55):55,
	width: Ti.Platform.osname=="android"? p.horizontal(80):80,
	backgroundImage: "images/carreras.png"
});
var cursaLabel = Ti.UI.createLabel({
	bottom: Ti.Platform.osname=="android"? p.vertical(8):8,
	color: '#ECECED',
	font:{
		fontSize: "10dp",
		fontFamily:f.Helv57C
	},
	text: curses,
	height: Ti.Platform.osname=="android"? p.vertical(15):15
})
var medalButton = Ti.UI.createView({
	right:Ti.Platform.osname=="android"? p.horizontal(80):80,
	height: Ti.Platform.osname=="android"? p.vertical(55):55,
	width: Ti.Platform.osname=="android"? p.horizontal(80):80,
	backgroundImage: "images/medallas.png"
});
var medalLabel = Ti.UI.createLabel({
	bottom: Ti.Platform.osname=="android"? p.vertical(8):8,
	color: '#ECECED',
	font:{
		fontSize: "10dp",
		fontFamily:f.Helv57C
	},
	text: medals,
	height: Ti.Platform.osname=="android"? p.vertical(15):15
})
var configButton = Ti.UI.createView({
	right:Ti.Platform.osname=="android"? p.horizontal(0):0,
	height: Ti.Platform.osname=="android"? p.vertical(55):55,
	width: Ti.Platform.osname=="android"? p.horizontal(80):80,
	backgroundImage: "images/config.png"
});
var configLabel = Ti.UI.createLabel({
	bottom: Ti.Platform.osname=="android"? p.vertical(8):8,
	color: '#ECECED',
	font:{
		fontSize: "10dp",
		fontFamily:f.Helv57C
	},
	text: config,
	height: Ti.Platform.osname=="android"? p.vertical(15):15
})
tabs.add(routeButton);
tabs.add(midButton);
tabs.add(medalButton);
tabs.add(configButton);
routeButton.add(routeLabel);
midButton.add(cursaLabel);
medalButton.add(medalLabel);
configButton.add(configLabel);
var topBarTitle = Ti.UI.createLabel({
	Color: 'white',
	width: Ti.Platform.osname=="android"? p.horizontal(300):300,
	height: Ti.Platform.osname=="android"? p.vertical(40):40,
	textAlign: "center",
	font:{
		fontSize: "22dp",
		fontFamily:f.Helv57C
	},
	top:0,
	text: routes
});
topBar.add(topBarTitle);
//topBar.add(SavedButton);



var cursaView = Titanium.UI.createView({
	zIndex: 1, 
	top:Ti.Platform.osname=="android"? p.vertical(44):44,
	height:  Ti.Platform.osname=="android"? p.vertical(420):420
});
var tablecurses = Ti.UI.createTableView({
	separatorColor: '#57585A',
	backgroundImage: 'images/fondonegro.png',
	top:Ti.Platform.osname=="android"? p.vertical(44):44,
	height:  Ti.Platform.osname=="android"? p.vertical(360):360
});
var scrollableCurses = Ti.UI.createScrollableView({
	views:[tablecurses,cursaView],
	backgroundColor:'black',
	width:Ti.Platform.osname=="android"? p.horizontal(320):320,
	height: Ti.Platform.osname=="android"? p.vertical(365):365,
	top:Ti.Platform.osname=="android"? p.vertical(44):44,
	showPagingControl:false,
	scrollingEnabled: false
})
scrollableCurses.hide();
var AllCurses = new showCurses(win1, cursaView,tablecurses, backButton2, tabs,scrollableCurses);

var medalContainer = Ti.UI.createView({
	height: Ti.Platform.osname=="android"? p.vertical(408):405,
	top:0,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320
})


var AllMedals = new showMedals(win1, medalContainer);




//INITIAL FITXA




var fitxa = Ti.UI.createView({
	top:Ti.Platform.osname=="android"? p.vertical(0):0,
	height:  Ti.Platform.osname=="android"? p.vertical(456):456,
	backgroundColor: "black"
})

if (Ti.Platform.name === 'iPhone OS'){
	fitxa.top=40;
}
var graybar = Ti.UI.createView({
	height: Ti.Platform.osname=="android"? p.vertical(250):250,
	width:Ti.Platform.osname=="android"? p.vertical(100):100,
	left:0,
	top: Ti.Platform.osname=="android"? p.vertical(200):200,
	backgroundColor: "#1A171A"
})
var numberRuta  = Ti.UI.createLabel({
	text:'0',
	color:'black',
	font:{
		fontSize: '30dp',
		fontFamily: f.helvBold
	},
	textAlign: 'center',
	width: Ti.Platform.osname=="android"? p.horizontal(40):40,
	height:Ti.Platform.osname=="android"? p.vertical(44):44,
	left:0,
	top:0
})
var fitxaText1=Ti.UI.createLabel({
	color: '#000000',
	font:{
		fontSize: '14dp',
		fontFamily: f.neue77,
		fontWeight: '77 Bold Condensed'
	},
	text: arrayRoute[1],
	height: Ti.Platform.osname=="android"? p.vertical(20):20,
	top: Ti.Platform.osname=="android"? p.vertical(8):8,
	left: Ti.Platform.osname=="android"? p.horizontal(40):40
})
var fitxaText2 = Ti.UI.createLabel({
	color: '#000000',
	font:{
		fontSize: '12dp',
		fontFamily: f.Helv57C,
		fontColor: "black"
	},
	top: Ti.Platform.osname=="android"? p.vertical(20):20,
	width: Ti.Platform.osname=="android"? p.horizontal(265):265,
	height: Ti.Platform.osname=="android"? p.vertical(20):20,
	text: routesbot[1],
	left:Ti.Platform.osname=="android"? p.horizontal(40):40
});
var fitxadist = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: distance,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxadist2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: distance,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxasign = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: sign,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxasign2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "left",
	text: sign,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxaterrain = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: terrain,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxaterrain2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: terrain,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxaday = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: day,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxaday2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: sign,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxadesnivellP = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: desP,
	width: Ti.Platform.osname=="android"? p.horizontal(55):55,
	left:Ti.Platform.osname=="android"? p.horizontal(30):30
});
var fitxadesnivellP2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: sign,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxadesnivellA = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: desA,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxadesnivellA2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: desA,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxaEspVerds = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: espV,
	width: Ti.Platform.osname=="android"? p.horizontal(55):55,
	left:Ti.Platform.osname=="android"? p.horizontal(30):30
});
var fitxaEspVerds2 = Ti.UI.createView({
	backgroundImage:"images/hola.png",
	Align: "left",
	width: Ti.Platform.osname=="android"? p.horizontal(60):60,
	height: Ti.Platform.osname=="android"? p.vertical(18):18,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxaWater = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: water,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxaWater2 = Ti.UI.createView({
	backgroundImage:"images/hola.png",
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	height: Ti.Platform.osname=="android"? p.vertical(18):18,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxatime = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: time,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxatime2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: sign,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxadif = Ti.UI.createLabel({
	color: 'white',
	font:{
		fontSize: '12dp',
		fontFamily: f.NewsGothic,
		fontWeight: 'bold'
	},
	textAlign: "right",
	text: dif,
	width: Ti.Platform.osname=="android"? p.horizontal(85):85,
	left:Ti.Platform.osname=="android"? p.horizontal(0):0
});
var fitxadif2 = Ti.UI.createLabel({
	color: 'black',
	font:{
		fontSize: '14dp',
		fontFamily: f.electroFont
	},
	textAlign: "left",
	text: sign,
	width: Ti.Platform.osname=="android"? p.horizontal(220):220,
	left:Ti.Platform.osname=="android"? p.horizontal(100):100
});
var fitxadif3 = Ti.UI.createView({
	height: Ti.Platform.osname=="android"? p.vertical(12):12,
	width: Ti.Platform.osname=="android"? p.horizontal(105):105,
	backgroundImage: "images/hola.png",
	left:Ti.Platform.osname=="android"? p.horizontal(130):130
});
var fitxaTopBar = Ti.UI.createView({
	top: Ti.Platform.osname=="android"? p.vertical(0):0,
	height: Ti.Platform.osname=="android"? p.vertical(44):44,
	width:Ti.Platform.osname=="android"? p.horizontal(320):320,
	left:0,
	backgroundColor: "#1A171A"
})
var fitxaInfo = Ti.UI.createScrollView({
	height: Ti.Platform.osname=="android"? p.vertical(381):381,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320,
	top:0,
	layout: 'vertical',
	contentWidth: 'auto',
	contentHeight: 'auto',
	disableBounce: false,
	zIndex:1,
	backgroundColor: 'black'
})

var fitxaInfo2 = Ti.UI.createScrollView({
			height: Ti.Platform.osname=="android"? p.vertical(381):381,
			width: Ti.Platform.osname=="android"? p.horizontal(320):320,
			top:0,
			backgroundColor:'#666',
			layout: 'vertical',
			contentWidth: 'auto',
			contentHeight: 'auto',
			disableBounce: false,
			zIndex:1,
			backgroundColor: 'black'
		});


var fitxaView= [];
var colorBar=[];
var fitxaRow = [];
for(i=0;i<10;i++){
	fitxaRow[i] = Ti.UI.createView({
		top:0,
		backgroundColor: "#3D3D3F",
		width:  Ti.Platform.osname=="android"? p.horizontal(320):320,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0,
		height: Ti.Platform.osname=="android"? p.vertical(35):35
	})
	fitxaView[i] = Ti.UI.createView({
		top:0,
		backgroundColor: "#3D3D3F",
		width:  Ti.Platform.osname=="android"? p.horizontal(95):95,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0,
		height: Ti.Platform.osname=="android"? p.vertical(35):35
	})
	colorBar[i] = Ti.UI.createView({
		width: Ti.Platform.osname=="android"? p.vertical(225):225,
		height: Ti.Platform.osname=="android"? p.vertical(35):35,
		left:Ti.Platform.osname=="android"? p.horizontal(95):95,
		backgroundColor: color1,
		right:0
	})
	if(i%2==1){
		fitxaView[i].backgroundColor="#4D4D4D";
		colorBar[i].backgroundColor=color2;
	}
	fitxaRow[i].add(colorBar[i]);
	fitxaRow[i].add(fitxaView[i]);
	fitxaInfo.add(fitxaRow[i]);

}


var fitxaImage1 = Ti.UI.createView({
	height: Ti.Platform.osname=="android"? p.vertical(350):350,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320,
	top:0,
	backgroundImage:'images/res.png'
})
var fitxaImage2 = Ti.UI.createView({
	height: Ti.Platform.osname=="android"? p.vertical(350):350,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320,
	top:0,
	backgroundImage:'images/res.png'
})
var fitxaImage3 = Ti.UI.createView({
	height: Ti.Platform.osname=="android"? p.vertical(350):350,
	width: Ti.Platform.osname=="android"? p.horizontal(320):320,
	top:0,
	backgroundImage:'images/res.png'
});
var BlackLine = Ti.UI.createView({
	width: Ti.Platform.osname=="android"? p.horizontal(320):320,
	top: Ti.Platform.osname=="android"? p.vertical(44):44,
	height: Ti.Platform.osname=="android"? p.vertical(2):2,
	backgroundColor:'black'
});


var setDataToPollutionView =  new PollutionView();


var scrollableView = Ti.UI.createScrollableView({
	views:[fitxaInfo,fitxaInfo2,fitxaImage1,fitxaImage2,fitxaImage3],
	backgroundColor:'black',
	width:Ti.Platform.osname=="android"? p.horizontal(320):320,
	height: Ti.Platform.osname=="android"? p.vertical(370):370,
	top:Ti.Platform.osname=="android"? p.vertical(46):46,
	zIndex:1,
	showPagingControl:true
});
fitxa.add(fitxaTopBar);
fitxa.add(BlackLine);
fitxa.add(scrollableView);
fitxaTopBar.add(numberRuta);
fitxaTopBar.add(fitxaText1);
fitxaTopBar.add(fitxaText2);
fitxaRow[0].add(fitxadist);
fitxaRow[0].add(fitxadist2);
fitxaRow[1].add(fitxasign);
fitxaRow[1].add(fitxasign2);
fitxaRow[2].add(fitxaterrain);
fitxaRow[2].add(fitxaterrain2);
fitxaRow[3].add(fitxaday);
fitxaRow[3].add(fitxaday2);
fitxaRow[4].add(fitxadesnivellP);
fitxaRow[4].add(fitxadesnivellP2);
fitxaRow[5].add(fitxadesnivellA);
fitxaRow[5].add(fitxadesnivellA2);
fitxaRow[6].add(fitxaEspVerds);
fitxaRow[6].add(fitxaEspVerds2);
fitxaRow[7].add(fitxaWater);
fitxaRow[7].add(fitxaWater2);
fitxaRow[8].add(fitxatime);
fitxaRow[8].add(fitxatime2);
fitxaRow[9].add(fitxadif);
fitxaRow[9].add(fitxadif2);
fitxaView[9].add(fitxadif3);


function selectImage(value){
var ret = 'images/niveles/niveldificultad0@2x.png';
var value2 = value.substring(0,1);
switch(value2)
{
case '0':
  ret = 'images/niveles/niveldificultad0@2x.png';
  break;
case '1':
  ret = 'images/niveles/niveldificultad2@2x.png';
  break;
case '2':
  ret = 'images/niveles/niveldificultad4@2x.png';
  break;
case '3':
  ret = 'images/niveles/niveldificultad5@2x.png';
  break;
case '4':
  ret = 'images/niveles/niveldificultad7@2x.png';
  break;
case '5':
  ret = 'images/niveles/niveldificultad8@2x.png';
  break;
default:
  ret = 'images/niveles/niveldificultad0@2x.png';
  break;
}
return ret
}

if (Ti.Platform.name === 'iPhone OS'){
	var flexSpace = Ti.UI.createButton({ systemButton:Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE });
	var mapView = Ti.Map.createView({
		mapType: Ti.Map.STANDARD_TYPE,
		userTrackingMode:{
			mode: 0,
			animated: true,
		},
		animate:true,
		regionFit:true,
		userLocation:true,
		height: Ti.Platform.osname=="android"? p.vertical(456):456,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320
	});
}else{
	var mapModule = require('ti.map');
	var mapView = mapModule.createView({
		//mapType: Ti.Map.STANDARD_TYPE,
		mapType:mapModule.NORMAL_TYPE,
		animate:true,
		regionFit:true,
		userLocation:true,
		top: Ti.Platform.osname=="android"? p.vertical(0):0,
		height: Ti.Platform.osname=="android"? p.vertical(355):360,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320
	});
	var mapContainer = Ti.UI.createView({
		top: Ti.Platform.osname=="android"? p.vertical(0):0,
		height: Ti.Platform.osname=="android"? p.vertical(355):360,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320
	});
	mapContainer.add(mapView);
}
var finishButton = Ti.UI.createButton({
	bottom: Ti.Platform.osname=="android"? p.vertical(30):30,
	height: Ti.Platform.osname=="android"? p.vertical(70):70,
	width: Ti.Platform.osname=="android"? p.vertical(70):70,
	backgroundImage: 'images/stopficha.png'
});
if (Ti.Platform.name === 'iPhone OS'){
	var resumeView = Ti.UI.createView({
		height: Ti.Platform.osname=="android"? p.vertical(320):320,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320,
		backgroundImage: "images/fichacarrera.png",
		top: Ti.Platform.osname=="android"? p.vertical(390):390
	});
}else{
	var resumeView = Ti.UI.createView({
		height: Ti.Platform.osname=="android"? p.vertical(320):320,
		width: Ti.Platform.osname=="android"? p.vertical(320):320,
		backgroundImage: "images/fichacarrera.png",
		top: Ti.Platform.osname=="android"? p.vertical(390):390,
		visible: false,
		zIndex:6
	});
}
if(Ti.Platform.model=='iPhone5' ||Ti.Platform.model=='iPhone5,1' ||Ti.Platform.model=='iPhone5,2'){
	resumeView.top=465;
	mapView.height= 530;
	scrollableView.height=460;
	for(i=0;i<10;i++){
		fitxaView[i].height=40;
		colorBar[i].height=40;
	}
	fitxaInfo.height=480;
}
if (Ti.Platform.name === 'iPhone OS'){
	mapView.add(resumeView);
}else{
	win1.add(resumeView);
}
var table = Ti.UI.createTableView({
	zIndex: 1, 
	separatorColor: '#57585A',
	backgroundImage: 'images/fondonegro.png',
	top: Ti.Platform.osname=="android"? p.vertical(44):44,
	height:  Ti.Platform.osname=="android"? p.vertical(362):362
});


if (Ti.Platform.name === 'iPhone OS'){
	var scrollableViewInit = Ti.UI.createScrollableView({
		views:[table,fitxa,mapView],
		backgroundColor:'black',
		width: Ti.Platform.osname=="android"? p.horizontal(320):320,
		height: Ti.Platform.osname=="android"? p.vertical(375):460,
		top:Ti.Platform.osname=="android"? p.vertical(15):0,
		showPagingControl:false,
		scrollingEnabled: false
	});
}else{
	var scrollableViewInit = Ti.UI.createScrollableView({
		views:[table,fitxa,mapContainer],
		backgroundColor:'black',
		width: Ti.Platform.osname=="android"? p.horizontal(320):320,
		height: Ti.Platform.osname=="android"? p.vertical(365):460,
		top:Ti.Platform.osname=="android"? p.vertical(44):0,
		showPagingControl:false,
		scrollingEnabled: false
	});
}
if(Ti.Platform.model=='iPhone5' ||Ti.Platform.model=='iPhone5,1' ||Ti.Platform.model=='iPhone5,2'){
	configView.height=450;
	scrollableViewInit.height=550;
	scrollableCurses.height=550;
	medalContainer.height=495;
	tablecurses.height=450;
	table.height=450;
	cursaView.height=525;
	fitxa.height=520;
	graybar.height=320;
}
var auxrows=[];
var rows= [];
for(i=0;i<=25;i++){
	aux=i;
	var goButton =Ti.UI.createButton({
		right:Ti.Platform.osname=="android"? p.horizontal(0):0,
		height: Ti.Platform.osname=="android"? p.vertical(44):43,
		width: Ti.Platform.osname=="android"? p.horizontal(17):17,
		top:Ti.Platform.osname=="android"? p.vertical(0.2):0.2,
		backgroundImage: "images/flechaverde.png"
	});
	var greenLine = Ti.UI.createView({
		left: Ti.Platform.osname=="android"? p.horizontal(0):0,
		top:Ti.Platform.osname=="android"? p.vertical(0):0,
		backgroundColor: "#BFD14A",
		height:Ti.Platform.osname=="android"? p.vertical(44):44,
		width: Ti.Platform.osname=="android"? p.horizontal(27):27
	});
	var greenBar = Ti.UI.createView({
		left: 7,
		top:0,
		backgroundColor: "#E0E8AD",
		height:Ti.Platform.osname=="android"? p.vertical(44):44,
		width: Ti.Platform.osname=="android"? p.horizontal(313):313
	});
	if(i>=20 && i<26){
		greenLine.backgroundColor="#B81037";
		greenBar.backgroundColor="#DA938B";
		goButton.backgroundImage="images/flecharoja.png";
	}
	if(i>10 && i<20){
		greenLine.backgroundColor="#2A7ABA";
		greenBar.backgroundColor="#A6BADD";
		goButton.backgroundImage="images/flechaazul.png";
	}
	if(i>26){
		greenLine.backgroundColor="#E1007A";
		greenBar.backgroundColor="#F3B6D0";
		goButton.backgroundImage="images/flecharosa.png";
	}	
	if(i==0 || i==11 || i==20 || i==26){
		rows[i]=Ti.UI.createTableViewRow({
			className: "default",
			height: Ti.Platform.osname=="android"? p.vertical(30):30
		});
		var topframeText = Ti.UI.createLabel({
			Color: "#BFD14A",
			font:{
				fontSize: "14dp",
				fontFamily:f.Helv57C
			},
			height: Ti.Platform.osname=="android"? p.vertical(30):30,
			text: rutasdistritos
		});
		var topframe = Ti.UI.createView({
			top:Ti.Platform.osname=="android"? p.vertical(0):0,
			height: Ti.Platform.osname=="android"? p.vertical(30):30,
			width: Ti.Platform.osname=="android"? p.horizontal(320):320,
			backgroundColor: "#333333"
		});
		if(i==11){
			topframeText.Color="#2A7ABA";
			topframeText.text = rutastematicas;
		}else{
			if(i==20){
				topframeText.Color="#B81037";
				topframeText.text= rutasrepte;
			}else{
				if(i==26){
					topframeText.Color="#E1007A";
					topframeText.text= rutaLliure;
				}
			}
		}
		rows[i].add(topframe);
		rows[i].add(topframeText);
		aux=i;
	}else{
		rowAux=i;
		if(i>10 && i<20){
			rowAux=(i-1);
		}else{
			if(i>19 && i<26){
				rowAux=(i-2);
			}else{
				if(i>26){
					rowAux=(i-3);
				}
			}
		}
		rows[i]=Ti.UI.createTableViewRow({
			height: Ti.Platform.osname=="android"? p.vertical(44):44,
			className: "default",
			id: 'ruta' + rowAux,
			selectedBackgroundImage: 'images/blackBar.png'
		});
		rows[i].add(greenBar);
		rows[i].add(goButton);
		rows[i].add(greenLine);

		
		if(i>10 && i<20){
			aux=i-1;
		}else{
			if(i>19 && i<26){
				aux=i-2;
			}else{
				if(i>26){
					aux=(i-3);
				}
			}
		}
		var numberListRoute =Ti.UI.createLabel({
			left: Ti.Platform.osname=="android"? p.horizontal(0):0,
			text: aux,
			textAlign: 'center',
			height: Ti.Platform.osname=="android"? p.vertical(44):44,
			width: Ti.Platform.osname=="android"? p.horizontal(25):25,
			font:{
				fontSize: '22dp',
				fontFamily: f.helvBold
			},
			color: '#DFE8AD'
		});
		if(i>9){
			numberListRoute.left=1;
		}
		if(i>10 && i<20){
			numberListRoute.color='#A6BADD';
		}else{
			if(i>19 && i<26){
				numberListRoute.color='#DA9388';
			}else{
				if(i>26){
					numberListRoute.color='#F3B6D0';
				}
			}
		}
		var labelruta=Ti.UI.createLabel({
			color: '#000000',
			font:{
				fontSize: '14dp',
				fontFamily: f.Helv57C,
				fontColor: "black"
			},
			text: arrayRoute[rowAux],
			width: Ti.Platform.osname=="android"? p.horizontal(273):273,
			top: Ti.Platform.osname=="android"? p.vertical(12):12,
			height: Ti.Platform.osname=="android"? p.vertical(20):20,
			left:Ti.Platform.osname=="android"? p.horizontal(30):30
		});
		
		if(Titanium.Platform.displayCaps.platformWidth<320){
			labelruta.height=p.vertical(16);
		}
		rows[i].add(numberListRoute);
		rows[i].add(labelruta);
	}
}

if (Ti.Platform.name == 'iPhone OS'){
	backButton.addEventListener('click', backbuttonFunc);
	backButtonMap.addEventListener('click', backbuttonMapFunc);
}
goMapButton.addEventListener('click', function(e){
	backButton.hide();
	topBarTitle.text = map;
	goMapButton.hide();
	if (Ti.Platform.name == 'iPhone OS'){
		scrollableViewInit.scrollToView(mapView);
		backButtonMap.show();
		mapView.location = mapRegion;
	}else{
		scrollableViewInit.scrollToView(mapContainer);
		mapView.setRegion(mapRegion);
		mapContainer.show();
	}
	accuracyImage.show();
});

/*
scrollableView.addEventListener('android:back', function(){
    scrollableView.close();
});
*/


table.setData(rows);

var auxClick=false;

table.addEventListener('click',function(e){
	
	if( e.row.id == 'ruta1' ){
		path="rutes/02-placa-espanya-castell-de-montjuic.kml";
		aux=1;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta2' ){
		aux=2;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/01-de-la-placa-orfila-als-voltants-de-la-maquinista.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta3' ){
		aux=3;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/03-parcs-de-la-maternitat-cervantes-i-pedralbes.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta4' ){
		aux=4;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/04-velodrom-dhorta-parc-cervantes.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta5' ){
		aux=5;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/05-rambla-prim-forum-glories.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta6' ){
		aux=6;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/06-conges-velodrom-dhorta.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta7' ){
		aux=7;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/07-sagrada-familia-parc-del-guinardo.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta8' ){
		aux=8;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/08-torres-bessones-font-del-gat.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta9' ){
		aux=9;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/09-ascensio-a-torre-baro.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta10' ){
		aux=10;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/10-gracia-els-3-turons.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta11' ){
		aux=11;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/11-parcs-i-jardins.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	if( e.row.id == 'ruta12' ){
		aux=12;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/12-ruta-per-a-dies-freds.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta13' ){
		aux=13;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/13-interiors-dilla-de-leixample.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta14' ){
		aux=14;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/14-ruta-per-a-dies-festius.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta15' ){
		aux=15;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/15-ruta-per-a-principiants.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta16' ){
		aux=16;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/16-fins-a-la-ciutat-dels-morts.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta17' ){
		aux=17;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/17-la-carretera-de-les-aigues.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta18' ){
		aux=18;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/18-de-sarria-a-vallvidrera.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta19' ){
		aux=19;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/19-repte-atletisme-de-muntanya.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta20' ){
		aux=20;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/20-repte-mar-i-muntanya.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta21' ){
		aux=21;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/21-repte-remuntar-el-riu.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta22' ){
		aux=22;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		
		path="rutes/22-repte-un-sol-carrer.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	else if( e.row.id == 'ruta23' ){
		aux=23;
		/*
		 *Code added by BDigital
		 * To execute the new window with enviromental data 
		 *
		 */
		
		setDataToPollutionView(fitxaInfo2,color1, color2,fitxaTopBar.backgroundColor, aux);
		Ti.App.fireEvent('getData',{id:0});
		
		path="rutes/23-ruta-de-nit.kml";
		useKML(mapView,path,aux,finalPointLat,finalPointLon, initPointLat, initPointLon);
		removeViews();
	}
	
	
	
	
	
	Ti.App.fireEvent('getData',{id:0});
	
	/*
	if (Ti.Platform.osname != 'android'){
		
		scrollableView.addEventListener("scrollend", function(e){
			
				if(e.currentPage == 1){
					Ti.App.fireEvent('getData',{id:0});
				}
		});
	}else{
		scrollableView.addEventListener("scrollend", function(e){
				if(e.currentPage == 1){
					Ti.App.fireEvent('getData',{id:0});
				}
				
				
		});
	}
	*/    

});
var buttonAux;
routeButton.addEventListener('click',function(e){
	
	analytics.trackPageview('/routeButton');
	
	routeLabel.color='#F19300';
	cursaLabel.color='#ECECED';
	medalLabel.color='#ECECED';
	configLabel.color='#ECECED';
	languageButton.visible=false;
	topBarTitle.text=routes;
	configView.hide();
	scrollableCurses.hide();
	medalContainer.hide();
	scrollableViewInit.show();
	scrollableViewInit.scrollToView(table);
	Remove(buttonAux,table,fitxa,topBarTitle,tablecurses,cursaView,win1,backButton,backButton2);
	routeButton.backgroundImage="images/rutassel.png";
	midButton.backgroundImage="images/carreras.png";
	medalButton.backgroundImage="images/medallas.png";
	configButton.backgroundImage="images/config.png";
	
});

midButton.addEventListener('click',function(e){
	
	analytics.trackPageview('/midButton');

	routeLabel.color='#ECECED';
	cursaLabel.color='#F19300';
	medalLabel.color='#ECECED';
	configLabel.color='#ECECED';
	languageButton.visible=false;
	Ti.App.auxWin=0;
	scrollableCurses.show();
	topBarTitle.text=curses;
	medalContainer.hide();
	configView.hide();
	scrollableViewInit.hide();
	Remove(buttonAux,table,fitxa,topBarTitle,tablecurses,cursaView,win1,backButton,backButton2);
	routeButton.backgroundImage="images/rutas.png";
	midButton.backgroundImage="images/carrerassel.png";
	medalButton.backgroundImage="images/medallas.png";
	configButton.backgroundImage="images/config.png";
});

medalButton.addEventListener('click',function(e){
	
	analytics.trackPageview('/medalButton');
	
	routeLabel.color='#ECECED';
	cursaLabel.color='#ECECED';
	medalLabel.color='#F19300';
	configLabel.color='#ECECED';
	languageButton.visible=false;
	Ti.App.auxWin=0;
	medalContainer.show();
	topBarTitle.text=medals;
	scrollableCurses.hide();
	configView.hide();
	scrollableViewInit.hide();
	Remove(buttonAux,table,fitxa,topBarTitle,tablecurses,cursaView,win1,backButton,backButton2);
	routeButton.backgroundImage="images/rutas.png";
	midButton.backgroundImage="images/carreras.png";
	medalButton.backgroundImage="images/medallassel.png";
	configButton.backgroundImage="images/config.png";
});

configButton.addEventListener('click',function(e){
	
	analytics.trackPageview('/configButton');
	
	routeLabel.color='#ECECED';
	cursaLabel.color='#ECECED';
	medalLabel.color='#ECECED';
	configLabel.color='#F19300';
	languageButton.visible=true;
	Ti.App.auxWin=0;
	configView.show();
	topBarTitle.text=config;
	scrollableCurses.hide();
	medalContainer.hide();
	scrollableViewInit.hide();
	Remove(buttonAux,table,fitxa,topBarTitle,tablecurses,cursaView,win1,backButton,backButton2);
	routeButton.backgroundImage="images/rutas.png";
	midButton.backgroundImage="images/carreras.png";
	medalButton.backgroundImage="images/medallas.png";
	configButton.backgroundImage="images/configsel.png";
});

if (Ti.Platform.name === 'iPhone OS'){
	topBar.add(accuracyImage);
}
accuracyImage.hide();
function callback(){
	if(theTimer!==null && theTimer!==undefined){
		theTimer.updateValues(aux, finLon, finLat,initLat, initLon, mapRegion);
	}
}
var theTimer = new timer(win1,goMapButton, mapRegion,medalContainer,mapRegion,mapView, accuracyImage, finLon, finLat,initLat, initLon,aux,fitxadist2,backButtonMap,resumeView,resetButton,iniciLabel2,finalLabel2,timeLabel2,distanceLabel2,velocityLabel2, caloriesLabel2, finishButton, backButton, lliureBackButton);
if (Ti.Platform.osname == 'android'){
	Ti.Gesture.addEventListener('orientationchange', function(e) {
		Ti.Android.currentActivity.setRequestedOrientation(Ti.Android.SCREEN_ORIENTATION_PORTRAIT);
	});
}
tabs.show();
win1.add(topBar);
win1.add(scrollableViewInit);
win1.add(scrollableCurses);
if (Ti.Platform.name == 'iPhone OS'){
	win1.add(backButtonMap);
	win1.add(backButton);
}
if(Titanium.Platform.displayCaps.platformWidth<320){
	fitxaText2.height= p.vertical(14);
	fitxaText2.top= p.vertical(25);
	table.height=p.vertical(357);
	tablecurses.height=p.vertical(345);
	cursaView.height= p.vertical(395);
	scrollableViewInit.height= p.vertical(370);
}
languageButton.addEventListener('click', function(u){
	if (Ti.Platform.name == 'iPhone OS'){
		var dialog = Titanium.UI.createOptionDialog({
			cancel: 3,
			options: ['Català', 'Español', 'English' ,cancelButton],
			title: idioma
		});
	}else{
		var dialog = Titanium.UI.createOptionDialog({
			options: ['Català', 'Español', 'English'],
			title: idioma
		});
	}
	if(selectedLang == "en"){
		dialog.selectedIndex=2;
	}else if(selectedLang == "es"){
		dialog.selectedIndex=1;
	}else if(selectedLang == 'ca'){
		dialog.selectedIndex=0;
	}
	dialog.addEventListener('click',function(e){
		var auxIdioma;
		function selection(k){
			Titanium.UI.createAlertDialog({
				title:'Barcelona Corre:',
				message: selected + k + canvi_idioma
			}).show();
		}
		if(e.index==0){
			Ti.App.Properties.setString("selectedLanguage", 'ca');
			selectedLang = 'ca';
			selection('Català. ');
			dialog.selectedIndex=0;
			labelLanguageButton.text = "Català";
		}else if(e.index==1){
			Ti.App.Properties.setString("selectedLanguage", 'es');
			selectedLang = 'es';
			selection('Español. ');
			dialog.selectedIndex=1;
			labelLanguageButton.text = "Español";
		}else if(e.index==2){
			Ti.App.Properties.setString("selectedLanguage", 'en');
			selectedLang = 'en';
			selection('English. ');
			dialog.selectedIndex=2;
			labelLanguageButton.text = "English";
		}
	});
	dialog.show();
});

win1.add(languageButton);
win1.add(backButton2);
win1.add(lliureBackButton);
win1.add(tabs);
win1.addEventListener('android:back',function(){
	if(Ti.App.auxWin==0){
		Ti.Android.currentActivity.finish();
	}
	if(Ti.App.auxWin==1){
		backbuttonFunc();
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==2){
		backbuttonMapFunc();
		Ti.App.auxWin=1;
		return false;
	}
	if(Ti.App.auxWin==3){
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==6){
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==7){
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==8){
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==9){
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==10){
		Ti.App.auxWin=0;
		return false;
	}
	if(Ti.App.auxWin==11){
		Ti.App.auxWin=0;
		return false;
	}
});

win1.open();// this sets the background color of the master UIView (when there are no windows/tab groups on it)
