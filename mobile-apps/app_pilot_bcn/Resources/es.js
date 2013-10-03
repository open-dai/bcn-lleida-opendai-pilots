	var routes = "Rutas";
	var config = "Configuración";
	var fitxaLabel = "Ficha Técnica";
	var map = "Mapa";
	var medals = "Medallas";
	var curses = "Carreras";
	var idioma ="Idioma";
	var selected = "Has seleccionado: ";
	if (Ti.Platform.name === 'iPhone OS'){	
		var canvi_idioma= "Debe reiniciar la aplicación (salga de la aplicación, haga doble clic en el botón Home, deje pulsado el icono de la aplicación y pulse en el símbolo \"-\").";
	}else{
		var canvi_idioma = "Debe reiniciar la aplicación.";
	}
	var cancelButton = "Cancelar";

	var lowAccuracy = "No puedes empezar una ruta si la señal de GPS es baja o nula, por favor, busca un espacio más abierto.";
	var nogps = "No puedo conseguir tu ubicación actual, por favor, activa el GPS.";

	var finishButtonText = "¿Quieres dar por terminada la ruta?";
	var yes = "Si";
	var no = "No";
	var resetButtonText = "Esta seguro de que quiere hacer un reset de la ruta?";
	var pause2back = "Para poder salir de la ruta tienes que pausar el cronómetro.";
	
	
	var loading = "Cargando"
	var unknown = "Temporalmente no disponible"
	var table_path = "/images/air_quality_es.png"
	var pollen_msg = "Los datos de polen y tiempo son generales para toda Barcelona"
	var pollution_update_TS = "Los datos de la polución han sido actualizados por última vez a las: "
	
	var temperature = "Temperatura"
    var temperature_max = "Temp. max"
    var temperature_min = "Temp. min"

	var nomCursa = [];

	var nomCursa1 = "santantoni";
	nomCursa.push(nomCursa1);
	nomCursa.push(nomCursa1);
	var nomCursa2 = "mediamaraton";
	nomCursa.push(nomCursa2);
	var nomCursa3 = "maraton";
	nomCursa.push(nomCursa3);
	var nomCursa4 = "bomberos";
	nomCursa.push(nomCursa4);
	var nomCursa5 = "Elcorteingles";
	nomCursa.push(nomCursa5);
	var nomCursa6 = "lamerce";
	nomCursa.push(nomCursa6);
	var nomCursa7 = "amistad";
	nomCursa.push(nomCursa7);
	var nomCursa8 = "mujer";
	nomCursa.push(nomCursa8);
	var nomCursa9 = "JeanBouin";
	nomCursa.push(nomCursa9);
	var nomCursa10 = "nassos";
	nomCursa.push(nomCursa10);

	var moreInfo = "Más información: ";
	var date = "Fecha: ";

	var meters = " metros";
	
	var data = [];

	var data0 = "Enero";
	data.push(data0);
	var data1 = "Febrero";
	data.push(data1);
	var data2 = "Marzo";
	data.push(data2);
	var data3 = "Abril";
	data.push(data3);
	var data4 = "Mayo";
	data.push(data4);
	var data5 = "Septiembre";
	data.push(data5);
	var data6 = "Noviembre";
	data.push(data6);
	var data7 = "Noviembre";
	data.push(data7);
	var data8 = "Noviembre";
	data.push(data8);
	var data9 = "Diciembre";
	data.push(data9);

	var mapData =[];

	var mapData0 = "Recorrido 2013";
	mapData.push(mapData0);
	var mapData1 = "Recorrido 2012";
	mapData.push(mapData1);
	var mapData2 = "Recorrido 2013";
	mapData.push(mapData2);
	var mapData3 = "Recorrido 2012";
	mapData.push(mapData3);
	var mapData4 = "Recorrido 2012";
	mapData.push(mapData4);
	var mapData5 = "Recorrido 2012";
	mapData.push(mapData5);
	var mapData6 = "Recorrido 2012";
	mapData.push(mapData6);
	var mapData7 = "Recorrido 2012";
	mapData.push(mapData7);
	var mapData8 = "Recorrido 2012";
	mapData.push(mapData8);
	var mapData9 = "Recorrido 2012";
	mapData.push(mapData9);

	var links = [];

	var link0 = "http://www.cursasantantoni.cat/";
	links.push(link0);
	var link1 = "http://www.mitjabarcelona.com/";
	links.push(link1);
	var link2 = "http://www.zurichmaratobarcelona.es/";
	links.push(link2);
	var link3 = "http://www.cursabombers.com/";
	links.push(link3);
	var link4 = "http://www.cursaelcorteingles.cat/";
	links.push(link4);
	var link5 = "http://www.bcn.cat/cursamerce/";
	links.push(link5);
	var link6 = "http://www.cursadelamistat.com/";
	links.push(link6);
	var link7 = "http://www.carreradelamujer.com/barcelona/";
	links.push(link7);
	var link8 = "http://jeanbouin.mundodeportivo.com/";
	links.push(link8);
	var link9 = "http://www.bcn.cat/cursanassos/";
	links.push(link9);

	
	var alert100m = "Para el tiempo y retrocede una pantalla atrás para activar correctamente el cronómetro en el inicio de la ruta. Estás a ";
	var alert100m2 = "m del comienzo. Para ganar la medalla de la ruta el punto de inicio y final tienen que ser válidos.";


	var wrongText = "Has introducido los datos incorrectamente, por favor, revísalos.";
	var info = "Con tus datos podremos ofrecerte una estimación de la distancia recorrida, la velocidad y las calorías perdidas.";
	var save = "Guardar";
	var reset = "Reset";
	var age = "Edad:";
	var height = "Altura (cm):";
	var weight = "Peso (Kg):";

	var based = "Aplicación basada en el libro: ";
	var idea = "Idea original: ";
	var autor = "Autores: ";
	var fotograf = "Fotografía: ";
	var dev = "Desarrollo: ";
	var done = "Hecho";
	var next = "Siguiente";

	var arrayCursatext=[];

	var cursatext0 = "Constituye la primera gran cita de la temporada. Si los turrones nos han jugado una mala pasada, es el motivo ideal para entrenar en el mes de enero. Desde justo al lado del mercado, se dan dos vueltas por el barrio, incluidas dos tiraas largas por la gran vía de les Corts Catalanes en dirección al Besòs. La carrera se ha labrado el prestigio por méritos propios, y suele contar con la participación de destacados atletas profesionales catalanes. El mismo día de la carrera, también se organizan carreras para niños a partir de los cinco años. La gran dificultad de la carrera es el frío que se pasa al empezar, de buena mañana. El calentamiento es más necesario que nunca, y quizá tengas que correr con manga larga para mantener los músculos a buena temperatura. Cada año la lista de abandonos es numerosa, porque, probablemente, ésta sea la carrera de medio fondo más dura del calendario local.";
	arrayCursatext.push(cursatext0);
	var cursatext1 = "Es la hermana pequeña de la prueba por excelencia, y el siguiente paso en la preparación de la gran cita, que se celebra unas semanas más tarde. Para la mayoría de los corredores, sirve como entrenamiento de calidad dentro del plan que vienen siguiendo. La organización cuenta con la colaboración de la empresa francesa Amaury Sport Organisation, que también se encuentra detrás de pruebas míticas como el Tour de Francia o el Rally Dakar. Esto ayuda a atraer a estrellas keniatas, los grandes dominadores de la distancia. La meteorología puede complicarse en forma de lluvias, pero las temperaturas suelen ser suaves. El recorrido siempre pasa cerca del frente marítimo y por muchos de los puntos turísticos por excelencia de la ciudad.";
	arrayCursatext.push(cursatext1);
	var cursatext2 = "En 1980 Barcelona entró en la lista de grandes ciudades con maratón propia. Lo hizo atrayendo la que dos años antes se había organizado por vez primera en Palafrugell. En aquella primera edición, que salía desde la plaza de Maria Cristina y daba una vuelta por el Baix Llobregat, los inscritos apenas llegaban al millar. Desde mediados de los años noventa, la carrera vivió como ninguna otra la fiebre atlética que poseía la ciudad. La introducción del chip amarillo en 1995 se recuerda todavía como el punto de inflexión definitivo.	En los últimos años la prueba se ha convertido en referencia mundial. De los 4.636 inscritos en 2006 se pasó a 15.075 en 2011. El circuito es bastante rápido, a pesar de las pendientes de la Diagonal y el paseo de Sant Joan, donde se descubre alguna mueca de dolor. El tiempo suele acompañar, lo que hace que cada temporada sean más los participantes extranjeros que aprovechan la carrera para hacer turismo por la ciudad. El recorrido, muy mejorado en los últimos años, supone para ellos una primera prueba de los grandes atractivos de la ciudad.";
	arrayCursatext.push(cursatext2);
	var cursatext3 = "Se trata, sin duda alguna, de uno de los fenómenos que ha crecido en paralelo a la ola runner de la ciudad. Empezó como una colaboración entre Nike y los Bomberos de Barcelona, y una campaña de marketing que año tras año la ha situado como uno de los retos imprescindibles en el calendario local. En la última edición, los 20.000 dorsales disponibles se agotaron en una semana. La riada de camisetas amarillas ya es un clásico de la primavera. En las semanas previas a la carrera, los organizadores reúnen a los inscritos en entrenos dirigidos, algunos de ellos con la presencia de atletas de élite. También se hacen sesiones nocturnas, las populares Lunarun. En el aspecto competitivo, el circuito es rapidísimo. Atletas de pista como Natalia Rodríguez, Marta Domínguez o Chema Martínez son habituales de esta cita. De hecho, es la única carrera de Cataluña distinguida con la etiqueta de bronce de la Federación Internacional de Atletismo, un sello de calidad garantizada.";
	arrayCursatext.push(cursatext3);
	var cursatext4 = "La reina de las carreras de Barcelona, al menos en lo que a inscripción se refiere. Influye el hecho de que sea gratis, pero eso no es todo. La carrera de El Corte Inglés, gracias a la marca que la patrocina, se ha convertido en una auténtica institución por sí misma. Ya en la primera edición reunió a más de 17.000 corredores. Desde entonces no ha parado de crecer. El recorrido no sigue una distancia estándar, pero siempre cumple con una de sus propias tradiciones: el ascenso a Montjuïc por la calle de El Foc y la vuelta por la pista del Estadio Olímpico Lluís Companys. Las piernas se resienten de los 119 metros de desnivel acumulado, pero muchos participantes no tienen reparos en bajar el ritmo, incluso en caminar en algún punto del recorrido. Este evento entró en la historia en 1994, cuando una participación de 109.457 atletas estableció un récord Guinness para una carrera en todo el mundo, todavía vigente. Actualmente se ha consolidado entre los 50.000 y 60.000, cifras que la sitúan como la más popular de la ciudad.";
	arrayCursatext.push(cursatext4);
	var cursatext5 = "La fiesta mayor de la ciudad no podía concluir sin una reunión atlética. Coincidiendo con la Mercè, una mañana de domingo el Ayuntamiento organiza esta prueba, que da el pistoletazo de salida a los actos de celebración. El recorrido, un clásico de 10 kilómetros, es muy exigente en la parte inicial, con 3.000 metros por la gran vía de les Corts Catalanes. Para muchos ésta es la primera carrera después de las vacaciones. El calor ya no aprieta tanto a estas alturas, lo cual anima a mucha gente. A menudo las plazas disponibles se agotan. La inscripción, de cinco euros, es solidaria, ya que la recaudación se destina a financiar proyectos de ayuda a personas con discapacidades a través del deporte. El nivel deportivo es alto, porque el circuito está diseñado para conseguir buenas marcas. A pesar de eso, no se busca la presencia de grandes nombres internacionales para remarcar el carácter popular y festivo de la prueba.";
	arrayCursatext.push(cursatext5);
	var cursatext6 = "A principios de los años ochenta, cuando en Barcelona aún no se contaba con un calendario atlético completo, Francesc Mates decidió organizar una carrera que todavía hoy destaca por encima de la media. Suprimió un vacío que sin él quizá seguiría sin llenarse: una carrera de montaña sin salir de la ciudad. Francesc era por entonces un referente del atletismo urbano en Barcelona: desde 1947 diseñaba modelos de calzado deportivo para corredores. También fue uno de los impulsores de la Maratón de Barcelona, junto a Ramon Oliu. Así nació la Carrera de la Amistad, una prueba no competitiva que desde 1991 también recuerda anualmente la memoria de su creador. Se trata de una carrera pequeña, ya que continúa organizándola la familia Mates a través de su empresa de calzado. La maestra zapatera Myrna Mates, hija de Francesc y, como su padre, ex atleta, es ahora la cara visible de la misma. Entre la comunidad deportiva, la prueba se conoce simple y llanamente como «la carrera de los Mates». Su carácter amistoso hace que no se corra con chip ni se marquen tiempos precisos. De hecho, la clasificación final no deja de ser oficiosa. La inscripción es gratuita.";
	arrayCursatext.push(cursatext6);
	var cursatext7 = "En los últimos años el auge de la participación femenina ha explicado, en buena medida, el incremento exponencial de inscripciones en todas las carreras que se disputan en la ciudad. Entre el 20 y el 25% de los participantes aproximadamente son mujeres. Pero un domingo del mes de octubre ellas son las que mandan en la calle. Esta carrera forma parte de un circuito estatal, pero también está vinculada a la Semana Deportiva de la Mujer, siete días en los que se ofrece acceso gratuito a las instalaciones municipales y a clases deportivas. La inscripción en la carrera es de pago, pero una parte se destina a la Asociación Española contra el Cáncer. Este compromiso hace que no falten caras conocidas como María Vasco o érika Villaécija. Predomina el carácter festivo. El éxito entre las barcelonesas es incontestable: en cinco años, las inscripciones se han quintuplicado. Para muchas, es una primera prueba que las engancha a otras.";
	arrayCursatext.push(cursatext7);
	var cursatext8 = "Por más carreras que aparezcan en el calendario local, ninguna tendrá la solera de la Jean Bouin. El 1 de febrero de 1920, 48 pioneros tomaron la salida de la primera edición, en Esplugues de Llobregat. Rossend Calvet fue el ganador de la misma, con una excelente marca de 34’ 10”. Nueve décadas más tarde, la Jean Bouin es la decana de las carreras atléticas españolas, con una trayectoria casi ininterrumpida. La carrera recuerda a un atleta marsellés fallecido en 1914 en un campo de batalla de la Primera Guerra Mundial. Dos años antes, había ganado la medalla de plata de los 5.000 metros en los Juegos Olímpicos de Estocolmo y se había labrado una legión de seguidores. En las primeras ediciones el público ya acompañaba a los valientes el día de la carrera y se lanzaba a la calle para animarles. Con este empuje la Jean Bouin siguió rompiendo barreras: en 1946 se abrió a los atletas extranjeros, y al año siguiente, a la participación femenina. En 1978 incorporó la categoría de silla de ruedas, y en 2005, la de trasplantados. En 1979 la carrera se extendió definitivamente a la ciudadanía con la primera edición abierta a todo el mundo. A principios del siglo XXI, la participación rozaba el millar de atletas, pero en pocos años protagonizó un salto descomunal. El circuito actual, casi calcado al de 1973, se inicia con un largo trecho por la gran vía de les Corts Catalanes y termina con una fuerte pendiente, de 50 metros de desnivel, en Montjuïc. El frío matinal en pleno otoño complica la experiencia, pero no dudes en participar de una historia incomparable.";
	arrayCursatext.push(cursatext8);
	var cursatext9 = "Entre los turrones de Navidad y San Esteban y el cava de Fin de Año, la última tarde de diciembre te da la oportunidad de despedir el año quemando calorías. La tradición de las San Silvestre se inició en 1925 en São Paulo, donde el clima invita más a correr en una fecha como ésta. En Barcelona ha tomado el nombre de L’Home dels Nassos («el hombre de las narices»), el personaje al que buscan los niños el último día del año. El recorrido es rapidísimo y transita por el litoral, casi sin pendientes. En esta carrera se han visto marcas tan impresionantes como el récord de España en ruta de la atleta de Navarcles Rosa Morató. La carrera se despide sin luz solar, una experiencia poco frecuente en competiciones populares, pero la participación aumenta año tras año. El trazado favorece un ambiente festivo para ir abriendo boca para la cena de Fin de Año, en la que podrás explicar que, corriendo, te lo has pasado de narices.";
	arrayCursatext.push(cursatext9);

	var free = "Libre";

	var correct = "Correcto";
	var incorrect = "Incorrecto";

	var initPointText = "Punto de inicio:";
	var finalPointText = "Punto de llegada:";
	var timeLabelText = "Tiempo:";
	var distanceLabelText = "Distancia:";
	var velocityLabelText = "Ritmo medio:";
	var calorieLabelText = "Energía:";
	var medalLabelText = "Medallas conseguidas:";

	var distance = "Distancia:";
	var sign = "Señalizado:";
	var terrain = "Terreno:";
	var day = "Día/Noche:";
	var desP = "Desnivel positivo:";
	var desA = "Desnivel acumulado:";
	var espV = "Espacios verdes:";
	var water = "Fuentes:";
	var time = "Tiempo:";
	var dif = "Dificultad:";

    var pollution="Contaminación";
    var pollen = "Polen";
    var weather_title = "Tiempo"

	var arrayMedalBarTitle = [];
	var arrayMedalBarColor = [];

	var medalBarTitle1 = "Rutas BCN Corre";
	var medalBarColor1 = "white";
	arrayMedalBarTitle.push(medalBarTitle1);
	arrayMedalBarColor.push(medalBarColor1);
	arrayMedalBarTitle.push(medalBarTitle1);
	arrayMedalBarColor.push(medalBarColor1);

	var medalBarTitle2 = "Carreras BCN Corre";
	var medalBarColor2 = "#F8B905";
	arrayMedalBarTitle.push(medalBarTitle2);
	arrayMedalBarColor.push(medalBarColor2);
	
	var medalBarTitle3 = "Distancia";
	var medalBarColor3 = "#00A096";
	arrayMedalBarTitle.push(medalBarTitle3);
	arrayMedalBarColor.push(medalBarColor3);
	
	var medalBarTitle4 = "Velocidad";
	var medalBarColor4 = "#DF2477";
	arrayMedalBarTitle.push(medalBarTitle4);
	arrayMedalBarColor.push(medalBarColor4);
	
	var medalBarTitle5 = "Calorías";
	var medalBarColor5 = "#E75F15";
	arrayMedalBarTitle.push(medalBarTitle5);
	arrayMedalBarColor.push(medalBarColor5);
	
	var medalBarTitle6 = "Nº de rutas hechas este mes";
	var medalBarColor6 = "#93107D";
	arrayMedalBarTitle.push(medalBarTitle6);
	arrayMedalBarColor.push(medalBarColor6);


	var arrayDistance = [];
	var arraySign = [];
	var arrayTerrain = [];
	var arrayDay = [];
	var arrayDesP = [];
	var arrayDesA = [];
	var arrayEspV = [];
	var arrayWater = [];
	var arrayTime = [];
	var arrayDif = [];
	var arrayDif_image = [];

	var arrayDistance1 = "4800 METROS";
	var arraySign1 = "Circuito deportivo del Castillo de Montjuïc";
	var arrayTerrain1 = "ASFALTO Y GRAVA";
	var arrayDay1 = "DIA";
	var arrayDesP1 = "149 METROS";
	var arrayDesA1 = "168 METROS";
	var arrayEspV1 = "images/niveles/nivelbosque3.png";
	var arrayWater1 = "images/niveles/nivelfuentes1.png";
	var arrayTime1 = "50 MINUTOS";
	var arrayDif1 = "ALTA";
	var arrayDif_image1 = "images/niveles/niveldificultad8.png";

	arrayDistance.push(arrayDistance1);
	arraySign.push(arraySign1);
	arrayTerrain.push(arrayTerrain1);
	arrayDay.push(arrayDay1);
	arrayDesP.push(arrayDesP1);
	arrayDesA.push(arrayDesA1);
	arrayEspV.push(arrayEspV1);
	arrayWater.push(arrayWater1);
	arrayTime.push(arrayTime1);
	arrayDif.push(arrayDif1);
	arrayDif_image.push(arrayDif_image1);
	arrayDistance.push(arrayDistance1);
	arraySign.push(arraySign1);
	arrayTerrain.push(arrayTerrain1);
	arrayDay.push(arrayDay1);
	arrayDesP.push(arrayDesP1);
	arrayDesA.push(arrayDesA1);
	arrayEspV.push(arrayEspV1);
	arrayWater.push(arrayWater1);
	arrayTime.push(arrayTime1);
	arrayDif.push(arrayDif1);
	arrayDif_image.push(arrayDif_image1);

	var arrayDistance2 = "6000 METROS";
	var arraySign2 = "NO";
	var arrayTerrain2 = "ASFALTO Y GRAVA";
	var arrayDay2 = "MAÑANAS Y TARDES";
	var arrayDesP2 = "0 METROS";
	var arrayDesA2 = "22 METROS";
	var arrayEspV2 = "images/niveles/nivelbosque1.png";
	var arrayWater2 = "images/niveles/nivelfuentes1.png";
	var arrayTime2 = "40 MINUTOS";
	var arrayDif2 = "MEDIA";
	var arrayDif_image2 = "images/niveles/niveldificultad5.png";
	arrayDistance.push(arrayDistance2);
	arraySign.push(arraySign2);
	arrayTerrain.push(arrayTerrain2);
	arrayDay.push(arrayDay2);
	arrayDesP.push(arrayDesP2);
	arrayDesA.push(arrayDesA2);
	arrayEspV.push(arrayEspV2);
	arrayWater.push(arrayWater2);
	arrayTime.push(arrayTime2);
	arrayDif.push(arrayDif2);
	arrayDif_image.push(arrayDif_image2);

	var arrayDistance3 = "6000 METROS";
	var arraySign3 = " Circuito deportivo de la Avenida Diagonal";
	var arrayTerrain3 = "ASFALTO Y GRAVA";
	var arrayDay3 = "MAÑANAS Y TARDES";
	var arrayDesP3 = "0 METROS";
	var arrayDesA3 = "89 METROS";
	var arrayEspV3 = "images/niveles/nivelbosque2.png";
	var arrayWater3 = "images/niveles/nivelfuentes1.png";
	var arrayTime3 = "45 MINUTOS";
	var arrayDif3 = "MEDIA-BAJA";
	var arrayDif_image3 = "images/niveles/niveldificultad4.png";
	arrayDistance.push(arrayDistance3);
	arraySign.push(arraySign3);
	arrayTerrain.push(arrayTerrain3);
	arrayDay.push(arrayDay3);
	arrayDesP.push(arrayDesP3);
	arrayDesA.push(arrayDesA3);
	arrayEspV.push(arrayEspV3);
	arrayWater.push(arrayWater3);
	arrayTime.push(arrayTime3);
	arrayDif.push(arrayDif3);
	arrayDif_image.push(arrayDif_image3);

	var arrayDistance4 = "6000 METROS";
	var arraySign4 = "NO";
	var arrayTerrain4 = "ASFALTO Y GRAVA";
	var arrayDay4 = "MAÑANAS Y TARDES";
	var arrayDesP4 = "0 METROS";
	var arrayDesA4 = "89 METROS";
	var arrayEspV4 = "images/niveles/nivelbosque2.png";
	var arrayWater4 = "images/niveles/nivelfuentes2.png";
	var arrayTime4 = "50 MINUTOS";
	var arrayDif4 = "BAJA-MEDIA";
	var arrayDif_image4 = "images/niveles/niveldificultad4.png";
	arrayDistance.push(arrayDistance4);
	arraySign.push(arraySign4);
	arrayTerrain.push(arrayTerrain4);
	arrayDay.push(arrayDay4);
	arrayDesP.push(arrayDesP4);
	arrayDesA.push(arrayDesA4);
	arrayEspV.push(arrayEspV4);
	arrayWater.push(arrayWater4);
	arrayTime.push(arrayTime4);
	arrayDif.push(arrayDif4);
	arrayDif_image.push(arrayDif_image4);

	var arrayDistance5 = "4800 METROS";
	var arraySign5 = "Circuitos deportivos de la Rambla de Prim y Diagonal-Sant Martí";
	var arrayTerrain5 = "ASFALTO";
	var arrayDay5 = "24 HORAS";
	var arrayDesP5 = "0 METROS";
	var arrayDesA5 = "6,3 METROS";
	var arrayEspV5 = "images/niveles/nivelbosque2.png";
	var arrayWater5 = "images/niveles/nivelfuentes1.png";
	var arrayTime5 = "30 MINUTOS";
	var arrayDif5 = "BAJA";
	var arrayDif_image5 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance5);
	arraySign.push(arraySign5);
	arrayTerrain.push(arrayTerrain5);
	arrayDay.push(arrayDay5);
	arrayDesP.push(arrayDesP5);
	arrayDesA.push(arrayDesA5);
	arrayEspV.push(arrayEspV5);
	arrayWater.push(arrayWater5);
	arrayTime.push(arrayTime5);
	arrayDif.push(arrayDif5);
	arrayDif_image.push(arrayDif_image5);

	var arrayDistance6 = "5300 METROS";
	var arraySign6 = "NO";
	var arrayTerrain6 = "ASFALTO, GRAVA Y HIERBA";
	var arrayDay6 = "DIA";
	var arrayDesP6 = "95 METROS";
	var arrayDesA6 = "157 METROS";
	var arrayEspV6 = "images/niveles/nivelbosque3.png";
	var arrayWater6 = "images/niveles/nivelfuentes2.png";
	var arrayTime6 = "45 MINUTOS";
	var arrayDif6 = "MEDIA";
	var arrayDif_image6 = "images/niveles/niveldificultad5.png";
	arrayDistance.push(arrayDistance6);
	arraySign.push(arraySign6);
	arrayTerrain.push(arrayTerrain6);
	arrayDay.push(arrayDay6);
	arrayDesP.push(arrayDesP6);
	arrayDesA.push(arrayDesA6);
	arrayEspV.push(arrayEspV6);
	arrayWater.push(arrayWater6);
	arrayTime.push(arrayTime6);
	arrayDif.push(arrayDif6);
	arrayDif_image.push(arrayDif_image6);

	var arrayDistance7 = "5200 METROS";
	var arraySign7 = "NO";
	var arrayTerrain7 = "ASFALTO Y GRAVA";
	var arrayDay7 = "MAÑANAS Y TARDES";
	var arrayDesP7 = "99,7 METROS";
	var arrayDesA7 = "137 METROS";
	var arrayEspV7 = "images/niveles/nivelbosque3.png";
	var arrayWater7 = "images/niveles/nivelfuentes3.png";
	var arrayTime7 = "50 MINUTOS";
	var arrayDif7 = "ALTA";
	var arrayDif_image7 = "images/niveles/niveldificultad8.png";
	arrayDistance.push(arrayDistance7);
	arraySign.push(arraySign7);
	arrayTerrain.push(arrayTerrain7);
	arrayDay.push(arrayDay7);
	arrayDesP.push(arrayDesP7);
	arrayDesA.push(arrayDesA7);
	arrayEspV.push(arrayEspV7);
	arrayWater.push(arrayWater7);
	arrayTime.push(arrayTime7);
	arrayDif.push(arrayDif7);
	arrayDif_image.push(arrayDif_image7);

	var arrayDistance8 = "5800 METROS";
	var arraySign8 = "NO";
	var arrayTerrain8 = "ASFALTO, GRAVA, PAVIMENTO Y HIERBA";
	var arrayDay8 = "24 HORAS";
	var arrayDesP8 = "68,5 METROS";
	var arrayDesA8 = "96,7 METROS";
	var arrayEspV8 = "images/niveles/nivelbosque2.png";
	var arrayWater8 = "images/niveles/nivelfuentes1.png";
	var arrayTime8 = "50 MINUTOS";
	var arrayDif8 = "ALTA";
	var arrayDif_image8 = "images/niveles/niveldificultad8.png";
	arrayDistance.push(arrayDistance8);
	arraySign.push(arraySign8);
	arrayTerrain.push(arrayTerrain8);
	arrayDay.push(arrayDay8);
	arrayDesP.push(arrayDesP8);
	arrayDesA.push(arrayDesA8);
	arrayEspV.push(arrayEspV8);
	arrayWater.push(arrayWater8);
	arrayTime.push(arrayTime8);
	arrayDif.push(arrayDif8);
	arrayDif_image.push(arrayDif_image8);

	var arrayDistance9 = "7000 METROS";
	var arraySign9 = "NO";
	var arrayTerrain9 = "ASFALTO";
	var arrayDay9 = "MAÑANAS Y TARDES";
	var arrayDesP9 = "0 METROS";
	var arrayDesA9 = "164 METROS";
	var arrayEspV9 = "images/niveles/nivelbosque2.png";
	var arrayWater9 = "images/niveles/nivelfuentes2.png";
	var arrayTime9 = "60 MINUTOS";
	var arrayDif9 = "MEDIA-ALTA";
	var arrayDif_image9 = "images/niveles/niveldificultad7.png";
	arrayDistance.push(arrayDistance9);
	arraySign.push(arraySign9);
	arrayTerrain.push(arrayTerrain9);
	arrayDay.push(arrayDay9);
	arrayDesP.push(arrayDesP9);
	arrayDesA.push(arrayDesA9);
	arrayEspV.push(arrayEspV9);
	arrayWater.push(arrayWater9);
	arrayTime.push(arrayTime9);
	arrayDif.push(arrayDif9);
	arrayDif_image.push(arrayDif_image9);

	var arrayDistance10 = "6300 METROS";
	var arraySign10 = "NO";
	var arrayTerrain10 = "ASFALTO, GRAVA Y HIERBA";
	var arrayDay10 = "MAÑANAS Y TARDES";
	var arrayDesP10 = "141 METROS";
	var arrayDesA10 = "301 METROS";
	var arrayEspV10 = "images/niveles/nivelbosque4.png";
	var arrayWater10 = "images/niveles/nivelfuentes2.png";
	var arrayTime10 = "60 MINUTOS";
	var arrayDif10 = "ALTA";
	var arrayDif_image10 = "images/niveles/niveldificultad8.png";
	arrayDistance.push(arrayDistance10);
	arraySign.push(arraySign10);
	arrayTerrain.push(arrayTerrain10);
	arrayDay.push(arrayDay10);
	arrayDesP.push(arrayDesP10);
	arrayDesA.push(arrayDesA10);
	arrayEspV.push(arrayEspV10);
	arrayWater.push(arrayWater10);
	arrayTime.push(arrayTime10);
	arrayDif.push(arrayDif10);
	arrayDif_image.push(arrayDif_image10);

	var arrayDistance11 = "7000 METROS";
	var arraySign11 = "Circuito deportivo del parque de la Ciutadella";
	var arrayTerrain11 = "ASFALTO, GRAVA Y HIERBA";
	var arrayDay11 = "10 H.- ATARDECER";
	var arrayDesP11 = "2,1 METROS";
	var arrayDesA11 = "0 METROS";
	var arrayEspV11 = "images/niveles/nivelbosque3.png";
	var arrayWater11 = "images/niveles/nivelfuentes2.png";
	var arrayTime11 = "40 MINUTOS";
	var arrayDif11 = "BAJA";
	var arrayDif_image11 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance11);
	arraySign.push(arraySign11);
	arrayTerrain.push(arrayTerrain11);
	arrayDay.push(arrayDay11);
	arrayDesP.push(arrayDesP11);
	arrayDesA.push(arrayDesA11);
	arrayEspV.push(arrayEspV11);
	arrayWater.push(arrayWater11);
	arrayTime.push(arrayTime11);
	arrayDif.push(arrayDif11);
	arrayDif_image.push(arrayDif_image11);

	var arrayDistance12 = "5200 METROS";
	var arraySign12 = "Circuito deportivo del Paseo Marítim";
	var arrayTerrain12 = "ASFALTO, GRAVA Y HIERBA";
	var arrayDay12 = "DIA Y NOCHE";
	var arrayDesP12 = "0 METROS";
	var arrayDesA12 = "8 METROS";
	var arrayEspV12 = "images/niveles/nivelbosque3.png";
	var arrayWater12 = "images/niveles/nivelfuentes4.png";
	var arrayTime12 = "30 MINUTOS";
	var arrayDif12 = "BAJA";
	var arrayDif_image12 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance12);
	arraySign.push(arraySign12);
	arrayTerrain.push(arrayTerrain12);
	arrayDay.push(arrayDay12);
	arrayDesP.push(arrayDesP12);
	arrayDesA.push(arrayDesA12);
	arrayEspV.push(arrayEspV12);
	arrayWater.push(arrayWater12);
	arrayTime.push(arrayTime12);
	arrayDif.push(arrayDif12);
	arrayDif_image.push(arrayDif_image12);

	var arrayDistance13 = "5300 METROS";
	var arraySign13 = "NO";
	var arrayTerrain13 = "ASFALTO Y GRAVA";
	var arrayDay13 = "10 H.- ATARDECER";
	var arrayDesP13 = "-23,4 METROS";
	var arrayDesA13 = "13 METROS";
	var arrayEspV13 = "images/niveles/nivelbosque2.png";
	var arrayWater13 = "images/niveles/nivelfuentes4.png";
	var arrayTime13 = "60 MINUTOS";
	var arrayDif13 = "MEDIA-BAJA";
	var arrayDif_image13 = "images/niveles/niveldificultad3.png";
	arrayDistance.push(arrayDistance13);
	arraySign.push(arraySign13);
	arrayTerrain.push(arrayTerrain13);
	arrayDay.push(arrayDay13);
	arrayDesP.push(arrayDesP13);
	arrayDesA.push(arrayDesA13);
	arrayEspV.push(arrayEspV13);
	arrayWater.push(arrayWater13);
	arrayTime.push(arrayTime13);
	arrayDif.push(arrayDif13);
	arrayDif_image.push(arrayDif_image13);

	var arrayDistance14 = "4100 METROS";
	var arraySign14 = "NO";
	var arrayTerrain14 = "ASFALTO";
	var arrayDay14 = "MAÑANAS (muy temprano)";
	var arrayDesP14 = "0 METROS";
	var arrayDesA14 = "22 METROS";
	var arrayEspV14 = "images/niveles/nivelbosque1.png";
	var arrayWater14 = "images/niveles/nivelfuentes2.png";
	var arrayTime14 = "30 MINUTOS";
	var arrayDif14 = "BAJA";
	var arrayDif_image14 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance14);
	arraySign.push(arraySign14);
	arrayTerrain.push(arrayTerrain14);
	arrayDay.push(arrayDay14);
	arrayDesP.push(arrayDesP14);
	arrayDesA.push(arrayDesA14);
	arrayEspV.push(arrayEspV14);
	arrayWater.push(arrayWater14);
	arrayTime.push(arrayTime14);
	arrayDif.push(arrayDif14);
	arrayDif_image.push(arrayDif_image14);

	var arrayDistance15 = "6000 METROS";
	var arraySign15 = "Circuito deportivo de Can Dragó";
	var arrayTerrain15 = "ASFALTO Y GRAVA";
	var arrayDay15 = "MAÑANAS Y TARDES";
	var arrayDesP15 = "-40 METROS";
	var arrayDesA15 = "4 METROS";
	var arrayEspV15 = "images/niveles/nivelbosque2.png";
	var arrayWater15 = "images/niveles/nivelfuentes2.png";
	var arrayTime15 = "20 MINUTOS";
	var arrayDif15 = "BAJA";
	var arrayDif_image15 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance15);
	arraySign.push(arraySign15);
	arrayTerrain.push(arrayTerrain15);
	arrayDay.push(arrayDay15);
	arrayDesP.push(arrayDesP15);
	arrayDesA.push(arrayDesA15);
	arrayEspV.push(arrayEspV15);
	arrayWater.push(arrayWater15);
	arrayTime.push(arrayTime15);
	arrayDif.push(arrayDif15);
	arrayDif_image.push(arrayDif_image15);

	var arrayDistance16 = "5000 METROS";
	var arraySign16 = "Circuito deportivo de Joan Miró";
	var arrayTerrain16 = "ASFALTO, ARENA Y HIERBA";
	var arrayDay16 = "TODO EL DIA (mientras haya luz natural)";
	var arrayDesP16 = "80 METROS";
	var arrayDesA16 = "100 METROS";
	var arrayEspV16 = "images/niveles/nivelbosque3.png";
	var arrayWater16 = "images/niveles/nivelfuentes2.png";
	var arrayTime16 = "40 MINUTOS";
	var arrayDif16 = "MEDIA-ALTA";
	var arrayDif_image16 = "images/niveles/niveldificultad7.png";
	arrayDistance.push(arrayDistance16);
	arraySign.push(arraySign16);
	arrayTerrain.push(arrayTerrain16);
	arrayDay.push(arrayDay16);
	arrayDesP.push(arrayDesP16);
	arrayDesA.push(arrayDesA16);
	arrayEspV.push(arrayEspV16);
	arrayWater.push(arrayWater16);
	arrayTime.push(arrayTime16);
	arrayDif.push(arrayDif16);
	arrayDif_image.push(arrayDif_image16);


	var perfil = "Perfil";
	var infoProfile = "Info";


	var arrayDistance17 = "8000 METROS";
	var arraySign17 = "Ruta 100% señalizada";
	var arrayTerrain17 = "TIERRA";
	var arrayDay17 = "MAÑANAS Y TARDES";
	var arrayDesP17 = "14 METROS";
	var arrayDesA17 = "43 METROS";
	var arrayEspV17 = "images/niveles/nivelbosque4.png";
	var arrayWater17 = "images/niveles/nivelfuentes3.png";
	var arrayTime17 = "45 MINUTOS";
	var arrayDif17 = "BAJA";
	var arrayDif_image17 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance17);
	arraySign.push(arraySign17);
	arrayTerrain.push(arrayTerrain17);
	arrayDay.push(arrayDay17);
	arrayDesP.push(arrayDesP17);
	arrayDesA.push(arrayDesA17);
	arrayEspV.push(arrayEspV17);
	arrayWater.push(arrayWater17);
	arrayTime.push(arrayTime17);
	arrayDif.push(arrayDif17);
	arrayDif_image.push(arrayDif_image17);

	var arrayDistance18 = "3500 METROS";
	var arraySign18 = "NO";
	var arrayTerrain18 = "ARENA Y ASFALTO";
	var arrayDay18 = "TODO EL DIA (mientras haya luz natural)";
	var arrayDesP18 = "110 METROS";
	var arrayDesA18 = "117 METROS";
	var arrayEspV18 = "images/niveles/nivelbosque3.png";
	var arrayWater18 = "images/niveles/nivelfuentes3.png";
	var arrayTime18 = "30 MINUTOS";
	var arrayDif18 = "ALTA";
	var arrayDif_image18 = "images/niveles/niveldificultad8.png";
	arrayDistance.push(arrayDistance18);
	arraySign.push(arraySign18);
	arrayTerrain.push(arrayTerrain18);
	arrayDay.push(arrayDay18);
	arrayDesP.push(arrayDesP18);
	arrayDesA.push(arrayDesA18);
	arrayEspV.push(arrayEspV18);
	arrayWater.push(arrayWater18);
	arrayTime.push(arrayTime18);
	arrayDif.push(arrayDif18);
	arrayDif_image.push(arrayDif_image18);

	var arrayDistance19 = "7000 METROS";
	var arraySign19 = "NO";
	var arrayTerrain19 = "TIERRA";
	var arrayDay19 = "MAÑANAS";
	var arrayDesP19 = "0 METROS";
	var arrayDesA19 = "181 METROS";
	var arrayEspV19 = "images/niveles/nivelbosque4.png";
	var arrayWater19 = "images/niveles/nivelfuentes2.png";
	var arrayTime19 = "50 MINUTOS";
	var arrayDif19 = "MEDIA-ALTA";
	var arrayDif_image19 = "images/niveles/niveldificultad7.png";
	arrayDistance.push(arrayDistance19);
	arraySign.push(arraySign19);
	arrayTerrain.push(arrayTerrain19);
	arrayDay.push(arrayDay19);
	arrayDesP.push(arrayDesP19);
	arrayDesA.push(arrayDesA19);
	arrayEspV.push(arrayEspV19);
	arrayWater.push(arrayWater19);
	arrayTime.push(arrayTime19);
	arrayDif.push(arrayDif19);
	arrayDif_image.push(arrayDif_image19);

	var arrayDistance20 = "3500 METROS";
	var arraySign20 = "NO";
	var arrayTerrain20 = "ASFALTO";
	var arrayDay20 = "MAÑANAS";
	var arrayDesP20 = "88,7 METROS";
	var arrayDesA20 = "88,7 METROS";
	var arrayEspV20 = "images/niveles/nivelbosque1.png";
	var arrayWater20 = "images/niveles/nivelfuentes1.png";
	var arrayTime20 = "40 MINUTOS";
	var arrayDif20 = "MEDIA";
	var arrayDif_image20 = "images/niveles/niveldificultad.png";
	arrayDistance.push(arrayDistance20);
	arraySign.push(arraySign20);
	arrayTerrain.push(arrayTerrain20);
	arrayDay.push(arrayDay20);
	arrayDesP.push(arrayDesP20);
	arrayDesA.push(arrayDesA20);
	arrayEspV.push(arrayEspV20);
	arrayWater.push(arrayWater20);
	arrayTime.push(arrayTime20);
	arrayDif.push(arrayDif20);
	arrayDif_image.push(arrayDif_image20);


	var arrayDistance21 = "9000 METROS";
	var arraySign21 = "NO";
	var arrayTerrain21 = "HIERBA Y PAVIMENTO";
	var arrayDay21 = "MAÑANAS Y TARDES (mientras haya luz natural)";
	var arrayDesP21 = "20 METROS";
	var arrayDesA21 = "20 METROS";
	var arrayEspV21 = "images/niveles/nivelbosque4.png";
	var arrayWater21 = "images/niveles/nivelfuentes1.png";
	var arrayTime21 = "50 MINUTOS";
	var arrayDif21 = "BAJA";
	var arrayDif_image21 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance21);
	arraySign.push(arraySign21);
	arrayTerrain.push(arrayTerrain21);
	arrayDay.push(arrayDay21);
	arrayDesP.push(arrayDesP21);
	arrayDesA.push(arrayDesA21);
	arrayEspV.push(arrayEspV21);
	arrayWater.push(arrayWater21);
	arrayTime.push(arrayTime21);
	arrayDif.push(arrayDif21);
	arrayDif_image.push(arrayDif_image21);

	var arrayDistance22 = "6500 METROS";
	var arraySign22 = "NO";
	var arrayTerrain22 = "ASFALTO";
	var arrayDay22 = "MAÑANAS Y TARDES";
	var arrayDesP22 = "-2 METROS";
	var arrayDesA22 = "20 METROS";
	var arrayEspV22 = "images/niveles/nivelbosque1.png";
	var arrayWater22 = "images/niveles/nivelfuentes1.png";
	var arrayTime22 = "40 MINUTOS";
	var arrayDif22 = "BAJA";
	var arrayDif_image22 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance22);
	arraySign.push(arraySign22);
	arrayTerrain.push(arrayTerrain22);
	arrayDay.push(arrayDay22);
	arrayDesP.push(arrayDesP22);
	arrayDesA.push(arrayDesA22);
	arrayEspV.push(arrayEspV22);
	arrayWater.push(arrayWater22);
	arrayTime.push(arrayTime22);
	arrayDif.push(arrayDif22);
	arrayDif_image.push(arrayDif_image22);

	var arrayDistance23 = "5200 METROS";
	var arraySign23 = "NO";
	var arrayTerrain23 = "ASFALTO";
	var arrayDay23 = "NOCHE";
	var arrayDesP23 = "16 METROS";
	var arrayDesA23 = "29 METROS";
	var arrayEspV23 = "images/niveles/nivelbosque1.png";
	var arrayWater23 = "images/niveles/nivelfuentes2.png";
	var arrayTime23 = "30 MINUTOS";
	var arrayDif23 = "BAJA";
	var arrayDif_image23 = "images/niveles/niveldificultad2.png";
	arrayDistance.push(arrayDistance23);
	arraySign.push(arraySign23);
	arrayTerrain.push(arrayTerrain23);
	arrayDay.push(arrayDay23);
	arrayDesP.push(arrayDesP23);
	arrayDesA.push(arrayDesA23);
	arrayEspV.push(arrayEspV23);
	arrayWater.push(arrayWater23);
	arrayTime.push(arrayTime23);
	arrayDif.push(arrayDif23);
	arrayDif_image.push(arrayDif_image23);

	var arrayCursa = [];

	var arrayCursa0 = "Carrera del barrio de Sant Antoni";
	var arrayCursa1 = "Media maratón";
	var arrayCursa2 = "Maratón";
	var arrayCursa3 = "Cursa de Bombers";
	var arrayCursa4 = "Carrera de El Corte Inglés";
	var arrayCursa5 = "Carrera de la Mercè";
	var arrayCursa6 = "Carrera de la Amistad";
	var arrayCursa7 = "Carrera de la Mujer";
	var arrayCursa8 = "Jean Bouin";
	var arrayCursa9 = "Cursa dels Nassos";
	arrayCursa.push(arrayCursa0);
	arrayCursa.push(arrayCursa1);
	arrayCursa.push(arrayCursa2);
	arrayCursa.push(arrayCursa3);
	arrayCursa.push(arrayCursa4);
	arrayCursa.push(arrayCursa5);
	arrayCursa.push(arrayCursa6);
	arrayCursa.push(arrayCursa7);
	arrayCursa.push(arrayCursa8);
	arrayCursa.push(arrayCursa9);




	var rutasdistritos = "RUTAS Y DISTRITOS";

	var arrayRoute = [
	"",
	"Pasado, presente y futuro de la montaña olímpica",
	"Sant Andreu a toda máquina",
	"Les Corts, tan verde como azulgrana",
	"Sobrevuela la Ronda",
	"El Fòrum de los atletas",
	"Serpenteando hasta el Velódromo",
	"Correr es modernista",
	"Subiendo a la Font del Gat",
	"Un ascenso de primera",
	"Las tres colinas",
	"Parques y jardines",
	"Días fríos",
	"Interiores de manzana",
	"Días festivos",
	"Principiantes",
	"El Montjuïc deportivo",
	"El clásico por excelencia: la carretera de Les Aigües",
	"Los antiguos términos",
	"Atletismo de montaña",
	"Del litoral a Sarrià",
	"Remontar el río",
	"Una sola calle",
	"Correr de noche"
	];
	var routesbot = [];

	var route1 = "Pasado, presente y futuro de la montaña olímpica";
	var routebot1 = "Plaza de Espanya – Estadio Olímpico – Castillo de Montjuïc";
	var route2 = "Sant Andreu a toda máquina";
	var routebot2 = "Plaza Orfila – La Maquinista – Ronda del Litoral – Plaza Orfila";
	var route3 = "Les Corts, tan verde como azulgrana";
	var routebot3 = "Parque de la Maternitat – Parque de Cervantes – Palacio de Pedralbes";
	var route4 = "Sobrevuela la Ronda";
	var routebot4 = "Velódromo de Horta – Parque del Castell de l’Oreneta – Parque de Cervantes";
	var route5 = "El Fòrum de los atletas";
	var routebot5 = "Rambla de Prim – Fòrum – Plaza de Les Glòries";
	var route6 = "Serpenteando hasta el Velódromo";
	var routebot6 = "Barrio del Congrés – Turó de la Peira – Velódromo de Horta";
	var route7 = "Correr es modernista";
	var routebot7 = "Sagrada Família – Hospital de Sant Pau – Parque del Guinardó";
	var route8 = "Subiendo a la Font del Gat";
	var routebot8 = "Parque de Les Cascades – Moll de la Fusta – Miramar – Font del Gat";
	var route9 = "Un ascenso de primera";
	var routebot9 = "Vía Favència – Torre Baró – Vía Júlia – Parque de la Guineueta";
	var route10 = "Las tres colinas";
	var routebot10 = "Turó del Putget - Parque Güell - Turó del Carmel - Parque del Guinardó";
	

	var rutastematicas = "RUTAS TEMÁTICAS";
	
	var route11 = "Parques y jardines";
	var routebot11 = "Diagonal Mar – Carles I – Ciutadella";
	
	var route12 = "Días fríos";
	var routebot12 = "Hotel Vela - Nova Icària - Fòrum";
	
	var route13 = "Interiores de manzana";
	var routebot13 = "Palau Robert - Calàbria - Plaza de la Universitat";
	
	var route14 = "Días festivos";
	var routebot14 = "Plaza de Catalunya - Plaza de Sant Jaume - Estación de França";
	
	var route15 = "Principiantes";
	var routebot15 = "Can Dragó - Plaza de les Glòries - Arc de Triomf";
	
	var route16 = "El Montjuïc deportivo";
	var routebot16 = "Parque de Joan Miró - Estadio Joan Serrahima - Mirador del Migdia";
	
	var route17 = "El clásico por excelencia: la carretera de Les Aigües";
	var routebot17 = "Pla dels Maduixers – Vallvidrera – Sant Pere Màrtir";
	
	var route18 = "Los antiguos términos";
	var routebot18 = "Sarrià - Parque de Joan Raventós - Vallvidrera";
	
	var rutasrepte = "RUTAS CON RETO";
	var route19 = "Atletismo de montaña";
	var routebot19 = "Vallvidrera - La Budellera - Pantano de Vallvidrera";
	
	var route20 = "Del litoral a Sarrià";
	var routebot20 = "Jardines de les Tres Xemeneies- Entença - Sarrià";
	
	var route21 = "Remontar el río";
	var routebot21 = "Bon Pastor - Besòs - Vallbona";
	
	var route22 = "Una sola calle";
	var routebot22 = "Plaza de Les Glòries - Paseo de Gràcia - Plaza de Cerdà";
	
	var route23 = "Correr de noche";
	var routebot23 = "Travessera de les Corts - Travessera de Gràcia - Plaza de En Joanic";

	routesbot.push(routebot1);
	routesbot.push(routebot1);
	routesbot.push(routebot2);
	routesbot.push(routebot3);
	routesbot.push(routebot4);
	routesbot.push(routebot5);
	routesbot.push(routebot6);
	routesbot.push(routebot7);
	routesbot.push(routebot8);
	routesbot.push(routebot9);
	routesbot.push(routebot10);
	routesbot.push(routebot11);
	routesbot.push(routebot12);
	routesbot.push(routebot13);
	routesbot.push(routebot14);
	routesbot.push(routebot15);
	routesbot.push(routebot16);
	routesbot.push(routebot17);
	routesbot.push(routebot18);
	routesbot.push(routebot19);
	routesbot.push(routebot20);
	routesbot.push(routebot21);
	routesbot.push(routebot22);
	routesbot.push(routebot23);
	
	/*var rutaLliure = "RUTA LIBRE";
	var route[24] = "Barcelona a la carta";
	var rutaLliureText = "Con esta opción es posible realizar cualquier ruta libre";*/