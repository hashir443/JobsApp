import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-loggedin-modal',
  templateUrl: './not-loggedin-modal.component.html',
  styleUrls: ['./not-loggedin-modal.component.css']
})
export class NotLoggedinModalComponent implements OnInit {

  constructor(private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  redirectToLogin(){
    AuthGuard.logout();
    this.router.navigate(['/auth/login']);
    this.dismissModal()
  }

  dismissModal(){
    this.modalService.dismissAll()
  }

}
