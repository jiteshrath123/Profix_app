import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clue6Page } from '../clue6/clue6';

@Component({
  selector: 'page-clue5',
  templateUrl: 'clue5.html'
})
export class Clue5Page {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

<<<<<<< HEAD
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


>>>>>>> 283d60d6be76b96c7408c2cd5df7f5722aba6777
  toNext() {
    this.navCtrl.push(Clue6Page);
  }
}
