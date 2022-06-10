import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  loginForm!: FormGroup;
  router: any;
  constructor(private fb: FormBuilder) {

  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({

      email:['', [Validators.required ,Validators.email]],
     password:['', [Validators.required,Validators.minLength(6)] ]


    })

  }


  get f() { return this.loginForm.controls; }
  isUserRole() {
    return this.router.url == '/add-user';
  }

}
