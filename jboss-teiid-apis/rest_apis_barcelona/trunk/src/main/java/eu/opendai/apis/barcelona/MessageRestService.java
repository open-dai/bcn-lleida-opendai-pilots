package eu.opendai.apis.barcelona;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.Produces;
 
@Path("/json")
public class MessageRestService {
 
	/*--------------------------------------------------------------------------*/
	//DATA PUBLICATION
	//Tipos de recordset: 	POLEN, NOISE, POLLUTION_ZONE, POLLUTION_MEASUREMENT 
	//						STREET, STRETCH, POADDRESS, TRAFFIC_USUAL, TRAFFIC_CURRENT, TRAFFIC_INCIDENT
	//						EQUIP_AGENDA, EQUIP_DISTRICTE, EQUIP_CATEGORIA, EQUIP_CODE, EQUIP_DETAIL, EQUIP_DETAIL_PHONE, EQUIP_DETAIL_RELATION, EQUIP_DETAIL_CATEGORY

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

	/*--------------------------------------------------------------------------*/
	//EQUIPAMENTS I AGENDA
	//Tipos de recordset: 	EQUIP_AGENDA

	//Equipaments query
	@Path("/equipments/query")
	@GET
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipamentsQueryJSON(@DefaultValue("10") @QueryParam("nr") String nr, 
												@DefaultValue("0") @QueryParam("from") String from, 
												@DefaultValue("es") @QueryParam("idma") String idioma,
												@DefaultValue("*:*") @QueryParam("q") String search_term,
												@DefaultValue("") @QueryParam("districtstr") String district_name,
												@DefaultValue("") @QueryParam("sort") String sort,
												@DefaultValue("") @QueryParam("code0") String code0,
												@DefaultValue("") @QueryParam("code1") String code1,
												@DefaultValue("") @QueryParam("code2") String code2) {
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetEquipaments('"+nr+"', '"+from+"', '"+idioma+"', '"+search_term+"', 'EQ', '"+district_name+"', '"+code0+"', '"+code1+"', '"+code2+"', '"+sort+"', '', '', '')", "EQUIP_AGENDA");	//spGetEquipaments es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Equipaments i agenda, districts
	@GET
	@Path("/{a:equipments|agenda}/district/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getDistrictesEquipamentsJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetDistrictesEquipaments()", "EQUIP_DISTRICTE");	//spGetDistrictesEquipaments es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}


	//Equipaments i agenda, categories
	@GET
	@Path("/{a:equipments|agenda}/category/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getCategoriesEquipamentsJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetCategoriesEquipaments()", "EQUIP_CATEGORIA");	//spGetCategoriesEquipaments es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	//Codis dels equipaments i agenda
	@GET
	@Path("/{a:equipments|agenda}/codes")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipmentCodesMainJSON(@PathParam("a") String a) {
 
		String type="EQ";
		if(a=="agenda"){
			type="AG";
		}
		
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetCodes('"+type+"', '', '', '')", "EQUIP_CODE");	//spGetCodes es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	@GET
	@Path("/{a:equipments|agenda}/codes/{parent_codetype}/{parent_code}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipmentCodesByParentJSON(@PathParam("a") String a,
														@PathParam("parent_codetype") int parent_codetype,
														@PathParam("parent_code") String parent_code) {
		String type="EQ";
		if(a=="agenda"){
			type="AG";
		}
 
		List<Object> entry=new ArrayList<Object>();
		if(parent_codetype==0){
			entry=JDBCCallProcedure.execSp("spGetCodes('"+type+"', '"+parent_code+"', '', '')", "EQUIP_CODE");	//spGetCodes es la SP en la VDB
		}else if(parent_codetype==1){
			entry=JDBCCallProcedure.execSp("spGetCodes('"+type+"', '', '"+parent_code+"', '')", "EQUIP_CODE");	//spGetCodes es la SP en la VDB
		}else{
			entry=JDBCCallProcedure.execSp("spGetCodes('"+type+"', '', '', '')", "EQUIP_CODE");	//spGetCodes es la SP en la VDB
		}


		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	
	//Detalls per equipaments i agenda
	@GET
	@Path("/{a:equipments|agenda}/detail/{id}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipmentDetailJSON(@PathParam("id") String id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetDetail('"+id+"')", "EQUIP_DETAIL");	//spGetDetail es la SP en la VDB


		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	@GET
	@Path("/{a:equipments|agenda}/detail/{id}/phones")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipmentDetailPhonesJSON(@PathParam("id") String id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetDetailPhones('"+id+"')", "EQUIP_DETAIL_PHONES");	//spGetDetailPhones es la SP en la VDB


		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	@GET
	@Path("/{a:equipments|agenda}/detail/{id}/relations")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipmentDetailRelationsJSON(@PathParam("id") String id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetDetailRelations('"+id+"')", "EQUIP_DETAIL_RELATION");	//spGetDetailRelations es la SP en la VDB


		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	@GET
	@Path("/{a:equipments|agenda}/detail/{id}/categories")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getEquipmentDetailCategoriesJSON(@PathParam("id") String id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetDetailCategories('"+id+"')", "EQUIP_DETAIL_CATEGORY");	//spGetDetailCategories es la SP en la VDB


		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}

	
	
	//--------------
	//Agenda

	
	//Agenda query
	@Path("/agenda/query")
	@GET
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAgendaQueryJSON(@DefaultValue("10") @QueryParam("nr") String nr, 
											@DefaultValue("0") @QueryParam("from") String from, 
											@DefaultValue("es") @QueryParam("idma") String idioma,
											@DefaultValue("*:*") @QueryParam("q") String search_term,
											@DefaultValue("") @QueryParam("districtstr") String district_name,
											@DefaultValue("") @QueryParam("sort") String sort,
											@DefaultValue("") @QueryParam("d") String d,
											@DefaultValue("") @QueryParam("ticket") String ticket,
											@DefaultValue("") @QueryParam("p") String p,
											@DefaultValue("") @QueryParam("code0") String code0,
											@DefaultValue("") @QueryParam("code1") String code1,
											@DefaultValue("") @QueryParam("code2") String code2) {
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetEquipaments('"+nr+"', '"+from+"', '"+idioma+"', '"+search_term+"', 'AG', '"+district_name+"', '"+code0+"', '"+code1+"', '"+code2+"', '"+sort+"', '"+d+"', '"+ticket+"', '"+p+"')", "EQUIP_AGENDA");	//spGetEquipaments es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
}
