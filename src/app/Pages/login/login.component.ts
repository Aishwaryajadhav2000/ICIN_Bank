import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    public route: Router,
    public auth: AuthserviceService

  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('')
    })
  }

  submit() {
    // this.route.navigate(['/userhome'])

    if (this.login.value.role =='admin') {

      if (this.login.value.username == "admin" && this.login.value.password == "admin12") {
        console.log("admin login success");
        this.route.navigate(['/adminhome']);
      } else {
        console.log("admin login credentials are wrong");
      }

      console.log("admin login");
    } else{
      this.auth.login(this.login.value.username).subscribe(data => {
        console.log("Response", data);
        if(this.login.value.username == data['username'] && this.login.value.password == data['password']){
          this.route.navigate(['/userhome']);
          localStorage.setItem("username", data['username'] )
        }
      })
    }

   

  }

  signUp() {
    this.route.navigate(['/signUp']);
  }

}
