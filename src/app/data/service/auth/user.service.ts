import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../schema/user';
import { OrganizationUser } from '../../schema/Organization/organizationUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userBaseApiUrl = environment.baseApiUrl+'user/';

  constructor(private http:HttpClient) { }

  getUserById(userId:string):Observable<User>{
    return this.http.get<User>(`${this.userBaseApiUrl}${userId}`);
  }

  updateUser(userId:string,user:any):Observable<any>{
    return this.http.put<any>(`${this.userBaseApiUrl}${userId}`,user);
  }

  getUsersForOrganization(organizationId:string):Observable<OrganizationUser[]>{
    return this.http.get<OrganizationUser[]>(this.userBaseApiUrl+'/organization-users/'+organizationId);
  }
  addUserToOrganization(value: any) {
    return this.http.post(this.userBaseApiUrl+"add-user", value,{
      responseType:'text'
    });
  }

}
