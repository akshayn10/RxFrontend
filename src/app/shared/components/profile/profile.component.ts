import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  constructor(private router: Router) {}
  ngAfterViewInit(): void {
  }
  isProfile() {
    return this.router.url == '/profile';
  }
}
