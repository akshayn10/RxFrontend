import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { environment } from 'src/environments/environment';
import { LoginResponseData } from '../../schema/auth/loginResponseData';
import { RegisterResponseData } from '../../schema/auth/registerResponse';

type ApiResponse<T> =
  | {
      succeeded: true;
      data: T;
      message: string;
    }
  | {
      succeeded: false;
      message: string;
    };
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userBaseApiUrl = environment.baseApiUrl + 'user/';
  private currentUserSubject!: BehaviorSubject<LoginResponseData | null>;
  public currentUser!: Observable<LoginResponseData | null>;

  constructor(
    private http: HttpClient,
    private _tokenService: TokenStorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<LoginResponseData | null>(
      this._tokenService.getUser()
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginResponseData | null {
    return this.currentUserSubject.value;
  }

  setCurrentUserSubject(data: LoginResponseData) {
    this.currentUserSubject.next(data);
  }
  setLocalStorage(data: LoginResponseData) {
    this._tokenService.saveToken(data.jwtToken);
    this._tokenService.saveRefreshToken(data.refreshToken);
    this._tokenService.saveUser(data);
    this._tokenService.setRoles(data.roles);
  }

  getLoginState() {
    return this._tokenService.getToken() != null;
  }
  isAdmin(): boolean {
    if (this.currentUserSubject.value?.roles) {
      return this.currentUserSubject.value?.roles.indexOf('Admin') >= 0;
    }
    return false;
  }
  isOwner(): boolean {
    if (this.currentUserSubject.value?.roles) {
      return this.currentUserSubject.value?.roles.indexOf('Owner') >= 0;
    }
    return false;
  }
  isFinanceUser(): boolean {
    if (this.currentUserSubject.value?.roles) {
      return this.currentUserSubject.value?.roles.indexOf('FinanceUser') >= 0;
    }
    return false;
  }
  setRole() {
    var role = this._tokenService.getRole();
    if (role == null) {
      role = '';
    }
  }
  signOut(): void {
    const refreshToken = this._tokenService.getRefreshToken();
    this.http
      .post(this.userBaseApiUrl + 'logout', { token: refreshToken })
      .subscribe();
    this.currentUserSubject.next(null);
    this._tokenService.signOut();
  }
  getRole() {
    return this._tokenService.getRole();
  }

  getJwtToken() {
    return this._tokenService.getToken();
  }
  setJwtToken(token: string) {
    console.log('setJwtToken' + token);
    this._tokenService.saveToken(token);
  }
  getOrganizationId() {
    if (this.currentUserValue?.organizationId) {
      return this.currentUserValue.organizationId;
    }
    return '';
  }

  registerUser(userForm: any): Observable<ApiResponse<RegisterResponseData>> {
    const url = this.userBaseApiUrl + 'register';
    const req = this.http.post<{ data: RegisterResponseData }>(url, userForm);
    return this.mapFromResponse(req, (r) => r.data);
  }

  loginUser(loginForm: any): Observable<ApiResponse<LoginResponseData>> {
    const url = this.userBaseApiUrl + 'authenticate';
    const req = this.http.post<{ data: LoginResponseData }>(url, loginForm);
    return this.mapFromResponse(req, (r) => r.data);
  }
  refreshJwtToken(): Observable<LoginResponseData> {
    const refreshToken = this._tokenService.getRefreshToken();
    console.log('refreshJwtToken' + refreshToken);
    const url = this.userBaseApiUrl + 'refresh-token';
    return this.http.post<LoginResponseData>(url, { token: refreshToken });
  }
  forgotPassword(form: any) {
    const url = this.userBaseApiUrl + 'forgot-password';
    return this.http.post(url, form, { responseType: 'text' });
  }
  resetPassword(form: any): Observable<ApiResponse<string>> {
    const url = this.userBaseApiUrl + 'reset-password';
    const req = this.http.post<{ message: string }>(url, form);
    return this.mapFromResponse(req, (r) => r.message);
  }
  changePassword(
    email: string,
    oldPassword: string,
    password: string
  ): Observable<ApiResponse<string>> {
    {
      const url = this.userBaseApiUrl + 'change-password';
      const req = this.http.post<{ message: string }>(url, {
        email: email,
        oldPassword: oldPassword,
        newPassword: password,
      });
      return this.mapFromResponse(req, (r) => r.message);
    }
  }
  confirmEmail(userId: string, code: string): Observable<ApiResponse<string>> {
    const url = this.userBaseApiUrl + 'confirm-email';
    let params = new HttpParams(
      {
        fromObject:{
          userId:userId,
          code:code
        }
      }
    );
    const req = this.http.get<{ message: string }>(url,{params:params});
    return this.mapFromResponse(req, (r) => r.message);
  }
  private mapFromResponse<T, X>(
    result: Observable<T>,
    selector: (value: T) => X
  ): Observable<ApiResponse<X>> {
    return result.pipe(
      map((r) => ({
        succeeded: true as const,
        data: selector(r),
        message: '',
      })),
      catchError((e: HttpErrorResponse) => {
        if (e.error instanceof ProgressEvent) {
          return of({ succeeded: false as const, message: e.message });
        }
        if (e.error instanceof Object) {
          return of({
            succeeded: false as const,
            message: `Error (${e.status}): ${e.error?.title ?? ''}`,
          });
        }
        return of({
          succeeded: false as const,
          message: `Error (${e.status}): ${e.error ?? ''}`,
        });
      })
    );
  }
}
