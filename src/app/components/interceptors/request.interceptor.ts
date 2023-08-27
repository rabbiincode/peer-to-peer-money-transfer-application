import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private getToken: AuthService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.getToken.retrieveLocalStorageValue('token')

    if (token){
      const newRequest = request.clone({
        headers: new HttpHeaders({ Authorization: `Bearer ${token}` })
      })
      return next.handle(newRequest)
    }
    return next.handle(request)
  }
}