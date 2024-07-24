package com.simplilearn.ICINBank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usercheckbook")
public class UserPassbook {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long usercheckbookid;
	private String accounttype;
	private String description;
	private String username;
	
	public UserPassbook() {
		super();
	}

	public String getAccounttype() {
		return accounttype;
	}

	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public UserPassbook(long usercheckbookid, String accounttype, String description, String username) {
		super();
		this.usercheckbookid = usercheckbookid;
		this.accounttype = accounttype;
		this.description = description;
		this.username = username;
	}

	@Override
	public String toString() {
		return "UserPassbook [usercheckbookid=" + usercheckbookid + ", accounttype=" + accounttype + ", description="
				+ description + ", username=" + username + "]";
	}

	
	

}
