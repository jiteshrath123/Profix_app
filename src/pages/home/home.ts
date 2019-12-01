import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public platform: Platform,
    public toastCtrl: ToastController,
    public fcm: FCM
  ) {
    if (this.platform.is('android')) {
      this.onNotification();
    }
    if (this.platform.is('cordova')) {
      this.onNotification();
    }
  }
  openfb() {
    window.open('https://www.facebook.com/Profix-145257969606978/', '_system');
  }
  openinsta() {
    window.open('https://www.instagram.com/profix.in/', '_system');
  }
  openmail() {
    window.open('mailto:(hr@profix.in)', '_system');
  }
  openlin() {
    window.open('https://www.linkedin.com/company/profix-in/', '_system');
  }
  openhome() {
    window.open('http://profix.in/', '_system');
  }
  async onNotification() {
    try {
      await this.platform.ready();
      this.fcm.onNotification().subscribe(
        (data: any) => {
          let toast = this.toastCtrl.create({
            message: data.message,
            duration: 3000,
            position: 'top'
          });
          toast.present();
        },
        (error: any) => console.log(error)
      );
    } catch (e) {
      console.log(e);
    }
  }
}
