import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../auth/shared/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../auth/shared/components/footer/footer.component';
import { NgbActiveModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbNavModule
  ],
  exports: [
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent
  ],
  providers:[NgbActiveModal]
})
export class SharedModule { }
