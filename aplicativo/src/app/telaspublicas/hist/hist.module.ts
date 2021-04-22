import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistPageRoutingModule } from './hist-routing.module';

import { HistPage } from './hist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistPageRoutingModule
  ],
  declarations: [HistPage]
})
export class HistPageModule {}
