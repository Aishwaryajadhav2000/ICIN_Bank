package com.simplilearn.ICINBank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.ICINBank.entity.UserAcountBalance;

@Repository
public interface UserAccountBalRepo extends JpaRepository<UserAcountBalance , Long>{
	
	UserAcountBalance findByusername(String username);

}
