import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/data/service/Product/product.service';
import { Product } from 'src/app/data/schema/product.model'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: string;
  product!: Product;
  planId!: string;
  productForm: FormGroup = new FormGroup({});
  submitted = false;
  logoPreviewPath!: string;
  imageSelected: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productservice: ProductService, public _activatedRoute: ActivatedRoute, public router: Router
  ) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
   
  }

  ngOnInit(): void {

    this.getProductById(this.productId);

    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      logoPath: [''],
      logoImage: [''],
      webhookURL: ['', [Validators.required]],
      redirectUrl: ['', [Validators.required]],

      freeTrialDays: [0, [Validators.required]],
    });
  }

  get f() {
    return this.productForm.controls;
  }

  getProductById(productId: string) {
    this.productservice.getProductById(productId).subscribe(resp => {
      this.product = resp;
      console.log(resp);


    })
  }

  onEdit(productId: string) {
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


    this.productservice.updateProduct(productId, formData).subscribe(resp => {
      this.productForm.reset();
      this.router.navigate(['/product/' + productId]);
    })


    this.submitted = true;
    this.logoPreviewPath = "";
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
