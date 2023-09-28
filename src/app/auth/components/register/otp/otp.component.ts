import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/auth/models/config.model';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss','../../login/login.component.scss'],
})
export class OtpComponent  implements OnInit {

  otpInput: string = '';
  errorMessage = ''

  config: Config = {
    length: 6,
    otpLength: 6
  };

  constructor() { }

  ngOnInit() {}

  handeOtpChange(value: any): void {
    console.log(value);
  }

  handleFillEvent(value: any): void {
    console.log(value);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

}
