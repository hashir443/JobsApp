import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError } from 'rxjs';
import {AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';
import { JwtService } from '../../services/jwt.service';
import { InternalCommunicationService } from '../internal-communication.api';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router, private JwtService: JwtService, private internalCommunication: InternalCommunicationService) { }
    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
             setTimeout(() => {
                window.location.reload();
             }, 1000);
            this.router.navigateByUrl(`/auth/login`);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return throwError(err.message); // or EMPTY may be appropriate here
        }
        return throwError(err);
    }

    private handelGuestUerRequest(): Observable<any> {
        let error = {status: 430, message: 'Guest user'};
        this.internalCommunication.setError(error);
        return throwError(error);
    }

    private handelMobileNumerNotVerfiedRequest(): Observable<any> {
        let error = {status: 431, message: 'Mobile number not verified'};
        this.internalCommunication.setError(error);
        return throwError(error);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (AuthGuard.isLoggedIn()) {
            if(!req.headers.get("auth")){
                if(req.method != 'GET' && this.JwtService.isGuestUser(AuthGuard.getToken())){
                    return this.handelGuestUerRequest();
                }
                else  if(req.method != 'GET' && this.JwtService.isMobileNotVerifies(AuthGuard.getToken())){
                    return this.handelMobileNumerNotVerfiedRequest();
                }
            }
            if (req.headers.get("skip"))  // don't add token with specific calls
                return next.handle(req);
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${AuthGuard.getToken()}`
                }
            })
        }
        return  next.handle(req).pipe(catchError(x=> this.handleAuthError(x)));
    }
 }
