package eu.opendai.spain.apis.lleida.roadincidents;

public class IncidentCategory {
	public String id_category;
	public String name;
	
	public IncidentCategory(){}
	
	IncidentCategory(String id_category, String name){
		this.id_category=id_category;
		this.name=name;
	}
 
	public String getId_category() {
		return id_category;
	}
 
	public String getName() {
		return name;
	}

	public void setId_category(String id_category) {
		this.id_category = id_category;
	}
 
	public void setName(String name) {
		this.name = name;
	}
}
