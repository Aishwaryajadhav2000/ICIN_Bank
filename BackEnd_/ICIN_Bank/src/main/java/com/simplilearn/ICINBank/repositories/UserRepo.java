package com.simplilearn.ICINBank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.ICINBank.entity.DemoUsers;
import com.simplilearn.ICINBank.entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<DemoUsers , Long> {
	
//	UserEntity findByusername(String username);
	DemoUsers findByusername(String username);
	
	DemoUsers findByuserid(Long userid);

}
