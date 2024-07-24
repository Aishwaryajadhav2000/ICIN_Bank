package com.simplilearn.ICINBank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="accountNo")
public class CreateUserAccountNo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long accountnoId;
	
	private long primaryaccountno;
	private long savingsaccountno;
	
	public long getPrimaryaccountno() {
		return primaryaccountno;
	}

//	@OneToOne
//	private UserEntity userentity;
	
	public void setPrimaryaccountno(long primaryaccountno) {
		this.primaryaccountno = primaryaccountno;
	}

	public long getSavingsaccountno() {
		return savingsaccountno;
	}

	public void setSavingsaccountno(long savingsaccountno) {
		this.savingsaccountno = savingsaccountno;
	}


	
	public CreateUserAccountNo() {
		super();
	}

	public CreateUserAccountNo(long accountnoId, long primaryaccountno, long savingsaccountno) {
		super();
		this.accountnoId = accountnoId;
		this.primaryaccountno = primaryaccountno;
		this.savingsaccountno = savingsaccountno;
	}

	@Override
	public String toString() {
		return "CreateUserAccountNo [accountnoId=" + accountnoId + ", primaryaccountno=" + primaryaccountno
				+ ", savingsaccountno=" + savingsaccountno + "]";
	}
	
	
	

}
