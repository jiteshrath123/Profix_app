import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import { Clue3Page } from '../clue3/clue3';

@Component({
  selector: 'page-clue2',
  templateUrl: 'clue2.html',
})
export class Clue2Page {

  @ViewChild('day') day;
  qrData=null;
  scannedCode=null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private barcodeScanner: BarcodeScanner) {
  }

signIn(){
  if(this.day.value=="TUESDAY")
  { this.barcodeScanner.scan().then(barcodeData=>{
    this.scannedCode = barcodeData.text;
    if(barcodeData.text=="Clue1")
    {
      const confirm = this.alertCtrl.create({
        title: ' Captain Marvel has arrived',
        message: 'Your Rank is',
        buttons: [
          {
            text: 'OK!',
            handler: () => {
              this.navCtrl.push(Clue3Page);
            }
          }
        ]
      });
      confirm.present();
    }    
  })

    }
    
  }
}
