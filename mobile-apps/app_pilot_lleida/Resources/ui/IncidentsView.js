var SliderMenuView = require('/ui/SliderMenuView')
Ti.include('/utils/variables.js')

var Incidents = function(args){
	

	var self = Titanium.UI.createWindow({  
	    navBarHidden:true,
	    fullscreen:true,
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
		title:"Atrás"
	});
	backButton.addEventListener('click', function(e) {
		self.close();
	});
	
	
	topBar.add(topBarTitle);
	topBar.add(backButton);
	self.add(topBar);
	
	/*
	var button1 = Titanium.UI.createButton({
	   title:"Características",
	   top: 160,
	   width: 300,
	   height: 100
	});
	button1.addEventListener('click', function(e) {
		//Open map incidents
	});
	*/
	
	var textTitle = Ti.UI.createLabel({
		text: "Buscar los últimos: ",
		Color: 'white',
		width: "80%",
		height: "9%",
		textAlign: "center",
		font:{
			fontSize: "16dp",
			fontFamily:"Default"
		},
		top:"20%"
		
	});
	
	var picker = Ti.UI.createPicker({
	  top:"30%",
	  width: 300,
	  height: 100
	});
	
	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'1 día', value : 1});
	data[1]=Ti.UI.createPickerRow({title:'2 días',value : 2});
	data[2]=Ti.UI.createPickerRow({title:'3 días',value : 3});
	data[3]=Ti.UI.createPickerRow({title:'4 días',value : 4});
	data[4]=Ti.UI.createPickerRow({title:'5 días',value : 5});
	data[5]=Ti.UI.createPickerRow({title:'6 días',value : 6});
	data[6]=Ti.UI.createPickerRow({title:'7 días',value : 7});
	
	
	picker.add(data);
	picker.selectionIndicator = true;
	
	
	var goButton = Ti.UI.createButton({
		color: 'white',
		backgroundImage: "/images/botonTopBar.png",
		height: "10%",
		width:"30%",
		top:"45%",
		visible:true,
		font:{
			fontSize: "16dp",
			fontFamily:"monospace"
		},
		title:"OK"
	});
	goButton.addEventListener('click', function(e) {
		//alert(picker.getSelectedRow(0).value)
		Ti.App.NumDaySpan = e.row.value
		Ti.App.optionChoosed = optionPublicIncidents;
	    var win1 = new SliderMenuView();
	    self.close();
		win1.open();
	});
		
	self.add(textTitle);
	self.add(picker);
	self.add(goButton);
	
	
	return self;
}

module.exports = Incidents
