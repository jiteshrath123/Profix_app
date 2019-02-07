import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Geofence} from '@ionic-native/geofence';

/**
 * Generated class for the Clue6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-clue6',
  templateUrl: 'clue6.html',
})
export class Clue6Page {

  constructor(public navCtrl: NavController, private geofence: Geofence) {
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )
  }

  private addGeofence() {
    //options describing geofence
    let fence1 = {
      id: '1_5_9_13', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence2 = {
      id: '2_6_10_14', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence3 = {
      id: '3_7_11_15', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence4 = {
      id: '4_8_12_16', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence5 = {
      id: '17_21_25_29', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence6 = {
      id: '18_22_26_30', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence7 = {
      id: '19_23_27_31', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence8 = {
      id: '20_24_28_32', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence9 = {
      id: '33_37_41_45', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence10 = {
      id: '34_38_42_46', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence11 = {
      id: '35_39_43_47', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence12 = {
      id: '36_40_44_48', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence13 = {
      id: '49_53_57_61', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence14 = {
      id: '50_54_58_62', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence15 = {
      id: '51_55_59_63', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    let fence16 = {
      id: '52_56_60_64', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         100, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    this.geofence.addOrUpdate(fence1).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence2).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence3).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence4).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence5).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence6).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence7).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence8).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence9).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence10).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence11).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence12).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence13).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence14).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence15).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.addOrUpdate(fence16).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
}
}
