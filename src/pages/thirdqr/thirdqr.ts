import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue3Page } from '../aayam19/clue3/clue3';

@Component({
  selector: 'page-thirdqr',
  templateUrl: 'thirdqr.html'
})
export class ThirdqrPage {
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
      if (this.scannedCode == 'thirdQRCode') {
        this.navCtrl.setRoot(Clue3Page);
      } else {
        this.error = true;
      }
    });
  }
  skip() {
    this.navCtrl.setRoot(Clue3Page);
  }
}
