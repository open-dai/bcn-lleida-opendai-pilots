package eu.opendai.apis.barcelona.environment;

public class PollutionZone {
	int id_zone;
	String zone;
	String station;
	
	public PollutionZone(){}

	public int getId_zone() {
		return id_zone;
	}

	public void setId_zone(int id_zone) {
		this.id_zone = id_zone;
	}

	public String getZone() {
		return zone;
	}

	public void setZone(String zone) {
		this.zone = zone;
	}

	public String getStation() {
		return station;
	}

	public void setStation(String station) {
		this.station = station;
	}
}
