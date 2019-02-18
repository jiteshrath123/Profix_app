import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';
import { FuelPage } from '../aayam19/fuel/fuel';
import { Storage } from '@ionic/storage';
import { Clue0aPage } from '../aayam19/clue0a/clue0a';
import { TabsPage } from '../tabs/tabs';
import { StartPage } from '../start/start';

@Component({
  selector: 'page-ateaminfo',
  templateUrl: 'ateaminfo.html'
})
export class AteaminfoPage {
  team: any;
  teamid: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public storage: Storage,
    public appCtrl: App
  ) {}

  ionViewDidLoad() {
    this.storage.get('team').then(val => {
      this.team = val;
    });
  }

  play() {
    this.navCtrl.push(StartPage);
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
