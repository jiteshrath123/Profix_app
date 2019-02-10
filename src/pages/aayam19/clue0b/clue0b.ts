import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Clue1Page } from '../clue1/clue1';
import { VerificationPage } from '../verification/verification';


@Component({
  selector: 'page-clue0b',
  templateUrl: 'clue0b.html'
})
export class Clue0bPage {
  @ViewChild('cob1') cob1;
  @ViewChild('cob2') cob2;
  @ViewChild('cob3') cob3;
  @ViewChild('cob4') cob4;
  @ViewChild('cob5') cob5;
  @ViewChild('cob6') cob6;
  visible0 = true;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  checkIn1() {
    if (this.cob1.value.toUpperCase() == 'RED SKULL') {
      this.visible0 = false;
      this.visible1 = true;
    }
  }
  checkIn2() {
    if (this.cob2.value.toUpperCase() == 'HELA') {
      this.visible1 = false;
      this.visible2 = true;
    }
  }
  checkIn3() {
    if (this.cob3.value.toUpperCase() == 'PERFECTION AND YELLOW') {
      this.visible2 = false;
      this.visible3 = true;
    }
  }
  checkIn4() {
    if (this.cob4.value.toUpperCase() == 'RONAN') {
      this.visible3 = false;
      this.visible4 = true;
    }
  }
  checkIn5() {
    if (this.cob5.value.toUpperCase() == 'WONG AND DORMAMMU') {
      this.visible4 = false;
      this.visible5 = true;
    }
  }
  checkIn6() {
    if (this.cob6.value.toUpperCase() == 'THE DEADLANDS') {
      this.visible5 = false;
      this.visible6 = true;
    }
  }
  
  signIn() {
    if (
      this.cob1.value=='RED SKULL' , 
      this.cob2.value=="HELA",
      this.cob3.value=="PERFECTION AND YELLOW",
      this.cob4.value=="RONAN",
      this.cob5.value=="WONG AND DORMAMMU",
      this.cob6.value=="THE DEADLANDS"
    ) {
          const confirm = this.alertCtrl.create({
            title: ' Congratulation The Battle World Clue is Solved ',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(VerificationPage);
                }
              }
            ]
          });
          confirm.present();
      
    }
  }
  toNext() {
    this.navCtrl.push(VerificationPage);
  }
  
}
