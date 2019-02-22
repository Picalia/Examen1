import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the CompusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compus',
  templateUrl: 'compus.html',
})
export class CompusPage {

  compus = [];
  InfoPage = InfoPage;
  buscarpage = BuscarPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=5020&offset=1&lim=29&lang=es")
    .subscribe(data => {
      console.log(JSON.stringify(data));
      if (data.hasOwnProperty('list_ads')){
        this.compus = data['list_ads'];
      }
    
    }, error => {
        console.log(JSON.stringify(error));
      });

    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CompusPage');
  }

  Vercompu(compu){
    this.navCtrl.push(this.InfoPage, {animal: compu});
    
  }
  
  buscar() {
    this.navCtrl.push(this.buscarpage, {animales: this.compus});
  }

}


