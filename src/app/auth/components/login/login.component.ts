import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validate } from 'src/app/shared/helpers/form.helper';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';
import { User } from 'src/app/models/user.model';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AuthService } from '../../services/auth.service';
import { AppToastrService } from 'src/app/shared/app-toastr.service';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private appToastr: AppToastrService,
    private router: Router,
    public spinnerService: SpinnerService,
    private _authService: AuthService,
    private nativePageTransition: NativePageTransitions,
    public platform: Platform,
    private toastController: ToastController
  ) {
    this.userForm = this.initForm();
  }

  ngOnInit() {
    this.userForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(12)]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      validate(form);
      return;
    }
    this.loginUser();
  }

  loginUser() {
    const obj = {
      mobileNumber: this.userForm.value.userName,
      password: this.userForm.value.password,
    };

    this.errorMessage = '';
    this.spinnerService.requestInProcess(true);
    this._authService.Login(obj).subscribe({
      next: async (v) => {
        const toast = this.toastController.create({
          message: 'Welcome User',
          color:'success',
          duration: 3000,
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel',
            },
          ],
        });
        await (await toast).present();
        // this.appToastr.success('Welcome User');
        this.updateTokens(v.data.data);
        this.redirectToFeed();
      },
      error: async (e) => {
        const toast = this.toastController.create({
          message: e.message || 'Something went wrong please try again later',
          color: 'danger',
          duration: 3000,
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel',
            },
          ],
        });
        await (await toast).present();
        this.errorMessage =
          e.message || 'Something went wrong please try again later';
        // this.appToastr.error(this.errorMessage);
      },
      complete: () => {
        this.spinnerService.requestInProcess(false);
      },
    });
  }

  get f() {
    return this.userForm.controls;
  }

  updateTokens(data: any) {
    this.user.token = data.accessToken;
    this.user.refreshToken = data.refreshToken;
    AuthGuard.login(this.user);
  }

  redirectToFeed() {
    this.router.navigate(['/main']);
  }
}
