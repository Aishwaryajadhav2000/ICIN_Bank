import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Allusers } from '../Pages/class/allusers';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public baseURL = "http://localhost:8080/simplilearn/icinbank";


  constructor(
    public http: HttpClient
  ) { }


  register(data){
   return this.http.post(this.baseURL + '/registration', data);
  }

login(username){
  return this.http.get(this.baseURL + "/login" + "/" + username);
}

// getalluser(){
//   return this.http.get(this.baseURL + "/getallusers");
// }

getalluser(){
  return this.http.get<Allusers>(this.baseURL + "/getallusers");
}

// addaccount(id,data){
//   return this.http.post(this.baseURL + "/saveaccountno", data);
// }
// addaccount(id,data){
//   return this.http.post(this.baseURL + "/registration", data);
// }
// accountno(username:any,data){
//     return this.http.post(this.baseURL + "/addaccountno" + "/" + username, data);
//   }

accountno(userid:number,data){
  return this.http.post(this.baseURL + "/addaccountno" + "/" + userid, data);
}


getaccountno(username){
return this.http.get(this.baseURL + "/getaccountno" + "/" + username);
}

getaccountbalance(username){
  return this.http.get(this.baseURL + "/getaccountbalance" + "/" + username);
}

requestforcheckbook(data){
  return this.http.post(this.baseURL + "/checkbookrequest", data);
}

getcheckbookrequest(){
  return this.http.get(this.baseURL + "/getcheckbookrequests" );
}

//get user by userid
getuserbyuserid(id){
  return this.http.get(this.baseURL + "/getuser" + "/" + id)
}

//transfer and debited money
transfermoney(data){
  return this.http.post(this.baseURL + "/transaction" , data);
}

//get transaction history
transactionhistory(username){
return this.http.get(this.baseURL + "/transactionhistory" + "/" + username);
}


}
