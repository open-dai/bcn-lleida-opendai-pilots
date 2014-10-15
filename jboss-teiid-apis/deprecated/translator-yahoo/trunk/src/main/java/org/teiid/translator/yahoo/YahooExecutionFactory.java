/*
 * JBoss, Home of Professional Open Source.
 * See the COPYRIGHT.txt file distributed with this work for information
 * regarding copyright ownership.  Some portions may be licensed
 * to Red Hat, Inc. under one or more contributor license agreements.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301 USA.
 */

package org.teiid.translator.yahoo;

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

@Translator(name="yahoo", description="A translator for testing to obtain stock quotes from Yahoo web site")
public class YahooExecutionFactory extends ExecutionFactory<Object, Object> {

	public static final int YAHOO_MAX_SET_SIZE = 100;
	
	public YahooExecutionFactory() {
		setMaxInCriteriaSize(YAHOO_MAX_SET_SIZE);
		setSourceRequiredForMetadata(false);
	}
	
    @Override
    public void start() throws TranslatorException {
    }

    /*@Override
    public ResultSetExecution createResultSetExecution(QueryExpression command, ExecutionContext executionContext, RuntimeMetadata metadata, Object connectionFactory)
    		throws TranslatorException {
    	System.out.println("COMANDO: "+command.toString());
    	return new YahooExecution((Select)command);
    } */   
    
    @Override
    public ProcedureExecution createProcedureExecution(Call command, ExecutionContext executionContext, RuntimeMetadata metadata, Object connectionFactory)
    		throws TranslatorException {
    	System.out.println("COMANDO: "+command.toString());
    	return new YahooProcedureExecution(command);
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
		/*Table t = metadataFactory.addTable("Stock"); //$NON-NLS-1$
		metadataFactory.addColumn("symbol", DataTypeManager.DefaultDataTypes.STRING, t); //$NON-NLS-1$
		Column c = metadataFactory.addColumn("last", DataTypeManager.DefaultDataTypes.DOUBLE, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("date", DataTypeManager.DefaultDataTypes.DATE, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("time", DataTypeManager.DefaultDataTypes.TIME, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("change", DataTypeManager.DefaultDataTypes.DOUBLE, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("open", DataTypeManager.DefaultDataTypes.DOUBLE, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("high", DataTypeManager.DefaultDataTypes.DOUBLE, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("low", DataTypeManager.DefaultDataTypes.DOUBLE, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		c = metadataFactory.addColumn("volume", DataTypeManager.DefaultDataTypes.BIG_INTEGER, t); //$NON-NLS-1$
		c.setSearchType(SearchType.Unsearchable);
		metadataFactory.addAccessPattern("needs_symbol", Arrays.asList("symbol"), t); //$NON-NLS-1$ //$NON-NLS-2$*/
		
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
