package org.teiid.translator.kmlz;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.teiid.language.Call;
import org.teiid.translator.DataNotAvailableException;
import org.teiid.translator.ProcedureExecution;
import org.teiid.translator.TranslatorException;

//XPath part
//import java.sql.ResultSet;
//import java.sql.Types;
//import org.h2.tools.SimpleResultSet;

import java.io.*;
import java.net.*;
import java.util.zip.*;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;


public class KmlzProcedureExecution implements ProcedureExecution {

	//private Call command;
									//Lladada de ejemplo desde la BD:
									//	call spParseKmlz('http://cartolleida.paeria.es/kml/linea_bus.kml', 'KML', '/kml:kml/kml:Document/kml:Folder/kml:Placemark', 'DESCRIPTION~~255~~kml:description¡¡COORDINATES~~10000~~kml:LineString/kml:coordinates');
	
	private String xpathRoot;		//raíz del documento a parsear, ej: "/kml:kml/kml:Document/kml:Folder/kml:Placemark"
	private String xpathSchema;		//esquema custom: "campo1~~length1~~xpath1¡¡campo2~~length2~~xpath2" -> ej: "DESCRIPTION~~255~~kml:description¡¡COORDINATES~~10000~~kml:LineString/kml:coordinates"
									//de momento limitaremos a sólo dos columnas de retorno: descripcion y coordenadas, mientras no sepamos si se pueden devolver "recordsets dinámicos"
	private String fileType;		//'KML' o 'KMZ'
	private String fileUrl;			//url al kml o kmz remoto, ej: http://cartolleida.paeria.es/kml/linea_bus.kml
	Iterator<List<?>> results;
	
    public KmlzProcedureExecution(Call command) {
        //this.command = command;
        this.fileUrl = (String)command.getArguments().get(0).getArgumentValue().getValue();
        this.fileType = (String)command.getArguments().get(1).getArgumentValue().getValue();
        this.xpathRoot = (String)command.getArguments().get(2).getArgumentValue().getValue();
        this.xpathSchema = (String)command.getArguments().get(3).getArgumentValue().getValue();
//        System.out.println("PARAMS: \n\t"+this.fileUrl+"\n\t"+this.fileType+"\n\t"+this.xpathRoot+"\n\t"+this.xpathSchema);
    }
	
	@Override
	public void execute() throws TranslatorException {
        List<List<?>> rows = new ArrayList<List<?>>();
        
        try{
			URL url = new URL(this.fileUrl);
			URLConnection connection = url.openConnection();
			String kml = "";
	
			if (this.fileType.equals("KML")) {
				InputStreamReader stream = new InputStreamReader(
						connection.getInputStream());
				BufferedReader reader = new BufferedReader(stream);
				String line;
				while ((line = reader.readLine()) != null) {
					kml += line + "\n";
				}
			}
	
			else if (this.fileType.equals("KMZ")) {
				ZipInputStream zip = new ZipInputStream(connection.getInputStream());
				ZipEntry ze;
				while ((ze = zip.getNextEntry()) != null) {
					if (ze.getName().equals("doc.kml")) {
						ByteArrayOutputStream baos = new ByteArrayOutputStream();
						byte[] buffer = new byte[1024];
						int count;
						while ((count = zip.read(buffer)) != -1) {
							baos.write(buffer, 0, count);
						}
						byte[] bytes = baos.toByteArray();
						kml = new String(bytes, "UTF-8");
					}
				}
			}
			//System.out.println(kml);
	
			XPathFactory xpFactory = XPathFactory.newInstance();
			XPath xpath = xpFactory.newXPath();
			xpath.setNamespaceContext(new KmlNamespaceContext());
			
			XPathExpression expr = xpath.compile(this.xpathRoot);

			//Para evitar cast exception no pasar a la expresión el input reader hay que crear un documento
			DocumentBuilderFactory builderFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder documentBuilder = builderFactory.newDocumentBuilder();
			Document someXML = documentBuilder.parse(new InputSource(new StringReader(kml)));
			Object result = expr.evaluate(someXML, XPathConstants.NODESET);
			NodeList places = (NodeList) result;
	
			String[] rowSchema=this.xpathSchema.split("¡¡");
	
			//SimpleResultSet rs = new SimpleResultSet();
			
			List<String> fieldsSchemaList=new ArrayList<String>();
			
			for(int i=0; i<rowSchema.length; i++){
				String[] fieldSchema=rowSchema[i].split("~~");
				fieldsSchemaList.add(fieldSchema[2]);
				//rs.addColumn(fieldSchema[0], Types.VARCHAR, Integer.parseInt(fieldSchema[1]), 0);		//Parte dinámica del código legacy, no sé si se puede trasladar
			}
			
			for (int i = 0; i < places.getLength(); i++) {
				Node place = places.item(i);
				List<String> rowList=new ArrayList<String>();
				
				for(int j=0; j<fieldsSchemaList.size(); j++){
					String tmp=((Node) xpath.evaluate(fieldsSchemaList.get(j), place,
							XPathConstants.NODE)).getTextContent();
					rowList.add(tmp);
				}
				
				//String[] row=rowList.toArray(new String[rowList.size()]);
				//rs.addRow((Object[]) row);
				
				rows.add(rowList);
			}
        } catch(MalformedURLException mue){
            throw new TranslatorException(mue, mue.getMessage());
        } catch(IOException e) {
            throw new TranslatorException(e, e.getMessage());
        } catch(XPathExpressionException xpe){
        	throw new TranslatorException(xpe, xpe.getMessage());
        } catch (ParserConfigurationException pce) {
			throw new TranslatorException(pce, pce.getMessage());
		} catch (SAXException sxe) {
			throw new TranslatorException(sxe, sxe.getMessage());
		} 
        
		//return rs;
		this.results=rows.iterator();
        
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
