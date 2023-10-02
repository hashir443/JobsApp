import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      color: 'success',
      icon: 'globe',
    });

    await toast.present();
  }

}
