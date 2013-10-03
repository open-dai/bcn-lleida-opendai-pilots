package org.teiid.translator.kmlz;

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

@Translator(name="kmlz", description="Translator for remote KML and KMZ files")
public class KmlzExecutionFactory extends ExecutionFactory<Object, Object> {

	public KmlzExecutionFactory() {
		setSourceRequiredForMetadata(false);
	}
	
    @Override
    public void start() throws TranslatorException {
    }

    @Override
    public ProcedureExecution createProcedureExecution(Call command, ExecutionContext executionContext, RuntimeMetadata metadata, Object connectionFactory)
    		throws TranslatorException {
//    	System.out.println("COMANDO: "+command.toString());
    	return new KmlzProcedureExecution(command);
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
		Procedure spParseKmlz = metadataFactory.addProcedure("spParseKmlz");  
		metadataFactory.addProcedureParameter("fileUrl", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseKmlz);  
		metadataFactory.addProcedureParameter("fileType", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseKmlz);  
		metadataFactory.addProcedureParameter("xpathRoot", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseKmlz);  
		metadataFactory.addProcedureParameter("xpathSchema", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseKmlz);  
	} 
	
	@Override
	public boolean supportsOnlyLiteralComparison() {
		return true;
	}
    
}
