import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HomeComponent } from './components/home/home.component';
import { JobComponent } from './components/job/job.component';
import { SettingComponent } from './components/setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage,HomeComponent,JobComponent,SettingComponent]
})
export class DashboardPageModule {}
