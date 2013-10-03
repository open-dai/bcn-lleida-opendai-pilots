package eu.opendai.spain.apis.lleida.datapublication;

public class LineaBus {
	 
	public String description;
	public String coordinates;
	
	public LineaBus(){}
	
	LineaBus(String desc, String coords){
		this.description=desc;
		this.coordinates=coords;
	}
 
	public String getDescription() {
		return description;
	}
 
	public String getCoordinates() {
		return coordinates;
	}
 
	public void setDescription(String desc) {
		this.description = desc;
	}
 
	public void setCoordinates(String coords) {
		this.coordinates= coords;
	}
 }