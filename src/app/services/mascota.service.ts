import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration/config';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  ApiUrl = config.ApiUrl;
  ApiLocal = config.ApiLocal;

  constructor(
    private http: HttpClient
  ) { }

  getMascota(id) {
    return this.http.get(this.ApiUrl + '/getMascota', { 'params': { 'data': id } });
  }

  getRaza() {
    return this.http.get(this.ApiUrl + '/getRaza');
  }

  saveMascota(data) {
    return this.http.post(this.ApiUrl + '/saveMascota', data);
  }

  getNameMascota(id) {
    return this.http.get(this.ApiUrl + '/getNameMascota', { 'params': { 'data': id } });
  }

  
}
