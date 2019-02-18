import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue3Page } from '../aayam19/clue3/clue3';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

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
    public barcode: BarcodeScanner,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (this.scannedCode == 'thirdQRCode') {
        this.storage.get('teamid').then(val => {
          const statusRef: firebase.database.Reference = firebase
            .database()
            .ref(`/teams/` + val + '/status/');
          statusRef.set(7).then((res: Response) => {
            this.storage.set('status', 7);
            this.navCtrl.setRoot(Clue3Page);
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
      statusRef.set(7).then((res: Response) => {
        this.storage.set('status', 7);
        this.navCtrl.setRoot(Clue3Page);
      });
    });
  }
}
