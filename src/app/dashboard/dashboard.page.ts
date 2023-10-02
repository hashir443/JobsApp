import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../shared/guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  menuItem: any = [
    {
      icon: 'grid-outline',
      label: 'Menu',
      route: '/main/home'
    },
    {
      icon: 'person-outline',
      label: 'Job',
      route: '/main/job'
    },
    {
      icon: 'settings-outline',
      label: 'Setting',
      route: '/main/setting'
    },
  ]

  accountPages = [
    {
       title: 'Log In',
       url: '/auth/login',
       ionicIcon: 'log-in-outline'
    },
    {
       title: 'Sign Up',
       url: '/auth/signup',
       ionicIcon: 'person-add-outline'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  LogoutUser() {
    AuthGuard.logout();
    //window.location.reload()
    this.router.navigate(['/auth/login']);
  }

  

}
