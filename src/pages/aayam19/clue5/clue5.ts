import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clue6Page } from '../clue6/clue6';
import { SixthqrPage } from '../../sixthqr/sixthqr';

@Component({
  selector: 'page-clue5',
  templateUrl: 'clue5.html'
})
export class Clue5Page {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  toNext() {
    this.navCtrl.push(SixthqrPage);
  }
}
