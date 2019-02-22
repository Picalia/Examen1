import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { InfoPage } from '../pages/info/info';
import { BuscarPage } from '../pages/buscar/buscar';
import { TabsPage } from '../pages/tabs/tabs';
import { FavPage } from '../pages/fav/fav';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { CompusPage } from '../pages/compus/compus';
import { MantePage } from '../pages/mante/mante';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    BuscarPage,
    TabsPage,
    FavPage, 
    CompusPage,
    MantePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    BuscarPage,
    TabsPage,
    FavPage, 
    CompusPage,
    MantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
