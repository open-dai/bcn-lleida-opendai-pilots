package eu.opendai.spain.apis;

import java.util.List;

public class Tester {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		/*Parada p = JDBCCallProcedure.getParadaById(1);
		System.out.println(p.getName()+", "+p.getCoordX()+", "+p.getCoordY());*/
		
		String id="L1";
		String callstr="spGetBusLineById('"+id+"')";
		List<Object> pList=JDBCCallProcedure.getBusLines(callstr);
		for(int i=0; i<pList.size(); i++){
			LineaBus p=(LineaBus) pList.get(i);
			System.out.println(p.getDescription()+", "+p.getCoordinates());
		}
	}

}
