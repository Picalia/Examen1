import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the MantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mante',
  templateUrl: 'mante.html',
})
export class MantePage {

  mantenimiento = [];
  infopage = InfoPage;
  buscarpage = BuscarPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=8020&offset=1&lim=29&lang=es")
    .subscribe(data => {
      console.log(JSON.stringify(data))
      if (data.hasOwnProperty('list_ads')){
        this.mantenimiento = data['list_ads'];
      }

    }, error => {
      console.log(JSON. stringify(error))

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantePage');
  }

  Vermante(mante){
    this.navCtrl.push(this.infopage, {animal: mante});
    
  }

  buscar() {
    this.navCtrl.push(this.buscarpage, {animales: this.mantenimiento});
  }

}
