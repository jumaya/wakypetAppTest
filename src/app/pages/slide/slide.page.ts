import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
})
export class SlidePage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/slide1.jpg',
      titulo: 'Tu mascota segura',
      desc: 'Todos los paseos cuentan con la protección de SURA para mascotas, y podrás seguir la ruta del paseador por GPS.'
    },
    {
      img: '/assets/slides/slide2.jpg',
      titulo: 'Caminemos juntos',
      desc: 'Programa un paseo grupal o personalizado para tu mascota, cualquier día y a cualquier hora.'
    },
    {
      img: '/assets/slides/slide3.jpg',
      titulo: 'Cuidado permanente',
      desc: 'Tu mascota es lo más importante por eso te conectamos con paseadores responsables y que amen a los animales.'
    }
  ];

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {   
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
    return this.router.navigate(['/inicio']);
  }

}
