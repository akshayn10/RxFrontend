import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginResponseData } from 'src/app/data/schema/auth/loginResponseData';
import { SystemSubscriptionPlan } from 'src/app/data/schema/Organization/SystemSubscriptionPlan';
import { AuthService } from 'src/app/data/service/auth/auth.service';
import { SystemSubscriptionService } from 'src/app/data/service/SystemSubscription/system-subscription.service';

interface SubType{
  value:boolean;
  type:string
}
@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {
  registerForm3: FormGroup = new FormGroup({});
  submitted=false;
  organizationId!: string;
  plans!:SystemSubscriptionPlan[];
  isLoading=false;
  response!:string;

  types:SubType[]=[
    {type:"OneTime",value:false},
    {type:"Recurring",value:true}
  ]



  constructor(private formBuilder:FormBuilder,private _systemSubscriptionService:SystemSubscriptionService,private _authService:AuthService) { }

  ngOnInit(): void {
    this.getPlans();
    if (this._authService.currentUserValue) {
      this.organizationId = this._authService.currentUserValue.organizationId;
    }
    this.registerForm3 = this.formBuilder.group({
      systemSubscriptionPlanId:['',[Validators.required]],
      subscriptionType:[false,[Validators.required]],
      organizationId:[this.organizationId,[Validators.required]],
    })
  }

  get f() { return this.registerForm3.controls; }
  getPlans(){
    this._systemSubscriptionService.getAllPlans().subscribe((resp)=>{
      console.log(resp);
      this.plans=resp;
    })
  }

  createSubscription(){
    this.isLoading=true;
    this._systemSubscriptionService.createSystemSubscription(this.registerForm3.value).subscribe((resp)=>{
      console.log("success"+resp);
      this.isLoading=false;
      this.response=resp;
    })
  }

  onSubmit() {
    this.submitted = true;
    if(this.registerForm3.invalid){
      return;
    }
    this.isLoading=true;
    this._systemSubscriptionService.createSystemSubscription(this.registerForm3.value).subscribe((resp)=>{
      console.log("success"+resp);
      this.isLoading=false;
      this.response=resp;
    })

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm3.value))
  }

}
