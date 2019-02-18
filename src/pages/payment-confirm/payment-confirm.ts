import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { MainPage } from '../main/main';
import { AteaminfoPage } from '../ateaminfo/ateaminfo';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-payment-confirm',
  templateUrl: 'payment-confirm.html'
})
export class PaymentConfirmPage {
  status: any;
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public authService: AuthProvider,
    public appCtrl: App
  ) {}

  ionViewDidLoad() {
    this.storage.get('teamid').then(teamid => {
      const status: firebase.database.Reference = firebase
        .database()
        .ref(`/teams/` + teamid + '/status/');
      status.on('value', personSnapshot => {
        this.storage.set('status', personSnapshot.val());
        this.status = personSnapshot.val();
        console.log(this.status);
        if (this.status == 1) {
          this.navCtrl.setRoot(MainPage);
        } else if (this.status == 2) {
          this.navCtrl.setRoot(AteaminfoPage);
        }
      });
    });
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
