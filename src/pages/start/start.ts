import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clue0aPage } from '../aayam19/clue0a/clue0a';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {
  @ViewChild('pass') password;
  err = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }
  start() {
    if (this.password.value == 'justStart') {
      this.navCtrl.setRoot(Clue0aPage);
    } else {
      this.err = true;
    }
  }
}
