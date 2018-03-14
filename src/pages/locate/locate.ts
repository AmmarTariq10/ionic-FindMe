import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import {  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
 } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
 
@Component({
  selector: 'page-locate',
  templateUrl: 'locate.html',
})

export class Locate {

  data = {
  lat:null,
  long:null
}

maps: GoogleMap
Gmaps: GoogleMaps



constructor( public view: ViewController, public param: NavParams, public navCtrl: NavController, public geolocation: Geolocation) {

  this.getlocation();

}



loadMap(){
 let mapOptions: GoogleMapOptions = {
              camera: {
                   target: {
                    lat: this.data.lat,
                    lng: this.data.long
                          },
                   zoom: 10,
                   tilt: 10
                      }
 
          }  
    this.maps = GoogleMaps.create('map_canvas', mapOptions);
    console.log('maps created')
    this.maps.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
            this.maps.addMarker({
              title: 'You are Here!!',
              icon: 'blue',
              animation: 'DROP',
              position: {
              lat: this.data.lat,
              lng: this.data.long
            }
          })

      });


  }

  dismiss(){
    this.navCtrl.pop();
  }
 
  getlocation(){
    console.log('this is locate function');
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.data.lat = resp.coords.latitude;
      this.data.long = resp.coords.longitude;
      this.loadMap();
      })
      .catch((error) => {console.log('Error getting location', error);
    });
     return this.data.lat, this.data.long
   }
  }



