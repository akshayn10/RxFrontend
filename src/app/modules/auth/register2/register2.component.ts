import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResponseData } from 'src/app/data/schema/auth/loginResponseData';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { OrganizationService } from 'src/app/data/service/organization/organization.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css'],
})
export class Register2Component implements OnInit {
  isLoading = false;
  organizationForm: FormGroup = new FormGroup({});
  submitted = false;
  logoPreviewPath!: string;
  imageSelected: boolean = false;
  ownerId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private _organizationService: OrganizationService,
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this._authService.currentUserValue) {
      this.ownerId = this._authService.currentUserValue.id;
    }
    this.organizationForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      logoPath: ['', [Validators.required]],
      logoImage: [null, [Validators.required]],
      email: ['', [Validators.required]],
      accountOwnerId: ['', [Validators.required]],
      organizationAddress: this.formBuilder.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
      }),
    });
  }

  get f() {
    return this.organizationForm.controls;
  }
  onSubmit() {
    // if (this.organizationForm.invalid) {
    //   return;
    // }
    const formData = new FormData();
    console.log(this.organizationForm.value);
    formData.append('name', this.organizationForm.value.name);
    formData.append('description', this.organizationForm.value.description);
    formData.append('logoImage', this.organizationForm.value.logoImage);
    formData.append('email', this.organizationForm.value.email);
    formData.append('accountOwnerId',this.organizationForm.value.accountOwnerId);
    formData.append('organizationAddress',JSON.stringify(this.organizationForm.value.organizationAddress));
    console.log(formData);
    this.isLoading = true;
    this.submitted = true;

    // this._organizationService.createOrganization(formData).subscribe((res) => {
    //   this.organizationForm.reset();
    //   console.log(res);
    //   this.isLoading = false;
    // });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.organizationForm.patchValue({
        logoImage: file,
      });
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreviewPath = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.imageSelected = true;
    }
  }
}
