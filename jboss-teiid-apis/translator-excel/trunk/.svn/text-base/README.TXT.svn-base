Modificación del translator-yahoo para adaptarlo a ficheros Excel remotos usando Apache POI.

Deploy:
- Copiar jar resultante a directorio {JBOSS HOME}/modules/org/jboss/teiid/translator/excel/main/
- Crear en la misma carpeta el fichero module.xml con el siguiente contenido:

-------------------------------------------------------------------------------
<?xml version="1.0" encoding="UTF-8"?>
<module xmlns="urn:jboss:module:1.0" name="org.jboss.teiid.translator.excel">
    <resources>
        <resource-root path="translator-excel-0.0.1.jar" />
        <!-- Insert resources here -->
    </resources>
    <dependencies>
		<module name="org.jboss.teiid.common-core" />
		<module name="org.jboss.teiid.api" />
		<module name="org.apache.poi" />
	</dependencies>
</module>
-------------------------------------------------------------------------------

- Añadir linea al standalone-teiid.xml para añadir el translator:

-------------------------------------------------------------------------------
<translator name="excel" module="org.jboss.teiid.translator.excel"/>
-------------------------------------------------------------------------------

- Reiniciar Jboss después de cada modificación en el translator.
