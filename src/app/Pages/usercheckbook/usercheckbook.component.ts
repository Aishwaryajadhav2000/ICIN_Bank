import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import { Checkbookrequest } from '../class/checkbookrequest';

@Component({
  selector: 'app-usercheckbook',
  templateUrl: './usercheckbook.component.html',
  styleUrls: ['./usercheckbook.component.css']
})
export class UsercheckbookComponent implements OnInit {

  usernames = localStorage.getItem("username");
  primaryaccountno = localStorage.getItem("primaryaccountno");
  savingsaccountno = localStorage.getItem("savingsaccountno");

  requests: Checkbookrequest = {
    accounttype: '',
    description: '',
    username: this.usernames,

   
  }

  // requests:Checkbookrequest = new Checkbookrequest()

  checkbookrequest: FormGroup;
  primaryaccountnos: any;
  savingsaccountnos: any;
  finalaccountno: any;

  constructor(
    private fb: FormBuilder,
    public route: Router,
    public auth: AuthserviceService
  ) { }

  ngOnInit(): void {
    this.auth.getaccountno(this.usernames).subscribe(data => {
      console.log("response", data);
      localStorage.setItem("primaryaccountno", data['primaryaccountno'])
      localStorage.setItem("savingsaccountno", data['savingsaccountno'])
      this.primaryaccountnos = data['primaryaccountno'];
      this.savingsaccountnos = data['savingsaccountno'];
    })
    this.validation()
  }
  validation() {
    this.checkbookrequest = this.fb.group({
      accountnoo: new FormControl(''),
      description: new FormControl('')
    })
  }
  check(){
    if (this.requests.accounttype == 'primary') {
      this.finalaccountno = this.primaryaccountnos
      console.log("final account no primary", this.finalaccountno);
    } else if (this.requests.accounttype == 'savings') {
      this.finalaccountno = this.savingsaccountnos
      console.log("final account no sac", this.finalaccountno);
    }
   
  }

  submitrequest() {
    console.log("final data", this.requests);
    
    this.auth.requestforcheckbook(this.requests).subscribe(data => {
      console.log("data", data);
      this.route.navigate(['/userhome'])
    })
  }

}
