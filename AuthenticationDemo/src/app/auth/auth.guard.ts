import { CanActivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { authservice } from './auth.service';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private authSer: authservice, private route: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return this.authSer.user.pipe(map(user => {
            return !!user;
        }), tap(isAuth => {
            if (!isAuth) {
                this.route.navigate(['/auth']);
            }
        }));
    }
}