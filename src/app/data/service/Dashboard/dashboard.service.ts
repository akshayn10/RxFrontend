import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardStats } from '../../schema/dashboardStats';
import { TableStats, TableVm } from '../../schema/dashboardTable';
import { Stats } from '../../schema/Stats';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseURL = environment.baseApiUrl+'dashboard';

  constructor(private http:HttpClient) { }

  getCustomerCountForProducts():Observable<Stats[]>{
        const url = this.baseURL + '/customersForProducts'
        return this.http.get<Stats[]>(url);
  }
  getSubscriptionStats():Observable<Stats[]>{
    const url = this.baseURL + '/subscriptionsStats'
    return this.http.get<Stats[]>(url);
  }
  getRevenueStats():Observable<Stats[]>{
    const url = this.baseURL + '/revenueStats'
    return this.http.get<Stats[]>(url);
  }
  getGridStats():Observable<DashboardStats> {
    const url = this.baseURL + '/dashboardStats'
    return this.http.get<DashboardStats>(url);
  }
  getTableDetails():Observable<TableVm> {
    const url = this.baseURL + '/tableStats'
    return this.http.get<TableVm>(url);
  }

}
