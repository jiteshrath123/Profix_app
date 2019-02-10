import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue2Page } from '../aayam19/clue2/clue2';

@Component({
  selector: 'page-secondqr',
  templateUrl: 'secondqr.html'
})
export class SecondqrPage {
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
      if (this.scannedCode == 'secondQRCode') {
        this.navCtrl.setRoot(Clue2Page);
      } else {
        this.error = true;
      }
    });
  }
  skip() {
    this.navCtrl.setRoot(Clue2Page);
  }
}
