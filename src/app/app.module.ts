import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TokenInterceptor } from './shared/api/interceptor/token.interceptor';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './shared/guards/auth.guard';
import { PermissionService } from './shared/services/permission.service';
import { NoAuthGuard } from './shared/guards/no-auth.guard';
import { PermissionGuard } from './shared/guards/permission.guard';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from './shared/app-toastr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [AppComponent,SpinnerComponent],
  imports: [
    BrowserModule,
    NgOtpInputModule,
    IonicModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    PermissionService,
    NoAuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
