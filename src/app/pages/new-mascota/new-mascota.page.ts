import { Router } from '@angular/router';
import { MascotaService } from './../../services/mascota.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, IonButton, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-mascota',
  templateUrl: './new-mascota.page.html',
  styleUrls: ['./new-mascota.page.scss'],
})
export class NewMascotaPage implements OnInit {

  get nombre() {
    return this.MascotaForm.get("nombre");
  }
  get raza() {
    return this.MascotaForm.get("raza");
  }
  get fecha_nacimiento() {
    return this.MascotaForm.get("fecha_nacimiento");
  }

  image: string;
  base64Image = '';
  razas: Observable<any> = this.mascotaService.getRaza();
  @ViewChild('btnGuardar', {static:false}) btnGuardar: IonButton;

  public errorMessages = {
    raza: [
      { type: 'required', message: 'Debe seleccionar la raza de su mascota' },      
    ],   
    nombre: [
      { type: 'required', message: 'Ingrese el nombre de su mascota' },
      {
        type: 'maxlength',
        message: 'El campo nombre no debe ser mayor a 255 caracteres'
      }
    ],    
    fecha_nacimiento: [
      { type: 'required', message: 'La fecha de nacimiento es requerida' }
    ],
  };

  private MascotaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private camera: Camera,    
    private mascotaService: MascotaService,
    public alertController: AlertController,
    private router: Router,
    private toastCtrl: ToastController
  ) {

    this.MascotaForm = this.formBuilder.group({
      fecha_nacimiento: ['', [Validators.required]],
      raza:['', [Validators.required]],
      nombre: ['', [Validators.required, Validators.maxLength(255)]]   
    });

   }

  ngOnInit() {

  }

  onSubmit() {
    var formData = new FormData();
    let date = new Date(this.MascotaForm.value.fecha_nacimiento);            
    this.btnGuardar.disabled = true;
    formData.append('nombre', this.MascotaForm.value.nombre);
    formData.append('raza', this.MascotaForm.value.raza);
    formData.append('fecha_nacimiento', date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate());      
    formData.append('foto', this.base64Image);
    formData.append('user_id', localStorage.getItem("idUser"));

    this.mascotaService.saveMascota(formData).toPromise().then((res) => {
      this.presentToast('Se ha registrado tu mascota exitosamente');
      this.btnGuardar.disabled = false;  
    })
      .catch(err => { console.log(err) });
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,      
      correctOrientation: true
    };
    this.camera.getPicture(options)
      .then((imageData) => {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.base64Image = imageData;      
      }, (err) => {
        console.log(err);
      });
  }


  getGalery() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,      
      correctOrientation: true
    };
    this.camera.getPicture(options)
      .then((imageData) => {
        this.image = 'data:image/jpeg;base64,' + imageData;
        this.base64Image = imageData;      
      }, (err) => {
        console.log(err);
      });
  }

}
