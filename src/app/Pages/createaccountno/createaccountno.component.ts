import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import { Addaccountnumber } from 'src/app/classes/addaccountnumber';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-createaccountno',
  templateUrl: './createaccountno.component.html',
  styleUrls: ['./createaccountno.component.css']
})
export class CreateaccountnoComponent implements OnInit {
  createaccountno: FormGroup;
  userid: any;
  alldata: any
  addaccno: Addaccountnumber ={
    firstname: '',
    lastname: '',
    contactno: 0,
    password: '',
    useremailid: '',
    username: '',
    primaryaccountno: 0,
    savingsaccountno: 0, 
  }

  

  constructor(
    public acrouter: ActivatedRoute,
    public auth: AuthserviceService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    // this.createaccountno = this.fb.group({
    //   savingsaccountno: new FormControl(''),
    //   primaryaccountno: new FormControl(''),
    // })

    this.userid = this.acrouter.snapshot.params['userid'];
    console.log("id is", this.userid);

    this.auth.getuserbyuserid(this.userid).subscribe((response:any) =>{
      console.log("user", response);
      this.addaccno = response
    })

  }

  submit(){
    // let data = this.addaccno
    console.log("data", this.addaccno);
    this.auth.accountno(this.userid, this.addaccno).subscribe(response =>{
      console.log("response", response);
    })
  }

}
