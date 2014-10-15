function curses(win1, cursaView,tablecurses, backButton2, tabs, scrollableCurses){

	var returnObject={};
	var linkCursa;
	var fonts = require('fonts');
	var f = new fonts();
	var pixelate = require('pixelate').pixelate;
	var p = new pixelate();
	var currentLang = Ti.Locale.getCurrentLanguage();
	Titanium.App.Properties.setString("currentLanguage", currentLang);
	var selectedLang = Ti.App.Properties.getString("selectedLanguage");
	if (selectedLang == undefined) {
		Ti.App.Properties.setString("selectedLanguage", 'ca');
		selectedLang = 'ca';
	} else {
		if (currentLang !== selectedLang) {
			Ti.App.Properties.setString("currentLanguage", selectedLang);
		}
	}
	if (selectedLang == "en") {
		Ti.include('en.js');
	} else if (selectedLang == "es") {
		Ti.include('es.js');
	} else {
		Ti.include('ca.js');
	}



	function backbutton2Func(){
		if(Ti.Platform.osname === 'android'){
			scrollableCurses.height=Ti.Platform.osname=="android"? p.vertical(365):420;
		}
		scrollableCurses.scrollToView(tablecurses);
		setTimeout(function() {
			cursaContainer.scrollTo(0,0);
		}, 1000);
		if (Ti.Platform.name === 'iPhone OS'){
			tabs.animate({
				bottom: 0,
				duration: 500,
				curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
			});
		}else{
			tabs.show();
		}
		tablecurses.show();
		backButton2.hide();
	}
	var cursatopBar = Titanium.UI.createView({  
		backgroundColor: "#F9BA08",
		top:0,
		borderColor: 'black',
		height: Ti.Platform.osname=="android"? p.vertical(40):40,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320
	});
	var cursaTitle = Ti.UI.createLabel({
		color: 'white',
		top: Ti.Platform.osname=="android"? p.vertical(0):0,
		font:{
			fontSize: "22dp",
			fontFamily: f.Helv57C
		},
		height:Ti.Platform.osname=="android"? p.vertical(37):37,
		text: "route"
	});
	var cursaContainer = Ti.UI.createScrollView({
		contentWidth: 'auto',
		contentHeight: Ti.Platform.osname=="android"? p.vertical(600):'auto',
		disableBounce: false,
		layout:  'vertical',
		showVerticalScrollIndicator: true,
		showHorizontalScrollIndicator: true,
		height: Ti.Platform.osname=="android"? p.vertical(396):'auto',
		width: Ti.Platform.osname=="android"? p.horizontal(376):376,
		scrollingEnable: true,
		showVerticalScrollIndicator: true,
		top: Ti.Platform.osname=="android"? p.vertical(40):40,
		backgroundColor: "#F8E2A9"
	})
	if(Ti.Platform.model=='iPhone5' ||Ti.Platform.model=='iPhone5,1' ||Ti.Platform.model=='iPhone5,2'){
		cursaContainer.height = 464;
	}
	var cursaImage = Ti.UI.createImageView({
		top: 0,
		height: Ti.Platform.osname=="android"? p.vertical(170):170,
		width: Ti.Platform.osname=="android"? p.vertical(320):320,
		image: "images/cursaImage.jpg"
	});
	var cursaText = Ti.UI.createLabel({
		top:Ti.Platform.osname=="android"? p.vertical(10):10,
		height: 'auto',
		width: Ti.Platform.osname=="android"? p.horizontal(290):290,
		text: arrayCursatext[1],
		color: '#000000',
		font:{
			fontSize: '12dp',
			fontFamily: f.NewsGothic,
			fontColor: "black"
		}
	});
	var dateBox = Ti.UI.createView({
		width:Ti.Platform.osname=="android"? p.horizontal(320):320,
		height: Ti.Platform.osname=="android"? p.vertical(20):20,
		top:Ti.Platform.osname=="android"? p.vertical(5):5,
		backgroundColor: 'transparent'
	})
	var dateLabel = Ti.UI.createLabel({
		height: 'auto',
		width: Ti.Platform.osname=="android"? p.horizontal(45):45,
		left: Ti.Platform.osname=="android"? p.horizontal(15):15,
		text: date,
		color: '#000000',
		font:{
			fontSize: '12dp',
			fontFamily: f.neue77,
			fontWeight: 'bold'
		}
	});
	var dateLabel2 = Ti.UI.createLabel({
		height: 'auto',
		width: Ti.Platform.osname=="android"? p.horizontal(100):100,
		left: Ti.Platform.osname=="android"? p.horizontal(50):55,
		text: moreInfo,
		color: '#000000',
		font:{
			fontSize: '12dp',
			fontFamily: f.neue77
		}
	});
	var linkBox = Ti.UI.createView({
		width:Ti.Platform.osname=="android"? p.horizontal(320):320,
		height: Ti.Platform.osname=="android"? p.vertical(20):20,
		top:Ti.Platform.osname=="android"? p.vertical(-5):-5,
		backgroundColor: 'transparent'
	})
	var linkLabel = Ti.UI.createLabel({
		height: 'auto',
		width: Ti.Platform.osname=="android"? p.horizontal(110):110,
		left: Ti.Platform.osname=="android"? p.horizontal(15):15,
		text: moreInfo,
		color: 'black',
		font:{
			fontSize: '12dp',
			fontFamily: f.neue77,
			fontWeight: 'bold'
		}
	});
	var link = Ti.UI.createLabel({
		height: 'auto',
		width: Ti.Platform.osname=="android"? p.horizontal(180):180,
		left: Ti.Platform.osname=="android"? p.horizontal(95):120,
		text: links[1],
		color: 'blue',
		font:{
			fontSize: '12dp',
			fontFamily: f.neue77
		}
	});
	var cursaMapImage = Ti.UI.createImageView({
		image: "images/mapRoute.png",
		height: Ti.Platform.osname=="android"? p.vertical(148):148,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320,
		top:Ti.Platform.osname=="android"? p.vertical(5):5
	});
	var mapLabel = Ti.UI.createLabel({
		height: Ti.Platform.osname=="android"? p.vertical(20):20,
		width: Ti.Platform.osname=="android"? p.horizontal(190):190,
		right: Ti.Platform.osname=="android"? p.horizontal(40):40,
		text: mapData[1],
		textAlign: 'right',
		color: 'black',
		font:{
			fontSize: '12dp',
			fontFamily: f.neue77,
			fontWeight: 'bold'
		}
	});
	var separator = Ti.UI.createView({
		width:Ti.Platform.osname=="android"? p.horizontal(320):320,
		height: Ti.Platform.osname=="android"? p.vertical(1):1,
		top:Ti.Platform.osname=="android"? p.vertical(10):10,
		backgroundColor: 'transparent'
	})

	cursatopBar.add(cursaTitle)
	cursaView.add(cursatopBar);
	cursaContainer.add(cursaImage);
	cursaContainer.add(cursaText);
	cursaContainer.add(dateBox);
	dateBox.add(dateLabel);
	dateBox.add(dateLabel2);
	cursaContainer.add(linkBox);
	linkBox.add(linkLabel);
	linkBox.add(link);
	cursaContainer.add(cursaMapImage);
	cursaContainer.add(mapLabel);
	cursaContainer.add(separator);
	cursaView.add(cursaContainer);
	
	var rowsCurses= [];
	for(i=0;i<10;i++){
		var Line = Ti.UI.createImageView({
			left: Ti.Platform.osname=="android"? p.horizontal(0):0,
			top:Ti.Platform.osname=="android"? p.vertical(0):0,
			backgroundColor: "#F9BA08",
			height:Ti.Platform.osname=="android"? p.vertical(44):44,
			width: Ti.Platform.osname=="android"? p.horizontal(27):27
		});
		var goButton =Ti.UI.createButton({
			right:Ti.Platform.osname=="android"? p.horizontal(0):0,
			height: Ti.Platform.osname=="android"? p.vertical(44):43,
			width: Ti.Platform.osname=="android"? p.horizontal(17):17,
			top: Ti.Platform.osname=="android"? p.vertical(0.2):0.2,
			backgroundImage: "images/flechaamarilla.png"
		});
		var Bar = Ti.UI.createImageView({
			left: Ti.Platform.osname=="android"? p.horizontal(17):17,
			top:0,
			backgroundColor: "#F8E2A9",
			height:Ti.Platform.osname=="android"? p.vertical(44):44,
			width: Ti.Platform.osname=="android"? p.horizontal(313):313
		})
		rowsCurses[i]=Ti.UI.createTableViewRow({
			height: Ti.Platform.osname=="android"? p.vertical(44):44,
			className: "default",
			id: 'cursa' + i,
			selectedBackgroundImage: 'images/blackBar.png'
		})
		var numberListRoute =Ti.UI.createLabel({
			left: Ti.Platform.osname=="android"? p.horizontal(7):7,
			text: i+1,
			font:{
				fontSize: '22dp',
				fontFamily: f.helvBold
			},
			color: '#F8E2A9'
		})
		if(i==9){
			numberListRoute.left=1;
		}
		var labelCursa=Ti.UI.createLabel({
			color: '#000000',
			font:{
				fontSize: '14dp',
				fontFamily: f.Helv57C,
				fontColor: "black"
			},
			text: arrayCursa[i],
			height:Ti.Platform.osname=="android"? p.vertical(44):44,
			left:Ti.Platform.osname=="android"? p.horizontal(30):30
		})
		rowsCurses[i].add(Bar);
		rowsCurses[i].add(goButton);
		rowsCurses[i].add(labelCursa);
		rowsCurses[i].add(Line);
		rowsCurses[i].add(numberListRoute);
	}
	tablecurses.setData(rowsCurses);
	link.addEventListener('click', function(e){
		Titanium.Platform.openURL(linkCursa);
	})
	var ID;
	function changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID){
		if(Ti.Platform.osname==='android'){
			scrollableCurses.height=Ti.Platform.osname=="android"? p.vertical(420):420;
		}
		cursaTitle.text=arrayCursa[ID];
		cursaText.text=arrayCursatext[ID];
		link.text=links[ID];
		linkCursa=links[ID];
		dateLabel2.text=data[ID];
		mapLabel.text=mapData[ID];
		cursaImage.image='images/fotoscarreras/cursa'+ID+'.png';
		if(ID==8){
			cursaMapImage.height=Ti.Platform.osname=="android"? p.vertical(1):1;
		}else{
			cursaMapImage.height=Ti.Platform.osname=="android"? p.vertical(148):148;
		}
		cursaMapImage.image='images/mapascarreras/cursamap'+ID+'.png';
		scrollableCurses.scrollToView(cursaView);
		if (Ti.Platform.name === 'iPhone OS'){
			tabs.animate({
				bottom: 0,
				bottom: -55,
				duration: 500,
				curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
			});
			backButton2.addEventListener('click', backbutton2Func);
		}else{
			tabs.hide();
		}
		Ti.App.auxWin=3;
		if (Ti.Platform.name === 'iPhone OS'){
			backButton2.show();
		}

		if(Titanium.Platform.displayCaps.platformWidth<320){
			if(ID==6){
				cursaContainer.contentHeight = p.vertical(730);
			}else{
				cursaContainer.contentHeight = p.vertical(700);
			}
		}
	}

	if(Titanium.Platform.displayCaps.platformWidth<320){
		cursaContainer.height = p.vertical(350);
		cursaContainer.contentHeight = p.vertical(700);
		link.left= p.horizontal(105);
	}
	tablecurses.addEventListener('click',function(e){
		if( e.row.id == 'cursa0' ){
			ID='0';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa1' ){
			ID='1';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa2' ){
			ID='2';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa3' ){
			ID='3';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa4' ){
			ID='4';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa5' ){
			ID='5';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa6' ){
			ID='6';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa7' ){
			ID='7';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa8' ){
			ID='8';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
		if( e.row.id == 'cursa9' ){
			ID='9';
			changeCursaView(cursaTitle,cursaText,cursaImage, cursaMapImage, ID);
		}
	});
win1.addEventListener('android:back',function(){
	if(Ti.App.auxWin==3){
		backbutton2Func();
	}
	return false;
});

returnObject.curses= curses;
return returnObject;
};

module.exports=curses;