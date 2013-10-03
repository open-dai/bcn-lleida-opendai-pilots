package eu.opendai.apis.barcelona;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
 
@Path("/json")
public class MessageRestService {
 
	/*--------------------------------------------------------------------------*/
	//DATA PUBLICATION
	//Tipos de recordset: 	POLEN, NOISE, POLLUTION_ZONE, POLLUTION_MEASUREMENT 
	//						STREET, STRETCH, POADDRESS, TRAFFIC_USUAL, TRAFFIC_CURRENT, TRAFFIC_INCIDENT

	//Polen 
	@GET
	@Path("/polen/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPolenInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetPolenUab()", "POLEN");	//spGetPolenUab es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Noise 
	@GET
	@Path("/noise/{street}/{number}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getNoiseByStreetInJSON(@PathParam("street") String street, @PathParam("number") String number) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaNoiseLevels('"+street+"', '"+number+"')", "NOISE");	//spGetBarcelonaNoiseLevels es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Noise 
	@GET
	@Path("/noise/stretch/{street1}/{street2}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getNoiseByStretchInJSON(@PathParam("street1") String street1, @PathParam("street2") String street2) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaNoiseLevelsByStretch('"+street1+"', '"+street2+"')", "NOISE");	//spGetBarcelonaNoiseLevelsByStretch es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Pollution 
	@GET
	@Path("/pollution/zone/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPollutionZonesInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaParametresContaminacio()", "POLLUTION_ZONE");	//spGetBarcelonaParametresContaminacio es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	@GET
	@Path("/pollution/zone/{id_zone}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPollutionByZoneInJSON(@PathParam("id_zone") int id_zone) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaContaminacio("+id_zone+")", "POLLUTION_MEASUREMENT");	//spGetBarcelonaContaminacio es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Streets 
	@GET
	@Path("/streets/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStreetsInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaStreets()", "STREET");	//spGetBarcelonaStreets es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
	@GET
	@Path("/streets/{id_street}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStreetsByIdInJSON(@PathParam("id_street") String id_street) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaStreets('"+id_street+"')", "STREET");	//spGetBarcelonaStreets es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Trams carrers (stretches) 
	@GET
	@Path("/streets/stretches/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStretchInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaTramsVia()", "STRETCH");	//spGetBarcelonaTramsVia es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
	@GET
	@Path("/streets/stretches/{id_stretch}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStretchByIdInJSON(@PathParam("id_stretch") String id_stretch) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaTramsVia('"+id_stretch+"')", "STRETCH");	//spGetBarcelonaTramsVia es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
	
	//Adreces postals
	@GET
	@Path("/streets/poaddrs/{id_street}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPoAddrsByStreetIdInJSON(@PathParam("id_street") String id_street) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaAdrecesPostals('"+id_street+"')", "POADDRESS");	//spGetBarcelonaAdrecesPostals es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Transit previst
	@GET
	@Path("/streets/traffic/forecast")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getTrafficForecastInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaTransitPrevist()", "TRAFFIC_USUAL");	//spGetBarcelonaTransitPrevist es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Transit actual
	@GET
	@Path("/streets/traffic/current")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getCurrentTrafficInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaTransitActual()", "TRAFFIC_CURRENT");	//spGetBarcelonaTransitActual es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Transit actual
	@GET
	@Path("/streets/traffic/incidents")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getTrafficIncidentsInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaTransitIncidencies()", "TRAFFIC_INCIDENT");	//spGetBarcelonaTransitIncidencies es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
	
	//Previsio temps
	@GET
	@Path("/weather/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getWeatherForecastInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBarcelonaWeatherForecast()", "WEATHER_FORECAST");	//spGetBarcelonaWeatherForecast es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
}
