import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue4Page } from '../aayam19/clue4/clue4';

@Component({
  selector: 'page-fourthqr',
  templateUrl: 'fourthqr.html'
})
export class FourthqrPage {
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
      if (this.scannedCode == 'fourthQRCode') {
        this.navCtrl.setRoot(Clue4Page);
      } else {
        this.error = true;
      }
    });
  }
  skip() {
    this.navCtrl.setRoot(Clue4Page);
  }
}
