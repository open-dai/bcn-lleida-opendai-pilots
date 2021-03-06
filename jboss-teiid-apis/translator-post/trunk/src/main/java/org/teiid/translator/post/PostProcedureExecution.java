package org.teiid.translator.post;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.teiid.language.Call;
import org.teiid.translator.DataNotAvailableException;
import org.teiid.translator.ProcedureExecution;
import org.teiid.translator.TranslatorException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;


public class PostProcedureExecution implements ProcedureExecution {

	private Call command;
	public static final String NOISE_BY_STREET="spParseNoiseByStreet";
	public static final String NOISE_BY_STRETCH="spParseNoiseByStretch";
	public static final String CONTAMINACIO="spParseContaminacio";
	Iterator<List<?>> results;
	
    public PostProcedureExecution(Call command) {
    	this.command=command;
    }
	
	@Override
	public void execute() throws TranslatorException {
        List<List<?>> returnRows = new ArrayList<List<?>>();
        
        String procedure=(String) command.getProcedureName();
        
        if(procedure.equals(NOISE_BY_STREET) || procedure.equals(NOISE_BY_STRETCH)){
        	String urlStr = (String)command.getArguments().get(0).getArgumentValue().getValue();
        	String param1 = (String)command.getArguments().get(1).getArgumentValue().getValue();
        	String param2 = (String)command.getArguments().get(2).getArgumentValue().getValue();

        	Map<String, String> data = new HashMap<String, String>();
    		data.put("ca", param1);
    		if(procedure.equals(NOISE_BY_STREET)){
        		data.put("nu", param2);
        		data.put("ca2", "");
    		}
    		else if(procedure.equals(NOISE_BY_STRETCH)){
        		data.put("nu", "");
        		data.put("ca2", param2);
    		}
    		data.put("CercaCruilla.x", "0");
    		data.put("CercaCruilla.y", "0");
        	
        	String postRes="";
			try {
				postRes = PostSubmitter.doSubmit(urlStr, data, "UTF-8");
			} catch (Exception e) {
				e.printStackTrace();
			}
        	
        	//System.out.println(postRes);
        	
        	Document doc;
			doc=Jsoup.parseBodyFragment(postRes);
			Iterator<Element> rows = doc.select("dd").iterator();
			//Sólo debería haber 3: mañana, tarde y noche
			int count=0;
			List<String> rowCells=new ArrayList<String>();
			while(rows.hasNext()){
				/*if(count>3){
					System.out.println("ERROR: More than 3 noise levels. Noise levels should only be for morning, evening and night.");
					break;
				}*/
				Element row=rows.next();
				
				//cambio en la web, ahora hay más tags <dd>
				//System.out.println(row.text());
				if(row.id().equals("ld") || row.id().equals("le") || row.id().equals("ln")){
					rowCells.add(row.text());
					//System.out.println(row.text());
					count++;
				}
				//count++;
			}
			if(count==3){
				returnRows.add(rowCells);
			}
			else{
				System.out.println("WARN: translator-post spParseNoiseByStreet: No street found.");
				for(int i=0; i<3; i++) rowCells.add("");
			}
			this.results=returnRows.iterator();
        } else if(procedure.equals(CONTAMINACIO)){
        	int maxRows=7;
        	String urlStr = (String)command.getArguments().get(0).getArgumentValue().getValue();
        	String dades = (String)command.getArguments().get(1).getArgumentValue().getValue();
        	String periode = (String)command.getArguments().get(2).getArgumentValue().getValue();
        	String estacio = (String)command.getArguments().get(3).getArgumentValue().getValue();
        	String contaminant = (String)command.getArguments().get(4).getArgumentValue().getValue();
        	String control = (String)command.getArguments().get(5).getArgumentValue().getValue();

        	//POST
        	Map<String, String> data = new HashMap<String, String>();
    		data.put("dades", dades);
    		data.put("periode", periode);
    		data.put("estacio", estacio);
    		data.put("contaminant", contaminant);
    		data.put("control", control);
        	
        	String postRes="";
			try {
				postRes = PostSubmitter.doSubmit(urlStr, data, "ISO-8859-1");
			} catch (Exception e) {
				e.printStackTrace();
			}
        	//System.out.println(postRes);

			//Parsing del html resultante
        	Document doc;
			//doc=Jsoup.parseBodyFragment(postRes);
        	doc=Jsoup.parse(postRes);
			Iterator<Element> tables = doc.select("table").iterator();
			int count=0;
			//nos interesan las 5ª y 6ª tabla
			Element table=null;
			boolean found=false;
			String readingDate="";
			while(tables.hasNext()){
				if(count==5){
					readingDate = table.select("b").text();
					//System.out.println("DATE: "+readingDate);
				}
				if(count==6){
					found=true;
					break;
				}
				table=tables.next();
				count++;
			}
			if(!found){
				System.out.println("ERROR: translator-post (CONTAMINACIO): Table not found.");
				return;
			}
			
			//Extraemos de la tabla
			Iterator<Element> rows = table.select("tr").iterator();
			
			//la fila de los títulos nos dirá qué columnas hay
			Element titlesRow=rows.next();  
			Iterator<Element> titles=titlesRow.select("td").iterator();
			
			//Necesitamos guardar el orden de las columnas porque no siempre es el mismo
			//mientras que para la base de datos necesitamos siempre devolverlos en orden
			
			//Orden en la BD:
			Map<String, Integer> titlesMapExpected=new HashMap<String, Integer>();
			titlesMapExpected.put("HORA", 0);
			titlesMapExpected.put("SO2", 1);
			titlesMapExpected.put("NO", 2);
			titlesMapExpected.put("NO2", 3);
			titlesMapExpected.put("O3", 4);
			titlesMapExpected.put("CO", 5);
			titlesMapExpected.put("PM10", 6);

			//Orden real
			String[] titlesArrayReal=new String[maxRows];

			int numcols=0;
			while(titles.hasNext()){
				Element title=titles.next();
				if(title.text().startsWith("SO2")){
					titlesArrayReal[numcols]="SO2";
				} else if(title.text().startsWith("NO2")){
					titlesArrayReal[numcols]="NO2";
				} else if(title.text().matches("NO[^2]*")){
					titlesArrayReal[numcols]="NO";
				} else if(title.text().startsWith("O3")){
					titlesArrayReal[numcols]="O3";
				} else if(title.text().startsWith("CO")){
					titlesArrayReal[numcols]="CO";
				} else if(title.text().startsWith("PM10")){
					titlesArrayReal[numcols]="PM10";
				} else{
					titlesArrayReal[numcols]="HORA";
				}
				numcols++;
			}

			/*for(int i=0; i<numcols; i++){
				System.out.println(i+": "+titlesArrayReal[i]);
			}*/
			
			//Para cada fila
			while(rows.hasNext()){
				Map<String, String> cellMap=new HashMap<String, String>();
				
				Element row=rows.next();
				Iterator<Element> cells=row.select("td").iterator();
				
				//Para cada columna (tiene que haber numcols, a la primera que no cumpla paramos)
				count=0;
				while(cells.hasNext()){
					Element cell=cells.next();
					//System.out.print(cell.text()+"\t\t");
					//Guardamos el valor en la columna que toca
					cellMap.put(titlesArrayReal[count], cell.text());
					count++;
				}
				/*if(count<numcols){
					break;
				}*/
				
				
				if(count==numcols){
					/*System.out.println("");
					PostProcedureExecution.traverseMap(cellMap);*/

					List<String> rowCells=new ArrayList<String>();
					//Orden de las columnas en la base de datos
					rowCells.add(readingDate);
					rowCells.add(cellMap.get("HORA"));
					rowCells.add(cellMap.get("SO2"));
					rowCells.add(cellMap.get("NO"));
					rowCells.add(cellMap.get("NO2"));
					rowCells.add(cellMap.get("O3"));
					rowCells.add(cellMap.get("CO"));
					rowCells.add(cellMap.get("PM10"));
					returnRows.add(rowCells);
					
				}
				
			}
			
			this.results=returnRows.iterator();
        }
 
	}

	//for debug
	private static void traverseMap(Map<String, String> data) {
        Set<Map.Entry<String, String>> entries = data.entrySet();
        System.out.println("traverseMap:");
        for(Map.Entry<String, String> entry : entries) {
            String key = entry.getKey();
            String value = entry.getValue();
            System.out.printf("%s = %s%n", key, value);
        }
    }

	@Override
	public List<?> next() throws TranslatorException, DataNotAvailableException {
        if (results.hasNext()) {
            return results.next();
        }
        return null;
	}

	@Override
	public void cancel() throws TranslatorException {
		// TODO Auto-generated method stub

	}

	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

	@Override
	public List<?> getOutputParameterValues() throws TranslatorException {
		// TODO Auto-generated method stub
		return null;
	}

}
