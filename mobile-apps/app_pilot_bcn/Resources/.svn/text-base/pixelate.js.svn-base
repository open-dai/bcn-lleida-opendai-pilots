function pixelate(){
	var pixelateObject = {};

	function vertical(pixels){
		return pixels / 480 * Ti.Platform.displayCaps.platformHeight ;
	}
	pixelateObject.vertical = vertical;

	function horizontal(pixels){
		return pixels / 320 * Ti.Platform.displayCaps.platformWidth ; 
	}
	pixelateObject.horizontal = horizontal;

	pixelateObject.platformHeight = Ti.Platform.displayCaps.platformHeight;

	pixelateObject.platformWidth = Ti.Platform.displayCaps.platformWidth;

	return pixelateObject;
}

exports.pixelate = pixelate;