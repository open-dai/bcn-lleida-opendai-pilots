Ti.include('/utils/variables.js')

var createTableViewRow = function(rowData) {

	if (rowData.title != 'Filler') {
		var row = Ti.UI.createTableViewRow({
			height : (Titanium.Platform.displayCaps.platformHeight / 8.333),
			width : (Titanium.Platform.displayCaps.platformWidth / 2.55),
			navView : rowData.view,
			backgroundColor : '#ccc',
			backgroundImage : '/images/row_bg.png',
			id : rowData.title
		});

		if (rowData.title != 'Picker') {
			var title = Ti.UI.createLabel({
				color : 'white',
				left : 8,
				width : Ti.UI.FILL,
				height : Ti.UI.FILL,
				text : rowData.title,
				font : {
					fontFamily : 'Arial-BoldMT',
					fontWeight : 'bold',
					fontSize : 39
				},
			});
			row.add(title);

			if (rowData.hasDetail) {
				var detail = Ti.UI.createImageView({
					right : 10,
					width : 24,
					height : 39,
					image : '/images/arrow@2x.png',
					id : rowData.title
				});
				row.add(detail);

			}
		} else {

			var picker = Ti.UI.createPicker({
				width : Ti.UI.FILL,
				height : Ti.UI.FILL,
			});
			picker.selectionIndicator = true;
			var data = [];

			if (Ti.App.optionChoosed == optionBusLines) {

				data[0] = Ti.UI.createPickerRow({
					title : 'L1',
					id : 1
				});
				data[1] = Ti.UI.createPickerRow({
					title : 'L2',
					id : 2
				});
				data[2] = Ti.UI.createPickerRow({
					title : 'L3',
					id : 3
				});
				data[3] = Ti.UI.createPickerRow({
					title : 'L4',
					id : 4
				});
				data[4] = Ti.UI.createPickerRow({
					title : 'L5',
					id : 5
				});
				data[5] = Ti.UI.createPickerRow({
					title : 'L6',
					id : 6
				});
				data[6] = Ti.UI.createPickerRow({
					title : 'L7',
					id : 7
				});
				data[7] = Ti.UI.createPickerRow({
					title : 'L8',
					id : 8
				});
				data[8] = Ti.UI.createPickerRow({
					title : 'L9',
					id : 9
				});
				data[9] = Ti.UI.createPickerRow({
					title : 'L10',
					id : 10
				});

				picker.add(data);

				picker.addEventListener('change', function() {
					// alert(picker.getSelectedRow(0).id)
					Ti.App.fireEvent('busLines', {
						id : picker.getSelectedRow(0).id,
						title : picker.getSelectedRow(0).title
					});
				});
				
				row.add(picker);
			} else if (Ti.App.optionChoosed == optionPublicIncidents) {

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

				picker.addEventListener('change', function() {
					Ti.App.fireEvent('publicIncidents', {
						id : picker.getSelectedRow(0).value,
						title : picker.getSelectedRow(0).title
					});
				});
				
				row.add(picker);
			} else if (Ti.App.optionChoosed == optionAccesibilityCategories) {
				getCategoriesFromServerToPicker(picker);
				picker.setSelectedRow(0, 0, true);
				picker.addEventListener('change', function() {
					Ti.App.fireEvent('accesibilityCategories', {
						id : picker.getSelectedRow(0).value,
						title : picker.getSelectedRow(0).title
					});
				});
				
				row.add(picker);

			} else if (Ti.App.optionChoosed == optionAccesibilityFeatures) {
				//getFeaturesFromServerToPicker(picker);
				
				
				var showDataButton = Ti.UI.createButton({
					title : 'Show Data',
					width : Ti.UI.FILL,
					height : Ti.UI.FILL,
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
					
				});
				
				
				//getFeaturesFromServerToList(tableview);
				
				row.add(showDataButton);
				
				var dataShowed = 0;
				showDataButton.addEventListener('click', function(e) {
					if (dataShowed == 0) {
						//tableview.show();
						dataShowed = 1;
						
						Ti.App.fireEvent('openWindow', {
						});
					} else {
						//tableview.hide();
						dataShowed = 0;
						Ti.App.fireEvent('closeWindow', {
						});
					}
				});

			}

		}
	} else {
		var row = Ti.UI.createTableViewRow({
			height : (Titanium.Platform.displayCaps.platformHeight / 8.333),
			width : (Titanium.Platform.displayCaps.platformWidth / 3),
			navView : rowData.view,
			backgroundColor : '#ccc',
			backgroundImage : '/images/row_bg.png',
		});
		var title = Ti.UI.createLabel({
			color : 'white',
			left : 8,
			width : Ti.UI.FILL,
			height : '12%',
			text : rowData.title,
			font : {
				fontFamily : 'Arial-BoldMT',
				fontWeight : 'bold',
				fontSize : 39
			}
		});
	}

	return row;
};

var MenuView = function(args) {
	var self = Ti.UI.createTableView({
		backgroundImage : '/images/table_bg.png',
		width : (Titanium.Platform.displayCaps.platformWidth / 2.55),
		left : 0,
	//separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	});

	var rows = [];

	for (i = 0; i < args.rowData.length; i++) {
		rows.push(createTableViewRow(args.rowData[i]));
	}

	self.setData(rows);

	self.addEventListener('android:back', function(e) {
		self.close();
		self = null;
	});

	return self;
};

module.exports = MenuView;
