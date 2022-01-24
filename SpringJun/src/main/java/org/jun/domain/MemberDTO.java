package org.jun.domain;

public class MemberDTO {
	private String id;  		//아이디
	private String password;	//비밀번호
	private String birth;		//생년월일
	private String gender;		//성별
	private String email;		//이메일
	private String phone;		//휴대폰 번호
	private String jobrand;		//직급
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
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
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
	public String getJobrand() {
		return jobrand;
	}
	public void setJobrand(String jobrand) {
		this.jobrand = jobrand;
	}
	@Override
	public String toString() {
		return "MemberDTO [id=" + id + ", password=" + password + ", birth=" + birth + ", gender=" + gender + ", email="
				+ email + ", phone=" + phone + ", jobrand=" + jobrand + "]";
	}
	
}
