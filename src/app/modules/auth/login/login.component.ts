import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { AuthService } from 'src/app/data/service/auth/auth-service.service';
import { UserService } from 'src/app/data/service/auth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _tokenService: TokenStorageService
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
    console.log(this.loginForm.value);
    this._authService.loginUser(this.loginForm.value).subscribe((res) => {
      if (res.succeeded) {
        console.log(res.data.email);
        this._authService.setCurrentUserSubject(res.data);
        this._tokenService.saveToken(res.data.jwtToken);
        this._tokenService.saveRefreshToken(res.data.refreshToken);
        this._tokenService.saveUser(res.data);
        this._tokenService.setRoles(res.data.roles);
        this._authService.setLoginState(true);
        this._authService.setRole()
        return;
      }
    });
  }

  logout() {
    this._authService.signOut();
  }
}
