import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AteaminfoPage } from '../../ateaminfo/ateaminfo';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';
import { AuthProvider } from '../../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { FuelPage } from '../fuel/fuel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-enter-team',
  templateUrl: 'enter-team.html'
})
export class EnterTeamPage {
  teamid: any;
  team: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthProvider,
    public storage: Storage,
    public http: HttpClient
  ) {}
  Save_the_Universe(form: NgForm) {
    this.http
      .get(
        'https://sokt.io/32LSWXGJa2wPWFCCTzms/personal-endgame?authkey=pyz15yEZNfmY1FT4NVuL&name1=' +
          form.value.name1 +
          '&email1=' +
          form.value.email1 +
          '&phone1=' +
          form.value.contact1 +
          '&name2=' +
          form.value.name2 +
          '&email2=' +
          form.value.email2 +
          '&phone2=' +
          form.value.contact2 +
          '&name3=' +
          form.value.name3 +
          '&email3=' +
          form.value.email3 +
          '&phone3=' +
          form.value.contact3 +
          '&name4=' +
          form.value.name4 +
          '&email4=' +
          form.value.email4 +
          '&phone4=' +
          form.value.contact4 +
          '/'
      )
      .subscribe(res => {
        console.log(res);
      });
    this.team = [
      {
        name: form.value.name1,
        email: form.value.email1,
        contact: form.value.contact1
      },
      {
        name: form.value.name2,
        email: form.value.email2,
        contact: form.value.contact2
      },
      {
        name: form.value.name3,
        email: form.value.email3,
        contact: form.value.contact3
      },
      {
        name: form.value.name4,
        email: form.value.email4,
        contact: form.value.contact4
      }
    ];
    this.storage.get('teamid').then(val => {
      console.log(val);
      const personRef: firebase.database.Reference = firebase
        .database()
        .ref(`/teams/` + val + '/members/');
      personRef.set(this.team).then((res: Response) => {
        this.storage.set('team', this.team);
        const statusRef: firebase.database.Reference = firebase
          .database()
          .ref(`/teams/` + val + '/status/');
        statusRef.set(2).then((res: Response) => {
          this.storage.set('status', 2);
        });

        this.navCtrl.setRoot(AteaminfoPage);
      });
    });
  }
}
