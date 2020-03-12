import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ProgPaseoService } from './../../services/prog-paseo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paseo',
  templateUrl: './paseo.page.html',
  styleUrls: ['./paseo.page.scss'],
})
export class PaseoPage implements OnInit {

  paseo: Observable<any>;  
  loading: any;

  constructor(
    private paseoService: ProgPaseoService,
    private LoadingCtrl: LoadingController,
    private router: Router,

  ) { }

  ngOnInit() {
    this.presentLoading('Cargando..').then(() => {
      this.getProgPaseo().then(() => {
        this.loading.dismiss();
      });
    });
  }

  async presentLoading(message: string) {
    this.loading = await this.LoadingCtrl.create({
      message
    });
    return this.loading.present();
  }

  getHour(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  async getProgPaseo() {
    return this.paseo = this.paseoService.getProgramacion(localStorage.getItem('idUser'));   
  }

}
