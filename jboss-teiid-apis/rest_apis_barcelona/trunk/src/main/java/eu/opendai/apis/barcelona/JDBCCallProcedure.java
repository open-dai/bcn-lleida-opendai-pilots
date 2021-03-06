package eu.opendai.apis.barcelona;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.teiid.jdbc.TeiidDataSource;

import eu.opendai.apis.barcelona.environment.Noise;
import eu.opendai.apis.barcelona.environment.Polen;
import eu.opendai.apis.barcelona.environment.PollutionMeasurement;
import eu.opendai.apis.barcelona.environment.PollutionZone;
import eu.opendai.apis.barcelona.environment.WeatherForecast;
import eu.opendai.apis.barcelona.mobility.TrafficCurrent;
import eu.opendai.apis.barcelona.mobility.TrafficIncident;
import eu.opendai.apis.barcelona.mobility.TrafficUsual;
import eu.opendai.apis.barcelona.streets.PostalAddress;
import eu.opendai.apis.barcelona.streets.Street;
import eu.opendai.apis.barcelona.streets.TramVia;
import eu.opendai.apis.barcelona.equipagenda.EquipAgenda;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaCodes;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaDistrict;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaCategoria;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaDetail;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaDetailPhone;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaDetailRelation;
import eu.opendai.apis.barcelona.equipagenda.EquipAgendaDetailCategory;


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
        ds.setDatabaseName("barcelona_base_vdb");
        return ds.getConnection();
    }
	
	//Ejecuta una SP de la VDB.
	//Necesitamos saber el tipo del recordset de vuelta
	//	POLEN, NOISE, POLLUTION_MEASUREMENT, POLLUTION_ZONE
	//	STREET, STRETCH, POADDRESS, TRAFFIC_USUAL, TRAFFIC_CURRENT, TRAFFIC_INCIDENT
	//	EQUIP_AGENDA, EQUIP_DISTRICTE, EQUIP_CODE, EQUIP_DETAIL, EQUIP_DETAIL_PHONE, EQUIP_DETAIL_RELATION, EQUIP_DETAIL_CATEGORY
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
			if(infoType.equals("POLEN")){
				while(rs.next()){
					Polen p = new Polen();
					p.setTipo_polen(rs.getString("out_tipo_polen"));
					p.setConcentracion(rs.getString("out_concentracion"));
					p.setVariacion(rs.getString("out_variacion"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("NOISE")){
				while(rs.next()){
					Noise p = new Noise();
					p.setMorning(rs.getString("out_morning"));
					p.setEvening(rs.getString("out_evening"));
					p.setNight(rs.getString("out_night"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("POLLUTION_ZONE")){
				while(rs.next()){
					PollutionZone p = new PollutionZone();
					p.setId_zone(rs.getInt("out_id"));
					p.setZone(rs.getString("out_zona"));
					p.setStation(rs.getString("out_estacio"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("POLLUTION_MEASUREMENT")){
				while(rs.next()){
					PollutionMeasurement p = new PollutionMeasurement();
					p.setDate(rs.getString("out_data"));
					p.setHour(rs.getString("out_hora"));
					p.setSo2(rs.getString("out_so2"));
					p.setNo(rs.getString("out_no"));
					p.setNo2(rs.getString("out_no2"));
					p.setO3(rs.getString("out_o3"));
					p.setCo(rs.getString("out_co"));
					p.setPm10(rs.getString("out_pm10"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("STREET")){
				while(rs.next()){
					Street p = new Street();
					p.setId_street(rs.getString("out_codi"));
					p.setType(rs.getString("out_tipus"));
					p.setName18(rs.getString("out_nom18"));
					p.setOfficial_name(rs.getString("out_nom_oficial"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("STRETCH")){
				while(rs.next()){
					TramVia p = new TramVia();
					p.setId_stretch(rs.getString("out_tram"));
					p.setDescription(rs.getString("out_descripcio"));
					p.setCoordinates(rs.getString("out_coordenades"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("POADDRESS")){
				while(rs.next()){
					PostalAddress p = new PostalAddress();
					p.setId_street(rs.getString("out_codi_carrer"));
					p.setNum_post(rs.getString("out_numpost"));
					p.setLle_post(rs.getString("out_llepost"));
					p.setNum_type(rs.getString("out_tipusnom"));
					p.setDte(rs.getString("out_dte"));
					p.setPost_dist(rs.getString("out_dist_post"));
					p.setSecc_cens(rs.getString("out_secc_cens"));
					p.setSecc_est(rs.getString("out_secc_est"));
					p.setDistrict(rs.getString("out_barri"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("TRAFFIC_USUAL")){
				while(rs.next()){
					TrafficUsual p = new TrafficUsual();
					p.setId(rs.getString("out_id"));
					p.setAvailable(rs.getString("out_available"));
					p.setTstamp(rs.getString("out_tstamp"));
					p.setCur_time(rs.getString("out_cur_time"));
					p.setExp_time(rs.getString("out_exp_time"));
					p.setFut_time(rs.getString("out_fut_time"));
					p.setRef_factor(rs.getString("out_ref_factor"));
					p.setTendency(rs.getString("out_tendency"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("TRAFFIC_CURRENT")){
				while(rs.next()){
					TrafficCurrent p = new TrafficCurrent();
					p.setId(rs.getString("out_id"));
					p.setTstamp(rs.getString("out_tstamp"));
					p.setStatus(rs.getString("out_status"));
					p.setForecast(rs.getString("out_forecast"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("TRAFFIC_INCIDENT")){
				while(rs.next()){
					TrafficIncident p = new TrafficIncident();
					p.setMsg(rs.getString("out_msg"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("WEATHER_FORECAST")){
				while(rs.next()){
					WeatherForecast p = new WeatherForecast();
					p.setTitle(rs.getString("out_title"));
					p.setDescription(rs.getString("out_description"));
					p.setLink(rs.getString("out_link"));
					p.setPub_date(rs.getString("out_pub_date"));
					objList.add((Object) p);
				}
			}
			else if(infoType.equals("EQUIP_AGENDA")){
				while(rs.next()){
					EquipAgenda ea = new EquipAgenda();
					ea.setAddress(rs.getString("out_address"));
					ea.setCity(rs.getString("out_city"));
					ea.setCode_url(rs.getString("out_code_url"));
					ea.setDistrict(rs.getString("out_district"));
					ea.setGmapx(rs.getString("out_gmapx"));
					ea.setGmapy(rs.getString("out_gmapy"));
					ea.setId(rs.getString("out_id"));
					ea.setInternetref(rs.getString("out_internetref"));
					ea.setName(rs.getString("out_name"));
					ea.setPhonenumber(rs.getString("out_phonenumber"));
					ea.setType(rs.getString("out_type"));
					ea.setPos(rs.getString("out_pos"));
					ea.setTp(rs.getString("out_tp"));
					objList.add((Object) ea);
				}
			}
			else if(infoType.equals("EQUIP_DISTRICTE")){
				while(rs.next()){
					EquipAgendaDistrict ead = new EquipAgendaDistrict();
					ead.setId(rs.getInt("out_id"));
					ead.setDistrict(rs.getString("out_districte"));
					objList.add((Object) ead);
				}
			}
			else if(infoType.equals("EQUIP_CATEGORIA")){
				while(rs.next()){
					EquipAgendaCategoria eac = new EquipAgendaCategoria();
					eac.setCategory(rs.getString("out_category"));
					eac.setCode(rs.getString("out_code"));
					eac.setCodetype(rs.getInt("out_codetype"));
					objList.add((Object) eac);
				}
			}
			else if(infoType.equals("EQUIP_CODE")){
				while(rs.next()){
					EquipAgendaCodes eac = new EquipAgendaCodes();
					eac.setCode(rs.getString("out_code"));
					eac.setName(rs.getString("out_name"));
					eac.setUrl(rs.getString("out_url"));
					objList.add((Object) eac);
				}
			}
			else if(infoType.equals("EQUIP_DETAIL")){
				while(rs.next()){
					EquipAgendaDetail ead = new EquipAgendaDetail();
					ead.setEntity_id(rs.getString("out_entity_id"));
					ead.setEntity_type(rs.getString("out_entity_type"));
					ead.setAct_name(rs.getString("out_act_name"));
					ead.setTickettype_code(rs.getString("out_tickettype_code"));
					ead.setAct_type(rs.getString("out_act_type"));
					ead.setWarning(rs.getString("out_warning"));
					ead.setComments(rs.getString("out_comments"));
					ead.setInstitution_id(rs.getString("out_institution_id"));
					ead.setInstitutionname(rs.getString("out_institutionname"));
					ead.setStreet(rs.getString("out_street"));
					ead.setStreetnum_i(rs.getString("out_streetnum_i"));
					ead.setDistrict(rs.getString("out_district"));
					ead.setBarri(rs.getString("out_barri"));
					ead.setPostalcode(rs.getString("out_postalcode"));
					ead.setCity(rs.getString("out_city"));
					ead.setCoordaddressx(rs.getString("out_coordaddressx"));
					ead.setCoordaddressy(rs.getString("out_coordaddressy"));
					ead.setDies(rs.getString("out_dies"));
					ead.setHores(rs.getString("out_hores"));
					ead.setPreu(rs.getString("out_preu"));
					ead.setGmapx(rs.getString("out_gmapx"));
					ead.setGmapy(rs.getString("out_gmapy"));
					ead.setName(rs.getString("out_name"));
					ead.setDate(rs.getString("out_date"));					
					objList.add((Object) ead);
				}
			}
			else if(infoType.equals("EQUIP_DETAIL_PHONES")){
				while(rs.next()){
					EquipAgendaDetailPhone ead = new EquipAgendaDetailPhone();
					ead.setPhone_code(rs.getString("out_phone_code"));
					ead.setPhonenumber(rs.getString("out_phonenumber"));
					ead.setLabel(rs.getString("out_label"));
					objList.add((Object) ead);
				}
			}
			else if(infoType.equals("EQUIP_DETAIL_RELATION")){
				while(rs.next()){
					EquipAgendaDetailRelation ead = new EquipAgendaDetailRelation();
					ead.setEntity_id(rs.getString("out_entity_id"));
					ead.setReltype(rs.getString("out_reltype"));
					ead.setDirect(rs.getString("out_direct"));
					ead.setInstitutionname(rs.getString("out_institutionname"));
					objList.add((Object) ead);
				}
			}
			else if(infoType.equals("EQUIP_DETAIL_CATEGORY")){
				while(rs.next()){
					EquipAgendaDetailCategory ead = new EquipAgendaDetailCategory();
					ead.setCodetype(rs.getString("out_codetype"));
					ead.setCode(rs.getString("out_code"));
					ead.setName(rs.getString("out_name"));
					objList.add((Object) ead);
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
