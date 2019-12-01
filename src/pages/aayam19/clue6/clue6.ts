import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { CluebombPage } from '../cluebomb/cluebomb';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../../providers/auth/auth';
import { TabsPage } from '../../tabs/tabs';
@Component({
  selector: 'page-clue6',
  templateUrl: 'clue6.html'
})
export class Clue6Page {
  error: any;

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public storage: Storage,
    public authService: AuthProvider
  ) {}

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
