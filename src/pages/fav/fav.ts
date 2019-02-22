import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
  items = [];
  infoPage= InfoPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }

  Veranimal(animal){
    this.navCtrl.push(this.infoPage, {animal: animal});
  }

}


