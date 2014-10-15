var SliderMenuView = require('/ui/SliderMenuView')
Ti.include('/utils/variables.js')

var Incidents = function(args) {

	var self = Titanium.UI.createWindow({
		navBarHidden : true,
		fullscreen : true,
		backgroundColor : '#fff'
	});

	self.orientationModes = [ Titanium.UI.PORTRAIT ];

	var topBar = Titanium.UI.createView({
		// backgroundColor: "#1A171A",
		backgroundColor : "#39BF3E",
		top : 0,
		zIndex : 5,
		borderColor : 'black',
		height : "12%",
		width : "100%",
	});

	var topBarTitle = Ti.UI.createLabel({
		text : appName,
		color : 'black',
		width : "100%",
		height : "100%",
		textAlign : "center",
		font : {
			fontSize : "22dp",
			fontFamily : 'Lucida Grande-Bold'
		},
		top : 0,

	});

	/*
	 * var backButton = Ti.UI.createButton({ color: 'white', backgroundImage:
	 * "/images/botonTopBar.png", backgroundSelectedImage :
	 * "/images/botonTopBarClicked.png", height: "80%", width:"25%", top:0,
	 * visible:true, font:{ fontSize: "16dp", fontFamily:'monospace' }, top:
	 * Ti.Platform.osname=="android"? 7:7,
	 * right:Ti.Platform.osname=="android"?2:2, title:"Back" });
	 * backButton.addEventListener('click', function(e) { self.close(); });
	 */

	topBar.add(topBarTitle);
	// topBar.add(backButton);
	self.add(topBar);

	/*
	 * var button1 = Titanium.UI.createButton({ title:"Características", top:
	 * 160, width: 300, height: 100 }); button1.addEventListener('click',
	 * function(e) { //Open map incidents });
	 */

	var textTitle = Ti.UI.createLabel({
		text : searchIncidencesText,
		color : 'black',
		width : "80%",
		height : "9%",
		textAlign : "center",
		font : {
			fontSize : "16dp",
			fontFamily : "Default"
		},
		top : "20%"

	});

	var picker = Ti.UI.createPicker({
		top : "30%",
		width : "50%",
		height : "10%"
	});

	var data = [];
	data[0] = Ti.UI.createPickerRow({
		title : '1 day',
		value : 1
	});
	data[1] = Ti.UI.createPickerRow({
		title : '2 days',
		value : 2
	});
	data[2] = Ti.UI.createPickerRow({
		title : '3 days',
		value : 3
	});
	data[3] = Ti.UI.createPickerRow({
		title : '4 days',
		value : 4
	});
	data[4] = Ti.UI.createPickerRow({
		title : '5 days',
		value : 5
	});
	data[5] = Ti.UI.createPickerRow({
		title : '6 days',
		value : 6
	});
	data[6] = Ti.UI.createPickerRow({
		title : '7 days',
		value : 7
	});

	picker.add(data);
	picker.selectionIndicator = true;

	var goButton = Ti.UI.createButton({
		color : 'white',
		backgroundImage : "/images/botonTopBar.png",
		backgroundSelectedImage : "/images/botonTopBarClicked.png",
		height : "15%",
		width : "40%",
		top : "50%",
		visible : true,
		font : {
			fontSize : "16dp",
			fontFamily : "monospace"
		},
		title : "OK"
	});
	goButton.addEventListener('click', function(e) {
		// alert(picker.getSelectedRow(0).value)
		Ti.App.NumDaySpan = picker.getSelectedRow(0).value;
		Ti.App.optionChoosed = optionPublicIncidents;
		var win1 = new SliderMenuView();
		// self.close();
		win1.open();
	});

	self.add(textTitle);
	self.add(picker);
	self.add(goButton);

	var bottomBar = Titanium.UI.createView({

		bottom : "1%",
		zIndex : 5,
		height : "14%",
		width : "100%",
	});

	self.add(bottomBar);

	var icon1 = Titanium.UI.createView({
		bottom : "1%",
		zIndex : 6,
		backgroundImage : "/images/open_dai.png",
		height : "75%",
		width : "30%",
		left : "10%"
	});

	var icon2 = Titanium.UI.createView({
		bottom : "1%",
		zIndex : 6,
		backgroundImage : "/images/bdigital.png",
		height : "55%",
		width : "30%",
		right : "10%"
	});

	bottomBar.add(icon1);
	bottomBar.add(icon2);

	self.addEventListener('android:back', function(e) {
		self.close();
		self = null;
	});

	return self;
};

module.exports = Incidents;
