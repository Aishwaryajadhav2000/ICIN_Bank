import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";



@Component({
  selector: 'app-userheading',
  templateUrl: './userheading.component.html',
  styleUrls: ['./userheading.component.css']
})
export class UserheadingComponent implements OnInit {
  public value: any;
  selectany: FormGroup;

  constructor(
    public route: Router,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.selectany = this.fb.group({
      select: new FormControl(''),
    })

    this.submit();
  }
  submit() {
    console.log("userprofile");
    if (this.selectany.value.select == "profile") {
      this.route.navigate(['/userprofile']);
    } else if (this.selectany.value.select == "logout") {
      this.route.navigate(['/signUp'])
    }

  }

  new(){
    console.log("new");
    if(this.selectany.value == "profile"){
      this.userprofile();
    }
    console.log("value", this.selectany.value);
  }
  home() {
    this.route.navigate(['/userhome']);
  }
  request(){
    this.route.navigate(['/userCheckBook']);
  }
  userprofile(){
    this.route.navigate(['/userprofile']);
  }

  icin(){
    this.route.navigate(['/icin']);
  }
}
