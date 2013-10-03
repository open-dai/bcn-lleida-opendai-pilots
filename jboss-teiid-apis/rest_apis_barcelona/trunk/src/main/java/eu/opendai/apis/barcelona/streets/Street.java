package eu.opendai.apis.barcelona.streets;

public class Street {
	String id_street;
	String type;
	String name18;
	String official_name;
	
	public Street(){}

	public String getId_street() {
		return id_street;
	}

	public void setId_street(String id_street) {
		this.id_street = id_street;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName18() {
		return name18;
	}

	public void setName18(String name18) {
		this.name18 = name18;
	}

	public String getOfficial_name() {
		return official_name;
	}

	public void setOfficial_name(String official_name) {
		this.official_name = official_name;
	}	
}
