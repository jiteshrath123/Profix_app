import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue6Page } from '../aayam19/clue6/clue6';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

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
    public barcode: BarcodeScanner,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (this.scannedCode == 'sixthQRCode') {
        this.storage.get('teamid').then(val => {
          const statusRef: firebase.database.Reference = firebase
            .database()
            .ref(`/teams/` + val + '/status/');
          statusRef.set(10).then((res: Response) => {
            this.storage.set('status', 10);
            this.navCtrl.setRoot(Clue6Page);
          });
        });
      } else {
        this.error = true;
      }
    });
  }
  skip() {
    this.storage.get('teamid').then(val => {
      const statusRef: firebase.database.Reference = firebase
        .database()
        .ref(`/teams/` + val + '/status/');
      statusRef.set(10).then((res: Response) => {
        this.storage.set('status', 10);
        this.navCtrl.setRoot(Clue6Page);
      });
    });
  }
}
