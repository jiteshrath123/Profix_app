import { Component, ViewChild } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Clue2Page } from '../clue2/clue2';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { AuthProvider } from '../../../providers/auth/auth';
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-clue1',
  templateUrl: 'clue1.html'
})
export class Clue1Page {
  @ViewChild('uname') cname;
  @ViewChild('4passcode') cpassword;
  qrData = null;
  scannedCode = null;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public authService: AuthProvider,
    public appCtrl: App
  ) {}

  signIn() {
    if (
      (this.cname.value.toUpperCase() == 'CAPTAIN MARVEL',
      this.cpassword.value == '9851')
    ) {
      const confirm = this.alertCtrl.create({
        title: ' Captain Marvel has arrived',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.storage.get('teamid').then(val => {
                const statusRef: firebase.database.Reference = firebase
                  .database()
                  .ref(`/teams/` + val + '/status/');
                statusRef.set(6).then((res: Response) => {
                  this.storage.set('status', 6);
                  this.navCtrl.setRoot(Clue2Page);
                });
              });
            }
          }
        ]
      });
      confirm.present();
    }
  }
  toNext() {
    this.storage.get('teamid').then(val => {
      const statusRef: firebase.database.Reference = firebase
        .database()
        .ref(`/teams/` + val + '/status/');
      statusRef.set(6).then((res: Response) => {
        this.storage.set('status', 6);
        this.navCtrl.setRoot(Clue2Page);
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
