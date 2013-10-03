function initial(tabs, win1, configView) {
	var returnObject = {};

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

	//var flurry = require('sg.flurry');

	function callback() {
		profileageTextfield.value = Ti.App.Properties.getString('age');
		profileheightTextfield.value = Ti.App.Properties.getString('height');
		profileweightTextfield.value = Ti.App.Properties.getString('weight');
	}

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	//Ti.App.Properties.setString('firstTimeEnterApp', 'false');
	//Ti.App.Properties.setString('firstTimeEnterApp', null);

	///inici creacio configview ***********************

	if (Ti.Platform.name === 'iPhone OS') {
		var profilecancel = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
		});
		var profileflexSpace = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var profilesend = Titanium.UI.createButton({
			title : done,
			style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
		});
		profilesend.addEventListener('click', function(e) {
			profileageTextfield.blur();
			if (isNumber(profileageTextfield.value)) {
				Ti.App.Properties.setString('age', e.value);
			} else {
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
				profileageTextfield.value=Ti.App.Properties.getString('age');
			}
		});
		profilecancel.addEventListener('click', function(e) {
			profileageTextfield.blur();
		});
		var profilecancel2 = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
		});
		var profileflexSpace2 = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var profilesend2 = Titanium.UI.createButton({
			title : done,
			style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
		});
		profilesend2.addEventListener('click', function(e) {
			profileweightTextfield.blur();
			if (isNumber(profileweightTextfield.value)) {
				Ti.App.Properties.setString('height', e.value);
			} else {
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
				profileweightTextfield.value=Ti.App.Properties.getString('weight');
			}
		});
		profilecancel2.addEventListener('click', function(e) {
			profileweightTextfield.blur();
		});

		var profilecancel3 = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
		});
		var profileflexSpace3 = Titanium.UI.createButton({
			systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var profilesend3 = Titanium.UI.createButton({
			title : done,
			style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
		});
		profilesend3.addEventListener('click', function(e) {
			profileheightTextfield.blur();
			if (isNumber(profileheightTextfield.value)) {
				Ti.App.Properties.setString('weight', e.value);
			} else {
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
				profileheightTextfield.value=Ti.App.Properties.getString('height');
			}
		});
		profilecancel3.addEventListener('click', function(e) {
			profileheightTextfield.blur();
		});
		var profileageTextfield = Ti.UI.createTextField({
			keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
			backgroundColor : 'white',
			keyboardToolbar : [profileflexSpace, profileflexSpace, profileflexSpace, profilesend],
			value : Ti.App.Properties.getString('age'),
			returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
			keyboardToolbarHeight : p.vertical(40),
			suppressReturn : true,
			textAlign : 'center',
			font : {
				fontSize : "20dp"
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
			height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
			top : Ti.Platform.osname == "android" ? p.vertical(67) : 67,
			right : 83
		})
		var profileheightTextfield = Ti.UI.createTextField({
			keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
			backgroundColor : 'white',
			keyboardToolbar : [profileflexSpace, profileflexSpace3, profileflexSpace3, profilesend3],
			value : Ti.App.Properties.getString('height'),
			returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
			keyboardToolbarHeight : p.vertical(40),
			suppressReturn : true,
			textAlign : 'center',
			font : {
				fontSize : "20dp"
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
			height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
			top : Ti.Platform.osname == "android" ? p.vertical(107) : 107,
			right : 83
		})
		var profileweightTextfield = Ti.UI.createTextField({
			keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
			backgroundColor : 'white',
			keyboardToolbar : [profileflexSpace, profileflexSpace2, profileflexSpace2, profilesend2],
			value : Ti.App.Properties.getString('weight'),
			returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
			keyboardToolbarHeight : p.vertical(40),
			suppressReturn : true,
			textAlign : 'center',
			font : {
				fontSize : "20dp"
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
			height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
			top : Ti.Platform.osname == "android" ? p.vertical(147) : 147,
			right : 83
		})
	} else {
		var profileageTextfield = Ti.UI.createTextField({
			keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
			backgroundColor : 'white',
			value : Ti.App.Properties.getString('age'),
			returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
			suppressReturn : true,
			textAlign : 'center',
			font : {
				fontSize : "16dp"
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
			height : Ti.Platform.osname == "android" ? p.vertical(30) : 22,
			top : Ti.Platform.osname == "android" ? p.vertical(62) : 67,
			left : Ti.Platform.osname == "android" ? p.horizontal(180) : 180
		})
		var profileheightTextfield = Ti.UI.createTextField({
			keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
			backgroundColor : 'white',
			value : Ti.App.Properties.getString('height'),
			returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
			suppressReturn : true,
			textAlign : 'center',
			font : {
				fontSize : "16dp"
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
			height : Ti.Platform.osname == "android" ? p.vertical(30) : 22,
			top : Ti.Platform.osname == "android" ? p.vertical(102) : 107,
			left : Ti.Platform.osname == "android" ? p.horizontal(180) : 180
		})
		var profileweightTextfield = Ti.UI.createTextField({
			keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
			backgroundColor : 'white',
			value : Ti.App.Properties.getString('weight'),
			returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
			suppressReturn : true,
			textAlign : 'center',
			font : {
				fontSize : "16dp"
			},
			width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
			height : Ti.Platform.osname == "android" ? p.vertical(30) : 22,
			top : Ti.Platform.osname == "android" ? p.vertical(142) : 147,
			left : Ti.Platform.osname == "android" ? p.horizontal(180) : 180
		})
		if (Titanium.Platform.displayCaps.platformWidth < 320) {
			profileageTextfield.height = p.vertical(40);
			profileageTextfield.top = p.vertical(57);
			profileheightTextfield.height = p.vertical(40);
			profileheightTextfield.top = p.vertical(102);
			profileweightTextfield.height = p.vertical(40);
			profileweightTextfield.top = p.vertical(147);
			profileageTextfield.font = {
				fontSize : '12dp'
			}
			profileheightTextfield.font = {
				fontSize : '12dp'
			}
			profileweightTextfield.font = {
				fontSize : '12dp'
			}
		}
		profileageTextfield.addEventListener('focus', function() {
			Ti.App.auxWin = 6;
		});
		profileheightTextfield.addEventListener('focus', function() {
			Ti.App.auxWin = 7;
			if (Titanium.Platform.displayCaps.platformWidth < 320) {
				tabs.hide();
			}
		});
		profileweightTextfield.addEventListener('focus', function() {
			Ti.App.auxWin = 8;
			if (Titanium.Platform.displayCaps.platformWidth < 320) {
				tabs.hide();
			}
		});
		profileageTextfield.addEventListener('blur', function(e){
			if (isNumber(profileageTextfield.value)) {
				Ti.App.Properties.setString('age', e.value);
			} else {
				profileageTextfield.blur();
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
				profileageTextfield.value=Ti.App.Properties.getString('age');
			}
		});
		profileheightTextfield.addEventListener('blur', function(e){
			if (isNumber(profileheightTextfield.value)) {
				Ti.App.Properties.setString('height', e.value);
			} else {
				profileheightTextfield.blur();
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
				profileheightTextfield.value=Ti.App.Properties.getString('height');
			}
		});
		profileweightTextfield.addEventListener('blur', function(e){
			if (isNumber(profileweightTextfield.value)) {
				Ti.App.Properties.setString('weight', e.value);
			} else {
				profileweightTextfield.blur();
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
				profileweightTextfield.value=Ti.App.Properties.getString('weight');
			}
		});
		win1.addEventListener('android:back', function() {
			if (Titanium.Platform.displayCaps.platformWidth < 320) {
				tabs.show();
			}
			if (Ti.App.auxWin == 6) {
				return false;
			}
			if (Ti.App.auxWin == 7) {
				return false;
			}
			if (Ti.App.auxWin == 8) {
				return false;
			}
		});
	}
	var profileImage = Ti.UI.createView({
		backgroundImage : "images/miperfil.png",
		width : Ti.Platform.osname == "android" ? p.horizontal(55) : 55,
		height : Ti.Platform.osname == "android" ? p.vertical(80) : 80,
		top : Ti.Platform.osname == "android" ? p.vertical(60) : 60,
		left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
	})
	var profileImagelabel = Ti.UI.createLabel({
		width : Ti.Platform.osname == "android" ? p.horizontal(50) : 50,
		height : Ti.Platform.osname == "android" ? p.vertical(20) : 20,
		top : Ti.Platform.osname == "android" ? p.vertical(115) : 115,
		left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0,
		color : 'white',
		textAlign : 'center',
		font : {
			fontSize : "12dp"
		},
		text : perfil,
	})
	var profileinfoLabel = Ti.UI.createLabel({
		text : info,
		font : {
			fontSize : "12dp",
			fontFamily : f.neue77
		},
		color : 'white',
		width : Ti.Platform.osname == "android" ? p.horizontal(280) : 280,
		left : Ti.Platform.osname == "android" ? p.horizontal(20) : 20,
		height : Ti.Platform.osname == "android" ? p.vertical(52) : 52,
		top : Ti.Platform.osname == "android" ? p.vertical(10) : 10
	})
	var profileageLabel = Ti.UI.createLabel({
		text : age,
		font : {
			fontSize : "14dp",
			fontFamily : f.Helv57C
		},
		color : 'white',
		left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100,
		height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
		top : Ti.Platform.osname == "android" ? p.vertical(66) : 66
	})
	var profileheightLabel = Ti.UI.createLabel({
		text : height,
		font : {
			fontSize : "14dp",
			fontFamily : f.Helv57C
		},
		color : 'white',
		left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100,
		height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
		top : Ti.Platform.osname == "android" ? p.vertical(105) : 105
	})
	var profileweightLabel = Ti.UI.createLabel({
		text : weight,
		font : {
			fontSize : "14dp",
			fontFamily : f.Helv57C
		},
		color : 'white',
		left : Ti.Platform.osname == "android" ? p.horizontal(100) : 100,
		height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
		top : Ti.Platform.osname == "android" ? p.vertical(144) : 144
	})

	if (Titanium.Platform.displayCaps.platformWidth < 320) {
		profileageLabel.top = p.vertical(68);
		profileheightLabel.top = p.vertical(111);
		profileweightLabel.top = p.vertical(155);
	}
	var profileImage2 = Ti.UI.createView({
		backgroundImage : "images/info.png",
		width : Ti.Platform.osname == "android" ? p.horizontal(55) : 55,
		height : Ti.Platform.osname == "android" ? p.vertical(80) : 80,
		top : Ti.Platform.osname == "android" ? p.vertical(195) : 195,
		left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0
	})
	var profileImagelabel2 = Ti.UI.createLabel({
		width : Ti.Platform.osname == "android" ? p.horizontal(52) : 52,
		height : Ti.Platform.osname == "android" ? p.vertical(20) : 20,
		top : Ti.Platform.osname == "android" ? p.vertical(250) : 250,
		left : Ti.Platform.osname == "android" ? p.horizontal(0) : 0,
		color : 'white',
		textAlign : 'center',
		font : {
			fontSize : "12dp"
		},
		text : infoProfile,
	})

	var ajuntamentImage = Ti.UI.createView({
		backgroundImage : "images/logoajuntament.png",
		width : Ti.Platform.osname == "android" ? p.horizontal(140) : 140,
		height : Ti.Platform.osname == "android" ? p.vertical(40) : 40,
		top : Ti.Platform.osname == "android" ? p.vertical(285) : 285
	})
	var profileBasedLabel = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(75) : 75,
		top : Ti.Platform.osname == "android" ? p.vertical(199) : 199,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.neue77
		},
		text : based,
	})
	var profileBasedLabel2 = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(185) : 205,
		top : Ti.Platform.osname == "android" ? p.vertical(199) : 195,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.Helv57C
		},
		text : 'Barcelona Corre',
	})
	var profileIdeaLabel = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(75) : 75,
		top : Ti.Platform.osname == "android" ? p.vertical(214) : 214,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.neue77
		},
		text : idea,
	})
	var profileIdeaLabel2 = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(130) : 140,
		top : Ti.Platform.osname == "android" ? p.vertical(214) : 210,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.Helv57C
		},
		text : 'Martina Ros i Solé',
	})
	var profileAutorLabel = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(75) : 75,
		top : Ti.Platform.osname == "android" ? p.vertical(229) : 229,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.neue77
		},
		text : autor,
	})
	var profileAutorLabel2 = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(112) : 117,
		top : Ti.Platform.osname == "android" ? p.vertical(229) : 225,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.Helv57C
		},
		text : 'Pere Bosch Grané i Núria Blanco Vilanova',
	})
	var profileFotoLabel = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(75) : 75,
		top : Ti.Platform.osname == "android" ? p.vertical(244) : 244,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.neue77
		},
		text : fotograf,
	})
	var profileFotoLabel2 = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(125) : 130,
		top : Ti.Platform.osname == "android" ? p.vertical(244) : 240,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.Helv57C
		},
		text : 'César Lucadamo',
	})
	var profileDevLabel = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(75) : 75,
		top : Ti.Platform.osname == "android" ? p.vertical(259) : 259,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.neue77
		},
		text : dev,
	})
	var profileDevLabel2 = Ti.UI.createLabel({
		left : Ti.Platform.osname == "android" ? p.horizontal(125) : 145,
		top : Ti.Platform.osname == "android" ? p.vertical(259) : 255,
		color : 'white',
		height : Ti.Platform.osname == "android" ? p.vertical(17) : 17,
		font : {
			fontSize : "11dp",
			fontFamily : f.Helv57C
		},
		text : 'Itinerarium',
	})
	if (profileDevLabel.text == 'Desarrollo: ') {
		profileDevLabel2.left = Ti.Platform.osname == "android" ? p.horizontal(140) : 140;
	}
	if (profileDevLabel.text == 'Development:') {
		profileDevLabel2.left = Ti.Platform.osname == "android" ? p.horizontal(140) : 140;
	}
	if (Titanium.Platform.displayCaps.platformWidth < 320) {
		profileBasedLabel2.left = p.horizontal(210);
		profileIdeaLabel2.left = p.horizontal(140);
		profileAutorLabel2.left = p.horizontal(117);
		profileFotoLabel2.left = p.horizontal(130);
		profileDevLabel2.left = p.horizontal(140);
	}
	if (profileDevLabel.text == 'Desenvolupament: ') {
		profileDevLabel2.left = Ti.Platform.osname == "android" ? p.horizontal(165) : 165;
	}
	if (profileFotoLabel.text == 'Photo:') {
		profileFotoLabel2.left = Ti.Platform.osname == "android" ? p.horizontal(110) : 110;
	}
	/*profileageTextfield.addEventListener('blur', function() {
	 profileheightTextfield.focus();
	 });
	 profileheightTextfield.addEventListener('blur', function() {
	 profileweightTextfield.focus();
	});*/
