package org.jun.domain;

public class MemberDTO {
	private String id;  		//아이디
	private String password;	//비밀번호
	private String name;		//이름
	private String birth;		//생년월일
	private String yy;			//생년
	private String mm;			//월
	private String dd;			//일
	private String gender;		//성별
	private String email;		//이메일
	private String phone;		//휴대폰 번호
	private String jobrank;		//직급
	
	
	public void setbirthyymmdd(String yy,String mm,String dd) {
		this.birth= yy+mm+dd;
	}
	
	public String getbirthyymmdd() {
		return birth;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public String getYy() {
		return yy;
	}

	public void setYy(String yy) {
		this.yy = yy;
	}

	public String getMm() {
		return mm;
	}

	public void setMm(String mm) {
		this.mm = mm;
	}

	public String getDd() {
		return dd;
	}

	public void setDd(String dd) {
		this.dd = dd;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getJobrank() {
		return jobrank;
	}

	public void setJobrank(String jobrank) {
		this.jobrank = jobrank;
	}

	@Override
	public String toString() {
		return "MemberDTO [id=" + id + ", password=" + password + ", name=" + name + ", birth=" + birth + ", yy=" + yy
				+ ", mm=" + mm + ", dd=" + dd + ", gender=" + gender + ", email=" + email + ", phone=" + phone
				+ ", jobrank=" + jobrank + "]";
	}
	
	
	
}
