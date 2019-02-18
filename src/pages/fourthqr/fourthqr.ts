import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue4Page } from '../aayam19/clue4/clue4';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

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
    public barcode: BarcodeScanner,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }
  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (this.scannedCode == 'fourthQRCode') {
        this.storage.get('teamid').then(val => {
          const statusRef: firebase.database.Reference = firebase
            .database()
            .ref(`/teams/` + val + '/status/');
          statusRef.set(8).then((res: Response) => {
            this.storage.set('status', 8);
            this.navCtrl.setRoot(Clue4Page);
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
      statusRef.set(8).then((res: Response) => {
        this.storage.set('status', 8);
        this.navCtrl.setRoot(Clue4Page);
      });
    });
  }
}
