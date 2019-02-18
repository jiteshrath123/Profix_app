import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EnterTeamPage } from '../aayam19/enter-team/enter-team';
import { AteaminfoPage } from '../ateaminfo/ateaminfo';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { FuelPage } from '../aayam19/fuel/fuel';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public storage: Storage,
    public appCtrl: App
  ) {}
  ionViewDidLoad() {
    this.storage.get('status').then(val => {
      if (val == 2) {
        this.navCtrl.setRoot(AteaminfoPage);
      }
      if (val == 0) {
        this.navCtrl.setRoot(FuelPage);
      }
    });
  }
  toTeam() {
    this.navCtrl.push(AteaminfoPage);
  }
  toEnterTeam() {
    this.navCtrl.push(EnterTeamPage);
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
