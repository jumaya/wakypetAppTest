import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPaseoPageRoutingModule } from './new-paseo-routing.module';

import { NewPaseoPage } from './new-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPaseoPageRoutingModule, 
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [NewPaseoPage]
})
export class NewPaseoPageModule {}
