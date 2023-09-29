import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MobileNumberComponent } from './components/register/mobile-number/mobile-number.component';
import { OtpComponent } from './components/register/otp/otp.component';
import { TermsComponent } from './components/register/terms/terms.component';
import { UserNameComponent } from './components/register/user-name/user-name.component';
import { CategoryComponent } from './components/register/category/category.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
        children:[
          {
            path: "category",
            component: CategoryComponent
          },
          {
            path: "mobile-number",
            component: MobileNumberComponent
          },
          {
            path: "otp",
            component: OtpComponent
          },
          {
            path: "terms",
            component: TermsComponent
          },
          {
            path: "user-name",
            component: UserNameComponent
          },
        ]
      },
      {
        path: "welcome",
        component: WelcomeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
