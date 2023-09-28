import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MobileNumberComponent } from './components/register/mobile-number/mobile-number.component';
import { OtpComponent } from './components/register/otp/otp.component';
import { TermsComponent } from './components/register/terms/terms.component';
import { UserNameComponent } from './components/register/user-name/user-name.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CategoryComponent } from './components/register/category/category.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MobileNumberComponent,
    OtpComponent,
    TermsComponent,
    UserNameComponent,
    WelcomeComponent,
    CategoryComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule,NgxOtpInputModule,NgxOtpInputModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
})
export class AuthModule {}
