import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, pipe, throwError } from 'rxjs';
import { AuthService } from 'src/app/data/service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizationIdInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector,private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(AuthService);
    let authreq = request;
    let orgId = authservice.getOrganizationId();
    authreq = this.AddTokenheader(request, orgId);
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          this.router.navigate(['/no-subscription']);
        }
        return throwError(errordata);
      })
    );

  }
  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('OrganizationId',  token) });
  }
}
