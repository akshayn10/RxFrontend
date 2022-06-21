import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  readonly baseURL = environment.baseApiUrl+'organization';

  constructor(private http:HttpClient) { }

  createOrganization(organizationForm:any):Observable<any>{
    return this.http.post<any>(this.baseURL,organizationForm);
  }
}
