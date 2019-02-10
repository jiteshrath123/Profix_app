import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue5Page } from '../aayam19/clue5/clue5';

@Component({
  selector: 'page-fifthqr',
  templateUrl: 'fifthqr.html'
})
export class FifthqrPage {
  scannedCode = null;
  error: any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barcode: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (this.scannedCode == 'fifthQRCode') {
        this.navCtrl.setRoot(Clue5Page);
      } else {
        this.error = true;
      }
    });
  }
  skip() {
    this.navCtrl.setRoot(Clue5Page);
  }
}
