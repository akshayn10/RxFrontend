import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../../schema/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  readonly transactionBaseApiUrl = 'https://localhost:44352/api/transaction';

  constructor(private http: HttpClient) {}
  getTransactions(): Observable<Transaction[]> {
    {
      return this.http.get<Transaction[]>(this.transactionBaseApiUrl);
    }
  }
}
