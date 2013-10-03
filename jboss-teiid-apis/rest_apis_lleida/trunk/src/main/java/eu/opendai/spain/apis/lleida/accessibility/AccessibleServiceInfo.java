package eu.opendai.spain.apis.lleida.accessibility;

public class AccessibleServiceInfo {
	public long id_feature;
	public String featureNameCa;
	public String featureNameEs;
	public String featureNameEn;
	public long id_level;
	public String levelNameCa;
	public String levelNameEn;
	public String levelNameEs;
	public long value;
	
	public AccessibleServiceInfo(){}

	public long getId_feature() {
		return id_feature;
	}

	public void setId_feature(long id_feature) {
		this.id_feature = id_feature;
	}

	public String getFeatureNameCa() {
		return featureNameCa;
	}

	public void setFeatureNameCa(String featureNameCa) {
		this.featureNameCa = featureNameCa;
	}

	public String getFeatureNameEs() {
		return featureNameEs;
	}

	public void setFeatureNameEs(String featureNameEs) {
		this.featureNameEs = featureNameEs;
	}

	public String getFeatureNameEn() {
		return featureNameEn;
	}

	public void setFeatureNameEn(String featureNameEn) {
		this.featureNameEn = featureNameEn;
	}

	public long getId_level() {
		return id_level;
	}

	public void setId_level(long id_level) {
		this.id_level = id_level;
	}

	public String getLevelNameCa() {
		return levelNameCa;
	}

	public void setLevelNameCa(String levelNameCa) {
		this.levelNameCa = levelNameCa;
	}

	public String getLevelNameEn() {
		return levelNameEn;
	}

	public void setLevelNameEn(String levelNameEn) {
		this.levelNameEn = levelNameEn;
	}

	public String getLevelNameEs() {
		return levelNameEs;
	}

	public void setLevelNameEs(String levelNameEs) {
		this.levelNameEs = levelNameEs;
	}

	public long getValue() {
		return value;
	}

	public void setValue(long value) {
		this.value = value;
	}	
}
