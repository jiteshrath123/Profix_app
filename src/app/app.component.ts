import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';
import { FuelPage } from '../pages/aayam19/fuel/fuel';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  rootPage: any = this.tabsPage;
  mainPage: any = FuelPage;
  isAuthenticate = false;
  logincheck: any;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    storage: Storage
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
    storage.ready().then(() => {
      this.logincheck = storage.get('teamid').then(val => {
        this.logincheck = val;
        if (this.logincheck) {
          this.isAuthenticate = true;
          this.nav.setRoot(this.mainPage);
        } else {
          this.isAuthenticate = false;
          this.nav.setRoot(this.tabsPage);
        }
      });
    });
  }
}
