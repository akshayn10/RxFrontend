<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpParams } from '@angular/common/http';
>>>>>>> 7e1f19b6d0f29c8172bd91852b62ea066558de16
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarketplaceProduct } from '../../schema/marketplaceProduct';


@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
<<<<<<< HEAD
    
  constructor(private http:HttpClient) { }


=======
  readonly baseURL = environment.baseApiUrl + 'marketplace';

  constructor(private http: HttpClient) {}

  addProductToMarketplace(
    productId: string,
    description: string,
    name: string,
    logoUrl: string,
    trialDays: number,
    redirectUrl: string,
    organizationId: string
  ) {
    return this.http.post(this.baseURL, {
      productId,
      description,
      name,
      logoUrl,
      trialDays,
      redirectUrl,
      organizationId,
    },{responseType:'text'});
  }

  getProducts(searchKey:string):Observable<MarketplaceProduct[]>{
    let params = new HttpParams(
      {
        fromObject:{
          searchKey:searchKey
        }
      }
    );
    return this.http.get<MarketplaceProduct[]>(this.baseURL,{params:params});
  }
  getProductById(productId:string):Observable<MarketplaceProduct>{
    return this.http.get<MarketplaceProduct>(`${this.baseURL}/${productId}`);
  }
>>>>>>> 7e1f19b6d0f29c8172bd91852b62ea066558de16
}
