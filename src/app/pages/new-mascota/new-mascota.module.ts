import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMascotaPageRoutingModule } from './new-mascota-routing.module';

import { NewMascotaPage } from './new-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMascotaPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [NewMascotaPage]
})
export class NewMascotaPageModule {}
