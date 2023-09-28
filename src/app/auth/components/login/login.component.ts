import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { validate } from 'src/app/shared/helpers/form.helper';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';
import { User } from 'src/app/models/user.model';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { AppToastrService } from 'src/app/shared/app-toastr.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user:User = new User;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private appToastr: AppToastrService,
    private router: Router,
    public spinnerService: SpinnerService,
    private _authService: AuthService,
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

  async loginUser() {
    const obj = {
      mobileNumber: this.userForm.value.userName,
      password: this.userForm.value.password,
    };

    this.errorMessage = '';
    this.spinnerService.requestInProcess(true);
    const sub = this._authService.Login(obj)
    .subscribe(
      {
        next: (v) => {
          this.appToastr.success('Welcome User');
          this.updateTokens(v.data.data)
          this.redirectToFeed()
        },
        error: (e) => {
          this.errorMessage = e.message || "Something went wrong please try again later";
          this.appToastr.error(this.errorMessage);
        },
        complete: () => {
          this.spinnerService.requestInProcess(false);
        }
      }
    )

    // if (obj) {
    //   const loading = await this.loadingController.create({
    //     message: 'Loggin In...',
    //     duration: 2000,
    //   });

    //   await loading.present();

    //   setTimeout(() => {
    //     console.log(obj);
    //     loading.dismiss();
    //     this.router.navigate(['/']);
    //     this.userForm = this.initForm();
    //   }, 2000); // Replace this timeout with your actual login logic
    // }
  }

  get f() {
    return this.userForm.controls;
  }

  updateTokens(data: any) {
    this.user.token = data.accessToken;
    this.user.refreshToken = data.refreshToken;
    AuthGuard.login(this.user);
  }

  redirectToFeed(){
    this.router.navigate(['/main']);
  }
}
