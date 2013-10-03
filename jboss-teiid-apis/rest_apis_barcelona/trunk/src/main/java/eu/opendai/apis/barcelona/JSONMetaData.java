package eu.opendai.apis.barcelona;

public class JSONMetaData {
	public String v;
	public String status;
	public int code;
	public long timeRef;
	public String msg;
	
	JSONMetaData(){
		this.v="";
		this.status="";
		this.code=0;
		this.timeRef=(int) (System.currentTimeMillis() / 1000L);
		this.msg="";
	}
	
	JSONMetaData(String v, String status, int code, String msg){
		this.v=v;
		this.status=status;
		this.code=code;
		timeRef=(int) (System.currentTimeMillis() / 1000L);
		this.msg=msg;
	}
	
	public void setV(String v){
		this.v=v;
	}
	public void setStatus(String status){
		this.status=status;
	}
	public void setCode(int code){
		this.code=code;
	}
	public void setTimeRef(long timeRef){
		this.timeRef=timeRef;
	}
	public void setMsg(String msg){
		this.msg=msg;
	}
	public String getV(){
		return this.v;
	}
	public String getStatus(){
		return this.status;
	}
	public int getCode(){
		return this.code;
	}
	public long getTimeRef(){
		return this.timeRef;
	}
	public String getMsg(){
		return this.msg;
	}
}
