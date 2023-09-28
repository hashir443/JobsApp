import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthGuard} from './auth.guard';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(public router: Router){
  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (AuthGuard.isLoggedIn()) {
            this.router.navigate(['/main']);
            return false
        }
        return true;
    }
}
