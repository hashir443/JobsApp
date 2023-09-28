import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-guest-comfirmation-modal',
  templateUrl: './guest-comfirmation-modal.component.html',
  styleUrls: ['./guest-comfirmation-modal.component.css']
})
export class GuestComfirmationModalComponent implements OnInit {

  constructor(private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  redirectToLogin(){
    AuthGuard.logout();
    this.router.navigate(['/auth/register/mobile-number']);
    this.dismissModal()
  }

  dismissModal(){
    this.modalService.dismissAll()
  }

}
