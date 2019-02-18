import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { QrcodePage } from '../../qrcode/qrcode';
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
      
      const confirm = this.alertCtrl.create({
        title: ' Checked',
        message: '6/6',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
    else{
      const confirm = this.alertCtrl.create({
        title: ' Whoops pls. try again...',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }
  checkIn2() {
    if (this.cob2.value.toUpperCase() == 'HELA') {
      this.visible1 = false;
      this.visible2 = true;
      
      const confirm = this.alertCtrl.create({
        title: ' Checked',
        message: '6/6',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }else{
      const confirm = this.alertCtrl.create({
        title: ' Whoops pls. try again...',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }
  checkIn3() {
    if (this.cob3.value.toUpperCase() == 'PERFECTION') {
      this.visible2 = false;
      this.visible3 = true;
      
      const confirm = this.alertCtrl.create({
        title: ' Checked',
        message: '6/6',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }else{
      const confirm = this.alertCtrl.create({
        title: ' Whoops pls. try again...',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }
  checkIn4() {
    if (this.cob4.value.toUpperCase() == 'RONAN') {
      this.visible3 = false;
      this.visible4 = true;
      
      const confirm = this.alertCtrl.create({
        title: ' Checked',
        message: '6/6',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }else{
      const confirm = this.alertCtrl.create({
        title: ' Whoops pls. try again...',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }
  checkIn5() {
    if (this.cob5.value.toUpperCase() == 'DORMAMMU') {
      this.visible4 = false;
      this.visible5 = true;
      
      const confirm = this.alertCtrl.create({
        title: ' Checked',
        message: '5/6',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }else{
      const confirm = this.alertCtrl.create({
        title: ' Whoops pls. try again...',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }
  checkIn6() {
    if (this.cob6.value.toUpperCase() == 'DEADLANDS') {
      this.visible5 = false;
      this.visible6 = true;
      
      const confirm = this.alertCtrl.create({
        title: ' Checked',
        message: '6/6',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }else{
      const confirm = this.alertCtrl.create({
        title: ' Whoops pls. try again...',
        buttons: [
          {
            text: 'OK!',
            handler: () => {}
          }
        ]
      });
      confirm.present();
    }
  }
  
  signIn() {
    {
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
