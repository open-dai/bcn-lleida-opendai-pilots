package eu.opendai.apis.lleida;

import java.sql.CallableStatement;
import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
//import java.sql.Statement;
//import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

//import org.teiid.jdbc.TeiidDriver;
import org.teiid.jdbc.TeiidDataSource;

import eu.opendai.spain.apis.lleida.accessibility.AccessibleService;
import eu.opendai.spain.apis.lleida.accessibility.AccessibleServiceCategory;
import eu.opendai.spain.apis.lleida.accessibility.AccessibleServiceFeature;
import eu.opendai.spain.apis.lleida.accessibility.AccessibleServiceInfo;
import eu.opendai.spain.apis.lleida.accessibility.AccessibleServiceLevel;
import eu.opendai.spain.apis.lleida.datapublication.LineaBus;
import eu.opendai.spain.apis.lleida.datapublication.Parada;
import eu.opendai.spain.apis.lleida.datapublication.Poi;
import eu.opendai.spain.apis.lleida.datapublication.PoiCategory;
import eu.opendai.spain.apis.lleida.datapublication.Carrer;
import eu.opendai.spain.apis.lleida.roadincidents.Incident;
import eu.opendai.spain.apis.lleida.roadincidents.IncidentCategory;
import eu.opendai.spain.apis.lleida.roadincidents.IncidentDistrict;

public class JDBCCallProcedure {

	static {
		try {
			Class.forName("org.teiid.jdbc.TeiidDriver").newInstance();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private static Connection getConnection(String user, String password) throws Exception {
        TeiidDataSource ds = new TeiidDataSource();
        ds.setUser(user);
        ds.setPassword(password);
        ds.setServerName("localhost");
        ds.setPortNumber(31000);
        ds.setDatabaseName("lleida_base_vdb");
        return ds.getConnection();
    }
	
	//Ejecuta una SP de la VDB.
	//Necesitamos saber el tipo del recordset de vuelta
	//	BUS_STOP, BUS_ROUTE, POI_CATEGORY, POI, 
	//	INCIDENT_CATEGORY, INCIDENT_DISTRICT, INCIDENT
	//	ACCESSIBLE_SERVICE, ACCESSIBLE_SERVICE_CATEGORY, ACCESSIBLE_SERVICE_FEATURE, ACCESSIBLE_SERVICE_LEVEL, ACCESSIBLE_SERVICE_INFO
	public static List<Object> execSp(String spCall, String infoType) {
		Connection con = null;
		try {
			con = getConnection("user", "user");
		} catch (Exception e1) {
			System.err.println("Exception: "+e1.getMessage());
		}
		CallableStatement cs = null;
		try {
			cs = con.prepareCall("{call "+spCall+"}");
			
			ResultSet rs=null;
			List<Object> objList=new ArrayList<Object>();
			boolean bres=cs.execute();
			if(bres){
				rs=cs.getResultSet();
				objList=getFromRecordSet(rs, infoType);
			}
			return objList;
		} catch (SQLException e) {
			System.err.println("SQLException: " + e.getMessage());
		} finally {
			if (cs != null) {
				try {
					cs.close();
				} catch (SQLException e) {
					System.err.println("SQLException: " + e.getMessage());
				}
			}
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					System.err.println("SQLException: " + e.getMessage());
				}
			}
		}
		return null;
	}
	
