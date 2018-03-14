import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Locate } from '../locate/locate'
import { Geolocation } from '@ionic-native/geolocation';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SMS } from "@ionic-native/sms"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //Variable declarations--------------------------------------
message = null
url = ""
baseurl = 'https://www.google.com/maps/dir/current+location/'
form = {
      phNum:null,
      user:null
    }
data = {
      lat:null,
      long: null
    } 
//-------------------------------------------------------------------

constructor(public sms: SMS, public navCtrl: NavController, public geolocation: Geolocation, public adPer: AndroidPermissions) {}


//Functions-----------------------------------------------------------------------------
  
    // this function sends Sms
  sendSms(phone: string, name: string){
    this.message = name + ' have shared their location using FindMe with you please visit this google maps link below             ' + this.url 
    this.sms.send(phone,this.message);
  }

  //this function gets user's location
  getlocation(){
    console.log('this is locate function');
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.data.lat = resp.coords.latitude;
      this.data.long = resp.coords.longitude
      this.url= this.baseurl+this.data.long+','+this.data.lat
      this.navCtrl.push(Locate);
      })
      .catch((error) => {console.log('Error getting location', error);
    });
   }
  }
//------------------------------------------------------------------------