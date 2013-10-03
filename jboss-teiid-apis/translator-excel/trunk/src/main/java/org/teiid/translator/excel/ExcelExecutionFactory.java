package org.teiid.translator.excel;

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

@Translator(name="excel", description="Translator for remote Excel files")
public class ExcelExecutionFactory extends ExecutionFactory<Object, Object> {

	public ExcelExecutionFactory() {
		setSourceRequiredForMetadata(false);
	}
	
    @Override
    public void start() throws TranslatorException {
    }

    @Override
    public ProcedureExecution createProcedureExecution(Call command, ExecutionContext executionContext, RuntimeMetadata metadata, Object connectionFactory)
    		throws TranslatorException {
//    	System.out.println("COMANDO: "+command.toString());
    	return new ExcelProcedureExecution(command);
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
		Procedure spParseExcel = metadataFactory.addProcedure("spParseExcel");  
		metadataFactory.addProcedureParameter("fileUrl", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseExcel);  
		metadataFactory.addProcedureParameter("skipRows", TypeFacility.RUNTIME_NAMES.INTEGER, Type.In, spParseExcel);  
		metadataFactory.addProcedureParameter("expectedCols", TypeFacility.RUNTIME_NAMES.INTEGER, Type.In, spParseExcel);  
		metadataFactory.addProcedureParameter("schema", TypeFacility.RUNTIME_NAMES.STRING, Type.In, spParseExcel);  
	} 
	
	@Override
	public boolean supportsOnlyLiteralComparison() {
		return true;
	}
    
}
