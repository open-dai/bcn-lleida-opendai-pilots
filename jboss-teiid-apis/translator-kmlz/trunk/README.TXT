Modificación del translator-yahoo para adaptarlo a KMLs y KMZs remotos usando XPath.

Deploy:
- Copiar jar resultante a directorio {JBOSS HOME}/modules/org/jboss/teiid/translator/kmlz/main/
- Crear en la misma carpeta el fichero module.xml con el siguiente contenido:

-------------------------------------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
<module xmlns="urn:jboss:module:1.0" name="org.jboss.teiid.translator.kmlz">
    <resources>
        <resource-root path="translator-kmlz-0.0.1.jar" />
        <!-- Insert resources here -->
    </resources>
    <dependencies>
        <module name="javax.xml.ws.api"/>
        <module name="javax.api"/>
        <module name="javax.resource.api"/>
		<module name="org.jboss.teiid.common-core" />
		<module name="org.jboss.teiid.api" />
		<module name="javax.wsdl4j.api"/>
	</dependencies>
</module>
-------------------------------------------------------------------------------

- Añadir linea al standalone-teiid.xml para añadir el translator:

-------------------------------------------------------------------------------
<translator name="kmlz" module="org.jboss.teiid.translator.kmlz"/>
-------------------------------------------------------------------------------

- Reiniciar Jboss después de cada modificación en el translator.
