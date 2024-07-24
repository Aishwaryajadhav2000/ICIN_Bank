import { Component, OnInit } from '@angular/core';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit{
  data: any;


  constructor(
    public auth:AuthserviceService
  ){}

  ngOnInit(): void {
    this.auth.getalluser().subscribe(data =>{
      console.log("all users", data);
      this.data = data;
    })
  }

}
