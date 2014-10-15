package org.teiid.translator.bcnweather;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Date;

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
import org.jsoup.select.Elements;


public class BcnWeatherProcedureExecution implements ProcedureExecution {

	//private Call command;
									//Lladada de ejemplo desde la BD:
									//	call spParseBcnWeather('http://w1.bcn.cat/temps/ca/');
	private String urlStr;
	Iterator<List<?>> results;
	
    public BcnWeatherProcedureExecution(Call command) {
    	this.urlStr = (String)command.getArguments().get(0).getArgumentValue().getValue();
    }
	
	@Override
	public void execute() throws TranslatorException {
        List<List<?>> returnRows = new ArrayList<List<?>>();
        
		try {
			URL url = new URL(this.urlStr);
			String currentDate=new Date().toString();

			Document doc;
			doc = Jsoup.parse(url, 3000);

			Element mainDiv = doc.select("div[class=img-observatoris]").first();

			Elements observatoris = mainDiv.children();

			for(Element observatori: observatoris){
				List<String> rowCells=new ArrayList<String>();

				String title=observatori.select("h3").text();
				String description=observatori.select("p").text();
				
				rowCells.add(title);
				rowCells.add(description);
				rowCells.add("");
				rowCells.add(currentDate);
				
				returnRows.add(rowCells);
			}

			Element prevision = doc.select("div[class=container container-temps-previsio pull-right shadow]").first();

			//icona matí
			String matiImageLink=prevision.select("div[class=previsio-icon]").first().select("img").first().absUrl("src");
			List<String> rowCells=new ArrayList<String>();
			rowCells.add("morning_link");
			rowCells.add("Morning forecast");
			rowCells.add(matiImageLink);
			rowCells.add(currentDate);
			returnRows.add(rowCells);
						
			//icona tarda
			String tardaImageLink=prevision.select("div[class=previsio-icon previsio-last]").first().select("img").first().absUrl("src");
			rowCells=new ArrayList<String>();
			rowCells.add("afternoon_link");
			rowCells.add("Afternoon forecast");
			rowCells.add(tardaImageLink);
			rowCells.add(currentDate);
			returnRows.add(rowCells);
			
			//probabilitat precipitació
			String possibilitatPrecipitacio=prevision.select("div[class=precipitacio-info]").first().select("span").text();
			rowCells=new ArrayList<String>();
			rowCells.add("rain_possibility");
			rowCells.add(possibilitatPrecipitacio);
			rowCells.add("");
			rowCells.add(currentDate);
			returnRows.add(rowCells);
			
			
			//max i min temperatures
			String minMaxTemp=prevision.select("div[class=temperatura-info]").first().select("strong").text();
			rowCells=new ArrayList<String>();
			rowCells.add("min_max_temp");
			rowCells.add(minMaxTemp);
			rowCells.add("");
			rowCells.add(currentDate);
			returnRows.add(rowCells);
			
			
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
