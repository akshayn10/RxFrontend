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

  updateOrganization(organizationId:string,organizationForm:any){
    return this.http.put(`${this.baseURL}/${organizationId}`,organizationForm,{responseType:'text'});
  }


  getOrganizationById(organizationId:string):Observable<any>{
    return this.http.get<any>(`${this.baseURL}/${organizationId}`);
  }

  createOrganization(formData: FormData) {
    return this.http.post(`${this.baseURL}`, formData,{responseType:'text'});
  }

}
