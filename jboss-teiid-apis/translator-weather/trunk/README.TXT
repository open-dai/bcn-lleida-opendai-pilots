Modificación del translator-yahoo para adaptarlo al scrapping de la web de información de 
temperatura BCN usando Jsoup para el parsing.

Deployment:

* Deploy de Jsoup en Jboss:

	- Copiar jar de Jsoup (descargar de la web) al directorio {JBOSS HOME}/modules/org/jsoup/main/
	- Crear en la misma carpeta el fichero module.xml con el siguiente contenido:

	-------------------------------------------------------------------------------
	<?xml version="1.0" encoding="UTF-8"?>
	<module xmlns="urn:jboss:module:1.0" name="org.jsoup">
    	<resources>
       		<resource-root path="jsoup-1.7.2.jar"/>
    	</resources>
	</module>
	-------------------------------------------------------------------------------
	
*Deploy del translator:
	
	- Copiar jar resultante a directorio {JBOSS HOME}/modules/org/jboss/teiid/translator/bcnweather/main/
	- Crear en la misma carpeta el fichero module.xml con el siguiente contenido:

	-------------------------------------------------------------------------------
	<?xml version="1.0" encoding="UTF-8"?>
	<module xmlns="urn:jboss:module:1.0" name="org.jboss.teiid.translator.bcnweather">
	    <resources>
	        <resource-root path="translator-weather-0.0.1.jar" />
	        <!-- Insert resources here -->
	    </resources>
	
	    <dependencies>
	        <module name="org.jboss.teiid.common-core" />
	        <module name="org.jboss.teiid.api" />
	        <module name="org.jboss.teiid.api" />
			<module name="org.jsoup" />
	    </dependencies>
	</module>
	-------------------------------------------------------------------------------

- Añadir linea al standalone-teiid.xml para añadir el translator:

-------------------------------------------------------------------------------
<translator name="bcnweather" module="org.jboss.teiid.translator.bcnweather"/>
-------------------------------------------------------------------------------

- Reiniciar Jboss después de cada modificación en el translator.
