package eu.opendai.spain.apis.lleida.accessibility;

public class AccessibleService {
	public long id;
	public long id_category;
	public String street;
	public String via;
	public long number;
	public String name;
	public String observations;
	public String category;
	
	public AccessibleService(){}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getId_category() {
		return id_category;
	}

	public void setId_category(long id_category) {
		this.id_category = id_category;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getVia() {
		return via;
	}

	public void setVia(String via) {
		this.via = via;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getObservations() {
		return observations;
	}

	public void setObservations(String observations) {
		this.observations = observations;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
}
