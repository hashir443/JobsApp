import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PermissionService } from '../services/permission.service';
import { AuthGuard} from './auth.guard';

@Injectable()
export class PermissionGuard implements CanActivate {

    constructor(private PermissionServie: PermissionService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  Observable<boolean> | Promise<boolean> | boolean {
        let res = of(false);
        if (true) { // AuthGuard.isLoggedIn()
            res = this.PermissionServie.hasPermission(route)
        }
        return res;
    }


}