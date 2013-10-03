//var AccesibilityMap = require('/ui/AccesibilityMap')

var SliderMenuView = require('/ui/SliderMenuView')
Ti.include('/utils/variables.js')

var Index = function(args){
	

	var self = Titanium.UI.createWindow({  
	    navBarHidden:true,
	    fullscreen:true,
	    backgroundColor:'#777'
	});
	
	self.orientationModes = [Titanium.UI.PORTRAIT];
	var topBar = Titanium.UI.createView({  
		backgroundColor: "#1A171A",
		//backgroundColor: "#ccc",
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
		title:"Atrás"
	});
	backButton.addEventListener('click', function(e) {
		self.close();
	});
	
	
	topBar.add(topBarTitle);
	topBar.add(backButton);
	self.add(topBar);
	
	var button1 = Titanium.UI.createButton({
	   title:"Características",
	   top: "16%",
	   width: 300,
	   height: 100
	});
	button1.addEventListener('click', function(e) {
		//Open map accesibility
		Ti.App.optionChoosed = optionAccesibilityFeaures;
		var win1 = new SliderMenuView();
		win1.open();
	});
	
	self.add(button1);
	
	
	var button2 = Titanium.UI.createButton({
	   title:"Categoría",
	   top: "30%",
	   width: 300,
	   height: 100
	});
	button2.addEventListener('click', function(e) {
		//Open map accesibility
		Ti.App.optionChoosed = optionAccesibilityCategories;
		var win1 = new SliderMenuView()
		win1.open();
	});
	
	self.add(button2);
	
	return self;
}

module.exports = Index
