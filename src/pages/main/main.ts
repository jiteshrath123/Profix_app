import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EnterTeamPage } from '../aayam19/enter-team/enter-team';
import { AteaminfoPage } from '../ateaminfo/ateaminfo';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider
  ) {}
  toTeam() {
    this.navCtrl.push(AteaminfoPage);
  }
  toEnterTeam() {
    this.navCtrl.push(EnterTeamPage);
  }
  logout() {
    this.authService.logout();
  }
}
