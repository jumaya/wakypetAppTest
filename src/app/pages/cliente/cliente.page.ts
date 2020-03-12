import { Router } from '@angular/router';
import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  client: Observable<any>;
  loading: any;
  textSearch = "";

  constructor(
    private appService: AppService,
    private LoadingCtrl: LoadingController,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    localStorage.removeItem("idUser");
    this.presentToast("Desliza tu registro de usuario hacia la izquierda para visualizar las opciones")
    this.presentLoading('Cargando..').then(() => {
      this.getClientsList().then(() => {
        this.loading.dismiss();
      });
    });
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4000
    });
    toast.present();
  }

  async presentLoading(message: string) {
    this.loading = await this.LoadingCtrl.create({
      message
    });
    return this.loading.present();
  }

  async getClientsList() {
    return this.client = this.appService.getClient();
  }

  onClick(user) {

  }

  paseo(user) {
    localStorage.setItem("idUser", user);
    return this.router.navigate(['/paseo']);
  }

  mascota(user) {
    localStorage.setItem("idUser", user);
    return this.router.navigate(['/mascota']);
  }

  onSearchChange(event) {
    this.textSearch = event.detail.value;
  }

}
