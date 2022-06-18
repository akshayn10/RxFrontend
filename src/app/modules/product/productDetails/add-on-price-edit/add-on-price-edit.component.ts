import { Component, OnInit ,Inject} from '@angular/core';
import{AddOnPriceService} from 'src/app/data/service/AddOnPrice/add-on-price.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AddOnPrice} from 'src/app/data/schema/addOnPricePerPlan';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-on-price-edit',
  templateUrl: './add-on-price-edit.component.html',
  styleUrls: ['./add-on-price-edit.component.css']
})

export class AddOnPriceEditComponent implements OnInit {
addOnPrice!:AddOnPrice;
addOnPricePerPlanId!:string;
addOnPriceForm: FormGroup = new FormGroup({});
submitted = false;
productId!:string;
  constructor(public _activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private addOnPriceService:AddOnPriceService,
              public router: Router) 
              {this.addOnPricePerPlanId=this._activatedRoute.snapshot.paramMap.get('addOnPriceId') || '';
               this.productId=this._activatedRoute.snapshot.paramMap.get('id') || '';}

               
 

  ngOnInit() {
    this.getAddOnPriceById(this.addOnPricePerPlanId);

    this.addOnPriceForm = this.fb.group({
      addOnPricePerPlanId: [''],
      price: [0, [Validators.required]],
      productPlanId: ['' ],
      addOnId: ['']
      
    })
   
  }

  get f() { return this.addOnPriceForm.controls;}

  getAddOnPriceById(addOnPricePerPlanId: string) {
    this.addOnPriceService.getAddOnPriceById(this.addOnPricePerPlanId).subscribe(resp => {
      this.addOnPrice = resp;
      console.log(this.addOnPrice)
      console.log(this.addOnPrice.addOnPricePerPlanId);
    })}


  onEdit(addOnPricePerPlanId: string) {
        console.log(this.addOnPriceForm.value);
        if(this.submitted == true){
         return;
      }

      this.addOnPriceForm.patchValue({
        addOnPricePerPlanId: this.addOnPrice.addOnPricePerPlanId,
        productPlanId: this.addOnPrice.productPlanId,
        addOnId: this.addOnPrice.addOnId
      });
      console.log(this.addOnPriceForm.value);

     this.addOnPriceService.updateAddOnPrice(this.addOnPricePerPlanId,this.addOnPriceForm.value).subscribe(resp => {
        console.log(resp);
        this.submitted = true;
        this.addOnPriceForm.reset();
        this.router.navigate(['/product/'+this.productId]);
    //this.ngOnInit;
          })
    }


}
