import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.css']
})
export class ForgetPWComponent implements OnInit {
  response!:string;
  forgotForm!:FormGroup;
  isLoading = false;

  constructor(private _authService:AuthService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgotForm=this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  get f() { return this.forgotForm.controls; }
  forgotPassword(){
    this.isLoading = true;
    this._authService.forgotPassword(this.forgotForm.value).subscribe(res=>{
      this.isLoading = false;
      this.response = res;
    });
  }

}
