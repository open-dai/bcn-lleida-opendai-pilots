function fitxa(fitxa,graybar){
	var returnObject={};

	var fitxagreenLine = Ti.UI.createImageView({
		left: Ti.Platform.osname=="android"? p.horizontal(0):0,
		top:Ti.Platform.osname=="android"? p.vertical(0):0,
		backgroundColor: "#BFD14A",
		height:Ti.Platform.osname=="android"? p.vertical(40):40,
		width: Ti.Platform.osname=="android"? p.horizontal(7):7
	});
	var fotosfitxa = Ti.UI.createImageView({
		height: Ti.Platform.osname=="android"? p.vertical(160):160,
		width: Ti.Platform.osname=="android"? p.horizontal(320):320,
		top: Ti.Platform.osname=="android"? p.vertical(40):40,
		backgroundImage: "images/fotofitxa.jpg",
	})
	var fitxaText1=Ti.UI.createLabel({
		color: '#000000',
		font:{
			fontSize: '11dp',
			fontFamily: "Helvetica",
			fontColor: "black"
		},
		text: L('route'),
		top: Ti.Platform.osname=="android"? p.vertical(1):1,
		left:Ti.Platform.osname=="android"? p.horizontal(15):15
	})
	var fitxaText2 = Ti.UI.createLabel({
		color: '#000000',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica",
			fontColor: "black"
		},
		width: Ti.Platform.osname=="android"? p.horizontal(265):265,
		height: Ti.Platform.osname=="android"? p.vertical(22.1):22.1,
		text: L('routebot'),
		top:Ti.Platform.osname=="android"? p.vertical(15):15,
		left:Ti.Platform.osname=="android"? p.horizontal(15):15
	});
	var fitxadist = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('distance'),
		width: Ti.Platform.osname=="android"? p.vertical(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(209):209,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadist2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('distance'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(210):210,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxasign = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('sign'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(229):229,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxasign2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: "Helvetica"
		},
		textAlign: "left",
		text: L('sign'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(230):230,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaterrain = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('terrain'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(249):249,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaterrain2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('terrain'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(250):250,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaday = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('day'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(269):269,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaday2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(270):270,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadesnivellP = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('desP'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(289):289,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadesnivellP2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(290):290,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadesnivellA = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('desA'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(309):309,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadesnivellA2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('desA'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(310):310,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaEspVerds = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('espV'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(329):329,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaEspVerds2 = Ti.UI.createImageView({
		backgroundImage:"images/hola.png",
		Align: "left",
		width: Ti.Platform.osname=="android"? p.horizontal(60):60,
		height: Ti.Platform.osname=="android"? p.vertical(18):18,
		top:Ti.Platform.osname=="android"? p.vertical(328):328,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaWater = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('water'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(349):349,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaWater2 = Ti.UI.createImageView({
		backgroundImage:"images/hola.png",
		width: Ti.Platform.osname=="android"? p.horizontal(60):60,
		height: Ti.Platform.osname=="android"? p.vertical(18):18,
		top:Ti.Platform.osname=="android"? p.vertical(348):348,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxatime = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('time'),
		width: Ti.Platform.osname=="android"? p.horizontal(95):95,
		top:Ti.Platform.osname=="android"? p.vertical(369):369,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxatime2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: Ti.Platform.osname=="android"? p.horizontal(220):220,
		top:Ti.Platform.osname=="android"? p.vertical(372):372,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadif = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: f.NewsGothic
		},
		textAlign: "right",
		text: L('dif'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(389):389,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadif2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: f.electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(392):392,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadif3 = Ti.UI.createImageView({
		height: 18,
		width: 60,
		backgroundImage: "images/hola.png",
		top:Ti.Platform.osname=="android"? p.vertical(388):388,
		left:Ti.Platform.osname=="android"? p.horizontal(140):140
	});
	fitxa.add(fitxaText1);
	fitxa.add(fitxaText2);
	fitxa.add(fitxagreenLine);
	fitxa.add(fotosfitxa);
	fitxa.add(graybar);
	fitxa.add(fitxadist);
	fitxa.add(fitxadist2);
	fitxa.add(fitxasign);
	fitxa.add(fitxasign2);
	fitxa.add(fitxaterrain);
	fitxa.add(fitxaterrain2);
	fitxa.add(fitxaday);
	fitxa.add(fitxaday2);
	fitxa.add(fitxadesnivellP);
	fitxa.add(fitxadesnivellP2);
	fitxa.add(fitxadesnivellA);
	fitxa.add(fitxadesnivellA2);
	fitxa.add(fitxaEspVerds);
	fitxa.add(fitxaEspVerds2);
	fitxa.add(fitxaWater);
	fitxa.add(fitxaWater2);
	fitxa.add(fitxatime);
	fitxa.add(fitxatime2);
	fitxa.add(fitxadif);
	fitxa.add(fitxadif2);
	fitxa.add(fitxadif3);
	fitxa.hide();

	returnObject.fitxa=fitxa;
	return returnObject;
};

module.exports=fitxa;