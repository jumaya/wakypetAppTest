import { MascotaService } from './../../services/mascota.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
})
export class MascotaPage implements OnInit {

  id: "";
  mascota: Observable<any>;
  result: any[] = new Array();

  constructor(
    private mascotaService: MascotaService,
    private toastCtrl: ToastController

  ) { }

  ngOnInit() {
    this.getMascotaById(localStorage.getItem("idUser"));    
  }

  calcDate(date1, date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff / day);
    var months = Math.floor((days / 31));
    var years = Math.floor(months / 12);
    var message = years + " año(s)";

    return message;
  }

 

  async getMascotaById(id) {
    var today = new Date();
    this.mascota = this.mascotaService.getMascota(id);
    this.mascota.forEach(element => {
      element.forEach(childObj => {
        var past = new Date(childObj.fecha_nacimiento)
        var year = this.calcDate(today, past);
        console.log(year);
        this.result.push({
          'mascota_id': childObj.mascota_id,
          'nombre': childObj.nombre,
          'raza': childObj.raza,
          'fecha_nacimiento': childObj.fecha_nacimiento,
          'foto': childObj.foto,
          'edad': year
        })
      });
    });
  }

}
