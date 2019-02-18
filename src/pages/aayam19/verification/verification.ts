import { Component } from '@angular/core';
import { NavController, AlertController, App } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue1Page } from '../clue1/clue1';
import { AuthProvider } from '../../../providers/auth/auth';
import { TabsPage } from '../../tabs/tabs';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {
  scannedCode = null;
  error: any = false;
  attempt: number;

  constructor(
    public navCtrl: NavController,
    public barcode: BarcodeScanner,
    public alertCtrl: AlertController,
    public authService: AuthProvider,
    public storage: Storage,
    public appCtrl: App
  ) {
    this.attempt = 0;
  }

  scanCode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;

      if (this.scannedCode == 'Ego') {
        const confirm = this.alertCtrl.create({
          title: ' Wasteland Verified',
          buttons: [
            {
              text: 'OK!',
              handler: () => {}
            }
          ]
        });
        confirm.present();
        this.attempt = 1;
      }
      if (this.scannedCode == 'Ultron') {
        if (this.attempt == 1) {
          const confirm = this.alertCtrl.create({
            title: ' Perfection Verified',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
          this.attempt = 2;
        } else {
          const confirm = this.alertCtrl.create({
            title: 'First Verify the Wastelands',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
        }
      }

      if (this.scannedCode == 'Ronan') {
        if (this.attempt == 2) {
          const confirm = this.alertCtrl.create({
            title: ' New Xandar Verified',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
          this.attempt = 3;
        } else {
          const confirm = this.alertCtrl.create({
            title: 'First Verify the Perfection',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
        }
      }
      if (this.scannedCode == 'Hela') {
        if (this.attempt == 3) {
          const confirm = this.alertCtrl.create({
            title: ' Deadlands Verified',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
          this.attempt = 4;
        } else {
          const confirm = this.alertCtrl.create({
            title: 'First Verify the Xandar',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
        }
      }
      if (this.scannedCode == 'RedSkull') {
        if (this.attempt == 4) {
          const confirm = this.alertCtrl.create({
            title: ' Hydra Empire Verified',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
          this.attempt = 5;
        } else {
          const confirm = this.alertCtrl.create({
            title: 'First Verify the Deadlands',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
        }
      }
      if (this.scannedCode == 'Dormammu') {
        if (this.attempt == 5) {
          const confirm = this.alertCtrl.create({
            title: ' Dystopia Verified',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
          this.attempt = 6;
          if (this.attempt == 6) {
            const confirm = this.alertCtrl.create({
              title: 'Territories have been verified.',
              message: 'Avengers Assemble',
              buttons: [
                {
                  text: 'OK!',
                  handler: () => {
                    this.storage.get('teamid').then(val => {
                      const statusRef: firebase.database.Reference = firebase
                        .database()
                        .ref(`/teams/` + val + '/status/');
                      statusRef.set(5).then((res: Response) => {
                        this.storage.set('status', 5);
                        this.navCtrl.setRoot(Clue1Page);
                      });
                    });
                  }
                }
              ]
            });
            confirm.present();
          }
        } else {
          const confirm = this.alertCtrl.create({
            title: 'First Verify the Hydra Empire',
            buttons: [
              {
                text: 'OK!',
                handler: () => {}
              }
            ]
          });
          confirm.present();
        }
      } else {
        this.error = true;
      }
    });
  }
  toNext() {
    this.storage.get('teamid').then(val => {
      const statusRef: firebase.database.Reference = firebase
        .database()
        .ref(`/teams/` + val + '/status/');
      statusRef.set(5).then((res: Response) => {
        this.storage.set('status', 5);
        this.navCtrl.setRoot(Clue1Page);
      });
    });
  }
  logout() {
    this.authService.logout();
    this.storage.set('teamid', '');
    this.storage.remove('teamid');
    this.storage.set('team', '');
    this.storage.remove('team');
    this.storage.set('status', '');
    this.storage.remove('status');
    this.appCtrl.getRootNavs()[0].setRoot(TabsPage);
  }
}
