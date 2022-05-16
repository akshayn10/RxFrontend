import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../schema/product.model'
import { AddProduct } from '../../schema/addProduct.model';


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
    console.log(product)
    return this.http.post<any>(this.APIUrl, product);

  }

}



