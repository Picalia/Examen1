import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { isRightSide } from 'ionic-angular/umd/util/util';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  animal = {};
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.animal = this.navParams.get('animal')
    if(this.animal.ad.hasOwnProperty('images')){
     this.imgs = this.animal.ad.images; 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  favoritos(animal){
    this.fav.addFavoritos(animal);

  }


}



