package org.teiid.translator.bcnweather;

import org.teiid.language.Call;
import org.teiid.metadata.MetadataFactory;
import org.teiid.metadata.Procedure;
import org.teiid.metadata.RuntimeMetadata;
import org.teiid.metadata.ProcedureParameter.Type;
import org.teiid.translator.ExecutionContext;
import org.teiid.translator.ExecutionFactory;
import org.teiid.translator.ProcedureExecution;
import org.teiid.translator.Translator;
import org.teiid.translator.TranslatorException;
import org.teiid.translator.TypeFacility;

@Translator(name="bcnweather", description="Translator para la web del tiempo de BCN")
public class BcnWeatherExecutionFactory extends ExecutionFactory<Object, Object> {

	public BcnWeatherExecutionFactory() {
		setSourceRequiredForMetadata(false);
	}
	
    @Override
    public void start() throws TranslatorException {
    }

    @Override
    public ProcedureExecution createProcedureExecution(Call command, ExecutionContext executionContext, RuntimeMetadata metadata, Object connectionFactory)
    		throws TranslatorException {
//    	System.out.println("COMANDO: "+command.toString());
    	return new BcnWeatherProcedureExecution(command);
    }
    
    
    public boolean supportsCompareCriteriaEquals() {
        return true;
    }

    public boolean supportsInCriteria() {
        return true;
    }

    @Override
    public boolean isSourceRequired() {
    	return false;
    }
    
	@Override
	public void getMetadata(MetadataFactory metadataFactory, Object connection) throws TranslatorException {
		Procedure spParseBcnWeather = metadataFactory.addProcedure("spParseBcnWeather");
		metadataFactory.addProcedureParameter("url", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseBcnWeather);  
	} 
	
	@Override
	public boolean supportsOnlyLiteralComparison() {
		return true;
	}
    
}
