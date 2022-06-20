import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarketplaceProduct } from '../../schema/marketplaceProduct';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
  readonly baseURL = environment.baseApiUrl + '/marketplace';

  constructor(private http: HttpClient) {}

  addProductToMarketplace(
    productId: string,
    description: string,
    name: string,
    logoUrl: string,
    trialDays: number,
    redirectUrl: string,
    organizationId: string
  ): Observable<any> {
    return this.http.post<any>(this.baseURL, {
      productId,
      description,
      name,
      logoUrl,
      trialDays,
      redirectUrl,
      organizationId,
    });
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
}
