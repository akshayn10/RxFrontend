import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarketplaceProduct, MarketplaceProductForDisplay } from '../../schema/marketplaceProduct';

@Injectable({
  providedIn: 'root',
})
export class MarketplaceService {
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

  getProducts(searchKey:string):Observable<MarketplaceProductForDisplay[]>{
    let params = new HttpParams(
      {
        fromObject:{
          searchKey:searchKey
        }
      }
    );
    return this.http.get<MarketplaceProductForDisplay[]>(this.baseURL,{params:params});
  }
  getProductById(productId:string):Observable<MarketplaceProduct>{
    return this.http.get<MarketplaceProduct>(`${this.baseURL}/${productId}`);
  }
}
