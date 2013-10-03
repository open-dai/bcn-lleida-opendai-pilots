package eu.opendai.apis.lleida;

import java.util.List;

public class JSONData {
	public int startIndex;
	public int itemsPerPage;
	public int totalResults;
	public List<Object> entry;
	
	JSONData(){
		this.startIndex=0;
		this.itemsPerPage=0;
		this.totalResults=0;
		this.entry=null;
	}
	
	JSONData(int startIndex, int itemsPerPage, int totalResults, List<Object> entry){
		this.startIndex=startIndex;
		this.itemsPerPage=itemsPerPage;
		this.totalResults=totalResults;
		this.entry=entry;
	}
	
	public void setStartIndex(int startIndex){
		this.startIndex=startIndex;
	}
	public void setItemsPerPage(int itemsPerPage){
		this.itemsPerPage=itemsPerPage;
	}
	public void setTotalResults(int totalResults){
		this.totalResults=totalResults;
	}
	public void setEntry(List<Object> entry){
		this.entry=entry;
	}
	
	public int getStartIndex(){
		return this.startIndex;
	}
	public int getItemsPerPage(){
		return this.itemsPerPage;
	}
	public int getTotalResults(){
		return this.totalResults;
	}
	public List<Object> getEntry(){
		return this.entry;
	}	
}
