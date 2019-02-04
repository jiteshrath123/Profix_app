import { Component } from '@angular/core';
import { Aayam19Page } from '../aayam19/aayam19';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
constructor (public navCtrl: NavController){

}
onGoToAayam19(){
  this.navCtrl.push(Aayam19Page);
}

}
