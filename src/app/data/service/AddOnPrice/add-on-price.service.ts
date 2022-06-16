import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddOnPrice } from '../../schema/addOnPricePerPlan';

@Injectable({
  providedIn: 'root'
})
export class AddOnPriceService {
  readonly AddOnPriceUrl: any = "https://localhost:44352/api/addOnPrice";

  constructor(private http:HttpClient) { }


  createAddOnPrice(planId:string,addOnId:string,addOnPrice:any):Observable<any>{
    return this.http.post<any>(this.AddOnPriceUrl+`/${addOnId}/${planId}`,addOnPrice);
    
  }

  getAddOnPrice(productId:string):Observable<any>{
    return this.http.get<any>(this.AddOnPriceUrl+`/addOnPlan/${productId}`);
  }

  deleteAddOn(addOnId:string):Observable<any>{
    return this.http.delete(this.AddOnPriceUrl+`/${addOnId}`)

  }
}
