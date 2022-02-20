import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullname: ['', Validators.required ],
      email:['', Validators.required ],
      username:['', Validators.required ],
      role:['', Validators.required ],
      phoneNumber:['', Validators.required ]

    })

    
    
  }

  get f() { return this.userForm.controls; }

}
