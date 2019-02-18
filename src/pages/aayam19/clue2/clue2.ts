import { Component, ViewChild } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { ThirdqrPage } from '../../thirdqr/thirdqr';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../../providers/auth/auth';

@Component({
  selector: 'page-clue2',
  templateUrl: 'clue2.html'
})
export class Clue2Page {
  attempt: number;
  @ViewChild('day') day;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public appCtrl: App,
    public authService: AuthProvider
  ) {
    this.attempt = 0;
  }
  help() {
    window.open('https://www.instagram.com/profix.in/', '_system');
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
  logout() {
    this.authService.logout();
    this.storage.set('teamid', '');
    this.storage.remove('teamid');
    this.storage.set('team', '');
    this.storage.remove('team');
    this.storage.set('status', '');
    this.storage.remove('status');
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  }
}
