package eu.opendai.spain.kml2h2;

import java.sql.ResultSet;
import java.sql.Types;
import org.h2.tools.SimpleResultSet;

import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.*;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

/*
 * H2 stored procedure para parsing de ficheros KML/KMZ
 */
public class kml2h2sp {
	
	/*------------------------------------------------------------------------------
	 * xpathRoot: Raíz de donde vamos a sacar los datos, p ej "/kml:kml/kml:Document/kml:Folder/kml:Placemark"
	 * schema: Esquema de la tabla y restante xpath para cada campo
	 * 		"campo1%%length1%%xpath1;;campo2%%length2%%xpath2"
	 * 		"NOMBRE%%255%%kml%%name;;COORDS%%255%%kml:Point/kml:coordinates"
	 -----------------------------------------------------------------------------*/
	public static ResultSet kml2table(String urlString, String type,
			String xpathRoot, String schema) throws Exception {
		URL url = new URL(urlString);
		URLConnection connection = url.openConnection();
		String kml = "";

		if (type.equals("KML")) {
			InputStreamReader stream = new InputStreamReader(
					connection.getInputStream());
			BufferedReader reader = new BufferedReader(stream);
			String line;
			while ((line = reader.readLine()) != null) {
				kml += line + "\n";
			}
		}

		else if (type.equals("KMZ")) {
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

		XPathFactory xpFactory = XPathFactory.newInstance();
		XPath xpath = xpFactory.newXPath();
		xpath.setNamespaceContext(new KmlNamespaceContext());

		NodeList places = (NodeList) xpath.evaluate(xpathRoot, new InputSource(
				new StringReader(kml)), XPathConstants.NODESET);

		String[] rowSchema=schema.split(";;");

		SimpleResultSet rs = new SimpleResultSet();
		
		List<String> fieldsSchemaList=new ArrayList<String>();
		
		for(int i=0; i<rowSchema.length; i++){
			String[] fieldSchema=rowSchema[i].split("%%");
			fieldsSchemaList.add(fieldSchema[2]);
			rs.addColumn(fieldSchema[0], Types.VARCHAR, Integer.parseInt(fieldSchema[1]), 0);
		}
		
		for (int i = 0; i < places.getLength(); i++) {
			Node place = places.item(i);
			List<String> rowList=new ArrayList<String>();
			
			for(int j=0; j<fieldsSchemaList.size(); j++){
				String tmp=((Node) xpath.evaluate(fieldsSchemaList.get(j), place,
						XPathConstants.NODE)).getTextContent();
				rowList.add(tmp);
			}
			String[] row=rowList.toArray(new String[rowList.size()]);
			rs.addRow((Object[]) row);
		}
		return rs;
	}
}
