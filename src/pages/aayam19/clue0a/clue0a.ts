import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Clue0bPage } from '../clue0b/clue0b';
@Component({
  selector: 'page-clue0a',
  templateUrl: 'clue0a.html'
})
export class Clue0aPage {
  @ViewChild('ccT') ccT;
  @ViewChild('cc1') cc1;
  @ViewChild('cc2') cc2;
  @ViewChild('cc3') cc3;
  @ViewChild('cc4') cc4;
  @ViewChild('cc5') cc5;
  @ViewChild('cc6') cc6;
  @ViewChild('ccB') ccB;
  @ViewChild('cc7') cc7;
  @ViewChild('cc8') cc8;
  @ViewChild('cc9') cc9;
  @ViewChild('cc10') cc10;
  @ViewChild('cc11') cc11;
  @ViewChild('cc12') cc12;
  visible0 = true;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible11 = false;
  visible4 = false;
  visible5 = false;
  visible6 = false;
  visible7 = false;
  visible8 = false;
  visible9 = false;
  visible10 = false;
  visible12 = false;
  visible13 = false;
  visibleB = false;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  Clues = [
    'ccT',
    'cc1',
    'cc2',
    'cc3',
    'cc4',
    'cc5',
    'cc6',
    'ccB',
    'cc7',
    'cc8',
    'cc9',
    'cc10',
    'cc11',
    'cc12'
  ];
  checkIn0() {
    if (this.ccT.value.toUpperCase() == 'TERRITORY') {
      this.visible0 = false;
      this.visible1 = true;
    }
  }
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
  checkInB() {
    if (this.ccB.value.toUpperCase() == 'BARON') {
      this.visibleB = false;
      this.visible7 = true;
    }
  }

  checkIn7() {
    if (this.cc7.value.toUpperCase() == 'ULTRON') {
      this.visible7 = false;
      this.visible8 = true;
    }
  }
  checkIn8() {
    if (this.cc8.value.toUpperCase() == 'EGO') {
      this.visible8 = false;
      this.visible9 = true;
    }
  }
  checkIn9() {
    if (this.cc9.value.toUpperCase() == 'RONAN') {
      this.visible9 = false;
      this.visible10 = true;
    }
  }
  checkIn10() {
    if (this.cc10.value.toUpperCase() == 'HELA') {
      this.visible10 = false;
      this.visible11 = true;
    }
  }
  checkIn11() {
    if (this.cc11.value.toUpperCase() == 'RED SKULL') {
      this.visible11 = false;
      this.visible12 = true;
    }
  }
  checkIn12() {
    if (this.cc12.value.toUpperCase() == 'DORMAMMU') {
      this.visible12 = false;
      this.visible13 = true;
    }
  }

  signIn() {
    if (
      (this.ccT.value == 'TERRITORY',
      this.cc1.value == 'THE DEADLANDS',
      this.cc2.value == 'THE HYDRA EMPIRE',
      this.cc3.value == 'THE WASTELANDS',
      this.cc4.value == 'NEW XANDAR',
      this.cc5.value == 'DYSTOPIA',
      this.cc6.value == 'PERFECTION',
      this.ccB.value == 'BARON',
      this.cc7.value == 'ULTRON',
      this.cc8.value == 'EGO',
      this.cc9.value == 'RONAN',
      this.cc10.value == 'HELA',
      this.cc11.value == 'RED SKULL',
      this.cc12.value == 'DORMAMMU')
    ) {
      const confirm = this.alertCtrl.create({
        title: ' Quantum Realm CLue solved',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.navCtrl.push(Clue0bPage);
            }
          }
        ]
      });
      confirm.present();
    }
  }
  tonext() {
    this.navCtrl.push(Clue0bPage);
  }
}
