import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  token!:string;

  constructor(private _authService:AuthService,private fb:FormBuilder
    ,private validationService:ValidationService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['token'];
    });

    this.resetForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8),this.validationService.patternValidator()])],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]],
      token:[this.token,[Validators.required]]
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
        this.router.navigate(['/auth/login']);
        this.response =res.message+" for "+ res.data;
      }
    })

  }
  get f() {
    return this.resetForm.controls;
  }

}
