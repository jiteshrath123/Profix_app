import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AteaminfoPage } from '../../ateaminfo/ateaminfo';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';
import { AuthProvider } from '../../../providers/auth/auth';

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
    public authService: AuthProvider
  ) {}
  Save_the_Universe(form: NgForm) {
    this.teamid = this.authService.getActiveUser().uid;
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
    const personRef: firebase.database.Reference = firebase
      .database()
      .ref(`/teams/` + this.teamid + '/');
    personRef.set(this.team).then((res: Response) => {
      this.navCtrl.push(AteaminfoPage);
    });
  }
}
