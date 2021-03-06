import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { UserService } from 'src/app/data/service/auth/user.service';
import { User } from 'src/app/data/schema/user';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfilePageComponent implements OnInit {
  isLoading = false;
  UserProfileForm: FormGroup = new FormGroup({});
  submitted = false;
  profilePreviewPath!: string;
  imageSelected: boolean = false;
  userId!: string;
  userDetail!: User;
  response!: string;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _userService: UserService,
    private router: Router,
    private _notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    if (this._authService.currentUserValue) {
      this.userId = this._authService.currentUserValue.id;
    }

    this.getUserById(this.userId);

    this.UserProfileForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profilePath: [''],
      profileImage: [''],
      userName: ['', [Validators.required]],
    });
  }

  get f() {
    return this.UserProfileForm.controls;
  }

  getUserById(userId: string) {
    this._userService.getUserById(userId).subscribe((resp) => {
      this.userDetail = resp;

      console.log(resp);
    });
  }
  showToasterSuccess() {
    this._notificationService.showSuccess('Hi !!', 'Dasi');
  }

  onSubmit() {
    if (this.submitted == true) {
      return;
    }
    console.log(this.UserProfileForm.value);
    const formData = new FormData();
    formData.append('fullName', this.UserProfileForm.value.fullName);
    formData.append('email', this.UserProfileForm.value.email);
    formData.append('profileImage', this.UserProfileForm.value.profileImage);
    formData.append('userName', this.UserProfileForm.value.userName);
    console.log(this.UserProfileForm.value);
    this.isLoading = true;

    this._userService.updateUser(this.userId, formData).subscribe((resp) => {
      this.UserProfileForm.reset();
      this.ngOnInit();
      this.response = resp;
      this.isLoading = false;
      this._notificationService.showSuccess(this.response, 'Rx');
    });

    this.submitted = true;
    this.profilePreviewPath = '';
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
      };
      reader.readAsDataURL(file);
      this.imageSelected = true;
    }
  }
}
