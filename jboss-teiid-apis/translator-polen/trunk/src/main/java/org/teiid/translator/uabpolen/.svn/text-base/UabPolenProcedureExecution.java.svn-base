package org.teiid.translator.uabpolen;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.teiid.language.Call;
import org.teiid.translator.DataNotAvailableException;
import org.teiid.translator.ProcedureExecution;
import org.teiid.translator.TranslatorException;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;


public class UabPolenProcedureExecution implements ProcedureExecution {

	//private Call command;
									//Lladada de ejemplo desde la BD:
									//	call spParsePolenUab('http://lap.uab.cat/aerobiologia/es/forecast/barcelona');
	private String urlStr;
	Iterator<List<?>> results;
	
    public UabPolenProcedureExecution(Call command) {
    	this.urlStr = (String)command.getArguments().get(0).getArgumentValue().getValue();
    }
	
	@Override
	public void execute() throws TranslatorException {
        List<List<?>> returnRows = new ArrayList<List<?>>();
        
		try {
			URL url = new URL(this.urlStr);

			Document doc;
			doc = Jsoup.parse(url, 3000);

			Element table = doc.select("table[class=nivells2]").first();

			Iterator<Element> rows = table.select("tr").iterator();

			while(rows.hasNext()){	
				List<String> rowCells=new ArrayList<String>();
				
				Element row=rows.next();
				Iterator<Element> cells=row.select("td").iterator();

				//1st elem -> tipo polen
				if(cells.hasNext()){
					Element cell=cells.next();
					rowCells.add(cell.text());
				} else{
					continue;
				}
				
				//2nd elem -> valor
				if(cells.hasNext()){
					Element cell=cells.next();
					rowCells.add(cell.text());
				} else{
					continue;
				}
				
				//3rd elem -> =, A, D, !			
				if(cells.hasNext()){
					Element cell=cells.next();
					rowCells.add(cell.text());
				} else{
					continue;
				}
				
				returnRows.add(rowCells);
			}
        } catch(MalformedURLException mue){
            throw new TranslatorException(mue, mue.getMessage());
        } catch(IOException e) {
            throw new TranslatorException(e, e.getMessage());
		} 
        
		//return rs;
		this.results=returnRows.iterator();
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
