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
  ionViewDidLoad(){
    this.addGeofence();
  }
  private addGeofence() {
    Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((resp) => {
      var longitude = resp.coords.longitude;
      var latitude = resp.coords.latitude;
      
    let fence = [
      {
      id: '1-5-9-13', //any unique ID
      latitude:       22.726379, //center of geofence radius
      longitude:      75.872902,//sgsits logo hostel ground
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             1, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve 1-5-9-13 parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
    {
      id: '2-6-10-14', //any unique ID
      latitude:       22.725100, //center of geofence radius
      longitude:      75.873993,//tanki
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             2, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '3-7-11-15', //any unique ID
      latitude:       22.726156, //center of geofence radius
      longitude:      75.873587,// banyaan tree
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             3, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '4-8-12-16', //any unique ID
      latitude:       22.724783, //center of geofence radius
      longitude:      75.873187,//bakar point
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             4, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '17-21-25-29', //any unique ID
      latitude:       22.726005, //center of geofence radius
      longitude:     75.871662,//iron man
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             5, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '18-22-26-30', //any unique ID
      latitude:       22.726126, //center of geofence radius
      longitude:      75.870732,//9 3/4
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             6, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '19-23-27-31', //any unique ID
      latitude:       22.726005, //center of geofence radius
      longitude:      75.871662,//mobile charging station
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             7, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
    {
      id: '20-24-28-32', //any unique ID
      latitude:       22.726021, //center of geofence radius
      longitude:      75.871316,//chimney
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             8, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '33-37-41-45', //any unique ID
      latitude:       22.725777, //center of geofence radius
      longitude:      75.870314,//innovation
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             9, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '34-38-42-46', //any unique ID
      latitude:       22.725102, //center of geofence radius
      longitude:      75.869595,//vrindavan
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             10, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '35-39-43-47', //any unique ID
      latitude:       22.725168, //center of geofence radius
      longitude:      75.870175,//nursery
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             11, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '36-40-44-48', //any unique ID
      latitude:       22.725114, //center of geofence radius
      longitude:      75.871341,//HQ
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             12, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '49-53-57-61', //any unique ID
      latitude:       22.725620, //center of geofence radius
      longitude:      75.873558,//obc
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             13, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
    {
      id: '50-54-58-62', //any unique ID
      latitude:       22.726108, //center of geofence radius
      longitude:      75.872353,//T point
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             14, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '51-55-59-63', //any unique ID
      latitude:       22.726204, //center of geofence radius
      longitude:      75.873973,//gg
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      notification: { //notification settings
          id:             15, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    },
     {
      id: '52-56-60-64', //any unique ID
      latitude:       22.725933, //center of geofence radius
      longitude:      75.869367,// dead end
      radius:         20, //radius to edge of geofence in meters
      transitionType:1, //see 'Transition Types' below
      alertctrl: { //notification settings
          id:             16, //any unique ID
          title:          'Congrats!! ', //notification title
          text:           'You recieve parts of final bomb.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
  ]
    this.geofence.addOrUpdate(fence).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    this.geofence.onTransitionReceived().subscribe( res =>{

      res.forEach(function(geo) {
        console.log(geo);
      });

    },
    (err) => console.log(err),
    ()    => console.log("done !")
);
 this.geofence.getWatched().then((geofencesJson) => {

  const geofences = JSON.parse(geofencesJson);

console.log("wathced ");
console.log(geofencesJson);

  return geofences;
});
      this.navCtrl.push(CluebombPage);
}).catch((error) => {
  this.error = error;
});
}
}
