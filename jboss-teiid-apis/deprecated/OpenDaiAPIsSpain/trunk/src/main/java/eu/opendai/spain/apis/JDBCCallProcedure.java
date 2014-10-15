package eu.opendai.spain.apis;

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
	

	/*public static Parada getStopById(int idParada) {
		Connection con = null;
		try {
			con = getConnection("user", "user");
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		CallableStatement cs = null;
		try {
			cs = con.prepareCall("{call spGetStopById("+idParada+")}");
			
			ResultSet rs=null;
			Parada pRet = new Parada();
			boolean bres=cs.execute();
			if(bres){
				rs=cs.getResultSet();
				while(rs.next())
				{
					pRet.setName(rs.getString("out_parada"));
					pRet.setCoordX(rs.getString("out_x"));
					pRet.setCoordY(rs.getString("out_y"));
				}
			}
			return pRet;
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
	}*/

	public static List<Object> getStops(String spCall) {
		Connection con = null;
		try {
			con = getConnection("user", "user");
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		CallableStatement cs = null;
		try {
			cs = con.prepareCall("{call "+spCall+"}");
			
			ResultSet rs=null;
			//Paradas pList=new Paradas();
			List<Object> pList=new ArrayList<Object>();
			boolean bres=cs.execute();
			if(bres){
				rs=cs.getResultSet();
				while(rs.next())
				{
					Parada par = new Parada();
					par.setName(rs.getString("out_parada"));
					par.setCoordX(rs.getString("out_x"));
					par.setCoordY(rs.getString("out_y"));
					//pList.addParada(par);
					pList.add((Object) par);
				}
			}
			return pList;
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
	
	public static List<Object> getBusLines(String spCall) {
		Connection con = null;
		try {
			con = getConnection("user", "user");
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		CallableStatement cs = null;
		try {
			cs = con.prepareCall("{call "+spCall+"}");
			
			ResultSet rs=null;
			List<Object> stopList=new ArrayList<Object>();
			boolean bres=cs.execute();
			if(bres){
				rs=cs.getResultSet();
				while(rs.next())
				{
					LineaBus lin = new LineaBus();
					lin.setDescription(rs.getString("out_description"));
					lin.setCoordinates(rs.getString("out_coordinates"));
					stopList.add((Object) lin);
				}
			}
			return stopList;
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
}
