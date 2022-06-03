import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/data/service/Product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  //providers:[SharedService]
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  submitted = false;
  logoPreviewPath!: string;
  imageSelected:boolean = false;

  constructor(
    private fb: FormBuilder,
    private productservice: ProductService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      logoPath: [''],
      logoImage: [null],
      webhookURL: ['', [Validators.required]],
      redirectUrl: ['', [Validators.required]],
     
      freeTrialDays: [0, [Validators.required]],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    if (this.submitted == true) {
      return;
    }
    const formData = new FormData();
    formData.append('name', this.productForm.value.name);
    formData.append('description', this.productForm.value.description);
    formData.append('logoImage', this.productForm.value.logoImage);
    formData.append('webhookURL', this.productForm.value.webhookURL);
    formData.append('redirectUrl', this.productForm.value.redirectUrl);
    formData.append('freeTrialDays', this.productForm.value.freeTrialDays);

    console.log(this.productForm.value);

    this.productservice
      .CreateProduct(formData)
      .subscribe((res) => {
        this.productForm.reset();
        console.log(res);
      });
    this.submitted = true;
    this.logoPreviewPath="";
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.patchValue({
        logoImage: file,
      });
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreviewPath = reader.result as string;
      }
      reader.readAsDataURL(file);
      this.imageSelected = true;
    }
  }
}
