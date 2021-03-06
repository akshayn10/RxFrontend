import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/data/service/organization/organization.service';
import { OrganizationDetail } from 'src/app/data/schema/organization';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.css']
})

export class OraganizationProfileComponent implements OnInit {
  organizationForm: FormGroup = new FormGroup({});
  isLoading = false;
  submitted = false;
  logoPreviewPath!: string;
  imageSelected: boolean = false;
  organizationId!: string;
  organization!: OrganizationDetail;

  constructor(private formBuilder: FormBuilder,
    private _organizationService: OrganizationService,
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this._authService.currentUserValue) {
      this.organizationId = this._authService.currentUserValue.organizationId;
      console.log(this.organizationId)
    }

    this.getOrganizationById(this.organizationId)

    this.organizationForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      logoPath: [''],
      logoImage: [null],
      email: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });

  }


  get f() { return this.organizationForm.controls; }

  getOrganizationById(organizationId: string) {
    this._organizationService.getOrganizationById(organizationId).subscribe(resp => {
      this.organization = resp;
      console.log(resp);
    })
  }

  onEdit(organizationId: string) {
    const formData = new FormData();
    console.log(this.organizationForm.value);
    formData.append('name', this.organizationForm.value.name);
    formData.append('description', this.organizationForm.value.description);
    formData.append('logoImage', this.organizationForm.value.logoImage);
    formData.append('email', this.organizationForm.value.email);
    formData.append('addressLine1', this.organizationForm.value.addressLine1);
    formData.append('addressLine2', this.organizationForm.value.addressLine2);
    formData.append('city', this.organizationForm.value.city);
    formData.append('state', this.organizationForm.value.state);
    formData.append('country', this.organizationForm.value.country);
    console.log(this.organizationForm.value);
    this.isLoading = true;
    this.submitted = true;

    this._organizationService.updateOrganization(this.organizationId, formData).subscribe((res) => {
      this.organizationForm.reset();
      console.log(res);
      this.isLoading = false;
      this.ngOnInit();
    });
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

