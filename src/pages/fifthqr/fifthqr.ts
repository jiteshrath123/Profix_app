import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue5Page } from '../aayam19/clue5/clue5';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

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
    public barcode: BarcodeScanner,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (this.scannedCode == 'fifthQRCode') {
        this.storage.get('teamid').then(val => {
          const statusRef: firebase.database.Reference = firebase
            .database()
            .ref(`/teams/` + val + '/status/');
          statusRef.set(9).then((res: Response) => {
            this.storage.set('status', 9);
            this.navCtrl.setRoot(Clue5Page);
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
      statusRef.set(9).then((res: Response) => {
        this.storage.set('status', 9);
        this.navCtrl.setRoot(Clue5Page);
      });
    });
  }
}
