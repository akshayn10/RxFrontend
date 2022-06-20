import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Plan} from '../../schema/plan.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  readonly PlanUrl: any = environment.baseApiUrl+"product";

  constructor(private http: HttpClient) { }

  getPlan(productId:string):Observable<Plan[]> {
    return this.http.get<Plan[]>(this.PlanUrl+`/${productId}/plan`);
  }

  getPlanById(planId:string,productId:string):Observable<Plan> {
    return this.http.get<Plan>(this.PlanUrl+`/${productId}/plan/${planId}`);
  }

  postPlan(productId:string,plan:any): Observable<any> {
    //console.log(plan)
    return this.http.post<any>(this.PlanUrl+`/${productId}/plan`, plan);

  }

  deletePlan(planId: string,productId:string): Observable<any> {
    return this.http.delete(this.PlanUrl+`/${productId}/plan/${planId}`);
  }

  updatePlan(planId: string,productId:string, planForm:any ): Observable<any> {
    return this.http.put(this.PlanUrl+`/${productId}/plan/${planId}`, planForm);
  }

}
