import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{AddOnService} from 'src/app/data/service/AddOn/add-on.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddOnPriceService } from 'src/app/data/service/AddOnPrice/add-on-price.service'; 
import { PlanService } from 'src/app/data/service/ProductPlan/plan.service';
import { Plan } from 'src/app/data/schema/plan.model';
//import { MatTableDataSource } from '@angular/material/table';
import { AddOn } from 'src/app/data/schema/addOn';


@Component({
  selector: 'app-add-on-price-dialog',
  templateUrl: './add-on-price-dialog.component.html',
  styleUrls: ['./add-on-price-dialog.component.css']
})
export class AddOnPriceDialogComponent implements OnInit {
 
  submitted = false;
  plans:Plan[]=[];
addOns:AddOn[]=[];

addOnPriceForm: FormGroup = new FormGroup({});


  constructor(public dialogRef: MatDialogRef<AddOnPriceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private addOnService:AddOnService,
    private _addOnPriceService:AddOnPriceService,
    private planservice:PlanService
    ) { }
   
    ngOnInit() {
      this.addOnPriceForm = this.fb.group({
        productPlanId: ['' ,[Validators.required]],
        addOnId: ['', [Validators.required]],
        price: [0, [Validators.required]]
      })

      this.getPlan(this.data.productId);
      this.getAddOn(this.data.productId);
    }

get f() {
  return this.addOnPriceForm.controls;

}

  closeDialog() {
    this.dialogRef.close();
    this.ngOnInit();
  }

  getPlan(productId: string) {
    this.planservice.getPlan(productId).subscribe((data: Plan[]) => {
      this.plans=data;

      console.log(this.plans)
    });
  }

  getAddOn(productId: string) {
    this.addOnService.getAddOns(productId).subscribe((data: AddOn[]) => {
      this.addOns = data
       console.log(this.addOns)
    });
  }


  onSubmit() {
    console.log(this.addOnPriceForm.value);
    if (this.submitted == true) {
      return;
    }

    this._addOnPriceService.createAddOnPrice
    (this.addOnPriceForm.value.productPlanId,this.addOnPriceForm.value.addOnId,this.addOnPriceForm.value)
    .subscribe((res) => {
      console.log(res);
      this.submitted = true;
      this.addOnPriceForm.reset();
      
    })
    this.ngOnInit();
  }

}
