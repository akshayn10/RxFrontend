import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { AuthService } from 'src/app/data/service/auth/auth-service.service';
=======
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';
>>>>>>> f67b6de4b18d47cf20f49e81db348e3c7e7f990f
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
<<<<<<< HEAD
    private _tokenService: TokenStorageService
=======
    private router: Router
>>>>>>> f67b6de4b18d47cf20f49e81db348e3c7e7f990f
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
<<<<<<< HEAD
    console.log(this.loginForm.value);
    this._authService.loginUser(this.loginForm.value).subscribe((res) => {
      if (res.succeeded) {
        console.log(res.data.email);
        this._tokenService.saveToken(res.data.jwtToken);
        this._tokenService.saveRefreshToken(res.data.refreshToken);
        this._tokenService.saveUser(res.data.userName);
        this._tokenService.setRoles(res.data.roles);
        this._authService.setLoginState(true);
        this._authService.setRole()
        return;
      }
    });
  }
  logout() {
    this._authService.signOut();
=======
    this._authService.loginUser(this.loginForm.value).subscribe((res) => {
      if (res.succeeded) {
        console.log(res.data.userName);
        this._authService.setCurrentUserSubject(res.data);
        this._authService.setLocalStorage(res.data);
        this.router.navigate(['/dashboard']);
        return;
      }
    });

  }

  logout() {
    this._authService.signOut();
    this.router.navigate(['/auth/login']);
>>>>>>> f67b6de4b18d47cf20f49e81db348e3c7e7f990f
  }
}
