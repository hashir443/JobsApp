import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { GLOBAL } from "../global.config";

@Injectable({
    providedIn: 'root'
})
export class JwtService  {
    constructor(public jwtHelperService: JwtHelperService) {}

    public decodeToken(token: string|null) {
        return token ? this.jwtHelperService?.decodeToken(token) : null;
    }
    public isTokenExpired(token: string) {
        return this.jwtHelperService?.isTokenExpired(token);
    }

    public isGuestUser(token: string|null): boolean {
        let user = this.decodeToken(token);
        let currentUser = GLOBAL.currentUser;
        return (user && user.RoleID == 0 && user.UserID == 0 || currentUser.isGuest)  
    }
    public isMobileNotVerifies(token: string|null): boolean {
        let user = this.decodeToken(token);
        return (user && (!user.IsMobileNumberVerified || user.IsMobileNumberVerified  == 'False'))  
    }
}