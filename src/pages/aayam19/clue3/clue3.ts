import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clue4Page } from '../clue4/clue4';
import { AlertController } from 'ionic-angular';
import { QrcodePage } from '../../qrcode/qrcode';

@Component({
  selector: 'page-clue3',
  templateUrl: 'clue3.html'
})
export class Clue3Page {
  @ViewChild('c11') c11;
  @ViewChild('c12') c12;
  @ViewChild('c13') c13;
  @ViewChild('c14') c14;
  @ViewChild('c21') c21;
  @ViewChild('c22') c22;
  @ViewChild('c23') c23;
  @ViewChild('c24') c24;
  @ViewChild('c31') c31;
  @ViewChild('c32') c32;
  @ViewChild('c33') c33;
  @ViewChild('c34') c34;
  @ViewChild('c41') c41;
  @ViewChild('c42') c42;
  @ViewChild('c43') c43;
  @ViewChild('c44') c44;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}
  signIn() {
    if (
      (this.c11.value == '16',
      this.c12.value == '3',
      this.c13.value == '2',
      this.c14.value == '13',
      this.c21.value == '5',
      this.c22.value == '10',
      this.c23.value == '11',
      this.c24.value == '8',
      this.c31.value == '9',
      this.c32.value == '6',
      this.c33.value == '7',
      this.c34.value == '12',
      this.c41.value == '4',
      this.c42.value == '15',
      this.c43.value == '14',
      this.c44.value == '1')
    ) {
      const confirm = this.alertCtrl.create({
        title: ' Quantum Realm CLue solved',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.navCtrl.push(QrcodePage);
            }
          }
        ]
      });
      confirm.present();
    }
  }
  toNext() {
    this.navCtrl.push(Clue4Page);
  }
}
