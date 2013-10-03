var MASlidingView = require('lib/MASlidingView');

var HomeView = function(args){
    var self = new MASlidingView({
        backgroundColor:'red'
    });
    
    self.add(Ti.UI.createLabel({
    	//text:'Home View',
    	color:'#777',
    	height:24,
    	width:100,
    	textAlign:'center',
    }));
    
    self.orientationModes = [Titanium.UI.PORTRAIT];
    
    
    var mapview = Titanium.Map.createView({
	    mapType: Titanium.Map.STANDARD_TYPE,
	    region: {latitude:41.616116683, longitude:0.6285512249, 
	            latitudeDelta:0.01, longitudeDelta:0.01},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	});
       
    self.add(mapview);

    return self;
};

module.exports = HomeView;