import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
 
  username = localStorage.getItem("username");
 public userdata: [];
 firstname: any;
 lastname: any;
 contactno: any;
 password:any;
 useremailid:any;
 usernames:any;
 primaryaccountno:any;
 savingsaccountno:any;

  constructor(
    public auth : AuthserviceService
  ){}

  ngOnInit(): void {

    this.auth.login(this.username).subscribe(data =>{
      console.log("response", data);

       this.userdata = data[0];
       this.firstname = data['firstname']
       this.lastname = data['lastname']
       this.contactno = data['contactno']
       this.password = data['password']
       this.useremailid = data['useremailid']
       this.password = data['password']
       this.primaryaccountno = data['primaryaccountno'];
       this.savingsaccountno = data['savingsaccountno'];
       console.log("firstname", this.firstname);
    })

    // this.auth.getaccountno(this.username).subscribe(data =>{
    //   console.log("response", data);
    //   this.primaryaccountno = data['primaryaccountno'];
    //   this.savingsaccountno = data['savingsaccountno'];
    // })
  }

}
