import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MantePage } from './mante';

@NgModule({
  declarations: [
    MantePage,
  ],
  imports: [
    IonicPageModule.forChild(MantePage),
  ],
})
export class MantePageModule {}
