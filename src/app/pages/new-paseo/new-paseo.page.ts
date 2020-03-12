import { ProgPaseoService } from './../../services/prog-paseo.service';
import { MascotaService } from './../../services/mascota.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IonButton, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-paseo',
  templateUrl: './new-paseo.page.html',
  styleUrls: ['./new-paseo.page.scss'],
})
export class NewPaseoPage implements OnInit {

  get mascota() {
    return this.ProgPaseoForm.get("mascota");
  }
  get plan() {
    return this.ProgPaseoForm.get("plan");
  }
  get fecha() {
    return this.ProgPaseoForm.get("fecha");
  }
  get inicio() {
    return this.ProgPaseoForm.get("inicio");
  }
  get fin() {
    return this.ProgPaseoForm.get("fin");
  }

  image: string;
  base64Image = '';
  mascotas: Observable<any> = this.mascotaService.getNameMascota(localStorage.getItem("idUser"));
  planes: Observable<any> = this.progService.getPlan();
  @ViewChild('btnProg', { static: false }) btnProg: IonButton;

  public errorMessages = {
    mascota: [
      { type: 'required', message: 'Debe seleccionar tu mascota' },
    ],
    plan: [
      { type: 'required', message: 'Seleccione el plan' }
    ],
    fecha: [
      { type: 'required', message: 'Seleccione la fecha' }
    ],
    inicio: [
      { type: 'required', message: 'Ingrese la hora de inicio del paseo' }
    ],
    fin: [
      { type: 'required', message: 'Ingrese la hora de fin del paseo' }
    ]
  };

  private ProgPaseoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mascotaService: MascotaService,
    private progService: ProgPaseoService,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    this.ProgPaseoForm = this.formBuilder.group({
      mascota: ['', [Validators.required]],
      plan: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      inicio: ['', [Validators.required]],
      fin: ['', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  onSubmit() {
    var formData = new FormData();
    let fecha = new Date(this.ProgPaseoForm.value.fecha);
    let Finicio = new Date(this.ProgPaseoForm.value.inicio);
    let Ffin = new Date(this.ProgPaseoForm.value.fin);

    var strR = this.ProgPaseoForm.value.mascota;
    var strP = this.ProgPaseoForm.value.plan;
    this.btnProg.disabled = true;

    var strMascota = strR.split(" ", 1).toString().split(" ", 1).toString();
    var strPlan = strP.split(" ", 1).toString().split(" ", 1).toString();
    var title = strR.substr(strR.indexOf(' ') + 1) + '  -  ' + strP.substr(strP.indexOf(' ') + 1);

    formData.append('title', title);
    formData.append('start', fecha.getFullYear() + '-' + (fecha.getMonth() + 1)
      + '-' + fecha.getDate() + ' ' + Finicio.getHours() + ':' + Finicio.getMinutes() + ':00');
    formData.append('end', fecha.getFullYear() + '-' + (fecha.getMonth() + 1)
      + '-' + fecha.getDate() + ' ' + Ffin.getHours() + ':' + Ffin.getMinutes() + ':00');
    formData.append('mascota_id', strMascota);
    formData.append('plan_id', strPlan);

    this.progService.saveProgPaseo(formData).toPromise().then((res) => {
      this.presentToast('Se ha programado el paseo exitosamente');
      this.btnProg.disabled = false;
    })
      .catch(err => { console.log(err) });          
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
