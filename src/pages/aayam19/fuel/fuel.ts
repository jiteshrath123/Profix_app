import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clue0aPage } from '../clue0a/clue0a';

/**
 * Generated class for the FuelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fuel',
  templateUrl: 'fuel.html',
})
export class FuelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

buy(){
  this.navCtrl.push(Clue0aPage);
}
}
