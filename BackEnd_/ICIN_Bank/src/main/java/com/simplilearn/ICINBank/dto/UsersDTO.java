package com.simplilearn.ICINBank.dto;

public class UsersDTO {
	
    private Long userid;
	private String firstname;
	private String lastname;
	private String useremailid;
	private String password;
	private String username;
	private int contactno;
	private int primaryaccountno;
	private int savingsaccountno;
	
	public UsersDTO() {
		super();
	}
	
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getUseremailid() {
		return useremailid;
	}
	public void setUseremailid(String useremailid) {
		this.useremailid = useremailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getContactno() {
		return contactno;
	}
	public void setContactno(int contactno) {
		this.contactno = contactno;
	}
	public int getPrimaryaccountno() {
		return primaryaccountno;
	}
	public void setPrimaryaccountno(int primaryaccountno) {
		this.primaryaccountno = primaryaccountno;
	}
	public int getSavingsaccountno() {
		return savingsaccountno;
	}
	public void setSavingsaccountno(int savingsaccountno) {
		this.savingsaccountno = savingsaccountno;
	}
	public UsersDTO(Long userid, String firstname, String lastname, String useremailid, String password,
			String username, int contactno, int primaryaccountno, int savingsaccountno) {
		super();
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.useremailid = useremailid;
		this.password = password;
		this.username = username;
		this.contactno = contactno;
		this.primaryaccountno = primaryaccountno;
		this.savingsaccountno = savingsaccountno;
	}
	@Override
	public String toString() {
		return "UsersDTO [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", useremailid="
				+ useremailid + ", password=" + password + ", username=" + username + ", contactno=" + contactno
				+ ", primaryaccountno=" + primaryaccountno + ", savingsaccountno=" + savingsaccountno + "]";
	}
	
	

}
