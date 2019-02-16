import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';
import { FuelPage } from '../aayam19/fuel/fuel';

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
    public authService: AuthProvider
  ) {}

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase
      .database()
      .ref(`/teams/t0B837AmqzN9wHfAK0dGoxam1rR2/`);
    personRef.on('value', personSnapshot => {
      this.team = personSnapshot.val();
    });
  }

  play() {
    this.navCtrl.push(FuelPage);
  }
}
