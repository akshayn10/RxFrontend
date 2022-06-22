import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { ValidationService } from '../register1/validation.service';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.component.html',
  styleUrls: ['./change-pw.component.css'],
})
export class ChangePwComponent implements OnInit {
  changePasswordForm!: FormGroup;
  isLoading: boolean = false;
  response!: string;
  userEmail!: string;

  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private validationService: ValidationService
  ) {}

  get f() {
    return this.changePasswordForm.controls;
  }

  ngOnInit(): void {
    if(this._authService.currentUserValue){
      this.userEmail = this._authService.currentUserValue.email;
    }

    this.changePasswordForm = this.fb.group({
      email: [this.userEmail, [Validators.required, Validators.email]],
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8),this.validationService.patternValidator()])],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    },
    {
      validator: this.validationService.ConfirmedValidator('password', 'confirmPassword'),
    }
    );
  }
  onSubmit() {
    console.log(this.changePasswordForm.value);
    this.isLoading = true;
    this._authService.changePassword(
      this.changePasswordForm.value.email,
      this.changePasswordForm.value.oldPassword,
      this.changePasswordForm.value.password
      )
      .subscribe(res => {
      if (res.succeeded) {
        this.isLoading = false;
        this.response = res.data;
      }
    });
  }

}
