import { transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/Services/authservice.service';
@Component({
  selector: 'app-transfermoney',
  templateUrl: './transfermoney.component.html',
  styleUrls: ['./transfermoney.component.css']
})
export class TransfermoneyComponent implements OnInit {
  username = localStorage.getItem("username");
  transfer: FormGroup;
  userid: any;

  constructor(
    public fb: FormBuilder,
    public acrouter: ActivatedRoute,
    public auth: AuthserviceService,
  ) { }

  ngOnInit(): void {
    this.transfer = this.fb.group({
      accounttype: new FormControl(),
      amount: new FormControl(),
      accountno: new FormControl(),
      transactiontype: new FormControl("debited"),
      username: new FormControl(this.username)
    });

    this.auth.login(this.username).subscribe(data => {
      console.log("response", data);

    })

  }

  submit() {
    console.log(this.transfer.value.transactiontype);
    console.log(this.transfer.value.username);

    this.auth.transfermoney(this.transfer.value).subscribe((response: any) => {
      console.log("send succcessfull", response);
    })

  }
}
