package com.simplilearn.ICINBank.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users_AccountNo")
public class UserAccountNo {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long useraccount;
	
	private long primaryaccountno;
	private long savingsaccountno;
	
	
	public UserAccountNo() {
		super();
	}
	
	
	

	public long getPrimaryaccountno() {
		return primaryaccountno;
	}
	public void setPrimaryaccountno(long primaryaccountno) {
		this.primaryaccountno = primaryaccountno;
	}
	public long getSavingsaccountno() {
		return savingsaccountno;
	}
	public void setSavingsaccountno(long savingsaccountno) {
		this.savingsaccountno = savingsaccountno;
	}

	public UserAccountNo(long useraccount, long primaryaccountno, long savingsaccountno) {
		super();
		this.useraccount = useraccount;
		this.primaryaccountno = primaryaccountno;
		this.savingsaccountno = savingsaccountno;
		
	}

	@Override
	public String toString() {
		return "UserAccountNo [useraccount=" + useraccount + ", primaryaccountno=" + primaryaccountno
				+ ", savingsaccountno=" + savingsaccountno + ",]";
	}
	
	
	

}
