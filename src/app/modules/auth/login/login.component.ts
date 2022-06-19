import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { UserService } from 'src/app/data/service/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;
    this._authService.loginUser(this.loginForm.value).subscribe((res) => {
      if (res.succeeded) {
        console.log(res.data.userName);
        this._authService.setCurrentUserSubject(res.data);
        this._authService.setLocalStorage(res.data);
        if(res.data.organizationId){
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
        return;
        }
        this.router.navigate(['/auth/signup2']);
        this.isLoading = false;
        return
      }
    });

  }

  logout() {
    this._authService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
