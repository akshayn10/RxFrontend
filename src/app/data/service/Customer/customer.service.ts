import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable,tap,catchError,of,map, observable } from 'rxjs';
import { Customer, CustomerStats } from '../../schema/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  readonly customerBaseApiUrl = 'https://localhost:44352/api/customer';

  constructor(private httpClient: HttpClient) { }

  getCustomers(searchKey:string):Observable<Customer[]> {
    let params = new HttpParams(
      {
        fromObject:{
          searchKey:searchKey
        }
      }
    );
    return this.httpClient.get<Customer []>(this.customerBaseApiUrl,{params:params})
  }
  getCustomerDetails(customerId: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customerBaseApiUrl}/${customerId}`)
  }


  getCustomerStats():Observable<CustomerStats>{
    return this.httpClient.get<CustomerStats>(`${this.customerBaseApiUrl}/stats`);
  }
}
