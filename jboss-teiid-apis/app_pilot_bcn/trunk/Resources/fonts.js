function fonts(){
	var returnObject={};
	var electroFont = 'Electronic Highway Sign';
	if(Ti.Platform.osname=='android') {
		electroFont = 'EHSMB';
	}
	var Helv57C = 'Helvetica57-Condensed';
	if(Ti.Platform.osname=='android') {
		Helv57C = 'Helvetica57Condensed';
	} 
	var NewsGothic = 'News Gothic';
	if(Ti.Platform.osname=='android') {
		NewsGothic = 'News Gothic';
	} 
	var neue77 = 'Helvetica Neue LT Com';
	if(Ti.Platform.osname=='android') {
		neue77 = 'helveticaNeue77';
	}
	var helvBold = 'Helvetica LT Std';
	if(Ti.Platform.osname=='android') {
		helvBold = 'HelveticaLTStd-BoldCond';
	}
	returnObject.helvBold=helvBold;
	returnObject.neue77=neue77;
	returnObject.electroFont=electroFont;
	returnObject.Helv57C=Helv57C;
	returnObject.NewsGothic=NewsGothic;
	returnObject.fonts= fonts;
	return returnObject;
};

module.exports=fonts;