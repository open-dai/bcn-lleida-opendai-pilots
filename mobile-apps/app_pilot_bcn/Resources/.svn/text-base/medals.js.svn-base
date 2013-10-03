function medals(win1, medalContainer){
	var returnObject={};
	var pixelate = require('pixelate').pixelate;
	var p = new pixelate();
	var fonts = require('fonts');
	var f = new fonts();
	var aux4Medals=0;
	var medalArray=[];
	var internalArray=[];
	

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
	}else if(selectedLang=="es"){
		Ti.include('es.js');
	}else{
		Ti.include('ca.js');
	}

	var k=0;
	var m=0;
	for(i=0;i<medalArray.length;i++){
		medalView.remove(medalArray[i]);
		for(h=0;h<internalArray.length;h++){
			medalArray.remove(internalArray[h]);	
		}
	}
	var medalView = Ti.UI.createScrollView({
		contentWidth: 'auto',
		contentHeight: 'auto',
		disableBounce: false,
		showVerticalScrollIndicator: true,
		showHorizontalScrollIndicator: true,
		height: Ti.Platform.osname=="android"? p.vertical(370):361,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320,
		layout:  'vertical',
		scrollingEnable: true,
		showVerticalScrollIndicator: true,
		top: Ti.Platform.osname=="android"? p.vertical(44):44,
		backgroundColor: "#57585A"
	})
	if(Titanium.Platform.displayCaps.platformWidth<320){
		medalView.height=p.vertical(357);
	}
	if(Ti.Platform.model=='iPhone5' ||Ti.Platform.model=='iPhone5,1' ||Ti.Platform.model=='iPhone5,2'){
		medalView.height=p.vertical(385);
	}
	if(medalContainer.children.length > 0){
		medalContainer.remove(medalView);
	}
	
	function showmeMedals (medal){
		var value = Ti.App.Properties.getString(medal.id);
		if(value=='true'){
			medal.opacity=1;
		}
		auxMedalView.add(medal);
	}
	win1.add(medalContainer);
	medalContainer.hide();
	for(i=1;i<7;i++){
		var medalBar = Ti.UI.createView({
			height: Ti.Platform.osname=="android"? p.vertical(20):20,
			top:0,
			width: Ti.Platform.osname=="android"? p.horizontal(320):320,
			backgroundColor: 'black',
		})
		var medalBarTitle = Ti.UI.createLabel({
			left:Ti.Platform.osname=="android"? p.horizontal(15):15,
			text: arrayMedalBarTitle[i],
			color: arrayMedalBarColor[i],
			font:{
				fontSize:  '11dp'
			}
		})
		if(i!==2){
			medalBar.add(medalBarTitle);
			medalView.add(medalBar);
		}
		if(i==1){
			for(j=1; j<24; j++){
				if(j%5==1){
					var initLine = Ti.UI.createView({
						height: Ti.Platform.osname=="android"? p.vertical(5):5,
						width:Ti.Platform.osname=="android"? p.horizontal(320):320
					})
					medalView.add(initLine);
					var auxMedalView = Ti.UI.createView({
						width: Ti.Platform.osname=="android"? p.horizontal(320):320,
						height: Ti.Platform.osname=="android"? p.vertical(64):64,
						top:0,
						backgroundColor: 'transparent'
					})
					medalArray[k]=(auxMedalView);
					k=k+1;
					medalView.add(auxMedalView);
				}
				var medal = Ti.UI.createView({
					backgroundImage: 'images/medallas/ruta'+j+'.png',
					top:0,
					height: Ti.Platform.osname=="android"? p.horizontal(58):58,
					width: Ti.Platform.osname=="android"? p.horizontal(58):58,
					opacity: 0.3,
					id: 'ruta'+j
				})
				internalArray[m]=(medal);
				m=m+1;
				if(j%5==1){
					medal.left=Ti.Platform.osname=="android"? p.horizontal(5):5
				}
				if(j%5==2){
					medal.left=Ti.Platform.osname=="android"? p.horizontal(68):68;
				}
				if(j%5==4){
					medal.left=Ti.Platform.osname=="android"? p.horizontal(194):194;
				}
				if(j%5==0){
					medal.left=Ti.Platform.osname=="android"? p.horizontal(257):257;

				}
				if(j>10 && j<19){
					medal.backgroundImage="images/medallas/"+medal.id+".png";
				}
				if(j>=19){
					medal.backgroundImage="images/medallas/"+medal.id+".png";
				}
				showmeMedals(medal);
			}
		}else{
			if(i==2){
				/*for(j=1;j<=10;j++){
					if(j%5==1){
						var initLine = Ti.UI.createView({
							height:Ti.Platform.osname=="android"? p.vertical(5):5,
							width:Ti.Platform.osname=="android"? p.horizontal(320):320
						})
						medalView.add(initLine);
						var auxMedalView = Ti.UI.createView({
							width: Ti.Platform.osname=="android"? p.horizontal(320):320,
							height: Ti.Platform.osname=="android"? p.vertical(64):64,
							top:0,
							backgroundColor: 'transparent'
						})
						medalArray[k]=(auxMedalView);
						k=k+1;
						medalView.add(auxMedalView);
					}
					var medal = Ti.UI.createView({
						backgroundImage: "images/medallas/"+L('nomCursa'+j)+".png",
						top:0,
						height: Ti.Platform.osname=="android"? p.vertical(58):58,
						width: Ti.Platform.osname=="android"? p.horizontal(58):58,
						opacity: 0.3,
						id: 'cursa'+j
					})
					internalArray[m]=(medal);
					m=m+1;
					if(j%5==1){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(5):5
					}
					if(j%5==2){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(68):68;
					}
					if(j%5==4){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(194):194;
					}
					if(j%5==0){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(257):257;
					}
					showmeMedals(medal);
				}*/
			}else{
				for(j=1;j<=8;j++){
					if(j%4==1){
						var initLine = Ti.UI.createView({
							height:Ti.Platform.osname=="android"? p.vertical(5):5,
							width:Ti.Platform.osname=="android"? p.horizontal(320):320
						})
						medalView.add(initLine);
						var auxMedalView = Ti.UI.createView({
							width: Ti.Platform.osname=="android"? p.horizontal(320):320,
							height: Ti.Platform.osname=="android"? p.vertical(64):64,
							top:0,
							backgroundColor: 'transparent'
						})
						medalArray[k]=(auxMedalView);
						k=k+1;
						medalView.add(auxMedalView);
					}
					var medal = Ti.UI.createView({
						backgroundImage: "images/medallas/distancia"+j+".png",
						left: Ti.Platform.osname=="android"? p.horizontal(5):5,
						top:0,
						height: Ti.Platform.osname=="android"? p.horizontal(58):58,
						width: Ti.Platform.osname=="android"? p.horizontal(58):58,
						opacity: 0.3,
						id: 'distancia'+j
					})
					internalArray[m]=(medal);
					m=m+1;
					if(j%4==2){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(68):68;
					}
					if(j%4==3){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(131):131;
					}
					if(j%4==0){
						medal.left=Ti.Platform.osname=="android"? p.horizontal(194):194;
					}
					if(aux4Medals==1){
						medal.backgroundImage="images/medallas/velocidad"+j+".png";
						medal.id= 'velocidad'+j;
					}
					if(aux4Medals==2){
						medal.backgroundImage="images/medallas/cal"+j+".png";
						medal.id= 'cal'+j;
					}
					if(aux4Medals==3){
						medal.backgroundImage="images/medallas/activity"+j+".png";
						medal.id= 'activity'+j;
					}
					
					showmeMedals(medal);
				}
				aux4Medals=aux4Medals+1;
			}
		}
	}
	medalContainer.add(medalView);
	returnObject.medals= medals;
	return returnObject;
};

module.exports=medals;