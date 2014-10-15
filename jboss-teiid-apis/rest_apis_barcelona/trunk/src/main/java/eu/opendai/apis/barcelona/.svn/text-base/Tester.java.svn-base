package eu.opendai.apis.barcelona;

import java.util.List;

import eu.opendai.apis.barcelona.environment.Polen;

public class Tester {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		/*Parada p = JDBCCallProcedure.getParadaById(1);
		System.out.println(p.getName()+", "+p.getCoordX()+", "+p.getCoordY());*/
		
		String callstr="spGetPolenUab()";
		List<Object> pList=JDBCCallProcedure.execSp(callstr, "POLEN");
		for(int i=0; i<pList.size(); i++){
			Polen p=(Polen) pList.get(i);
			System.out.println(p.getTipo_polen()+", "+p.getConcentracion());
		}
	}

}
