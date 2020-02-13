import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { authservice } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authSer: authservice) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authSer.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifyRequ = req.clone({
                    params: new HttpParams().set('auth', user.token)
                });
                return next.handle(modifyRequ);
            }));
    }
} 