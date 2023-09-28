import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GuestComfirmationModalComponent } from './guest-comfirmation-modal/guest-comfirmation-modal.component';
import { AuthGuard } from './auth.guard';
import { UserRole } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class GuestAuthGuard implements CanActivate {
  constructor(private router: Router,private jwtServiec: JwtService,private modalService: NgbModal) {}

  canActivate(): boolean {

    try {
      const decodedToken: any = this.jwtServiec.decodeToken(AuthGuard.getToken());

      if (decodedToken.RoleID == UserRole.Guest) {
        this.openConfirmationModal()
        return false; // RoleID is 3, prevent access
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      return false; // Error decoding token, prevent access
    }

    return true; // Token exists and RoleID is not 3, allow access
  }

  private openConfirmationModal(): void {
    this.modalService.open(GuestComfirmationModalComponent, { centered: true })
  }

}
