import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Geofence} from '@ionic-native/geofence';
import {Geolocation} from '@ionic-native/geolocation';
import {CluebombPage} from '../cluebomb/cluebomb';
@Component({
  selector: 'page-clue6',
  templateUrl: 'clue6.html',
})
export class Clue6Page {
  error: any;
 
  constructor(public navCtrl: NavController, private geofence: Geofence) {
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    )
  }
  
  private addGeofence() {
    Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((resp) => {
      var longitude = resp.coords.longitude;
      var latitude = resp.coords.latitude;
      
    let fence1 = [
      {
      id: '1_5_9_13', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve 1_5_9_13 parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
    {
      id: '2_6_10_14', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '3_7_11_15', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '4_8_12_16', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '17_21_25_29', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '18_22_26_30', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '19_23_27_31', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
    {
      id: '20_24_28_32', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '33_37_41_45', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '34_38_42_46', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '35_39_43_47', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '36_40_44_48', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '49_53_57_61', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
    {
      id: '50_54_58_62', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '51_55_59_63', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '52_56_60_64', //any unique ID
      latitude:       37.285951, //center of geofence radius
      longitude:      -121.936650,
      radius:         20, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  ]
    this.geofence.addOrUpdate(fence1).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    
      this.navCtrl.push(CluebombPage);
}).catch((error) => {
  this.error = error;
});
}
}
