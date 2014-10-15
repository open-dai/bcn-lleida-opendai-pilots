package eu.opendai.spain.kml2h2;

import java.util.Iterator;
import javax.xml.*;
import javax.xml.namespace.NamespaceContext;

/**
* A class to return the appropriate Namespace context for xPath execution
* against KML files
*/
public class KmlNamespaceContext implements NamespaceContext {
	/**
	 * A method to return the Namespace URI of a given namespace prefix
	 * 
	 * @param prefix
	 *            the prefix to math
	 * 
	 * @return the matched namespace URI
	 */
	@Override
	public String getNamespaceURI(String prefix) {
		if (prefix == null) {
			throw new NullPointerException("Null prefix");
		} else if ("kml".equals(prefix)) {
			return "http://www.opengis.net/kml/2.2";
		} else if ("atom".equals(prefix)) {
			return "http://www.w3.org/2005/Atom";
		} else if ("xml".equals(prefix)) {
			return XMLConstants.XML_NS_URI;
		} else {
			return XMLConstants.XML_NS_URI;
		}
	}

	/**
	 * This method isn't necessary for XPath processing.
	 */
	@Override
	public String getPrefix(String uri) {
		throw new UnsupportedOperationException();
	}

	/**
	 * This method isn't necessary for XPath processing.
	 */
	@SuppressWarnings("rawtypes")
    @Override
	public Iterator getPrefixes(String uri) {
		throw new UnsupportedOperationException();
	}
}
