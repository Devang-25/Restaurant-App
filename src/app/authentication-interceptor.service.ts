import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AuthenticationInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log("response recived successfully");
      }
      return event;
    }), catchError((error: HttpErrorResponse) => {
      console.error("http request failed--->>>", req.url);
      return throwError(error);
    }));
  }
}