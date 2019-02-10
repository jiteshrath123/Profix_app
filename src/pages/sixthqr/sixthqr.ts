import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue6Page } from '../aayam19/clue6/clue6';

@Component({
  selector: 'page-sixthqr',
  templateUrl: 'sixthqr.html'
})
export class SixthqrPage {
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
      if (this.scannedCode == 'sixthQRCode') {
        this.navCtrl.setRoot(Clue6Page);
      } else {
        this.error = true;
      }
    });
  }
  skip() {
    this.navCtrl.setRoot(Clue6Page);
  }
}
