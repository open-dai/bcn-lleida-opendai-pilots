//var AccesibilityMap = require('/ui/AccesibilityMap')

var SliderMenuView = require('/ui/SliderMenuView');
Ti.include('/utils/variables.js');

var Index = function(args){
	

	var self = Titanium.UI.createWindow({  
	    navBarHidden:true,
	    fullscreen:true,
	    backgroundColor:'#fff'
	});
	
	self.orientationModes = [Titanium.UI.PORTRAIT];
	var topBar = Titanium.UI.createView({  
		backgroundColor: "#39BF3E",
		top:0,
		zIndex:5,
		borderColor: 'black',
		height: "12%",
		width: "100%",
	});
		
	var topBarTitle = Ti.UI.createLabel({
		text: appName,
		color: 'black',
		width: "100%",
		height: "100%",
		textAlign: "center",
		font:{
			fontSize: "22dp",
			fontFamily:'Lucida Grande-Bold'
		},
		top:0,
		
	});
	
	/*
	var backButton = Ti.UI.createButton({
		color: 'white',
		backgroundImage: "/images/botonTopBar.png",
		backgroundSelectedImage : "/images/botonTopBarClicked.png",
		height: "80%",
		width:"25%",
		top:0,
		visible:true,
		font:{
			fontSize: "16dp",
			fontFamily:'monospace'
		},
		top: Ti.Platform.osname=="android"? 7:7,
		right:Ti.Platform.osname=="android"?2:2,
		title:"Back"
	});
	backButton.addEventListener('click', function(e) {
		self.close();
	});
	*/
	
	
	topBar.add(topBarTitle);
	//topBar.add(backButton);
	self.add(topBar);
	
	var button1 = Titanium.UI.createButton({
	   color: 'white',
	   backgroundImage: "/images/botonTopBar.png",
	   backgroundSelectedImage : "/images/botonTopBarClicked.png",
	   title: caracButtonText,
	   top: "25%",
	   width: "60%",
	   height: "15%"
	});
	button1.addEventListener('click', function(e) {
		//Open map accesibility
		Ti.App.optionChoosed = optionAccesibilityFeatures;
		var win1 = new SliderMenuView();
		win1.open();
	});
	
	self.add(button1);
	
	
	var button2 = Titanium.UI.createButton({
	   color: 'white',
	   backgroundImage: "/images/botonTopBar.png",
	   backgroundSelectedImage : "/images/botonTopBarClicked.png",
	   title: categButtonText,
	   top: "43%",
	   width: "60%",
	   height: "15%"
	});
	button2.addEventListener('click', function(e) {
		//Open map accesibility
		
		Ti.App.optionChoosed = optionAccesibilityCategories;
		var win1 = new SliderMenuView();
		win1.open();
	});
	
	self.add(button2);
	
	var bottomBar = Titanium.UI.createView({  
		
		bottom:"1%",
		zIndex:5,
		height: "14%",
		width: "100%",
	});
	
	self.add(bottomBar);
	
	var icon1 = Titanium.UI.createView({  
		bottom:"1%",
		zIndex:6,
		backgroundImage: "/images/open_dai.png",
		height: "75%",
		width: "30%",
		left:"10%"
	});
	
	var icon2 = Titanium.UI.createView({  
		bottom:"1%",
		zIndex:6,
		backgroundImage: "/images/bdigital.png",
		height: "55%",
		width: "30%",
		right:"10%"
	});
	
	bottomBar.add(icon1);
	bottomBar.add(icon2);
	
	self.addEventListener('android:back', function(e) 
			{
			   self.close();    
			    self = null;
			});
	
	return self;
};

module.exports = Index;
