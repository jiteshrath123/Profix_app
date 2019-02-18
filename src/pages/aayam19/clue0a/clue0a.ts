import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Clue0bPage } from '../clue0b/clue0b';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-clue0a',
  templateUrl: 'clue0a.html'
})
export class Clue0aPage {
  @ViewChild('cc1') cc1;
  @ViewChild('cc2') cc2;
  @ViewChild('cc3') cc3;
  @ViewChild('cc4') cc4;
  @ViewChild('cc5') cc5;
  @ViewChild('cc6') cc6;

  visible1 = true;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  visible7 = false;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {}

  checkIn1() {
    if (this.cc1.value.toUpperCase() == 'THE DEADLANDS') {
      this.visible1 = false;
      this.visible2 = true;
    }
  }
  checkIn2() {
    if (this.cc2.value.toUpperCase() == 'THE HYDRA EMPIRE') {
      this.visible2 = false;
      this.visible3 = true;
    }
  }
  checkIn3() {
    if (this.cc3.value.toUpperCase() == 'THE WASTELANDS') {
      this.visible3 = false;
      this.visible4 = true;
    }
  }
  checkIn4() {
    if (this.cc4.value.toUpperCase() == 'NEW XANDAR') {
      this.visible4 = false;
      this.visible5 = true;
    }
  }
  checkIn5() {
    if (this.cc5.value.toUpperCase() == 'DYSTOPIA') {
      this.visible5 = false;
      this.visible6 = true;
    }
  }
  checkIn6() {
    if (this.cc6.value.toUpperCase() == 'PERFECTION') {
      this.visible6 = false;
      this.visible7 = true;
    }
  }

  signIn() {
    if (
      (this.cc1.value == 'THE DEADLANDS',
      this.cc2.value == 'THE HYDRA EMPIRE',
      this.cc3.value == 'THE WASTELANDS',
      this.cc4.value == 'NEW XANDAR',
      this.cc5.value == 'DYSTOPIA',
      this.cc6.value == 'PERFECTION')
    ) {
      this.storage.get('teamid').then(val => {
        const statusRef: firebase.database.Reference = firebase
          .database()
          .ref(`/teams/` + val + '/status/');
        statusRef.set(2).then((res: Response) => {
          this.storage.set('status', 3);
        });
      });
      const confirm = this.alertCtrl.create({
        title: ' Quantum Realm CLue solved',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.storage.get('teamid').then(val => {
                const statusRef: firebase.database.Reference = firebase
                  .database()
                  .ref(`/teams/` + val + '/status/');
                statusRef.set(3).then((res: Response) => {
                  this.storage.set('status', 3);
                  this.navCtrl.setRoot(Clue0bPage);
                });
              });
            }
          }
        ]
      });
      confirm.present();
    }
  }
  tonext() {
    this.storage.get('teamid').then(val => {
      const statusRef: firebase.database.Reference = firebase
        .database()
        .ref(`/teams/` + val + '/status/');
      statusRef.set(3).then((res: Response) => {
        this.storage.set('status', 3);
        this.navCtrl.setRoot(Clue0bPage);
      });
    });
  }
}
