package eu.opendai.spain.apis;

import java.util.ArrayList;
import java.util.List;

//import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
//import javax.ws.rs.core.Response;
 
@Path("/json/publicbusline")
public class MessageRestService {
 
	@GET
	@Path("/stops/{stopId}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStopByIdInJSON(@PathParam("stopId") int id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.getStops("spGetStopById("+id+")");

		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);
		
		return response; 
	}
	
	@GET
	@Path("/stops/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getStopsInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.getStops("spGetStops()");
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/lines/all")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getBusLinesInJSON() {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.getBusLines("spGetBusLines()");
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	

	@GET
	@Path("/lines/{lineId}")
	@Produces("application/json; charset=UTF-8")
	public JSONResponse getBusLinesByIdInJSON(@PathParam("lineId") String id) {
 
		List<Object> entry=new ArrayList<Object>();
		entry=JDBCCallProcedure.getBusLines("spGetBusLineById('"+id+"')");
		
		JSONMetaData meta=new JSONMetaData("1.0", "OK", 200, "");
		JSONData data=new JSONData(0, 1, entry.size(), entry);

		JSONResponse response=new JSONResponse(meta, data);

		return response; 
	}	
}
