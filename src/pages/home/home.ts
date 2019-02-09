import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
openfb(){
  window.open('https://www.facebook.com/Profix-145257969606978/', '_system');
}
openinsta(){
  window.open('https://www.instagram.com/profix.in/', '_system');
}
openmail(){
  window.open('mailto:(hr@profix.in)', '_system');
}
openlin(){
  window.open('https://www.linkedin.com/company/profix-in/', '_system');
}
openhome(){
  window.open('http://profix.in/', '_system');
}
}
