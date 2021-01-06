import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser

 // private _registerUrl ="http://localhost:4200/register";
 // private _loginUrl ="http://localhost:4200/login";

 constructor(private http:HttpClient) { }


  //islogin(){
    //return false;
  //}
  /* register(Users){
    return this.http.post<any>(this._registerUrl,Users)
  }
  login(Users){
    return this.http.post<any>(this._loginUrl,Users)
  }*/



  loggedIn(){
    //return !!localStorage.getItem('Users');


  }




}
