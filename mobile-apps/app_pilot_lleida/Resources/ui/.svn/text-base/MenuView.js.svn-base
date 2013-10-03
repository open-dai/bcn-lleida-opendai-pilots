var createTableViewRow = function(rowData){
	
	if(rowData.title != 'Filler'){
		var row = Ti.UI.createTableViewRow({
			height:85,
			width:300,
			navView: rowData.view,
			backgroundColor:'#ccc',
			backgroundImage:'/images/row_bg.png'
		});
	
		var title = Ti.UI.createLabel({
			color:'white',
			left:8,
			width:Ti.UI.FILL,
			height:Ti.UI.FILL,
			text:rowData.title,
			font:{
				fontFamily:'Arial-BoldMT',
				fontWeight:'bold',
				fontSize:39
			}
		});
		row.add(title);
	
		if(rowData.hasDetail){
			var detail = Ti.UI.createImageView({
				right:10,
				width:24,
				height:39,
				image:'/images/arrow@2x.png'
			});
			row.add(detail);
			
		}
	}else{
		var row = Ti.UI.createTableViewRow({
			height:132,
			width:300,
			navView: rowData.view,
			backgroundColor:'#ccc',
			backgroundImage:'/images/row_bg.png',
		});
		var title = Ti.UI.createLabel({
			color:'white',
			left:8,
			width:Ti.UI.FILL,
			height:Ti.UI.FILL,
			text:rowData.title,
			font:{
				fontFamily:'Arial-BoldMT',
				fontWeight:'bold',
				fontSize:39
			}
		});
	}

	return row;
};

var MenuView = function(args){
	var self = Ti.UI.createTableView({
		backgroundImage:'/images/table_bg.png',
		width:300,
		left:0,
		//separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
	});


	var rows = [];

	for(i=0; i<args.rowData.length; i++) {
		rows.push(createTableViewRow(args.rowData[i]));
	}

	self.setData(rows);

	return self;
};

module.exports = MenuView;
