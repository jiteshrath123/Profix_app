import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Modal } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { EnterTeamPage } from '../../aayam19/enter-team/enter-team';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild('crname') cname;
  @ViewChild('crpassword') cpassword;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public authService: AuthProvider,
    public loadingCtrl: LoadingController
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
                loading.dismiss();
                const al = this.alertCtrl.create({
                  title: 'Sign Up Successful',
                  buttons: ['ok']
                });
                this.navCtrl.setRoot('Payment');

                al.present();
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
        loading.dismiss();
        const al = this.alertCtrl.create({
          title: 'Sign In Successful',
          buttons: ['ok']
        });
        al.present();
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
}
