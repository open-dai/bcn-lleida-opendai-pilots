var AccesibilityView = require('/ui/AccesibilityView');
var IncidentsView = require('/ui/IncidentsView');
var BusView = require('/ui/BusView')

require ('/utils/variables')


var Index = function(args){
	
	var self = Titanium.UI.createWindow({  
	    navBarHidden:true,
	    fullscreen:true,
	    modal:true,
	    exitOnClose:true,
	    backgroundColor:'#777'
	});
	
	self.orientationModes = [Titanium.UI.PORTRAIT];
	
	var topBar = Titanium.UI.createView({  
		backgroundColor: "#1A171A",
		top:0,
		zIndex:5,
		borderColor: 'black',
		height: "12%",
		width: "100%",
	});
		
	var topBarTitle = Ti.UI.createLabel({
		text: "Lleida App",
		Color: 'white',
		width: "100%",
		height: "100%",
		textAlign: "center",
		font:{
			fontSize: "22dp",
			fontFamily:"monospace"
		},
		top:0,
		
	});
	var backButton = Ti.UI.createButton({
		color: 'white',
		backgroundImage: "/images/botonTopBar.png",
		height: "80%",
		width:"25%",
		top:0,
		visible:true,
		font:{
			fontSize: "16dp",
			fontFamily:"monospace"
		},
		top: Ti.Platform.osname=="android"? 7:7,
		right:Ti.Platform.osname=="android"?2:2,
		title:"Salir"
	});
	backButton.addEventListener('click', function(e) {
		self.close();
	});
	
	
	topBar.add(topBarTitle);
	topBar.add(backButton);
	self.add(topBar);
	
	
	var button1 = Titanium.UI.createButton({
	   title:"Puntos accesibles",
	   top: 160,
	   width: 400,
	   height: 100
	});
	button1.addEventListener('click', function(e) {
		//Open window accesibility
		var win1 = new AccesibilityView();
		win1.open();	
	});
	
	self.add(button1);
	
	
	var button2 = Titanium.UI.createButton({
	   title:"Incidencias públicas",
	   top: 270,
	   width: 400,
	   height: 100
	});
	button2.addEventListener('click', function(e) {
		//Open window incidents
		var win1 = new IncidentsView();
		win1.open();
	});
	
	self.add(button2);
	
	
	var button3 = Titanium.UI.createButton({
	   title:"Info sobre bus",
	   top: 380,
	   width: 400,
	   height: 100
	});
	button3.addEventListener('click', function(e) {
		//Open window bus info
		var win1 = new BusView()
		win1.open();
	});
	
	self.add(button3);
	
	
	return self;
}

module.exports = Index
