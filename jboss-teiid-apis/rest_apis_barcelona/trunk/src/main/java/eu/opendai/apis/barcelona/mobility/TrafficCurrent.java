package eu.opendai.apis.barcelona.mobility;

public class TrafficCurrent {
	String id;
	String tstamp;
	String status;
	String forecast;
	
	public TrafficCurrent(){}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTstamp() {
		return tstamp;
	}

	public void setTstamp(String tstamp) {
		this.tstamp = tstamp;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getForecast() {
		return forecast;
	}

	public void setForecast(String forecast) {
		this.forecast = forecast;
	}
}
