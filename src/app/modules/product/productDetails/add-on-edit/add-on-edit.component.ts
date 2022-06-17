import { Component, OnInit ,Inject} from '@angular/core';
import{AddOnService} from 'src/app/data/service/AddOn/add-on.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AddOn} from 'src/app/data/schema/addOn';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-on-edit',
  templateUrl: './add-on-edit.component.html',
  styleUrls: ['./add-on-edit.component.css']
})
export class AddOnEditComponent implements OnInit {
  addOn!:AddOn;
productId!:string;
  addOnId!: string;
  addOnForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(public _activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private addOnService:AddOnService, 
    public router: Router)
     {  this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
     this.addOnId = this._activatedRoute.snapshot.paramMap.get('addOnId') || '';
    console.log(this.productId);
    console.log(this.addOnId);
    }


  ngOnInit() {
    this.getAddOnById(this.addOnId,this.productId);

    this.addOnForm = this.fb.group({
      name: ['', [Validators.required]],
      unitOfMeasure: ['', [Validators.required]] ,
      productId: [this.productId, [Validators.required]]
    })
  }

  get f() { return this.addOnForm.controls;}

  
  getAddOnById(addOnId: string, productId: string) {
    this.addOnService.getAddOnById(addOnId, productId).subscribe(resp => {
      this.addOn = resp;
      console.log(this.addOn)
      console.log(this.addOn.addOnId);
    })
  }

  onEdit(addOnId: string) {

    console.log(this.addOnForm.value);
    if (this.submitted == true) {
      return;
    }

    this.addOnService
    .updateAddOn(this.productId, this.addOnId, this.addOnForm.value).subscribe
    (res => {
      console.log(res);
      this.submitted = true;
      this.addOnForm.reset();
      this.router.navigate(['/product/' + this.productId]);
      this.ngOnInit();
    })

  }

}
