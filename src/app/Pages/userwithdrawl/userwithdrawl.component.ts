import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userwithdrawl',
  templateUrl: './userwithdrawl.component.html',
  styleUrls: ['./userwithdrawl.component.css']
})
export class UserwithdrawlComponent implements OnInit{

  deposite:FormGroup;
username = localStorage.getItem("username");
  constructor(
    public fb : FormBuilder,
    public auth : AuthserviceService,
  ){}

  ngOnInit(): void {

    this.deposite = this.fb.group({
      accounttype: new FormControl(),
      amount : new FormControl(),
      accountno : new FormControl(),
      transactiontype: new FormControl("credited"),
      username : new FormControl(this.username)
    })
  }

  submit() {
    console.log(this.deposite.value.transactiontype);
    console.log(this.deposite.value.username);

    this.auth.transfermoney(this.deposite.value).subscribe((response: any) => {
      console.log("send succcessfull", response);
    })

  }

}
