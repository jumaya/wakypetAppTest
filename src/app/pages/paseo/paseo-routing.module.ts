import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaseoPage } from './paseo.page';

const routes: Routes = [
  {
    path: '',
    component: PaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaseoPageRoutingModule {}
