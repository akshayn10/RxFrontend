import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { LoginResponseData } from '../../schema/auth/loginResponseData';

type ApiResponse<T>={
  succeeded : true;
  data: T;
}|
{
  succeeded :false;
  message : string;
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userBaseApiUrl = 'https://localhost:44352/api/user/';

  private isLoggedIn = new BehaviorSubject(false);
  loginState = this.isLoggedIn.asObservable();

  private role = new BehaviorSubject<string>("");
  currentRole = this.role.asObservable();


  constructor(private http:HttpClient,private _tokenService:TokenStorageService) { }

  setLoginState(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn);
  }
  setRole() {
    var role = this._tokenService.getRole();
    if(role == null){
      role = "";
    }
    this.role.next(role);
    console.log(this.currentRole)
  }
  signOut(): void {
    const refreshToken = this._tokenService.getRefreshToken();
    this.http.post(this.userBaseApiUrl+'logout',{token:refreshToken}).subscribe();
    this.setLoginState(false);
    this._tokenService.signOut();
  }
  getRole(){
    return this._tokenService.getRole();
  }


  registerUser(userForm:any):Observable<ApiResponse<string>>{
    const url = this.userBaseApiUrl+'register';
    const req =  this.http.post<{message:string}>(url,userForm);
    return this.mapFromResponse(req,r=>r.message);
  }

  loginUser(loginForm:any):Observable<ApiResponse<LoginResponseData>>{
    const url = this.userBaseApiUrl+'authenticate';
     const req= this.http.post<{data:LoginResponseData}>(url,loginForm);
     return this.mapFromResponse(req,r=>r.data);
  }


  private mapFromResponse<T, X>(result: Observable<T>, selector: (value: T) => X): Observable<ApiResponse<X>> {
    return result.pipe(
      map(r => ({
        succeeded: true as const,
        data: selector(r)
      })),
      catchError((e: HttpErrorResponse) => {
        if (e.error instanceof ProgressEvent) {
          return of({ succeeded: false as const, message: e.message });
        }
        if ( e.error instanceof Object)
        {
          return of({ succeeded: false as const, message: `Error (${e.status}): ${e.error?.title ?? ''}` });
        }
        return of({ succeeded: false as const, message: `Error (${e.status}): ${e.error ?? ''}` });
      }),
    );
  }
}
