package org.teiid.translator.excel;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.teiid.language.Call;
import org.teiid.translator.DataNotAvailableException;
import org.teiid.translator.ProcedureExecution;
import org.teiid.translator.TranslatorException;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

import java.io.*;
import java.net.*;

public class ExcelProcedureExecution implements ProcedureExecution {

	//private Call command;
									//Lladada de ejemplo desde la BD:
									//	call spParseExcel('http://remoteserver.com/file.xls', 1, 6, 'STRING,INT,DOUBLE');
	
	private String fileUrl;			//url fichero remoto, ej: http://w20.bcn.cat/opendata/DonaRecurs.aspx?arbre=general&recurs=TRANSIT_RELACIO_TRAMS&fitxer=3001
	private int skipRows;			//filas a saltarse (títulos, p. ej.)
	private int expectedCols;		//número de columnas esperado
	private String schema;			//tipos de las colummnas, básicamente para que los enteros no salgan con decimales, porque en excel los numéricos son float
	Iterator<List<?>> results;
	
    public ExcelProcedureExecution(Call command) {
        //this.command = command;
        this.fileUrl = (String)command.getArguments().get(0).getArgumentValue().getValue();
        this.skipRows= (int)command.getArguments().get(1).getArgumentValue().getValue();
        this.expectedCols= (int)command.getArguments().get(2).getArgumentValue().getValue();
        this.schema= (String)command.getArguments().get(3).getArgumentValue().getValue();
        //System.out.println("PARAMS: \n\t"+this.fileUrl+", "+this.skipRows+", "+this.expectedCols+", "+this.schema);
    }
	
	@Override
	public void execute() throws TranslatorException {
        List<List<?>> returnRows = new ArrayList<List<?>>();
        
        try{
			URL url = new URL(this.fileUrl);
			InputStream stream = url.openStream();
			
			// Get the workbook instance for XLS file
			//HSSFWorkbook workbook = new HSSFWorkbook(file);
			HSSFWorkbook workbook = new HSSFWorkbook(stream);

			// Get first sheet from the workbook
			HSSFSheet sheet = workbook.getSheetAt(0);

			// Iterate through each rows from first sheet
			Iterator<Row> rowIterator = sheet.iterator();
			int currentRow=0;
			
			//column type schema
			String[] typeSchema=this.schema.split(",");
			if(typeSchema.length!=expectedCols){
				System.out.println("ERROR: Expected "+expectedCols+" column type definitions.");
				return;
			}
			
			while (rowIterator.hasNext()) {
				List<String> rowCells=new ArrayList<String>();
				
				Row row = rowIterator.next();

				if(currentRow<skipRows){
					currentRow++;
					continue;
				}

				// For each row, iterate through each columns
				Iterator<Cell> cellIterator = row.cellIterator();
				int ncell=0;
				while (cellIterator.hasNext()) {

					Cell cell = cellIterator.next();
					
					if(ncell>expectedCols){
						System.out.println("ERROR: More columns than expected");
						break;
					}

					switch (cell.getCellType()) {
					case Cell.CELL_TYPE_BOOLEAN:
						//System.out.print(cell.getBooleanCellValue() + "\t\t");
						if(cell.getBooleanCellValue()){
							rowCells.add("1");
						} else{
							rowCells.add("0");
						}
						break;
					case Cell.CELL_TYPE_NUMERIC:
						//System.out.print(cell.getNumericCellValue() + "\t\t");
						if(typeSchema[ncell].equals("INT")){
							rowCells.add(Long.toString((long) cell.getNumericCellValue()));
						} else if(typeSchema[ncell].equals("DOUBLE")){
							rowCells.add(Double.toString(cell.getNumericCellValue()));
						} else{
							rowCells.add("invalid");
						}
						break;
					case Cell.CELL_TYPE_STRING:
						//System.out.print(cell.getStringCellValue() + "\t\t");
						rowCells.add(cell.getStringCellValue());
						break;
					case Cell.CELL_TYPE_BLANK:
						rowCells.add("");
						break;
					}
					ncell++;
					
				}
				if(ncell==expectedCols){
					returnRows.add(rowCells);
				} else{
					System.out.println("ERROR: Invalid number of columns: "+ncell+". Expected "+expectedCols+".");
					
				}
				//System.out.println("");
				
				
			}
			stream.close();
			
        } catch(MalformedURLException mue){
            throw new TranslatorException(mue, mue.getMessage());
        } catch(IOException e) {
            throw new TranslatorException(e, e.getMessage());
		} 

        this.results=returnRows.iterator();
	}

	@Override
	public List<?> next() throws TranslatorException, DataNotAvailableException {
        if (results.hasNext()) {
            return results.next();
        }
        return null;
	}

	@Override
	public void cancel() throws TranslatorException {
		// TODO Auto-generated method stub

	}

	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

	@Override
	public List<?> getOutputParameterValues() throws TranslatorException {
		// TODO Auto-generated method stub
		return null;
	}

}
