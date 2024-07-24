import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { UserhomeComponent } from './Pages/userhome/userhome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { UsercheckbookComponent } from './Pages/usercheckbook/usercheckbook.component';
import { AdminhomeComponent } from './Pages/adminhome/adminhome.component';
import { UseraccountComponent } from './Pages/useraccount/useraccount.component';
import { ChequeComponent } from './Pages/cheque/cheque.component';
import { UserheadingComponent } from './Pages/userheading/userheading.component';
import { AdminheadingComponent } from './Pages/adminheading/adminheading.component';
import { AddaccountnoComponent } from './Pages/addaccountno/addaccountno.component';
import { CreateaccountnoComponent } from './Pages/createaccountno/createaccountno.component';
import { IcinComponent } from './Pages/icin/icin.component';
import { UserwithdrawlComponent } from './Pages/userwithdrawl/userwithdrawl.component';
import { TransfermoneyComponent } from './Pages/transfermoney/transfermoney.component';
import { TransactionhistoryComponent } from './Pages/transactionhistory/transactionhistory.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UserhomeComponent,
    UserProfileComponent,
    UsercheckbookComponent,
    AdminhomeComponent,
    UseraccountComponent,
    ChequeComponent,
    AdminhomeComponent,
    UserheadingComponent,
    AdminheadingComponent,
    AddaccountnoComponent,
    CreateaccountnoComponent,
    IcinComponent,
    UserwithdrawlComponent,
    TransfermoneyComponent,
    TransactionhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
