import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddOnUsage } from '../../schema/addUsage';

@Injectable({
  providedIn: 'root'
})
export class AddOnService {
  readonly AddOnUrl: any = "https://localhost:44352/api/addOn";

  constructor(private http:HttpClient) { }

  createAddOn(productId:string,addOn:any):Observable<any>{
    return this.http.post<any>(this.AddOnUrl+`/${productId}`,addOn);
    
  }

  getAddOns(productId:string):Observable<any>{
    return this.http.get<any>(this.AddOnUrl+`/${productId}`);
  }

  getAddOnById(addOnId:string,productId:string):Observable<any>{
    return this.http.get<any>(this.AddOnUrl+`/${productId}/${addOnId}`);
  }

  deleteAddOn(productId:string,addOnId:string):Observable<any>{
    return this.http.delete(this.AddOnUrl+`/${productId}/${addOnId}`)

  }

  updateAddOn(productId:string,addOnId:string,addOnForm:any):Observable<any>{
    return this.http.put<any>(this.AddOnUrl+`/${productId}/${addOnId}`,addOnForm);
  }

}
