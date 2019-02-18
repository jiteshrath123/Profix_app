import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { SixthqrPage } from '../../sixthqr/sixthqr';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../../providers/auth/auth';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-clue5',
  templateUrl: 'clue5.html'
})
export class Clue5Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public appCtrl: App,
    public authService: AuthProvider
  ) {}

  toNext() {
    this.navCtrl.push(SixthqrPage);
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
