package com.simplilearn.ICINBank.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userid;
	
	private String firstname;
	private String lastname;
	private String useremailid;
	private String password;
	private String username;
	private long contactno;
	
	// generated getters and setters
	// generate constructor using field
	//generate to string method
	//generate super class
	

	
	@OneToOne
	private CreateUserAccountNo createuseraccountno;
	
	public UserEntity() {
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

	public long getContactno() {
		return contactno;
	}

	public void setContactno(long contactno) {
		this.contactno = contactno;
	}

	public UserEntity(long userid, String firstname, String lastname, String useremailid, String password,
			String username, long contactno, CreateUserAccountNo createuseraccountno) {
		super();
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.useremailid = useremailid;
		this.password = password;
		this.username = username;
		this.contactno = contactno;
		this.createuseraccountno = createuseraccountno;
	}

	@Override
	public String toString() {
		return "UserEntity [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", useremailid="
				+ useremailid + ", password=" + password + ", username=" + username + ", contactno=" + contactno
				+ ", createuseraccountno=" + createuseraccountno + "]";
	}
	


}
