import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SystemSubscriptionPlan } from '../../schema/Organization/SystemSubscriptionPlan';

@Injectable({
  providedIn: 'root'
})
export class SystemSubscriptionService {
  readonly baseUrl = environment.baseApiUrl+"organization/";

  constructor(private http:HttpClient) { }

  getAllPlans():Observable<SystemSubscriptionPlan[]>{
    return this.http.get<SystemSubscriptionPlan[]>(this.baseUrl+"plan");
  }
  createSystemSubscription(subscriptionForm:any){
    return this.http.post(this.baseUrl+"subscription",subscriptionForm,{responseType:'text'});
  }

}
