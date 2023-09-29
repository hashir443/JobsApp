import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './shared/guards/no-auth.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then( (m => m.AuthModule)),
    canActivate:[NoAuthGuard],
  },
  {
    path: "main",
    loadChildren: () => import('./dashboard/dashboard.module').then( (m => m.DashboardPageModule)),
  },
  {
    path: "**",
    redirectTo: "auth/login",
    pathMatch: "full"
  }
];

@NgModule({
  providers:[
    AuthGuard,
    NoAuthGuard,
  ],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
