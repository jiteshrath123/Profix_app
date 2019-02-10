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
<<<<<<< HEAD

=======
>>>>>>> 794ee251c9907e50f05f7027c9048363de4a0d2c
  toNext() {
    this.navCtrl.push(SixthqrPage);
  }
}
