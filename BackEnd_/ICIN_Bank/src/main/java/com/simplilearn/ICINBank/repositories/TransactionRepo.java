package com.simplilearn.ICINBank.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.ICINBank.entity.Transactions;

public interface TransactionRepo extends JpaRepository <Transactions , Long>{
	
	List<Transactions> findByusername(String username);

}
