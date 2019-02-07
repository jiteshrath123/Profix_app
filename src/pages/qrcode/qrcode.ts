import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue1Page } from '../aayam19/clue1/clue1';
import { Clue0aPage } from '../aayam19/clue0a/clue0a';
import { Clue0bPage } from '../aayam19/clue0b/clue0b';
import { Clue2Page } from '../aayam19/clue2/clue2';
import { Clue3Page } from '../aayam19/clue3/clue3';
import { Clue4Page } from '../aayam19/clue4/clue4';
import { Clue5Page } from '../aayam19/clue5/clue5';
import { Clue6Page } from '../aayam19/clue6/clue6';
import { CluebombPage } from '../aayam19/cluebomb/cluebomb';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html'
})
export class QrcodePage {
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
      if (this.scannedCode == 'Clue0a') {
        this.navCtrl.setRoot(Clue0aPage);
      }  if (this.scannedCode == 'Clue0b') {
        this.navCtrl.setRoot(Clue0bPage);
      }  if (this.scannedCode == 'Clue1') {
        this.navCtrl.setRoot(Clue1Page);
      }  if (this.scannedCode == 'Clue2') {
        this.navCtrl.setRoot(Clue2Page);
      }  if (this.scannedCode == 'Clue3') {
        this.navCtrl.setRoot(Clue3Page);
      }  if (this.scannedCode == 'Clue4') {
        this.navCtrl.setRoot(Clue4Page);
      }  if (this.scannedCode == 'Clue5') {
        this.navCtrl.setRoot(Clue5Page);
      }  if (this.scannedCode == 'Clue6') {
        this.navCtrl.setRoot(Clue6Page);
      }  if (this.scannedCode == 'Cluebomb') {
        this.navCtrl.setRoot(CluebombPage);
      } else {
        this.error = true;
      }
    });
  }
}
