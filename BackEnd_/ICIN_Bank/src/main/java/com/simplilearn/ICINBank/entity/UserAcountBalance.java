package com.simplilearn.ICINBank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="useraccountbalance")
public class UserAcountBalance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long accountbalanceid;
	
	private String username;
	private long primaryacntbalance;
	private long savingacntbalance;
	
	public UserAcountBalance() {
		super();
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public long getPrimaryacntbalance() {
		return primaryacntbalance;
	}
	public void setPrimaryacntbalance(long primaryacntbalance) {
		this.primaryacntbalance = primaryacntbalance;
	}
	public long getSavingacntbalance() {
		return savingacntbalance;
	}
	public void setSavingacntbalance(long savingacntbalance) {
		this.savingacntbalance = savingacntbalance;
	}
	public UserAcountBalance(long accountbalanceid, String username, long primaryacntbalance, long savingacntbalance) {
		super();
		this.accountbalanceid = accountbalanceid;
		this.username = username;
		this.primaryacntbalance = primaryacntbalance;
		this.savingacntbalance = savingacntbalance;
	}
	@Override
	public String toString() {
		return "UserAcountBalance [accountbalanceid=" + accountbalanceid + ", username=" + username
				+ ", primaryacntbalance=" + primaryacntbalance + ", savingacntbalance=" + savingacntbalance + "]";
	}

	
	
}
