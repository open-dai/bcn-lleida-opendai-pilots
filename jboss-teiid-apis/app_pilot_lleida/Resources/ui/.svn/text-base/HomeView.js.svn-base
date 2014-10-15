var MASlidingView = require('lib/MASlidingView');

Ti.include('/lib/ServerCommunication.js');
Ti.include('/lib/utils.js');

Ti.include('/utils/variables.js')

//var coordxy = require('com.mdpauley.coordxy');

var HomeView = function(args) {

	var self = new MASlidingView({
		backgroundColor : 'red'
	});

	self.add(Ti.UI.createLabel({
		//text:'Home View',
		color : '#777',
		height : 24,
		width : 100,
		textAlign : 'center',
	}));

	self.orientationModes = [ Titanium.UI.PORTRAIT ];

	/*
	 -On iOS, you cannot call any methods on a map view until it has been added to a view.
	   In addition to annotations, iOS supports adding routes to a map view, using addRoute.

	 -Android supports only a single map view per application.
	 */

	var mapview = Titanium.Map.createView({
		mapType : Titanium.Map.STANDARD_TYPE,
		region : {
			latitude : 41.616116683,
			longitude : 0.6285512249,
			latitudeDelta : 0.05,
			longitudeDelta : 0.05
		},
		animate : true,
		regionFit : true,
		userLocation : true,
	});

	self.add(mapview);

	/* 
	mapview.addEventListener('longpress', function(e){
			data = coordxy.getLL(e);
			alert(data);
	});
	 */

	var activityIndicator = Ti.UI.createActivityIndicator({
		color : '#000',
		font : {
			fontFamily : 'Helvetica Neue',
			fontSize : 26,
			fontWeight : 'bold'
		},
		message : "Loading",
		top : "40%",
		left : "30%",
		style : Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
	});
	self.add(activityIndicator);

	var txt = Ti.UI.createLabel({
		enabled : true,
		editable : false,
		bottom : "20%",
		right : 15,
		color : '#555555',
		text : "",
		font : {
			fontSize : 44,
			fontWeight : "bold"
		}
	});

	self.add(txt);

	self.addEventListener('android:back', function(e) {
		self.close();
		self = null;
	});
	
	var tableview = Ti.UI.createTableView({
		top : '20%',
		width : "80%",
		height : "40%",
		visible : false,
		opacity : 0.95,
		borderRadius : 10,
		backgroundColor : '#ffffff',
		borderColor : '#000000',
		borderWidth : 2,
		modal : true,
		zIndex: 100,		
	});
	
	tableview.addEventListener('click', function(e) {
		// event data
		var index = e.index;
		var section = e.section;
		var row = e.row;
		var rowdata = e.rowData;
		Ti.App.fireEvent('accesibilityFeatures', {
			id : index,
			title : row.title
		});
		
		tableview.hide();

		//Titanium.UI.createAlertDialog({title:'Table View',message:'row ' + row + ' index ' + index + ' section ' + section  + ' row data ' + rowdata}).show();
	});
	
	self.add(tableview);

	return self;
};

module.exports = HomeView;