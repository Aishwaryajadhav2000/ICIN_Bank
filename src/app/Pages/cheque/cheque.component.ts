import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit{
data:any;

  constructor(
    public auth: AuthserviceService
  ){}

  ngOnInit(): void {
    this.auth.getcheckbookrequest().subscribe(data =>{
      console.log("all requests", data);
      this.data = data;
    })
  }

}
