package eu.opendai.apis.lleida;

import java.util.ArrayList;
import java.util.List;

//import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
//import javax.ws.rs.core.Response;
 
@Path("/json")
public class MessageRestService {
 
	/*--------------------------------------------------------------------------*/
	//DATA PUBLICATION
	//Tipos de recordset: 	BUS_STOP, BUS_ROUTE, POI_CATEGORY, POI, 
	//						INCIDENT_CATEGORY, INCIDENT_DISTRICT, INCIDENT
	//						ACCESSIBLE_SERVICE, ACCESSIBLE_SERVICE_CATEGORY, ACCESSIBLE_SERVICE_FEATURE, ACCESSIBLE_SERVICE_LEVEL

	//Bus stops
	@GET
	@Path("/datapublication/busstops/{stopId}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStopByIdInJSON(@PathParam("stopId") int id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetStopById("+id+")", "BUS_STOP");	//spGetStopById es la SP en la VDB

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
	
	@GET
	@Path("/datapublication/busstops/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStopsInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetStops()", "BUS_STOP");	//spGetStops es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	//Bus lines
	@GET
	@Path("/datapublication/buslines/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getBusLinesInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBusLines()", "BUS_ROUTE");		//spGetBusLines es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/datapublication/buslines/{lineId}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getBusLinesByIdInJSON(@PathParam("lineId") String id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.execSp("spGetBusLineById('"+id+"')", "BUS_ROUTE");	//spGetBusLineById es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	
	
	//POIs
	@GET
	@Path("/datapublication/pois/category/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPoiCategoriesInJSON() {
 
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetPoiCategories()", "POI_CATEGORY");	//spGetPoiCategories es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/datapublication/pois/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPoisInJSON() {
 
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetPois()", "POI");	//spGetPois es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/datapublication/pois/category/{id_category}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPoisByCategoryInJSON(@PathParam("id_category") int id) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetPoisByCategory("+id+")", "POI");	//spGetPoisByCategory es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/datapublication/pois/category/{id_category}/{id_orig}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getPoisByCategoryInJSON(@PathParam("id_category") int id_category, @PathParam("id_orig") int id_orig) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetPoiByIds("+id_category+", "+id_orig+")", "POI");	//spGetPoiByIds es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	//Road incidents
	@GET
	@Path("/accessibility/roadincidents/category/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentCategoriesInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentCategories()", "INCIDENT_CATEGORY");	//spGetIncidentCategories es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/district/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentDistrictsInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentDistricts()", "INCIDENT_DISTRICT");	//spGetIncidentDistricts es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentsInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidents()", "INCIDENT");	//spGetIncidents es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/all/{day_span}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentsByDaySpanInJSON(@PathParam("day_span") int days) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidents("+days+")", "INCIDENT");	//spGetIncidents es la SP en la VDB (days es nullable)
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/{id_incident}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentByIdInJSON(@PathParam("id_incident") String id) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentById('"+id+"')", "INCIDENT");	//spGetIncidentById es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/category/{id_category}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentsByCategoryInJSON(@PathParam("id_category") String id_category) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentsByCategory('"+id_category+"')", "INCIDENT");	//spGetIncidentsByCategory es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/category/{id_category}/{day_span}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentsByCategoryAndDaySpanInJSON(@PathParam("id_category") String id_category, @PathParam("day_span") int days) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentsByCategory('"+id_category+"', "+days+")", "INCIDENT");	//spGetIncidentsByCategory es la SP en la VDB (days es nullable)
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/roadincidents/district/{id_district}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentsByDistrictInJSON(@PathParam("id_district") String id_district) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentsByDistrict('"+id_district+"')", "INCIDENT");	//spGetIncidentsByDistrict es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	
	
	@GET
	@Path("/accessibility/roadincidents/district/{id_district}/{day_span}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getIncidentsByDistrictAndDaySpanInJSON(@PathParam("id_district") String id_district, @PathParam("day_span") int days) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetIncidentsByDistrict('"+id_district+"', "+days+")", "INCIDENT");	//spGetIncidentsByDistrict es la SP en la VDB (days es nullable)
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	
	
	//Accessible services
	@GET
	@Path("/accessibility/accservs/all")	//'services' a secas no le gusta al API Manager por alguna oscura razón
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServices()", "ACCESSIBLE_SERVICE");	//spGetAccessibleServices es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/{id_service}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServiceByIdInJSON(@PathParam("id_service") long id_service) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServiceById("+id_service+")", "ACCESSIBLE_SERVICE");	//spGetAccessibleServiceById es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/category/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesCategoriesInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServicesCategories()", "ACCESSIBLE_SERVICE_CATEGORY");	//spGetAccessibleServicesCategories es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/category/{id_category}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesByCategoryInJSON(@PathParam("id_category") long id_category) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServicesByCategory("+id_category+")", "ACCESSIBLE_SERVICE");	//spGetAccessibleServicesByCategory es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/feature/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesFeaturesInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServicesFeatures()", "ACCESSIBLE_SERVICE_FEATURE");	//spGetAccessibleServicesFeatures es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/feature/{id_feature}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesByFeatureInJSON(@PathParam("id_feature") long id_feature) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServicesByFeature("+id_feature+")", "ACCESSIBLE_SERVICE");	//spGetAccessibleServicesByFeature es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/level/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesLevelsInJSON() {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServicesLevels()", "ACCESSIBLE_SERVICE_LEVEL");	//spGetAccessibleServicesLevels es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/level/{id_level}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesByLevelInJSON(@PathParam("id_level") long id_level) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetAccessibleServicesByLevel("+id_level+")", "ACCESSIBLE_SERVICE");	//spGetAccessibleServicesByLevel es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/accessibility/accservs/info/{id_service}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getAccessibleServicesInfoById(@PathParam("id_service") long id_service) {
		List<Object> entry=new ArrayList<Object>();

		entry=JDBCCallProcedure.execSp("spGetServiceInfo("+id_service+")", "ACCESSIBLE_SERVICE_INFO");	//spGetServiceInfo es la SP en la VDB
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

}