	//Rellenamos la lista según el tipo de recordset que retornan las SPs
	public static List<Object> getFromRecordSet(ResultSet rs, String infoType){
		List<Object> objList=new ArrayList<Object>();
		try{
			if(infoType.equals("BUS_STOP")){
				while(rs.next()){
					Parada par = new Parada();
					par.setId(rs.getInt("out_id"));
					par.setName(rs.getString("out_parada"));
					par.setCoordX(rs.getString("out_x"));
					par.setCoordY(rs.getString("out_y"));
					objList.add((Object) par);
				}
			}
			else if(infoType.equals("BUS_ROUTE")){
				while(rs.next()){
					LineaBus lin = new LineaBus();
					lin.setDescription(rs.getString("out_description"));
					lin.setCoordinates(rs.getString("out_coordinates"));
					objList.add((Object) lin);
				}
			}
			else if(infoType.equals("POI_CATEGORY")){
				while(rs.next()){
					PoiCategory pc = new PoiCategory();
					pc.setId(rs.getInt("out_id"));
					pc.setCategory(rs.getString("out_category"));
					objList.add((Object) pc);
				}
			}
			else if(infoType.equals("POI")){
				while(rs.next()){
					Poi p = new Poi();
					p.setId_category(rs.getInt("out_id_category"));
					p.setId_orig(rs.getInt("out_id_orig"));
					p.setName(rs.getString("out_name"));
					p.setAddress(rs.getString("out_address"));
					p.setPobox(rs.getString("out_pobox"));
					p.setCity(rs.getString("out_city"));
					p.setPhone(rs.getString("out_phone"));
					p.setWeb(rs.getString("out_web"));
					p.setEmail(rs.getString("out_email"));
					p.setBusiness_hours(rs.getString("out_business_hours"));
					p.setCoordinates(rs.getString("out_coordinates"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("STREET")){
				while(rs.next()){
					Carrer c=new Carrer();
					c.setCodi(rs.getString("out_codi"));
					c.setTipus(rs.getString("out_tipus"));
					c.setNomcar(rs.getString("out_nomcar"));
					objList.add((Object) c);
				}
			}
			else if(infoType.equals("INCIDENT_CATEGORY")){
				while(rs.next()){
					IncidentCategory ic=new IncidentCategory();
					ic.setId_category(rs.getString("out_id_category"));
					ic.setName(rs.getString("out_name"));
					objList.add((Object) ic);
				}
			}
			else if(infoType.equals("INCIDENT_DISTRICT")){
				while(rs.next()){
					IncidentDistrict id=new IncidentDistrict();
					id.setId_district(rs.getString("out_id_district"));
					id.setName(rs.getString("out_name"));
					objList.add((Object) id);
				}
			}
			else if(infoType.equals("INCIDENT")){
				while(rs.next()){
					Incident i=new Incident();
					i.setId_incident(rs.getString("out_id"));
					i.setCategory(rs.getString("out_category"));
					i.setStart(rs.getString("out_start_datetime"));
					i.setDistrict(rs.getString("out_district"));
					i.setStreet(rs.getString("out_street"));
					i.setNumber(rs.getString("out_number"));
					objList.add((Object) i);
				}
			}
			else if(infoType.equals("ACCESSIBLE_SERVICE")){
				while(rs.next()){
					AccessibleService as=new AccessibleService();
					as.setId(rs.getLong("out_id_local"));
					as.setId_category(rs.getLong("out_id_category"));
					as.setStreet(rs.getString("out_street"));
					as.setVia(rs.getString("out_via"));
					as.setNumber(rs.getLong("out_number"));
					as.setName(rs.getString("out_name"));
					as.setObservations(rs.getString("out_observations"));
					as.setCategory(rs.getString("out_category"));
					objList.add((Object) as);
				}
			}
			else if(infoType.equals("ACCESSIBLE_SERVICE_CATEGORY")){
				while(rs.next()){
					AccessibleServiceCategory asc=new AccessibleServiceCategory();
					asc.setId_category(rs.getLong("out_id_category"));
					asc.setName(rs.getString("out_name"));
					objList.add((Object) asc);
				}
			}
			else if(infoType.equals("ACCESSIBLE_SERVICE_FEATURE")){
				while(rs.next()){
					AccessibleServiceFeature asf=new AccessibleServiceFeature();
					asf.setId_feature(rs.getLong("out_id_feature"));
					asf.setName(rs.getString("out_name"));
					asf.setId_level(rs.getLong("out_id_level"));
					objList.add((Object) asf);
				}
			}
			else if(infoType.equals("ACCESSIBLE_SERVICE_LEVEL")){
				while(rs.next()){
					AccessibleServiceLevel asl=new AccessibleServiceLevel();
					asl.setId_level(rs.getLong("out_id_level"));
					asl.setName(rs.getString("out_name"));
					objList.add((Object) asl);
				}
			}
			else if(infoType.equals("ACCESSIBLE_SERVICE_INFO")){
				while(rs.next()){
					AccessibleServiceInfo asi=new AccessibleServiceInfo();
					asi.setId_feature(rs.getLong("out_id_feature"));
					asi.setFeatureNameCa(rs.getString("out_feature_name_ca"));
					asi.setFeatureNameEs(rs.getString("out_feature_name_es"));
					asi.setFeatureNameEn(rs.getString("out_feature_name_en"));
					asi.setId_level(rs.getLong("out_id_level"));
					asi.setLevelNameCa(rs.getString("out_level_name_ca"));
					asi.setLevelNameEs(rs.getString("out_level_name_es"));
					asi.setLevelNameEn(rs.getString("out_level_name_en"));
					asi.setValue(rs.getLong("out_value"));
					objList.add((Object) asi);
				}
			}
			else{
				System.err.println("getFromRecordSet: Tipo de recordset inválido");
			}
		}catch (SQLException e) {
			System.err.println("SQLException: " + e.getMessage());
		}
		
		return objList;
	}
	
	
	
	
	
	
	
}
