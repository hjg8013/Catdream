package org.jun.domain;

import java.util.ArrayList;

public class ProductDTO {
	private int pno; 
	private String pimage; 
	private String pname; 
	private String pcontent;
	private String pprice;
	private String pdate;
	private String pbrand;
	private int pstar;
	private int pstarno;
	private String puuid;
	private String puploadpath; 
	

	
	
	public int getPno() {
		return pno;
	}
	public void setPno(int pno) {
		this.pno = pno;
	}
	public String getPimage() {
		return pimage;
	}
	public void setPimage(String pimage) {
		this.pimage = pimage;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPcontent() {
		return pcontent;
	}
	public void setPcontent(String pcontent) {
		this.pcontent = pcontent;
	}
	public String getPprice() {
		return pprice;
	}
	public void setPprice(String pprice) {
		this.pprice = pprice;
	}
	public String getPdate() {
		return pdate;
	}
	public void setPdate(String pdate) {
		this.pdate = pdate;
	}
	public String getPbrand() {
		return pbrand;
	}
	public void setPbrand(String pbrand) {
		this.pbrand = pbrand;
	}
	public int getPstar() {
		return pstar;
	}
	public void setPstar(int pstar) {
		this.pstar = pstar;
	}
	public int getPstarno() {
		return pstarno;
	}
	public void setPstarno(int pstarno) {
		this.pstarno = pstarno;
	}
	

	@Override
	public String toString() {
		return "CatdreamDTO [pno=" + pno + ", pimage=" + pimage + ", pname=" + pname + ", pcontent=" + pcontent
				+ ", pprice=" + pprice + ", pdate=" + pdate + ", pbrand=" + pbrand + ", pstar=" + pstar + ", pstarno="
				+ pstarno + ", attachList=" +  "]";
	}
	
	
}
