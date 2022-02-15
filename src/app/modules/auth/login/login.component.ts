import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
    
  })
  get name(){return this.loginForm.get('name');}
  get password(){return this.loginForm.get('password');}

  constructor() { }

  ngOnInit(): void {
  }

}
