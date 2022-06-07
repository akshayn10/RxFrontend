import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PlanService } from 'src/app/data/service/ProductPlan/plan.service';
import { Product } from 'src/app/data/schema/product.model'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
productId:string;
  planForm: FormGroup= new FormGroup({});
  submitted = false;


  constructor(public _activatedRoute: ActivatedRoute,private fb: FormBuilder, private planservice: PlanService) 
  {this.productId = this._activatedRoute.snapshot.paramMap.get('id')||'';}

  ngOnInit(): void {
    this.planForm = this.fb.group({
      name: ['', [Validators.required] ],
      description:['',[ Validators.required] ],
      price:[0, [Validators.required] ],
      duration:[0, [Validators.required] ],  
      trial:[false,[ Validators.required] ] ,
      productId:[this.productId,[ Validators.required] ] 
    })  
  }

  get f() { return this.planForm.controls; }


onSubmit() {
  console.log(this.planForm.value)
  if (this.submitted == true) {
    return;
  }
  
  this.planservice.postPlan(this.productId,this.planForm.value).subscribe(res => {
    console.log(res);
    this.submitted = true;
    this.planForm.reset();
  })
 
}

}
