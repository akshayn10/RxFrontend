import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/core/service/notification.service';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {
  userId!: string;
  code!: string;
  response!:string;

  constructor(private route:ActivatedRoute,private _authService:AuthService,private router:Router,private notification:NotificationService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.code = params['code'];
      this.userId = params['userId'];
      this.confirmEmail();
    });
  }
  confirmEmail(){
    this._authService.confirmEmail(this.userId,this.code).subscribe((res) => {
      if(res.succeeded){
        console.log(res.data);
        this.response = res.data;
        this.notification.showSuccess("Email Verified","Confirm Email");
      }
      else{
        this.notification.showError("Email Verify error","Confirm Email");
      }
    })
  }
  navigateToLogin(){
    this.router.navigate(['/auth/login']);
  }
}
