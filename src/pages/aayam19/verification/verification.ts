import { Component } from '@angular/core';
import { NavController,  AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue1Page } from '../clue1/clue1';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {
  scannedCode = null;
  error: any = false;

  constructor(
    public navCtrl: NavController,
    public barcode: BarcodeScanner,
    public alertCtrl: AlertController
  ) {}

  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      if (this.scannedCode == 'RedSkull')
      {
        if(this.scannedCode == 'Hela')
        {
        const confirm = this.alertCtrl.create({
          title: ' Quantum Realm CLue solved',
          message: 'Your Rank is',
          buttons: [
            {
              text: 'OK!',
              handler: () => {
              }
            }
          ]
        });
        confirm.present();
      }
      }
        if (this.scannedCode == 'Ego') {
          const confirm = this.alertCtrl.create({
            title: ' Quantum Realm CLue solved',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(Clue1Page);
                }
              }
            ]
          });
          confirm.present();
        
        }
        if (this.scannedCode == 'Ultron') {
          const confirm = this.alertCtrl.create({
            title: ' Quantum Realm CLue solved',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(Clue1Page);
                }
              }
            ]
          });
          confirm.present();
        }
        
        if (this.scannedCode == 'Ronan') {
          const confirm = this.alertCtrl.create({
            title: ' Quantum Realm CLue solved',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(Clue1Page);
                }
              }
            ]
          });
          confirm.present();
        
        }
        if (this.scannedCode == 'Dormammu') {
          const confirm = this.alertCtrl.create({
            title: ' Quantum Realm CLue solved',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(Clue1Page);
                }
              }
            ]
          });
          confirm.present();
        
        }
        if (this.scannedCode == 'Hela') {
          const confirm = this.alertCtrl.create({
            title: ' Quantum Realm CLue solved',
            message: 'Your Rank is',
            buttons: [
              {
                text: 'OK!',
                handler: () => {
                  this.navCtrl.push(Clue1Page);
                }
              }
            ]
          });
          confirm.present();
        
        } 
      else {
        this.error = true;
      }
    });
  }
}
