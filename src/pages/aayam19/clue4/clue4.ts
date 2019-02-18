import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FifthqrPage } from '../../fifthqr/fifthqr';

@Component({
  selector: 'page-clue4',
  templateUrl: 'clue4.html'
})
export class Clue4Page {
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
      (this.c11.value == 'L',
      this.c12.value == 'A',
      this.c13.value == 'A',
      this.c14.value == 'L',
      this.c21.value == 'M',
      this.c22.value == 'I',
      this.c23.value == 'N',
      this.c24.value == 'D',
      this.c31.value == 'B',
      this.c32.value == 'L',
      this.c33.value == 'U',
      this.c34.value == 'E',
      this.c41.value == 'S',
      this.c42.value == 'O',
      this.c43.value == 'U',
      this.c44.value == 'L')
    ) {
      const confirm = this.alertCtrl.create({
        title: ' Quantum Realm CLue solved',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.navCtrl.push(FifthqrPage);
            }
          }
        ]
      });
      confirm.present();
    }
  }
  toNext() {
    this.navCtrl.push(FifthqrPage);
  }
}
