import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
          withCredentials: true,
        });
        return next.handle(req);
      }
    }
    export const httpInterceptorProviders = [
      { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    ];
