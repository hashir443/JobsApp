import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { GLOBAL } from '../global.config';
import { JwtService } from '../services/jwt.service';
import { User, UserFactory } from 'src/app/models/user.model';

@Injectable()
export class AuthGuard implements CanActivate {
  protected static userString = 'user';
  protected static tokenSrting = 'token';
  protected static refreshTokenStr = 'refreshToken';
  protected static jwtHelperService: JwtService;
  constructor(public router: Router, private jwtService: JwtService) {
    AuthGuard.jwtHelperService = this.jwtService;
  }

  public static isLoggedIn(): boolean {
    let token = AuthGuard.getToken();
    let u = localStorage.getItem(this.userString);
    if (
      Boolean(
        token === 'undefined' ||
          u === 'undefined' ||
          u === null ||
          token === null
      )
    ) {
      return false;
    } else {
      if (u) {
        let data = JSON.parse(u);
        GLOBAL.currentUser = Boolean(!GLOBAL.currentUser)
          ? UserFactory.createUser(data)
          : GLOBAL.currentUser;
      }
    }
    let user = GLOBAL.currentUser;
    let res = Boolean(
      Boolean(token && token.length > 0) &&
        Boolean(user !== undefined) &&
        !AuthGuard.jwtHelperService?.isTokenExpired(token ?? '')
    );
    return res;
  }

  public static logout() {
    localStorage.removeItem(this.tokenSrting);
    localStorage.removeItem(this.userString);
    localStorage.removeItem(this.refreshTokenStr);
    localStorage.removeItem('rememberMe');
    GLOBAL.currentUser = undefined;
  }

  public static login(user: User) {
    GLOBAL.currentUser = user;
    user.password = '************';
    let token = user.token ?? '';
    let refreshToken = user.refreshToken ?? '';
    localStorage.setItem(this.tokenSrting, token);
    localStorage.setItem(this.refreshTokenStr, refreshToken);
    localStorage.setItem(this.userString, JSON.stringify(GLOBAL.currentUser));
  }


  public static getToken(): string | null {
    return localStorage.getItem(this.tokenSrting);
  }
  public static getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenStr);
  }
  public static getLogedInUser() {
    let token = AuthGuard.getToken() ?? null;
    return AuthGuard.jwtHelperService?.decodeToken(token);
  }
  // public static   refreshUser(user) {
  //     GLOBAL.currentUser = user;
  //     user.password = '************';
  //     localStorage.setItem(this.userString, JSON.stringify(GLOBAL.currentUser));
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (AuthGuard.isLoggedIn()) {
      if (null === GLOBAL.currentUser || GLOBAL.currentUser === undefined) {
        // logged in but opened a new tab
        this.router.navigate(['/auth/login']);
      }
      // else if ( GLOBAL.currentUser instanceof User) {
      //     let res = this.rolePermission.isRestrictedRouteForCurrentUser(state.url);
      //     return !res;
      // }
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login']);
    return false;
  }

}
