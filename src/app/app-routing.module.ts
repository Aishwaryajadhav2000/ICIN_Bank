import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { UserhomeComponent } from './Pages/userhome/userhome.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { UsercheckbookComponent } from './Pages/usercheckbook/usercheckbook.component';
import { AdminhomeComponent } from './Pages/adminhome/adminhome.component';
import { ChequeComponent } from './Pages/cheque/cheque.component';
import { UseraccountComponent } from './Pages/useraccount/useraccount.component';
import { AddaccountnoComponent } from './Pages/addaccountno/addaccountno.component';
import { CreateaccountnoComponent } from './Pages/createaccountno/createaccountno.component';
import { IcinComponent } from './Pages/icin/icin.component';
import { TransfermoneyComponent } from './Pages/transfermoney/transfermoney.component';
import { TransactionhistoryComponent } from './Pages/transactionhistory/transactionhistory.component';
import { UserwithdrawlComponent } from './Pages/userwithdrawl/userwithdrawl.component';
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'signUp', component:SignUpComponent},
  {path: 'userhome', component:UserhomeComponent},
  {path: 'userprofile', component : UserProfileComponent},
  {path: 'userCheckBook', component: UsercheckbookComponent},
  {path: 'adminhome', component:AdminhomeComponent},
  {path : 'cheque', component:ChequeComponent},
  {path: 'useraccount', component: UseraccountComponent},
  {path: 'createaccount', component: AddaccountnoComponent},
  {path:'createacoountno/:userid', component:CreateaccountnoComponent},
  {path:'icin', component:IcinComponent},
  {path:'withdrawl', component:UserwithdrawlComponent},
  {path: 'transfermoney', component:TransfermoneyComponent},
  {path: 'transactionhistory', component:TransactionhistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
