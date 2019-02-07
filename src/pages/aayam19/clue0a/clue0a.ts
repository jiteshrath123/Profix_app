import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Clue0bPage } from '../clue0b/clue0b';
@Component({
  selector: 'page-clue0a',
  templateUrl: 'clue0a.html'
})
export class Clue0aPage {
  @ViewChild('ccT') ccT;
  @ViewChild('cc1') cc1;
  @ViewChild('cc2') cc2;
  @ViewChild('cc3') cc3;
  @ViewChild('cc4') cc4;
  @ViewChild('cc5') cc5;
  @ViewChild('cc6') cc6;
  @ViewChild('ccB') ccB;
  @ViewChild('cc7') cc7;
  @ViewChild('cc8') cc8;
  @ViewChild('cc9') cc9;
  @ViewChild('cc10') cc10;
  @ViewChild('cc11') cc11;
  @ViewChild('cc12') cc12;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    ) {}

  signIn() {
    if (
      this.ccT.value == 'TERRITORY' , this.cc1.value=="THE DEADLANDS", this.cc2.value=="THE HYDRA EMPIRE",this.cc3.value=="THE WASTELANDS", this.cc4.value=="NEW XANDAR",this.cc5.value=="DYSTOPIA", this.cc6.value=="PERFECTION",this.ccB.value=="BARON", this.cc7.value=="ULTRON",this.cc8.value=="EGO", this.cc9.value=="RONAN",this.cc10.value=="HELA", this.cc11.value=="RED SKULL",this.cc12.value=="DORMAMMU" 
    ) {
          const confirm = this.alertCtrl.create({
            title: ' Quantum Realm CLue solved',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(Clue0bPage);
                }
              }
            ]
          });
          confirm.present();
        }
  }
  tonext() {
    this.navCtrl.push(Clue0bPage);
  }
}
