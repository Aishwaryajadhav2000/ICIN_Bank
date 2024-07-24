package com.simplilearn.ICINBank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.ICINBank.dto.UsersDTO;
import com.simplilearn.ICINBank.entity.CreateUserAccountNo;
import com.simplilearn.ICINBank.entity.DemoUsers;
import com.simplilearn.ICINBank.entity.Transactions;
import com.simplilearn.ICINBank.entity.UserAccountNo;
import com.simplilearn.ICINBank.entity.UserAcountBalance;
import com.simplilearn.ICINBank.entity.UserEntity;
import com.simplilearn.ICINBank.entity.UserPassbook;
import com.simplilearn.ICINBank.repositories.TransactionRepo;
import com.simplilearn.ICINBank.repositories.UserAccountBalRepo;
import com.simplilearn.ICINBank.repositories.UserAccountRepo;
import com.simplilearn.ICINBank.repositories.UserPassbookInterface;
import com.simplilearn.ICINBank.repositories.UserRepo;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/simplilearn/icinbank")
public class RestControllers {
	
	@Autowired(required = true)
	UserRepo userrepo;
	
	@Autowired(required = true)
	UserAccountRepo useraccountrepo;
	
	@Autowired(required=true)
	UserAccountBalRepo accountbalrepo;
	
	@Autowired(required=true)
	UserPassbookInterface userpassrepo;
	
	UsersDTO userdto;
	
	@Autowired(required = true)
	TransactionRepo transactionrepo;
	 
	
//	@PostMapping("/register")
//	public UserEntity registration(@RequestBody UserEntity userentity){
//		return userrepo.save(userentity);
//	}
	
	
	@PostMapping("/registration")
	public DemoUsers register(@RequestBody DemoUsers users) {
		return userrepo.save(users);
	}
	
	//get by id
	@GetMapping
	
	//create account no by using DTO
	@PostMapping("addaccountno/{userid}")
	public ResponseEntity<DemoUsers> addaccountno(@PathVariable Long userid,@RequestBody DemoUsers users){
		
		DemoUsers user = userrepo.findById(userid).orElseThrow();
	//	DemoUsers user = userrepo.findByusername(username);
		
//		user.setContactno(userdto.getContactno());
		user.setPrimaryaccountno(userdto.getPrimaryaccountno());
		user.setSavingsaccountno(userdto.getSavingsaccountno());
		user.setContactno(userdto.getContactno());
		user.setFirstname(userdto.getFirstname());
		user.setLastname(userdto.getLastname());
		user.setPassword(userdto.getPassword());
		user.setUseremailid(userdto.getUseremailid());
		user.setUsername(userdto.getUsername());
		
		DemoUsers addaccountno = userrepo.save(user);
		
		return ResponseEntity.ok(addaccountno);
	}
	
	//get user by userid
	@GetMapping("/getuser/{userid}")
	public ResponseEntity <DemoUsers> getuser(@PathVariable Long userid){
		DemoUsers users =userrepo.findByuserid(userid);
		return ResponseEntity.ok(users);
	}
	
//	@GetMapping("/login/{username}")
//	public ResponseEntity <UserEntity> login(@PathVariable String username) {
//		UserEntity user = userrepo.findByusername(username);
//		return ResponseEntity.ok(user);
//	}
	
	@GetMapping("/login/{username}")
	public ResponseEntity <DemoUsers> login(@PathVariable String username) {
		DemoUsers user = userrepo.findByusername(username);
		return ResponseEntity.ok(user);
	}
	
	//get all users
	@GetMapping("/getallusers")
	public List<DemoUsers> getallusers(){
		return (List<DemoUsers>) userrepo.findAll();
	}
	
	
	
	
	//get accountno by username
//	@GetMapping("/getaccountno/{username}")
//	public ResponseEntity <UserAccountNo> getuseraccountno(@PathVariable String username){
//		UserAccountNo accountno = useraccountrepo.findByusername(username);
//		return ResponseEntity.ok(accountno);
//	}
	
	
//	//save account no
//		@PostMapping("/saveaccountno")
//		public ResponseEntity<String> saveaccountno(@RequestBody UserAccountNo useracount){
//		useraccountrepo.save(useracount);
//		return ResponseEntity.ok("data saved");
//		}
		

//		@PostMapping("/saveaccountno")
//		public UserAccountNo saveaccountno(@RequestBody UserAccountNo useracount) {
//			return useraccountrepo.save(useracount);
//		}	
		
//	@PostMapping("/saveaccountno")
//	public CreateUserAccountNo saveaccountno(@RequestBody CreateUserAccountNo useracount) {
//		return useraccountrepo.save(useracount);
//	}
		
		//Add user account Balance for both primary and savings
		@PostMapping("/accountbalance")
		public UserAcountBalance accountbal(@RequestBody UserAcountBalance accountbalance) {
			return accountbalrepo.save(accountbalance);
		}
		
		//get user account balance for both primary and savings
		@GetMapping("/getaccountbalance/{username}")
	public ResponseEntity <UserAcountBalance> getaccountbalance(@PathVariable String username){
			UserAcountBalance accountbalance = accountbalrepo.findByusername(username);
		return ResponseEntity.ok(accountbalance);
		}
		

		// User Passbook Request
		@PostMapping("/checkbookrequest")
		public UserPassbook passbookreq(@RequestBody UserPassbook userpassbook) {
			return userpassrepo.save(userpassbook);
		}
	
		
		//get all passbook requests
	@GetMapping("/getcheckbookrequests")
		public List<UserPassbook> getrequests(){
			return (List<UserPassbook>) userpassrepo.findAll();
		}
	
// user transactions 
	@PostMapping("/transaction")
	public Transactions transact(@RequestBody Transactions transaction) {
		return transactionrepo.save(transaction);
	}
	
	
	@GetMapping("/transactionhistory/{username}")
	public ResponseEntity <List<Transactions>> history(@PathVariable String username){
		List<Transactions> history = transactionrepo.findByusername(username);
		return ResponseEntity.ok(history);
	}
	
	
	
	
	
	
	
	
	
	
}
