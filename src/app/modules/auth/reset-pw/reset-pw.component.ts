import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { ValidationService } from '../register1/validation.service';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPwComponent implements OnInit {
  resetForm!:FormGroup;
  isLoading:boolean = false;
  response!:string

  constructor(private _authService:AuthService,private fb:FormBuilder
    ,private validationService:ValidationService) { }

  ngOnInit(): void {
    this.resetForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8),this.validationService.patternValidator()])],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]],
      token:['',[Validators.required]]
    },
    {
      validator: this.validationService.ConfirmedValidator('password', 'confirmPassword'),
    }
    )
  }
  onSubmit(){
    console.log(this.resetForm.value);
    this.isLoading = true;
    this._authService.resetPassword(this.resetForm.value).subscribe(res=>{
      if(res.succeeded){
        this.isLoading = false;
        this.response =res.message+" for "+ res.data;
      }
    })

  }
  get f() {
    return this.resetForm.controls;
  }

}
