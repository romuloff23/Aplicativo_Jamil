import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPageRoutingModule } from './mc-routing.module';

import { McPage } from './mc.page';

import {  HttpClientModule } from '@angular/common/http';
import { ModuloExibicaoModule } from 'src/app/class/model/interfacesdb/modulo-exibicao.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPageRoutingModule,
    HttpClientModule,
    ModuloExibicaoModule
  ],
  declarations: [McPage]
})
export class McPageModule {}
