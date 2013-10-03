package eu.opendai.spain.apis.lleida.accessibility;

public class AccessibleServiceFeature {
	public long id_feature;
	public String name;
	public long id_level;
	
	public AccessibleServiceFeature(){}

	public long getId_feature() {
		return id_feature;
	}

	public void setId_feature(long id_feature) {
		this.id_feature = id_feature;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getId_level() {
		return id_level;
	}

	public void setId_level(long id_level) {
		this.id_level = id_level;
	}
}
