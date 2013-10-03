package eu.opendai.spain.apis.lleida.datapublication;

public class PoiCategory {
	 
	public int id;
	public String category;
	
	public PoiCategory(){}
	
	PoiCategory(int id, String category){
		this.id=id;
		this.category=category;
	}
 
	public int getId() {
		return id;
	}
 
	public String getCategory() {
		return category;
	}

	public void setId(int id) {
		this.id = id;
	}
 
	public void setCategory(String category) {
		this.category= category;
	}
}