import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../../schema/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly transactionBaseApiUrl = environment.baseApiUrl+'transaction';

  constructor(private http: HttpClient) {}
  getTransactions(): Observable<Transaction[]> {
    {
      return this.http.get<Transaction[]>(this.transactionBaseApiUrl);
    }
  }
}
