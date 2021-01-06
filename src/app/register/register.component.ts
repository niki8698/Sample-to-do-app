import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  user:any={};
  userSubmitted:boolean;

  /**constructor(private formBuilder:FormBuilder) {
    this.registerForm = formBuilder.group({
      emailaddr : new FormControl(),
      passwrd : new FormControl()

    });


  }**/
  constructor(private fb:FormBuilder,private userService:UserServiceService){}

  ngOnInit(): void {
    /**this.registerForm=new FormGroup({

      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      repeatpassword:new FormControl(null,[Validators.required])

  },this.passwordMatchingValidator);**/
  this.createRegistrationForm();
  }


  createRegistrationForm(){
    this.registerForm=this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      repeatpassword:[null,[Validators.required]]

    },{validators:this.passwordMatchingValidator});

  }

  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password').value=== fg.get('repeatpassword').value?null:{
      notmatched:true
    }
  }

  get email()
  {
    return this.registerForm.get('email') as FormControl;
  }

  get password()
  {
    return this.registerForm.get('password') as FormControl;
  }

  get repeatpassword()
  {
    return this.registerForm.get('repeatpassword') as FormControl;
  }



  postData()
  {

    console.log(this.registerForm.value);
    this.userSubmitted = true;
    if(this.registerForm.valid){
    this.user=Object.assign(this.user,this.registerForm.value);
    this.userService.addUser(this.user);
    this.registerForm.reset();
    this.userSubmitted = false;

  }
  }


}

