import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue2Page } from '../clue2/clue2';
import { SecondqrPage } from '../../secondqr/secondqr';

@Component({
  selector: 'page-clue1',
  templateUrl: 'clue1.html'
})
export class Clue1Page {
  @ViewChild('uname') cname;
  @ViewChild('4passcode') cpassword;
  qrData = null;
  scannedCode = null;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner
  ) {}

  signIn() {
    if (
      (this.cname.value == 'CAPTAIN MARVEL', this.cpassword.value == '9851')
    ) {
      const confirm = this.alertCtrl.create({
        title: ' Captain Marvel has arrived',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.navCtrl.push(SecondqrPage);
            }
          }
        ]
      });
      confirm.present();
    }
  }
  toNext() {
    this.navCtrl.push(SecondqrPage);
  }
}
