import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue1Page } from '../clue1/clue1';
import { QrcodePage } from '../../qrcode/qrcode';

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
  qrData = null;
  scannedCode = null;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,

  ) {}

  signIn() {
    if (
      this.cob1.value =='RED SKULL' , this.cob2.value=="HELA", this.cob3.value=="PEFECTION AND YELLOW",this.cob4.value=="GAMORA AND RONAN", this.cob5.value=="WONG AND DORMAMMU",this.cob6.value=="THE DEADLANDS"
    ) {
          const confirm = this.alertCtrl.create({
            title: ' Congratulation The Battle World Clue is Solved ',
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
    this.navCtrl.push(Clue1Page);
  }
}
