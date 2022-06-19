import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  readonly baseURL = 'https://localhost:44352/api/organization';

  constructor(private http:HttpClient) { }

  createOrganization(organizationForm:any):Observable<any>{
    return this.http.post<any>(this.baseURL,organizationForm);
  }
}
