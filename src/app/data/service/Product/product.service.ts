import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../schema/product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly APIUrl: any = "https://localhost:44352/api/product";


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.APIUrl);
  }

  CreateProduct(product:any): Observable<any> {
    return this.http.post<any>(this.APIUrl, product);

  }

  getProductById(productID:string): Observable<Product> {
    return this.http.get<Product>(`${this.APIUrl}/${productID}`);
  }

  deleteProduct(productID: string): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${productID}`);
  }
  
  updateProduct(productID: string, product: Product): Observable<any> {
    return this.http.put(`${this.APIUrl}/${productID}`, product);
  }


  
}



