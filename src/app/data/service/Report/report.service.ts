import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../../schema/Stats';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  readonly baseURL = 'https://localhost:44352/api/report/';

  constructor(private http:HttpClient) { }

  getSubscriptionStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"sub-summary");
  }
  getActivationsStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"sub-activation");
  }
  getUpgradesStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"upgrade");
  }
  getDowngradeStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"downgrade");
  }
  getUnsubscriptionStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"unsubscribe");

  }
  getSalesByPlanStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"sales-by-plan");
  }
  getSalesByAddOnStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"sales-by-addOn");
  }
  getRevenueStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL+"revenue");
  }

}
