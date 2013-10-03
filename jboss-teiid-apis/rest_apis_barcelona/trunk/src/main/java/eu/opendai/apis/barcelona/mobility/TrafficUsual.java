package eu.opendai.apis.barcelona.mobility;

public class TrafficUsual {
	String id;
	String available;
	String tstamp;
	String cur_time;
	String exp_time;
	String fut_time;
	String ref_factor;
	String tendency;
	
	public TrafficUsual(){};

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAvailable() {
		return available;
	}

	public void setAvailable(String available) {
		this.available = available;
	}

	public String getTstamp() {
		return tstamp;
	}

	public void setTstamp(String tstamp) {
		this.tstamp = tstamp;
	}

	public String getCur_time() {
		return cur_time;
	}

	public void setCur_time(String cur_time) {
		this.cur_time = cur_time;
	}

	public String getExp_time() {
		return exp_time;
	}

	public void setExp_time(String exp_time) {
		this.exp_time = exp_time;
	}

	public String getFut_time() {
		return fut_time;
	}

	public void setFut_time(String fut_time) {
		this.fut_time = fut_time;
	}

	public String getRef_factor() {
		return ref_factor;
	}

	public void setRef_factor(String ref_factor) {
		this.ref_factor = ref_factor;
	}

	public String getTendency() {
		return tendency;
	}

	public void setTendency(String tendency) {
		this.tendency = tendency;
	}

}
