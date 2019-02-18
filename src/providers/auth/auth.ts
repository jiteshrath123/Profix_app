import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  constructor(public alertCtrl: AlertController) {
    console.log('Hello AuthProvider Provider');
  }
  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout() {
    firebase.auth().signOut();
  }
  getActiveUser() {
    return firebase.auth().currentUser;
  }
  resetPassword(email: string) {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        const al = this.alertCtrl.create({
          title: 'Password Reset Link has been sent on your Email',
          buttons: ['ok']
        });
        al.present();
      })
      .catch(res => {
        const al = this.alertCtrl.create({
          title: res,
          buttons: ['ok']
        });
        al.present();
      });
  }
}
