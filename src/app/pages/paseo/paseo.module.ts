import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaseoPageRoutingModule } from './paseo-routing.module';

import { PaseoPage } from './paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PaseoPage]
})
export class PaseoPageModule {}
