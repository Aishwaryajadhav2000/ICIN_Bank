import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username = localStorage.getItem("username");
  public value: any;
  selectany: FormGroup;
  primary:any;
  savings:any;

  constructor(
    public route: Router,
    private fb: FormBuilder,
    private auth: AuthserviceService
  ) { }
  ngOnInit(): void {
    this.selectany = this.fb.group({
      select: new FormControl(''),
    })

    this.auth.getaccountno(this.username).subscribe(data =>{
      console.log("response", data);
    })

    this.auth.getaccountbalance(this.username).subscribe(data =>{
      console.log(data);

      this.primary = data['primaryacntbalance'];
      this.savings = data['savingacntbalance'];
    })
  }





}
