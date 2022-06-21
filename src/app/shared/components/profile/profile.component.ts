import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseData } from 'src/app/data/schema/auth/loginResponseData';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser!: LoginResponseData | null;
  role!: string | null;

  constructor(private router: Router, private _authService: AuthService) {}
  ngOnInit(): void {
    if (this._authService.currentUserValue) {
      this.currentUser = this._authService.currentUserValue;
      console.log(this.currentUser + 'efgv');
    }
    this.role = this._authService.getRole();
  }

  isProfile() {
    return this.router.url == '/profile';
  }
  navigateToOrganizationProfile() {
    this.router.navigate(['/organization']);
  }
  navigateToUserProfile() {
    this.router.navigate(['/profile']);
  }
  logout() {
    this._authService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
