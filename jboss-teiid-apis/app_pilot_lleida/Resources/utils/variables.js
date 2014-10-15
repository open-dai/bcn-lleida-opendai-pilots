
//INTERNAL OPTIONS
var optionBusStops = 1;
var optionBusLines = 2;

var optionPublicIncidents = 3;

var optionAccesibilityCategories = 4;
var optionAccesibilityFeatures = 5;


//SERVER URLs
//var urlServer = "http://194.116.110.155:8080/apilleida/rest/json/";
var urlServer = "http://lleida.opendai.eu/api/";
//var urlServer2 = "http://194.116.110.155:8001/lleida/";
var urlServer2 = "http://lleida.opendai.eu/api/";
//var geocodingUrl = "http://194.116.110.155:8001/geo/";
var geocodingUrl = "http://lleida.opendai.eu/geo";



//RESOURCE'S URLs
var urlBusStops = urlServer+"datapublication/busstops/all";
var urlBusStopsNear = urlServer2+"bustop/near";
var urlBusLines = urlServer+"buslines/L";
var urlAlerts = urlServer+"alert/all";
var accessibilityAllCategories = urlServer+"accessibility/category/all";
var accessibilitySingleCategory = urlServer2+"accessibility/category/";
var accessibilityAllFeatures = urlServer+"accessibility/feature/all";
var accessibilitySingleFeature = urlServer2+"accessibility/feature/";
var alertsUrl = urlServer2+"alert/";



//OTHER
var searchingRadius = 500; 

var lleida_bounding_box = "0.5599594116210938,41.580525125613846,0.5599594116210938,41.65649719441145,0.7123947143554688,41.65649719441145";


//Strings and button texts
var appName = "Pilot OpenDAI";
var accPointsButtonTxt = "Accessible points";
var pubIncidentsButtonTxt = "Public incidents";
var busInfoButtonTxt = "Bus information";

var caracButtonText = "Features";
var categButtonText = "Categories";

var searchIncidencesText = "Search for the last: ";

var busStopsButtonTxt = "Bus stops";
var busRoutesButtonTxt = "Bus routes";
