package eu.opendai.spain.apis.lleida.roadincidents;

public class IncidentDistrict {
	public String id_district;
	public String name;
	
	public IncidentDistrict(){}
	
	IncidentDistrict(String id_district, String name){
		this.id_district=id_district;
		this.name=name;
	}
 
	public String getId_district() {
		return id_district;
	}
 
	public String getName() {
		return name;
	}

	public void setId_district(String id_district) {
		this.id_district = id_district;
	}
 
	public void setName(String name) {
		this.name = name;
	}
}
