import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Modal, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { MainPage } from '../../main/main';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { HttpClient } from '@angular/common/http/';
import { FuelPage } from '../fuel/fuel';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('crname') cname;
  @ViewChild('crpassword') cpassword;
  @ViewChild('num') number;
  link = false;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public authService: AuthProvider,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public appCtrl: App,
    public http: HttpClient
  ) {}
  signUp() {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up..'
    });

    const confirm = this.alertCtrl.create({
      title: ' Avengers Initiative',
      message:
        'Do You Want to join the Avengers to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            loading.present();
            this.authService
              .signup(this.cname.value, this.cpassword.value)
              .then(data => {
                const al = this.alertCtrl.create({
                  title: 'Sign Up Successful',
                  buttons: ['ok']
                });
                al.present();
                let teamid = this.authService.getActiveUser().uid;
                this.storage.set('teamid', teamid);

                const idRef: firebase.database.Reference = firebase
                  .database()
                  .ref(`/teams/` + teamid + '/id/');
                idRef.set(this.cname.value).then((res: Response) => {});

                const phoneRef: firebase.database.Reference = firebase
                  .database()
                  .ref(`/teams/` + teamid + '/phone/');
                phoneRef.set(this.number.value).then((res: Response) => {});

                const statusRef: firebase.database.Reference = firebase
                  .database()
                  .ref(`/teams/` + teamid + '/status/');
                statusRef.set(0).then((res: Response) => {
                  this.storage.set('status', 0);
                });

                this.http
                  .put(
                    'https://endgame-23793.firebaseio.com/emails/' +
                      this.number.value +
                      '/.json',
                    { id: teamid }
                  )
                  .subscribe((res: Response) => {
                    console.log(res);
                  });
                loading.dismiss();

                this.appCtrl.getRootNavs()[0].setRoot(MainPage);
              })
              .catch(error => {
                loading.dismiss();
                const alert = this.alertCtrl.create({
                  title: 'Sign up failed',
                  message: error.message,
                  buttons: ['ok']
                });
                alert.present();
              });
          }
        }
      ]
    });
    confirm.present();
  }
  signIn() {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up..'
    });
    loading.present();
    this.authService
      .signin(this.cname.value, this.cpassword.value)
      .then(data => {
        let teamid = this.authService.getActiveUser().uid;
        this.storage.set('teamid', teamid);
        console.log(teamid);
        const statusRef: firebase.database.Reference = firebase
          .database()
          .ref(`/teams/` + teamid + '/status/');
        statusRef.on('value', personSnapshot => {
          this.storage.set('status', personSnapshot.val());
          this.appCtrl.getRootNavs()[0].setRoot(FuelPage);
          loading.dismiss();
          const al = this.alertCtrl.create({
            title: 'Sign In Successful',
            buttons: ['ok']
          });
          al.present();
        });
        const personRef: firebase.database.Reference = firebase
          .database()
          .ref(`/teams/` + teamid + '/members/');
        personRef.on('value', personSnapshot => {
          this.storage.set('team', personSnapshot.val());
        });
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Sign In failed',
          message: error.message,
          buttons: ['ok']
        });
        alert.present();
      });
  }
  reset() {
    this.authService.resetPassword(this.cname.value);
  }
}
