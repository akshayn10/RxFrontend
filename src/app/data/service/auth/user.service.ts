import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userBaseApiUrl = 'https://localhost:44352/api/user/';

  constructor(private http:HttpClient) { }

}
