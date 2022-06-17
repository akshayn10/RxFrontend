import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, switchMap, pipe, throwError } from 'rxjs';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(AuthService);
    let authreq = request;
    authreq = this.AddTokenheader(request, authservice.getJwtToken());
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          // need to implement logout
          // authservice.signOut();
          // refresh token logic
         return this.handleRefrehToken(request, next);
        }
        return throwError(errordata);
      })
    );

  }

  handleRefrehToken(request: HttpRequest<any>, next: HttpHandler) {
    let authservice = this.inject.get(AuthService);
    return authservice.refreshJwtToken().pipe(
      switchMap((data) => {
        authservice.setJwtToken(data.jwtToken);
        return next.handle(this.AddTokenheader(request,data.jwtToken))
      }),
      catchError(errodata=>{
        authservice.signOut();
        return throwError(errodata)
      })
    );
  }

  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) });
  }
}
