import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Clue3Page } from '../clue3/clue3';
import { TabsPage } from '../../tabs/tabs';
import { QrcodePage } from '../../qrcode/qrcode';
import { ThirdqrPage } from '../../thirdqr/thirdqr';

@Component({
  selector: 'page-clue2',
  templateUrl: 'clue2.html'
})
export class Clue2Page {
  attempt: number;
  @ViewChild('day') day;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    this.attempt = 0;
  }

  signIn() {
    if (this.day.value.toUpperCase() == 'WEDNESDAY') {
      const confirm = this.alertCtrl.create({
        title: ' Captain Marvel has arrived',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.navCtrl.push(ThirdqrPage);
            }
          }
        ]
      });
      confirm.present();
      this.attempt++;
    } else {
      const confirm = this.alertCtrl.create({
        title: ' You got one more attempt left.',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
      this.attempt++;
      if (this.attempt > 2) {
        const confirm = this.alertCtrl.create({
          title: ' Thanos wins. Thank you for playing...',
          buttons: [
            {
              text: 'OK!',
              handler: () => {
                this.navCtrl.setRoot(TabsPage);
              }
            }
          ]
        });
        confirm.present();
      }
    }
  }

  toNext() {
    this.navCtrl.push(ThirdqrPage);
  }
}
