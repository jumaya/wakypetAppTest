import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPaseoPage } from './new-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: NewPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPaseoPageRoutingModule {}
