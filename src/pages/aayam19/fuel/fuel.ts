import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clue0aPage } from '../clue0a/clue0a';
import { PaymentConfirmPage } from '../../payment-confirm/payment-confirm';
import { Storage } from '@ionic/storage';
import { MainPage } from '../../main/main';
import { AteaminfoPage } from '../../ateaminfo/ateaminfo';
import { Clue0bPage } from '../clue0b/clue0b';
import { VerificationPage } from '../verification/verification';
import { Clue1Page } from '../clue1/clue1';
import { Clue2Page } from '../clue2/clue2';
import { Clue3Page } from '../clue3/clue3';
import { Clue4Page } from '../clue4/clue4';
import { Clue5Page } from '../clue5/clue5';

@Component({
  selector: 'page-fuel',
  templateUrl: 'fuel.html'
})
export class FuelPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get('status').then(val => {
      if (val == 1) {
        this.navCtrl.setRoot(MainPage);
      } else if (val == 2) {
        this.navCtrl.setRoot(AteaminfoPage);
      } else if (val == 3) {
        this.navCtrl.setRoot(Clue0bPage);
      } else if (val == 4) {
        this.navCtrl.setRoot(VerificationPage);
      } else if (val == 5) {
        this.navCtrl.setRoot(Clue1Page);
      } else if (val == 6) {
        this.navCtrl.setRoot(Clue2Page);
      } else if (val == 7) {
        this.navCtrl.setRoot(Clue3Page);
      } else if (val == 8) {
        this.navCtrl.setRoot(Clue4Page);
      } else if (val == 9) {
        this.navCtrl.setRoot(Clue5Page);
      }
    });
  }
  buy() {
    this.navCtrl.setRoot(PaymentConfirmPage);
  }
}
