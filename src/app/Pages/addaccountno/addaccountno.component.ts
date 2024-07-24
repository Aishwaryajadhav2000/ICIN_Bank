import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import { Useraccountno } from '../class/useraccountno';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Addaccountnumber } from 'src/app/classes/addaccountnumber';

@Component({
  selector: 'app-addaccountno',
  templateUrl: './addaccountno.component.html',
  styleUrls: ['./addaccountno.component.css']
})
export class AddaccountnoComponent implements OnInit {

  accountno: Useraccountno = new Useraccountno()
  alldata: any;
  id: number;
  addaccnoclass: Addaccountnumber[];

  register: FormGroup;
  constructor(
    public auth: AuthserviceService,
    private fb: FormBuilder,
    public router: ActivatedRoute,
    public route: Router
  ) { }
  ngOnInit(): void {
    this.auth.getalluser().subscribe(data => {
      console.log("all users", data);
      this.alldata = data;
    })

    this.register = this.fb.group({
      savingsaccountno: new FormControl(''),
      primaryaccountno: new FormControl(''),

    })

    this.id = this.router.snapshot.params['username'];
    console.log("id is", this.id);

    // this.auth.getalluser().pipe().subscribe((response: Addaccountnumber[]) => {
    //   this.addaccnoclass = response;
    //   console.log("addaccnoclass", this.addaccnoclass);
    //   console.log("addaccnoclass", this.addaccnoclass['userid']);

    // })

  }
  // submit(){
  //   console.log("working");
  //   this.auth.accountno(this.id, this.register.value).subscribe(data => {
  //     console.log("response", data);
  //   })
  // }

  // create(username) {
  //   console.log("working");
  //   this.auth.addaccount(username,this.register.value).subscribe(data => {
  //     console.log("response", data);
  //   })

  // }
  create(userid: number) {
    console.log("click")
    this.route.navigate(['/createacoountno', userid]);
  }



}
