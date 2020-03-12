import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMascotaPage } from './new-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: NewMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMascotaPageRoutingModule {}
