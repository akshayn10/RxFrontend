import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { Component, OnInit } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/data/service/auth/auth.service';
// import { UserService } from 'src/app/data/service/auth/user.service';
// import { ValidationService } from './validation.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfilePageComponent implements OnInit {

  isLoading = false;
  UserProfileForm: FormGroup = new FormGroup({});
  submitted = false;
  profilePreviewPath!: string;
  imageSelected: boolean = false;
  constructor(
    private formBuilder: FormBuilder,) {

  }


  ngOnInit(): void {
    this.UserProfileForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profilePath: [''],
      profileImage: [null],
      userName: ['', [Validators.required]]
    },
    )
  }

  get f() { return this.UserProfileForm.controls; }

  onSubmit() {

    // if (this.UserProfileForm.invalid) {
    //   return;
    // }
    console.log(this.UserProfileForm.value);
    const formData = new FormData();
    formData.append('fullName', this.UserProfileForm.value.fullName);
    formData.append('email', this.UserProfileForm.value.email);
    formData.append('profileImage', this.UserProfileForm.value.profileImage);
    formData.append('userName', this.UserProfileForm.value.userName);
    console.log(formData);
    this.isLoading = true;

    // this._authService.registerUser(formData).subscribe(
    //   (data)=>{
    //     console.log(data);
    //     this.submitted = true;
    //     this.isLoading = false;
    //     this.router.navigate(['/auth/signup2']);
    //   }
    // )
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.UserProfileForm.patchValue({
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
