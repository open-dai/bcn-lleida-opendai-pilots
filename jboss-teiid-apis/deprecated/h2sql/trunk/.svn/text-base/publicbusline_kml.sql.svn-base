DROP ALIAS IF EXISTS kml2table;
CREATE ALIAS kml2table FOR "eu.opendai.spain.kml2h2.kml2h2sp.kml2table";
DROP TABLE IF EXISTS publicbusline;
CREATE TABLE publicbusline AS SELECT * FROM  kml2table('http://cartolleida.paeria.es/kml/linea_bus.kml', 'KML', '/kml:kml/kml:Document/kml:Folder/kml:Placemark', 'DESCRIPTION%%255%%kml:description;;COORDINATES%%10000%%kml:LineString/kml:coordinates');