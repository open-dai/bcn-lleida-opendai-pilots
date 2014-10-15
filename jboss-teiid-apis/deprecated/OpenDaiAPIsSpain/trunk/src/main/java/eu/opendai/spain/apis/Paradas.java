package eu.opendai.spain.apis;

import java.util.ArrayList;
import java.util.List;

public class Paradas {

	private List<Parada> paradas;
	
	Paradas(){
		paradas=new ArrayList<Parada>();
	}
	
	public void addParada(Parada newP){
		paradas.add(newP);
	}
	
	public List<Parada> getParadas(){
		return paradas;
	}
	
	public void setParadas(List<Parada> lparadas){
		this.paradas=lparadas;
	}
	
	public int size(){
		return paradas.size();
	}
	
	public Parada get(int i){
		return paradas.get(i);
	}
}
