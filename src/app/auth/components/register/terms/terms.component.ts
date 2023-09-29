import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss','../../login/login.component.scss'],
})
export class TermsComponent  implements OnInit {
  isChecked: boolean = false;
  isAgreed: boolean = false;
  modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal,private router: Router) { }

  ngOnInit() {}

  modelCanceled(){
    this.isChecked = false;
    this.modalRef?.close();
  }

  agree() {
    this.modalRef?.close('agree');
  }

  openModal(content: any) {
    if (this.isChecked == false) {
      this.modalRef = this.modalService.open(content, {
        size: 'lg',
        scrollable: true,
        centered: true,
      });
      this.modalRef.result.then(
        (result) => {
          if (result === 'agree') {
            this.isAgreed = true;
            this.router.navigate(['/auth/welcome']);
            this.modalRef?.close();

          } else {
            this.isChecked = false;
            this.isAgreed = false;
          }
        },
        (reason) => {
          console.log(`Dismissed with reason: ${reason}`);
        }
      );
    } else {
      this.isAgreed = false;
    }
  }

  onCheckboxChange(newValue: any) {
    if (!newValue) {
      this.isChecked = false;
      this.isAgreed = false;
    } else {
      this.isChecked = true;
    }
  }

  onchangeTerms($event: any) {
    if (!$event.target.checked)
    {
      return;
    }
      // this.registrationForm.setErrors({ invalid: true });
  }
  

}
