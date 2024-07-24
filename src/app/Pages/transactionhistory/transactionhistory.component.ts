import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';
AuthserviceService

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit{

  username = localStorage.getItem("username");
alldata:any
  constructor(
    public auth : AuthserviceService
  ){}

  ngOnInit(): void {
    this.auth.transactionhistory(this.username).subscribe(response =>{
      console.log("history", response);
      this.alldata = response
    })
  }

}
