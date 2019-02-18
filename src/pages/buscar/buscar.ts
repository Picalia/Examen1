import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  infoPage = InfoPage;
  animales = [];
  items = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animales = this.navParams.get('animales');
  }

  getItems(ev){
    console.log(ev.target.value);

    this.items = this.animales. filter(animal => {
      return animal.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  Veranimal(animal){
    this.navCtrl.push(this.infoPage, {animal: animal});

  }


}


