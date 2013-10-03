package eu.opendai.spain.apis.lleida.roadincidents;

public class Incident {
	public String id_incident;
	public String category;
	public String start;
	public String district;
	public String street;
	public String number;
	
	public Incident(){}
	
	public String getId_incident() {
		return id_incident;
	}
 
	public String getCategory() {
		return category;
	}

	public String getStart() {
		return start;
	}

	public String getDistrict() {
		return district;
	}

	public String getStreet() {
		return street;
	}

	public String getNumber() {
		return number;
	}

	public void setId_incident(String id_incident) {
		this.id_incident = id_incident;
	}
 
	public void setCategory(String str) {
		this.category = str;
	}

	public void setStart(String str) {
		this.start = str;
	}

	public void setDistrict(String str) {
		this.district = str;
	}

	public void setStreet(String str) {
		this.street = str;
	}

	public void setNumber(String str) {
		this.number = str;
	}
}
