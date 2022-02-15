package org.jun.domain;


public class ProductDTO {
	private int pno;
	private String pname;
	private String pimgName;
	private boolean pimage;
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
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPimgName() {
		return pimgName;
	}
	public void setPimgName(String pimgName) {
		this.pimgName = pimgName;
	}
	public boolean isPimage() {
		return pimage;
	}
	public void setPimage(boolean pimage) {
		this.pimage = pimage;
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
	public String getPuuid() {
		return puuid;
	}
	public void setPuuid(String puuid) {
		this.puuid = puuid;
	}
	public String getPuploadpath() {
		return puploadpath;
	}
	public void setPuploadpath(String puploadpath) {
		this.puploadpath = puploadpath;
	}
	@Override
	public String toString() {
		return "ProductDTO [pno=" + pno + ", pname=" + pname + ", pimgName=" + pimgName + ", pimage=" + pimage
				+ ", pcontent=" + pcontent + ", pprice=" + pprice + ", pdate=" + pdate + ", pbrand=" + pbrand
				+ ", pstar=" + pstar + ", pstarno=" + pstarno + ", puuid=" + puuid + ", puploadpath=" + puploadpath
				+ "]";
	}
	
	
	
	
	
	
}
