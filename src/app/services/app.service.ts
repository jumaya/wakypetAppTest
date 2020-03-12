import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import config from '../configuration/config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  ApiUrl = config.ApiUrl;
  ApiLocal = config.ApiLocal;

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getClient() {
    return this.http.get(this.ApiUrl + '/getClient');
  }

}
