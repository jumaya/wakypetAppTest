import { AppService } from './../../services/app.service';
import { Componente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.componentes = this.appService.getMenuOpts();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
