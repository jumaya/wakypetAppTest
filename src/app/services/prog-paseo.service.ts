import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration/config';

@Injectable({
  providedIn: 'root'
})
export class ProgPaseoService {

  ApiUrl = config.ApiUrl;
  ApiLocal = config.ApiLocal;

  constructor(
    private http: HttpClient
  ) { }

  getProgramacion(id) {
    return this.http.get(this.ApiUrl + '/getProgramacion', { 'params': { 'data': id } });
  }

  getPlan() {
    return this.http.get(this.ApiUrl + '/getPlan');
  }

  saveProgPaseo(data) {
    return this.http.post(this.ApiUrl + '/saveProgPaseo', data);
  }

}
