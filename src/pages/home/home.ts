import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales = [];
  infopage = InfoPage;
  BuscarPage = BuscarPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=4020&offset=1&lim=29&lang=es")
    .subscribe(data => {
      console.log(JSON.stringify(data))
      if (data.hasOwnProperty('list_ads')){
        this.animales = data['list_ads'];
      }

    }, error => {
      console.log(JSON. stringify(error))

    })

  }

  Veranimal(animal){
    this.navCtrl.push(this.infopage, {animal: animal});
    
  }

  buscar() {
    this.navCtrl.push(this.BuscarPage, {animales: this.animales});
  }

}
