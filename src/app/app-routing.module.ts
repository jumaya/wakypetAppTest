import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'slide', pathMatch: 'full' },  
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)},
  { path: 'slide', loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlidePageModule)},
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'mascota',
    loadChildren: () => import('./pages/mascota/mascota.module').then( m => m.MascotaPageModule)
  },
  {
    path: 'new-mascota',
    loadChildren: () => import('./pages/new-mascota/new-mascota.module').then( m => m.NewMascotaPageModule)
  },
  {
    path: 'paseo',
    loadChildren: () => import('./pages/paseo/paseo.module').then( m => m.PaseoPageModule)
  },
  {
    path: 'new-paseo',
    loadChildren: () => import('./pages/new-paseo/new-paseo.module').then( m => m.NewPaseoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
