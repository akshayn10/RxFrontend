import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
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


  get f() { return this.organizationForm.controls; }

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

