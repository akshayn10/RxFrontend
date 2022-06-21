import { Component, AfterViewInit, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  role!:string|null;


  constructor(private router: Router,private _authService:AuthService) {}
  ngOnInit(): void {
    this.role=this._authService.getRole();
  }

  isDashboard() {
    return this.router.url == '/dashboard';
  }
  isSubscription() {
    return this.router.url == '/subscription';
  }
  isCustomer() {
    return this.router.url == '/customer';
  }
  isProduct() {
    return this.router.url == '/product';
  }
  isBill() {
    return this.router.url == '/bill';
  }
  isreports() {
    return this.router.url == '/reports';
  }
  isHelp() {
    return this.router.url == '/help';
  }
}
