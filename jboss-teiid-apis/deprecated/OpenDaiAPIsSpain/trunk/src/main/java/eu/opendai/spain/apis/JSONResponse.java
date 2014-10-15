package eu.opendai.spain.apis;

public class JSONResponse {
	public JSONMetaData meta;
	public JSONData data;
	
	JSONResponse(){
		meta=null;
		data=null;
	}
	
	JSONResponse(JSONMetaData m, JSONData d){
		meta=m;
		data=d;
	}
	
	public void setResponse(JSONMetaData m, JSONData d){
		meta=m;
		data=d;
	}
	
	public void setData(JSONData d){
		this.data=d;
	}

	public void setMetaData(JSONMetaData m){
		this.meta=m;
	}
}
