import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from '../../schema/Stats';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  readonly baseURL = 'https://localhost:44352/api/report';

  constructor(private http:HttpClient) { }

  getSubscriptionStats():Observable<Stats[]>{
    return this.http.get<Stats[]>(this.baseURL);

  }
}
