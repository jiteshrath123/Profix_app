import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { VerificationPage } from '../verification/verification';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-clue0b',
  templateUrl: 'clue0b.html'
})
export class Clue0bPage {
  @ViewChild('cob1') cob1;
  @ViewChild('cob2') cob2;
  @ViewChild('cob3') cob3;
  @ViewChild('cob4') cob4;
  @ViewChild('cob5') cob5;
  @ViewChild('cob6') cob6;
  visible0 = true;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {}

  checkIn1() {
    if (this.cob1.value.toUpperCase() == 'RED SKULL') {
      this.visible0 = false;
      this.visible1 = true;
    }
  }
  checkIn2() {
    if (this.cob2.value.toUpperCase() == 'HELA') {
      this.visible1 = false;
      this.visible2 = true;
    }
  }
  checkIn3() {
    if (this.cob3.value.toUpperCase() == 'PERFECTION') {
      this.visible2 = false;
      this.visible3 = true;
    }
  }
  checkIn4() {
    if (this.cob4.value.toUpperCase() == 'RONAN') {
      this.visible3 = false;
      this.visible4 = true;
    }
  }
  checkIn5() {
    if (this.cob5.value.toUpperCase() == 'DORMAMMU') {
      this.visible4 = false;
      this.visible5 = true;
    }
  }
  checkIn6() {
    if (this.cob6.value.toUpperCase() == 'DEADLANDS') {
      this.visible5 = false;
      this.visible6 = true;
    }
  }

  signIn() {
    {
      const confirm = this.alertCtrl.create({
        title: ' Congratulation The Battle World Clue is Solved ',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.storage.get('teamid').then(val => {
                const statusRef: firebase.database.Reference = firebase
                  .database()
                  .ref(`/teams/` + val + '/status/');
                statusRef.set(4).then((res: Response) => {
                  this.storage.set('status', 4);
                  this.navCtrl.setRoot(VerificationPage);
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
      statusRef.set(4).then((res: Response) => {
        this.storage.set('status', 4);
        this.navCtrl.setRoot(VerificationPage);
      });
    });
  }
}
