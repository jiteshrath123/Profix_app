import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FaqPage } from './faq/faq';
import { RulesPage } from './rules/rules';
import { PrizesPage } from './prizes/prizes';
import { RegisterPage } from './register/register';


@Component({
  selector: 'page-aayam19',
  templateUrl: 'aayam19.html',
})
export class Aayam19Page {

  constructor(public navCtrl: NavController) {
  }
  onGoToRegister(){
    this.navCtrl.push(RegisterPage);
  
  }
  onGoToFaq(){
    this.navCtrl.push(FaqPage);
  }
  onGoToRules(){
    this.navCtrl.push(RulesPage);
  }
  onGoToPrizes(){
    this.navCtrl.push(PrizesPage);
  }
}
