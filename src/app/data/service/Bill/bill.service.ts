import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../../schema/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  readonly billBaseApiUrl = 'https://localhost:44352/api/bill';

  constructor(private httpClient:HttpClient) { }
  getAllBills() : Observable<Bill[]>{
    return this.httpClient.get<Bill[]>(this.billBaseApiUrl);
  }
}