configView.add(ajuntamentImage);
configView.add(profileDevLabel);
configView.add(profileDevLabel2);
configView.add(profileFotoLabel);
configView.add(profileFotoLabel2);
configView.add(profileImage2);
configView.add(profileImage);
configView.add(profileBasedLabel);
configView.add(profileBasedLabel2);
configView.add(profileIdeaLabel);
configView.add(profileIdeaLabel2);
configView.add(profileAutorLabel);
configView.add(profileAutorLabel2);
configView.add(profileinfoLabel);
configView.add(profileageLabel);
configView.add(profileheightLabel);
configView.add(profileweightLabel);
configView.add(profileageTextfield);
configView.add(profileweightTextfield);
configView.add(profileheightTextfield);
configView.add(profileImagelabel);
configView.add(profileImagelabel2);
win1.add(configView);
configView.hide();

	///fi creacio configview ***********************

	var X = 'firstTimeEnterApp';
	if (Ti.App.Properties.getString(X, null) === null) {
		Ti.App.Properties.setString(X, 'true');
	}
	if (Ti.App.Properties.getString('weight', null) === null) {
		Ti.App.Properties.setString('weight', 0);
	}
	if (Ti.App.Properties.getString('height', null) === null) {
		Ti.App.Properties.setString('height', 0);
	}
	if (Ti.App.Properties.getString('age', null) === null) {
		Ti.App.Properties.setString('age', 0);
	}
	var value = Ti.App.Properties.getString('firstTimeEnterApp');
	if (value == 'true') {
		var initialView = Ti.UI.createView({
			height : Ti.Platform.osname == "android" ? p.vertical(460) : 460,
			width : Ti.Platform.osname == "android" ? p.horizontal(320) : 320,
			zIndex : 6,
			backgroundImage : 'images/pantallainici.png'
		})
		var box = Ti.UI.createView({
			backgroundImage : 'images/perfilinici.png',
			borderRadius : 5,
			height : Ti.Platform.osname == "android" ? p.vertical(180) : 180,
			width : Ti.Platform.osname == "android" ? p.horizontal(275) : 275,
			left : Ti.Platform.osname == "android" ? p.horizontal(320) : 320,
			bottom : 65
		})
		if (Ti.Platform.model == 'iPhone5' || Ti.Platform.model == 'iPhone5,1' || Ti.Platform.model == 'iPhone5,2') {
			initialView.height = 568;
			box.bottom = 100;
		}
		var ageLabel = Ti.UI.createLabel({
			text : age,
			font : {
				fontSize : "14dp",
				fontFamily : f.Helv57C
			},
			color : 'white',
			textAlign : 'right',
			right : Ti.Platform.osname == "android" ? p.horizontal(97) : 97,
			height : Ti.Platform.osname == "android" ? p.vertical(20) : 20,
			top : Ti.Platform.osname == "android" ? p.vertical(20) : 20
		})
		var heightLabel = Ti.UI.createLabel({
			text : height,
			font : {
				fontSize : "14dp",
				fontFamily : f.Helv57C
			},
			color : 'white',
			textAlign : 'right',
			right : Ti.Platform.osname == "android" ? p.horizontal(97) : 97,
			height : Ti.Platform.osname == "android" ? p.vertical(21) : 21,
			top : Ti.Platform.osname == "android" ? p.vertical(60) : 58
		})
		var weightLabel = Ti.UI.createLabel({
			text : weight,
			font : {
				fontSize : "14dp",
				fontFamily : f.Helv57C
			},
			color : 'white',
			textAlign : 'right',
			right : Ti.Platform.osname == "android" ? p.horizontal(97) : 97,
			height : Ti.Platform.osname == "android" ? p.vertical(20) : 20,
			top : Ti.Platform.osname == "android" ? p.vertical(100) : 98
		})
		if (Ti.Platform.name === 'iPhone OS') {
			var cancel = Titanium.UI.createButton({
				systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
			});
			var flexSpace = Titanium.UI.createButton({
				systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});
			var send = Titanium.UI.createButton({
				title : done,
				style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
			});
			send.addEventListener('click', function(e) {
				ageTextfield.blur();
			});
			cancel.addEventListener('click', function(e) {
				ageTextfield.blur();
			});

			var cancel2 = Titanium.UI.createButton({
				systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
			});
			var flexSpace2 = Titanium.UI.createButton({
				systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});
			var send2 = Titanium.UI.createButton({
				title : done,
				style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
			});
			send2.addEventListener('click', function(e) {
				weightTextfield.blur();
			});
			cancel2.addEventListener('click', function(e) {
				weightTextfield.blur();
			});

			var cancel3 = Titanium.UI.createButton({
				systemButton : Titanium.UI.iPhone.SystemButton.CANCEL
			});
			var flexSpace3 = Titanium.UI.createButton({
				systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
			});
			var send3 = Titanium.UI.createButton({
				title : done,
				style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
			});
			send3.addEventListener('click', function(e) {
				heightTextfield.blur();
			});
			cancel3.addEventListener('click', function(e) {
				heightTextfield.blur();
			});
			var ageTextfield = Ti.UI.createTextField({
				keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
				backgroundColor : 'white',
				keyboardToolbar : [flexSpace, flexSpace, flexSpace, send],
				returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
				keyboardToolbarHeight : p.vertical(40),
				suppressReturn : true,
				hintText : '',
				textAlign : 'center',
				font : {
					fontSize : "20dp"
				},
				width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
				height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
				top : Ti.Platform.osname == "android" ? p.vertical(20) : 20,
				right : Ti.Platform.osname == "android" ? p.horizontal(20) : 20
			})
			var heightTextfield = Ti.UI.createTextField({
				keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
				backgroundColor : 'white',
				keyboardToolbar : [flexSpace3, flexSpace3, flexSpace3, send3],
				returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
				keyboardToolbarHeight : p.vertical(40),
				suppressReturn : true,
				hintText : '',
				textAlign : 'center',
				font : {
					fontSize : "20dp"
				},
				width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
				height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
				top : Ti.Platform.osname == "android" ? p.vertical(60) : 60,
				right : Ti.Platform.osname == "android" ? p.horizontal(20) : 20
			})
			var weightTextfield = Ti.UI.createTextField({
				keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
				backgroundColor : 'white',
				keyboardToolbar : [flexSpace2, flexSpace2, flexSpace2, send2],
				returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
				keyboardToolbarHeight : p.vertical(40),
				suppressReturn : true,
				hintText : '',
				textAlign : 'center',
				font : {
					fontSize : "20dp"
				},
				width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
				height : Ti.Platform.osname == "android" ? p.vertical(22) : 22,
				top : Ti.Platform.osname == "android" ? p.vertical(100) : 100,
				right : Ti.Platform.osname == "android" ? p.horizontal(20) : 20
			})
		} else {
			var ageTextfield = Ti.UI.createTextField({
				keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
				backgroundColor : 'white',
				returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
				suppressReturn : true,
				hintText : '',
				textAlign : 'center',
				font : {
					fontSize : "20dp"
				},
				width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
				height : Ti.Platform.osname == "android" ? p.vertical(32) : 22,
				top : Ti.Platform.osname == "android" ? p.vertical(15) : 20,
				right : Ti.Platform.osname == "android" ? p.horizontal(20) : 20
			})
			var heightTextfield = Ti.UI.createTextField({
				keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
				backgroundColor : 'white',
				returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
				suppressReturn : true,
				hintText : '',
				textAlign : 'center',
				font : {
					fontSize : "20dp"
				},
				width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
				height : Ti.Platform.osname == "android" ? p.vertical(32) : 22,
				top : Ti.Platform.osname == "android" ? p.vertical(55) : 60,
				right : Ti.Platform.osname == "android" ? p.horizontal(20) : 20
			})
			var weightTextfield = Ti.UI.createTextField({
				keyboardType : Ti.UI.KEYBOARD_DECIMAL_PAD,
				backgroundColor : 'white',
				returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
				suppressReturn : true,
				hintText : '',
				textAlign : 'center',
				font : {
					fontSize : "20dp"
				},
				width : Ti.Platform.osname == "android" ? p.horizontal(72) : 72,
				height : Ti.Platform.osname == "android" ? p.vertical(32) : 22,
				top : Ti.Platform.osname == "android" ? p.vertical(95) : 100,
				right : Ti.Platform.osname == "android" ? p.horizontal(20) : 20
			})
			if (Titanium.Platform.displayCaps.platformWidth < 320) {
				ageTextfield.height = p.vertical(40);
				ageTextfield.top = p.vertical(10);
				heightTextfield.height = p.vertical(40);
				heightTextfield.top = p.vertical(55);
				weightTextfield.height = p.vertical(40);
				weightTextfield.top = p.vertical(100);
				heightLabel.top = p.vertical(65);
				weightLabel.top = p.vertical(110);
				ageTextfield.font = {
					fontSize : '12dp'
				}
				heightTextfield.font = {
					fontSize : '12dp'
				}
				weightTextfield.font = {
					fontSize : '12dp'
				}
			}
			ageTextfield.addEventListener('focus', function() {
				Ti.App.auxWin = 9;
			});
			heightTextfield.addEventListener('focus', function() {
				Ti.App.auxWin = 10;
			});
			weightTextfield.addEventListener('focus', function() {
				Ti.App.auxWin = 11;
			});
			win1.addEventListener('android:back', function() {
				if (Ti.App.auxWin == 9) {
					ageTextfield.blur();
					return false;
				}
				if (Ti.App.auxWin == 10) {
					heightTextfield.blur();
					return false;
				}
				if (Ti.App.auxWin == 11) {
					weightTextfield.blur();
					return false;
				}
			});
		}

		var gotoApp = Ti.UI.createButton({
			height : Ti.Platform.osname == "android" ? p.vertical(44) : 44,
			width : Ti.Platform.osname == "android" ? p.horizontal(44) : 44,
			bottom : 5,
			right : 0,
			backgroundImage : "images/entrar.png"
		})
		box.add(ageLabel);
		box.add(heightLabel);
		box.add(weightLabel);
		box.add(ageTextfield);
		box.add(weightTextfield);
		box.add(heightTextfield);
		box.add(gotoApp);
		initialView.add(box);
		win1.add(initialView);
		if (Ti.Platform.name === 'iPhone OS') {
			setTimeout(function() {
				box.animate({
					left : Ti.Platform.osname == "android" ? p.horizontal(45) : 45,
					duration : 1000,
					curve : Titanium.UI.ANIMATION_CURVE_EASE_OUT
				});
			}, 1200);
		} else {
			box.left = p.horizontal(45);
		}

		function move2Top(TF, bot) {
			if (Ti.Platform.name === 'iPhone OS') {
				TF.addEventListener('focus', function() {
					box.animate({
						bottom : bot,
						duration : 300,
						curve : Titanium.UI.ANIMATION_CURVE_EASE_OUT
					});
				});
			} else {
				box.bottom = bot;
			}
		}

		if (Ti.Platform.model == 'iPhone5' || Ti.Platform.model == 'iPhone5,1' || Ti.Platform.model == 'iPhone5,2') {
			var moveAux = ageTextfield;
			var bot = 275;
			move2Top(moveAux, bot);
			moveAux = heightTextfield;
			move2Top(moveAux, bot);
			moveAux = weightTextfield;
			move2Top(moveAux, bot);
		} else {
			var moveAux = ageTextfield;
			var bot = 250;
			move2Top(moveAux, bot);
			moveAux = heightTextfield;
			move2Top(moveAux, bot);
			moveAux = weightTextfield;
			move2Top(moveAux, bot);
		}
		function moveDownAgain(bot) {
			if (Ti.Platform.name === 'iPhone OS') {
				weightTextfield.addEventListener('blur', function() {
					box.animate({
						bottom : 55,
						duration : 500,
						curve : Titanium.UI.ANIMATION_CURVE_EASE_OUT
					});
				});
				heightTextfield.addEventListener('blur', function() {
					box.animate({
						bottom : 55,
						duration : 500,
						curve : Titanium.UI.ANIMATION_CURVE_EASE_OUT
					});
				});
				ageTextfield.addEventListener('blur', function() {
					box.animate({
						bottom : 55,
						duration : 500,
						curve : Titanium.UI.ANIMATION_CURVE_EASE_OUT
					});
				});
			} else {
				box.bottom = p.vertical(55);
			}
		}

		if (Ti.Platform.model == 'iPhone5' || Ti.Platform.model == 'iPhone5,1' || Ti.Platform.model == 'iPhone5,2') {
			bot = 100;
			moveDownAgain(bot);
		} else {
			bot = 65;
			moveDownAgain(bot);
		}
		gotoApp.addEventListener('click', function(e) {
			if (isNumber(heightTextfield.value) && isNumber(ageTextfield.value) && isNumber(weightTextfield.value)) {
				var weight = weightTextfield.value;
				Ti.App.Properties.setString('weight', weight);
				weight = ageTextfield.value;
				Ti.App.Properties.setString('age', weight);
				//flurry.setAge(weight);
				weight = heightTextfield.value;
				Ti.App.Properties.setString('height', weight);
				if (Ti.Platform.name === 'iPhone OS') {
					initialView.animate({
						opacity : 0,
						duration : 500
					});
				} else {
					initialView.hide();
				}
				heightTextfield.blur();
				weightTextfield.blur();
				ageTextfield.blur();

				Ti.App.Properties.setString(X, 'false');
				callback();
			} else {
				Titanium.UI.createAlertDialog({
					title : 'Barcelona Corre:',
					message : wrongText
				}).show();
			}
		})
	}

	returnObject.initial = initial;
	return returnObject;
};

module.exports = initial;
