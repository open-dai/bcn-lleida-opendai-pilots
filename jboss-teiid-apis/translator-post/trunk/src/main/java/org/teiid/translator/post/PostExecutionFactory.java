package org.teiid.translator.post;

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

@Translator(name="post", description="Translator para POSTs de diferentes webs")
public class PostExecutionFactory extends ExecutionFactory<Object, Object> {

	public PostExecutionFactory() {
		setSourceRequiredForMetadata(false);
	}
	
    @Override
    public void start() throws TranslatorException {
    }

    @Override
    public ProcedureExecution createProcedureExecution(Call command, ExecutionContext executionContext, RuntimeMetadata metadata, Object connectionFactory)
    		throws TranslatorException {
//    	System.out.println("COMANDO: "+command.toString());
    	return new PostProcedureExecution(command);
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
		Procedure spParseNoiseByStreet = metadataFactory.addProcedure("spParseNoiseByStreet");
		metadataFactory.addProcedureParameter("url", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseNoiseByStreet);  
		metadataFactory.addProcedureParameter("street", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseNoiseByStreet);  
		metadataFactory.addProcedureParameter("number", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseNoiseByStreet);

		Procedure spParseNoiseByStretch = metadataFactory.addProcedure("spParseNoiseByStretch");
		metadataFactory.addProcedureParameter("url", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseNoiseByStretch);  
		metadataFactory.addProcedureParameter("street1", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseNoiseByStretch);  
		metadataFactory.addProcedureParameter("street2", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseNoiseByStretch);

		Procedure spParseContaminacio = metadataFactory.addProcedure("spParseContaminacio");
		metadataFactory.addProcedureParameter("url", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseContaminacio);  
		metadataFactory.addProcedureParameter("dades", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseContaminacio);  
		metadataFactory.addProcedureParameter("periode", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseContaminacio);  
		metadataFactory.addProcedureParameter("estacio", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseContaminacio);  
		metadataFactory.addProcedureParameter("contaminant", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseContaminacio);  
		metadataFactory.addProcedureParameter("control", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseContaminacio);  
		
	} 
	
	@Override
	public boolean supportsOnlyLiteralComparison() {
		return true;
	}
    
}
