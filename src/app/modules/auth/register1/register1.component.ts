import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { UserService } from 'src/app/data/service/auth/user.service';
import { ValidationService } from './validation.service';


@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted=false;
  profilePreviewPath!: string;
  imageSelected:boolean = false;

  constructor(private formBuilder: FormBuilder,private _authService:AuthService,private validationService:ValidationService) {
   }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['',[ Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profilePath: [''],
      profileImage: [null],
      userName: ['',[ Validators.required]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8),this.validationService.patternValidator()])],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]]
    },
    {
      validator: this.validationService.ConfirmedValidator('password', 'confirmPassword'),
    }
    )
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
        return;
    }
    console.log(this.registerForm.value);
    const formData = new FormData();
    formData.append('fullName', this.registerForm.value.fullName);
    formData.append('email', this.registerForm.value.email);
    formData.append('profileImage', this.registerForm.value.profileImage);
    formData.append('userName', this.registerForm.value.userName);
    formData.append('password', this.registerForm.value.password);
    formData.append('confirmPassword', this.registerForm.value.confirmPassword);


    console.log(formData);

    this._authService.registerUser(formData).subscribe(
      (data)=>{
        console.log(data);
        this.submitted = true;
      }
    )
}



onFileChange(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.registerForm.patchValue({
      profileImage: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.profilePreviewPath = reader.result as string;
    }
    reader.readAsDataURL(file);
    this.imageSelected = true;
  }
}
}
