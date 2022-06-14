import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {

  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({

      email:['', [Validators.required ,Validators.email]],
     password:['', [Validators.required,Validators.minLength(6)] ]


    })

  }


  get f() { return this.loginForm.controls; }


}
