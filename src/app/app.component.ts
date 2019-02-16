import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { Welcome } from '../pages/welcome/welcome';
import { MainPage } from '../pages/main/main';
import { QrcodePage } from '../pages/qrcode/qrcode';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  rootPage: any = this.tabsPage;
  mainPage: any = MainPage;
  isAuthenticate = false;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyAKXfASKPQBLV_oL8KmVbjUwSzf7Jul2WM',
      authDomain: 'endgame-23793.firebaseapp.com',
      databaseURL: 'https://endgame-23793.firebaseio.com',
      projectId: 'endgame-23793',
      storageBucket: 'endgame-23793.appspot.com',
      messagingSenderId: '679101307207'
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticate = true;
        this.nav.setRoot(this.mainPage);
      } else {
        this.isAuthenticate = false;
        this.nav.setRoot(this.tabsPage);
      }
    });
  }
}
