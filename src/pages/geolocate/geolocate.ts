import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlacePage } from '../place/place';
import { AddPlacePage } from '../add-place/add-place';

/**
 * Generated class for the GeolocatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-geolocate',
  templateUrl: 'geolocate.html'
})
export class GeolocatePage {
  addPlacePage = AddPlacePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocatePage');
  }
}
