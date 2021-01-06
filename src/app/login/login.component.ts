import {
  Component,
  createPlatformFactory,
  OnInit
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  User
} from '../models/users'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userSubmitted: boolean;
  name: NgForm
  constructor(private _router:Router) {}

  ngOnInit(): void {
    // this createForm()
  }

  user: any = {};
  model: any = {};
  get email() {
    return this.model.get('firstName');
  }

  onSubmit(name: NgForm) {


    let registerUser: Array < object >= JSON.parse(localStorage.getItem('Users'));
console.log(registerUser)

    let findUser = registerUser.findIndex((ele) => {
      return (this.model.firstName == ele['email'] && this.model.password == ele['password'])

    })
console.log(findUser)
    if (findUser != -1) {
      console.log(this.model);
      if (this.model) {
        localStorage.setItem('user', JSON.stringify(this.model));

      }this._router.navigate(['./todo']);
    }


  }



}
