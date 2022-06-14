import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../schema/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly APIUrl: any = 'https://localhost:44352/api/product';

  constructor(private http: HttpClient) {}

  getProducts(searchKey:string): Observable<Product[]> {
    let params = new HttpParams(
      {
        fromObject:{
          searchKey:searchKey
        }
      }
    );
    return this.http.get<Product[]>(this.APIUrl,{params:params});
  }

  CreateProduct(product: any): Observable<any> {
    return this.http.post<any>(this.APIUrl, product);
  }

  getProductById(productID: string): Observable<Product> {
    return this.http.get<Product>(`${this.APIUrl}/${productID}`);
  }

  deleteProduct(productID: string): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${productID}`);
  }
  
  updateProduct(productID: string, formData:any ): Observable<any> {
    return this.http.put(`${this.APIUrl}/${productID}`, formData);
  }
}
