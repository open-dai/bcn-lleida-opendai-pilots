var getBusLines = function (view, id, activityIndicator){

	activityIndicator.show();
	
	
	var url = urlBusLines+id
	if(id > 14 || id <1){
		id=1
	}
	var points=[]
	var lineColors = ["#ffe202", "#f12838", "#ff5A00","#0185d0", "#55a61d", "#4914a0","#c5c6c8", "#f54d97", "#000", "#6b3227", "#fff", "#c9997e", "#24b14c", "#aa0004"]
		var json;
		var appReq = Ti.Network.createHTTPClient();
		var coord;
		appReq.open('GET', url);
		 
		//on load handler
		appReq.onload = function(){
			 
			 
			json = (eval('(' + this.responseText + ')'))
			points=[]
			var str
			
			for (c = 0; c<json.data.entry.length; c++){
			    //var str = "\n0.6285512249,41.616116683,0 0.6278698179,41.6153639029,0 0.6278128049,41.615240937,0 0.6277741536,41.6151538347,0 0.6277359951,41.6150642401,0 0.6277620016,41.6149157095,0 0.6280573703,41.6147466374,0 0.6284069069,41.6145647697,0 0.6301880792,41.6136780052,0 0.6303441313,41.6135389206,0 0.6305103899,41.6133334551,0 "
				
				str = json.data.entry[c].coordinates
				var coordinates = str.split(',0 ');
				var tmp 
			
				for (var i = 0; i< coordinates.length-1; i++){
				    tmp = coordinates[i].split(',') 
				    points.push({latitude:parseFloat(tmp[1]),longitude:parseFloat(tmp[0])});
				    
				}
				
			}
			drawRoute(points, view, lineColors[id-1],id);
			activityIndicator.hide();
		};
		 
		//error handler
		appReq.onerror = function(e){
			alert('Error obteniendo los datos. Intente de nuevo.');
			activityIndicator.hide();
		};
		
		appReq.send();

}
