import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user.model';

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: "root" })
export class authservice {
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private route: Router) {

    }
    singnUp(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZ7s9mHpvrW0u4JPJ82xiU-KKUrAmrbGQ',
                {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
            ).pipe(
                catchError(this.handleError),
                tap(resData => {
                    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
                })
            );
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZ7s9mHpvrW0u4JPJ82xiU-KKUrAmrbGQ",
                {
                    email: email,
                    password: password,
                    refreshToken: true
                }
            ).pipe(
                catchError(this.handleError),
                tap(resData => {
                    //console.log(resData);
                    this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
                })
            );
    }
    logout() {
        this.user.next(null);
        this.route.navigate(['/auth']);
        //sessionStorage.clear();//Remove all items
        sessionStorage.removeItem('userData'); //Remove Single item
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this, this.tokenExpirationTimer = null;
    }
    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        );
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expiationDur = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expiationDur);
        }
    }
    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration)
    }

    private handleAuthentication(email: string, localId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        console.log(new Date().getTime() + expiresIn);
        const user = new User(
            email,
            localId,
            token,
            expirationDate
        );
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    //Create comman Method to log error details
    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = "Unknown Error!";
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "Email Id already Exists!";
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "here is no user record corresponding to this identifier. The user may have been deleted.";
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'The password is invalid or the user does not have a password';
        }
        return throwError(errorMessage);
    }
}