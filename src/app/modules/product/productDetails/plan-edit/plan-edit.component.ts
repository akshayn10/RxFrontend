import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanService } from 'src/app/data/service/ProductPlan/plan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from 'src/app/data/schema/plan.model';

@Component({
  selector: 'app-plan-edit',
  templateUrl: './plan-edit.component.html',
  styleUrls: ['./plan-edit.component.css']
})
export class PlanEditComponent implements OnInit {
  plan!: Plan;
  productId: string;
  planForm: FormGroup = new FormGroup({});
  submitted = false;
  planId: string;

  constructor(public _activatedRoute: ActivatedRoute,
    private fb: FormBuilder, private planservice: PlanService, public router: Router) {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id') || '';
    this.planId = this._activatedRoute.snapshot.paramMap.get('planId') || '';
    console.log(this.planId+this.productId)

  }

  ngOnInit(): void {
    this.getPlanById(this.planId, this.productId);

    this.planForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      duration: [0, [Validators.required]],
      haveTrial: [false, [Validators.required]],
      productId: [this.productId, [Validators.required]]
    })
  }

  get f() { return this.planForm.controls; }



  getPlanById(planId: string, productId: string) {
    this.planservice.getPlanById(planId, productId).subscribe(resp => {
      this.plan = resp;
      console.log(this.plan);
    })
  }

  onEdit(planId: string) {
    console.log(this.planForm.value)
    if (this.submitted == true) {
      return;
    }

    this.planservice.updatePlan(planId, this.productId, this.planForm.value).subscribe(res => {
      console.log(res);
      this.submitted = true;
      this.planForm.reset();
      this.router.navigate(['/product/' + this.productId]);
    })
    this.submitted = true;

  }
}