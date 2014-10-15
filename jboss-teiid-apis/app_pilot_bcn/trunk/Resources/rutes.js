function crearRutes(win1,mapView,topBarTitle,fitxa, goMapButton,table,backButton, tabs){
	var KML_reader = require('google_kml');
	var pixelate = require('pixelate').pixelate;
	var p = new pixelate();
	var returnObject={};
	var electroFont = 'Electronic Highway Sign';
	if(Ti.Platform.osname=='android') {
		electroFont = 'EHSMB';
	} 
	var fitxagreenLine = Ti.UI.createImageView({
		left: Ti.Platform.osname=="android"? p.horizontal(0):0,
		top:Ti.Platform.osname=="android"? p.vertical(0):0,
		backgroundColor: "#BFD14A",
		height:Ti.Platform.osname=="android"? p.vertical(40):40,
		width: Ti.Platform.osname=="android"? p.horizontal(7):7
	});
	var fotosfitxa = Ti.UI.createImageView({
		height: 160,
		width: 320,
		top: 40,
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
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('distance'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(209):209,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadist2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('distance'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(210):210,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxasign = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('sign'),
		width: 95,
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
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(230):230,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaterrain = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
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
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('terrain'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(250):250,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaday = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('day'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(269):269,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaday2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(270):270,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadesnivellP = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('desP'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(289):289,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadesnivellP2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(290):290,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadesnivellA = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('desA'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(309):309,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxadesnivellA2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('desA'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(310):310,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaEspVerds = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('espV'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(329):329,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaEspVerds2 = Ti.UI.createImageView({
		backgroundImage:"images/hola.png",
		Align: "left",
		width: 60,
		height:18,
		top:Ti.Platform.osname=="android"? p.vertical(328):328,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxaWater = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('water'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(349):349,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxaWater2 = Ti.UI.createImageView({
		backgroundImage:"images/hola.png",
		width: 60,
		height:18,
		top:Ti.Platform.osname=="android"? p.vertical(348):348,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxatime = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
		},
		textAlign: "right",
		text: L('time'),
		width: 95,
		top:Ti.Platform.osname=="android"? p.vertical(369):369,
		left:Ti.Platform.osname=="android"? p.horizontal(0):0
	});
	var fitxatime2 = Ti.UI.createLabel({
		color: 'black',
		font:{
			fontSize: '11dp',
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(370):370,
		left:Ti.Platform.osname=="android"? p.horizontal(110):110
	});
	var fitxadif = Ti.UI.createLabel({
		color: 'white',
		font:{
			fontSize: '10dp',
			fontFamily: "Helvetica"
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
			fontFamily: electroFont
		},
		textAlign: "left",
		text: L('sign'),
		width: 220,
		top:Ti.Platform.osname=="android"? p.vertical(390):390,
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
	win1.add(fitxa);
	fitxa.hide();


	var rows= [];
	var aux;
	for(i=0;i<=25;i++){
		aux=i;
		var goButton =Ti.UI.createButton({
			right:Ti.Platform.osname=="android"? p.horizontal(0):0,
			height: Ti.Platform.osname=="android"? p.vertical(40):40,
			width: Ti.Platform.osname=="android"? p.horizontal(40):40,
			backgroundImage: "images/flechaverde.png"
		});
		var greenLine = Ti.UI.createImageView({
			left: Ti.Platform.osname=="android"? p.horizontal(0):0,
			top:Ti.Platform.osname=="android"? p.vertical(0):0,
			backgroundColor: "#BFD14A",
			height:Ti.Platform.osname=="android"? p.vertical(40):40,
			width: Ti.Platform.osname=="android"? p.horizontal(7):7
		});
		var greenBar = Ti.UI.createImageView({
			left: 7,
			top:0,
			backgroundColor: "#E0E8AD",
			height:Ti.Platform.osname=="android"? p.vertical(40):40,
			width: Ti.Platform.osname=="android"? p.horizontal(313):313
		})
		if(i>=20){
			greenLine.backgroundColor="#B81037";
			greenBar.backgroundColor="#DA938B";
			goButton.backgroundImage="images/flecharoja.png";
		}
		if(i>10 && i<20){
			greenLine.backgroundColor="#2A7ABA";
			greenBar.backgroundColor="#A6BADD";
			goButton.backgroundImage="images/flechaazul.png";
		}
		if(i==0 || i==11 || i==20){
			rows[i]=Ti.UI.createTableViewRow({
				className: "default",
				height: Ti.Platform.osname=="android"? p.vertical(20):20
			})
			var topframeText = Ti.UI.createLabel({
				Color: "#BFD14A",
				left: 8,
				font:{
					fontSize: "11dp"
				},
				text: L("rutasdistritos")
			})
			var topframe = Ti.UI.createImageView({
				top:Ti.Platform.osname=="android"? p.vertical(0):0,
				height: Ti.Platform.osname=="android"? p.vertical(20):20,
				width: Ti.Platform.osname=="android"? p.horizontal(320):320,
				backgroundColor: "black"
			})
			if(i==11){
				topframeText.Color="#2A7ABA";
				topframeText.text = L("rutastematicas");
			}else{
				if(i==20){
					topframeText.Color="#B81037";
					topframeText.text= L("rutasrepte");
				}
			}
			rows[i].add(topframe);
			rows[i].add(topframeText);
			aux=i;
		}else{
			rowAux=i;
			if(i>10 && i<20){
				rowAux=(i-1);
			}else{
				if(i>19){
					rowAux=(i-2);
				}
			}
			rows[i]=Ti.UI.createTableViewRow({
				height: Ti.Platform.osname=="android"? p.vertical(40):40,
				className: "default",
				id: 'ruta' + rowAux
			})
			rows[i].add(greenBar);
			rows[i].add(greenLine);
			rows[i].add(goButton);
			if(i>10 && i<20){
				aux=i-1;
			}else{
				if(i>19){
					aux=i-2;
				}
			}
			var labelruta=Ti.UI.createLabel({
				color: '#000000',
				font:{
					fontSize: '11dp',
					fontFamily: "Helvetica",
					fontColor: "black"
				},
				text: L('route' + aux),
				top: Ti.Platform.osname=="android"? p.vertical(1):1,
				left:Ti.Platform.osname=="android"? p.horizontal(15):15
			})
			var labelrutabot = Ti.UI.createLabel({
				color: '#000000',
				font:{
					fontSize: '10dp',
					fontFamily: "Helvetica",
					fontColor: "black"
				},
				width: Ti.Platform.osname=="android"? p.horizontal(265):265,
				height: Ti.Platform.osname=="android"? p.vertical(22.1):22.1,
				text: L('route'+aux+'bot'),
				bottom:Ti.Platform.osname=="android"? p.vertical(1):1,
				left:Ti.Platform.osname=="android"? p.horizontal(15):15
			});
			rows[i].add(labelruta);
		}
	}

	table.setData(rows);
	function useKML (mapView, path,aux){
		fitxaText1.text=L('route'+ aux);
		topBarTitle.text = L('fitxa');
		fitxaText2.text=L('route'+aux+'bot');
		fitxadist2.text=L('distance'+aux);
		fitxasign2.text=L('sign'+aux);
		fitxasign2.top=Ti.Platform.osname=="android"? p.vertical(230):230;
		if(aux==5 || aux==21){
			fitxasign2.top=Ti.Platform.osname=="android"? p.vertical(222):222;
		}
		fitxaterrain2.text=L('terrain'+aux);
		fitxaday2.text=L('day'+aux);
		fitxadesnivellP2.text=L('desP'+aux);
		fitxadesnivellA2.text=L('desA'+aux);
		fitxaEspVerds2.backgroundImage=L('espV'+aux);
		fitxaWater2.backgroundImage=L('water'+aux);
		fitxatime2.text=L('time'+aux);
		fitxadif2.text=L('dif'+aux);
		fitxadif3.backgroundImage=L('dif_image'+aux);
		fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(140):140;
		if(fitxadif2.text=='MITJANA'){
			fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(160):160;
		}
		if(fitxadif2.text=='MITJANA-BAIXA' || fitxadif2.text=='BAIXA-MITJANA' || fitxadif2.text=='MITJANA-ALTA'){
			fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(195):195;
		}
		if(fitxadif2.text=='BAIXA'){
			fitxadif3.left=Ti.Platform.osname=="android"? p.horizontal(150):150;
		}
		fitxa.backgroundColor="#E0E8AD";
		fitxagreenLine.backgroundColor="#BFD14A";
		if(aux>10 &&aux<19){
			fitxa.backgroundColor="#A6BADD";
			fitxagreenLine.backgroundColor="#2A7ABA";
		}else{
			if(aux>=18){
				fitxa.backgroundColor="#DA938B";
				fitxagreenLine.backgroundColor="#B81037";
			}
		}
		goMapButton.show();
		fitxa.show();
		table.hide();
		backButton.show();
		win1.add(goMapButton);
		backButton.addEventListener('click', function(e){
			fitxa.hide();
			tabs.show();
			topBarTitle.text = L('routes');
			table.show();
			mapView.hide();
			backButton.hide();
			goMapButton.hide();
		});
		backButtonMap.addEventListener('click', function(e){
			fitxa.show();
			topBarTitle.text = L('fitxa');
			mapView.hide();
			backButton.show();
			backButtonMap.hide();
			goMapButton.show();
		});
		mapView.removeAllAnnotations();
		if(auxClick===true){
			mapView.removeRoute(route);
		}
		var KML = new KML_reader(mapView, path);
		auxClick=true;
		goMapButton.addEventListener('click', function(e){
			if (Ti.Platform.name === 'iPhone OS'){
				flurry.logTimedEvent('intervalCursa', {
					start : 'cursa',
					index: aux
				});
			}else{
				flurry.onEvent('intervalCursa',{
					start : 'cursa',
					index: aux
				});
			}
			fitxa.hide();
			backButton.hide();
			topBarTitle.text = L('map');
			goMapButton.hide();
			backButtonMap.show();
			mapView.show();
		})
		tabs.hide();
	};
	var auxClick=false;

	table.addEventListener('click',function(e){
		if( e.row.id == 'ruta1' ){
			path="rutes/01-de-la-placa-orfila-als-voltants-de-la-maquinista.kml";
			aux=1;
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta2' ){
			aux=2;
			path="rutes/02-placa-espanya-castell-de-montjuic.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta3' ){
			aux=3;
			path="rutes/03-parcs-de-la-maternitat-cervantes-i-pedralbes.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta4' ){
			aux=4;
			path="rutes/04-velodrom-dhorta-parc-cervantes.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta5' ){
			aux=5;
			path="rutes/05-rambla-prim-forum-glories.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta6' ){
			aux=6;
			path="rutes/06-conges-velodrom-dhorta.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta7' ){
			aux=7;
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta8' ){
			aux=8;
			path="rutes/08-torres-bessones-font-del-gat.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta9' ){
			aux=9;
			path="rutes/09-ascensio-a-torre-baro.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta10' ){
			aux=10;
			path="rutes/10-gracia-els-3-turons.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta11' ){
			aux=11;
			path="rutes/11-parcs-i-jardins.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta12' ){
			aux=12;
			path="rutes/12-ruta-per-a-dies-freds.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta13' ){
			aux=13;
			path="rutes/13-interiors-dilla-de-leixample.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta14' ){
			aux=14;
			path="rutes/14-ruta-per-a-dies-festius.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta15' ){
			aux=15;
			path="rutes/15-ruta-per-a-principiants.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta16' ){
			aux=16;
			path="rutes/16-fins-a-la-ciutat-dels-morts.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta17' ){
			aux=17;
			path="rutes/17-la-carretera-de-les-aigues.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta18' ){
			aux=18;
			path="rutes/18-de-sarria-a-vallvidrera.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta19' ){
			aux=19;
			path="rutes/19-repte-atletisme-de-muntanya.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta20' ){
			aux=20;
			path="rutes/20-repte-mar-i-muntanya.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta21' ){
			aux=21;
			path="rutes/21-repte-remuntar-el-riu.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta22' ){
			aux=22;
			path="rutes/22-repte-un-sol-carrer.kml";
			useKML(mapView,path,aux);
		}
		if( e.row.id == 'ruta23' ){
			aux=23;
			path="rutes/23-ruta-de-nit.kml";
			useKML(mapView,path,aux);
		}
	});
win1.add(table);

returnObject.crearRutes= crearRutes;
return returnObject;
};

module.exports=crearRutes;