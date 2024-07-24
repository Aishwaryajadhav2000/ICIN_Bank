package com.simplilearn.ICINBank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.ICINBank.entity.CreateUserAccountNo;
import com.simplilearn.ICINBank.entity.UserAccountNo;
import com.simplilearn.ICINBank.entity.UserAcountBalance;

@Repository
public interface UserAccountRepo extends JpaRepository<CreateUserAccountNo , Long>{
	
//	UserAccountNo findByusername(String username);

	

}
