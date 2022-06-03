import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Plan} from '../../schema/plan.model'

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  readonly PlanUrl: any = "https://localhost:44352/api/product";

  constructor(private http: HttpClient) { }

  getPlan(productId:string):Observable<Plan[]> {
    return this.http.get<Plan[]>(this.PlanUrl+`/${productId}/plan`);
  }

  postPlan(productId:string,plan:any): Observable<any> {
    //console.log(plan)
    return this.http.post<any>(this.PlanUrl+`/${productId}/plan`, plan);

  }

  deletePlan(planId: string,productId:string): Observable<any> {
    return this.http.delete(this.PlanUrl+`/${productId}/plan`);
  }

} 
