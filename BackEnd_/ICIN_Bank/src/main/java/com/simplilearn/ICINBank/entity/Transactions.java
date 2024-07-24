package com.simplilearn.ICINBank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="transactions")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	 
	private String username;
	private String accounttype;
	private int amount;
	private Long accountno;
	private String transactiontype;
	
	private Transactions() {
		super();
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getAccounttype() {
		return accounttype;
	}
	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public Long getAccountno() {
		return accountno;
	}
	public void setAccountno(Long accountno) {
		this.accountno = accountno;
	}
	public String getTransactiontype() {
		return transactiontype;
	}
	public void setTransactiontype(String transactiontype) {
		this.transactiontype = transactiontype;
	}
	public Transactions(Long id, String username, String accounttype, int amount, Long accountno,
			String transactiontype) {
		super();
		this.id = id;
		this.username = username;
		this.accounttype = accounttype;
		this.amount = amount;
		this.accountno = accountno;
		this.transactiontype = transactiontype;
	}
	@Override
	public String toString() {
		return "Transactions [id=" + id + ", username=" + username + ", accounttype=" + accounttype + ", amount="
				+ amount + ", accountno=" + accountno + ", transactiontype=" + transactiontype + "]";
	}
	
	
	

}
