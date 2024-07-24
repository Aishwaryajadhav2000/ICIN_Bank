package com.simplilearn.ICINBank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "alluser")
public class DemoUsers {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userid;
	
	private String firstname;
	private String lastname;
	private String useremailid;
	private String password;
	private String username;
	private int contactno;
	private int primaryaccountno;
	private int savingsaccountno;
	
	public DemoUsers() {
		super();
	}
	
	
	
	public Long getUserid() {
		return userid;
	}



	public void setUserid(Long userid) {
		this.userid = userid;
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

	@OneToOne
	private CreateUserAccountNo usere;
	
	

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

	public DemoUsers(Long userid, String firstname, String lastname, String useremailid, String password,
			String username, int contactno, int primaryaccountno, int savingsaccountno, CreateUserAccountNo usere) {
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
		this.usere = usere;
	}

	@Override
	public String toString() {
		return "DemoUsers [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", useremailid="
				+ useremailid + ", password=" + password + ", username=" + username + ", contactno=" + contactno
				+ ", primaryaccountno=" + primaryaccountno + ", savingsaccountno=" + savingsaccountno + ", usere="
				+ usere + "]";
	}
	
	

	

}
