import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { UserService } from 'src/app/data/service/auth/user.service';

interface Role{
  value:string
  type:string
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  roles :Role[]=[
    {value:"Admin",type:'ADMIN'},
    {value:"FinanceUser",type:'FINANCE USER'},
  ]
  organizationId!:string
  response!:string;

  userForm!: FormGroup;
  constructor(private fb: FormBuilder,private _authService:AuthService,
    private userService:UserService,private router:Router) {

  }


  ngOnInit(): void {
    if(this._authService.currentUserValue){
      this.organizationId=this._authService.currentUserValue.organizationId;
    }

    this.userForm = this.fb.group({

      username:['', [Validators.required ]],
      email:['', [Validators.required,Validators.email ]],
      role:['', [Validators.required ]],
      organizationId:[this.organizationId, [Validators.required ]],


    })

  }


  get f() { return this.userForm.controls; }

  onSubmit(){
    if(this.userForm.invalid){
      return;
    }
    console.log(this.userForm.value);
    this.userService.addUserToOrganization(this.userForm.value).subscribe(
      data => {
        console.log(data);
        this.response = data;
        this.router.navigate(['/organization/user-roles']);
      }
    )
  }

}
