import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  register: FormGroup;

  constructor(
    private fb: FormBuilder,
    public route: Router,
    public auth: AuthserviceService
  ) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      useremailid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      username : new FormControl(''),
      contactno: new FormControl('')
    })
  }

  submit() {
    
    console.log("valuew", this.register.value);
    this.auth.register(this.register.value).subscribe(data =>{
      console.log("response", data);
      this.route.navigate(['/']);
    })
    
    // this.route.navigate(['/']);
  }
}
