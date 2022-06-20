import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { AddOnUsage } from '../../schema/addUsage';
import { CustomerSubscription } from '../../schema/cutomerSubscriptions';
import { Subscription } from '../../schema/subcription';
import { SubscriptionStats } from '../../schema/subscriptionStats';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {


  readonly subscriptionBaseApiUrl = 'https://localhost:44352/api/subscription';

  constructor(private httpClient:HttpClient) { }

  getAllSubscriptions():Observable<Subscription[]>{
    return this.httpClient.get<Subscription[]>(`${this.subscriptionBaseApiUrl}`)
  }
  getSubscriptionDetails(subscriptionId: string): Observable<Subscription> {
    return this.httpClient.get<Subscription>(`${this.subscriptionBaseApiUrl}/${subscriptionId}`)
  }

  getCustomerSubscriptions(id: string): Observable<CustomerSubscription[]> {
    console.log(id);
    return this.httpClient.get<CustomerSubscription[]>(`${this.subscriptionBaseApiUrl}/customer/${id}`)

  }
  getAddOnUsage(subscriptionId:string):Observable<AddOnUsage[]>{
    return this.httpClient.get<AddOnUsage[]>('https://localhost:44352/api/AddOnUsage/subscription/'+subscriptionId);
  }
  getSubscriptionStats():Observable<SubscriptionStats>{
    return this.httpClient.get<SubscriptionStats>(`${this.subscriptionBaseApiUrl}/sub-stats`);

  }

}
