import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from '../../schema/bill';
import { BillDetail } from '../../schema/Bill-Details/billDetail';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  readonly billBaseApiUrl = environment.baseApiUrl+'bill';

  constructor(private httpClient: HttpClient) {}
  getAllBills(searchKey:string): Observable<Bill[]> {
    let params = new HttpParams(
      {
        fromObject:{
          searchKey:searchKey
        }
      }
    );
    return this.httpClient.get<Bill[]>(this.billBaseApiUrl,{params:params});
  }
  getBillForCustomer(billId: string): Observable<BillDetail> {
    return this.httpClient.get<BillDetail>(`${this.billBaseApiUrl}/${billId}`);
  }
}
