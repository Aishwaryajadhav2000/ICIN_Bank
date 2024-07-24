package com.simplilearn.ICINBank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.ICINBank.entity.UserPassbook;

@Repository
public interface UserPassbookInterface extends JpaRepository<UserPassbook , Long>{

}
