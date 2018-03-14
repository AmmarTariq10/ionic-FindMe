import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Locate } from './locate';

@NgModule({
  declarations: [
    Locate,
  ],
  imports: [
    IonicPageModule.forChild(Locate),
  ],
})
export class LocateModule {}
