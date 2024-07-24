import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheading',
  templateUrl: './adminheading.component.html',
  styleUrls: ['./adminheading.component.css']
})
export class AdminheadingComponent implements OnInit{


  constructor(
    public route: Router
  ){}

  ngOnInit(): void {}


  checkbookrequests(){
    this.route.navigate(['/cheque']);
  }

  userAcc(){
    this.route.navigate(['/useraccount']);
  }
  icin(){
    this.route.navigate(['/icin']);
  }
}
