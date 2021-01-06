import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private _router:Router){}

  canActivate():boolean {

    if(JSON.parse(localStorage.getItem('user')).firstName){
      // this._router.navigate(['./todo'])
      return true;
    }else{
      this._router.navigate(['./login'])
      return false;
    }





  }


}
