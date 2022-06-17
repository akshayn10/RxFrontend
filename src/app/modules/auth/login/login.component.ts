import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { UserService } from 'src/app/data/service/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder,private _authService:AuthService,private router:Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [Validators.required ,Validators.email]],
     password:['', [Validators.required,Validators.minLength(8)] ]


    })

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this._authService.loginUser(this.loginForm.value).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/dashboard']);

      }
  )}


}
