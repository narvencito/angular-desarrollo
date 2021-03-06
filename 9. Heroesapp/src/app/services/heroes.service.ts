import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string = 'https://heroesapp-6621f.firebaseio.com/heroes.json';
  heroeURL:string = 'https://heroesapp-6621f.firebaseio.com/heroes/';

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe) {
    let body:string = JSON.stringify(heroe);
    let headers:Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(
      this.heroesURL,
      body,
      { headers }
    ).map(res => {
      return res.json();
    });
  }

  actualizarHeroe(heroe:Heroe, key$:string) {
    let body:string = JSON.stringify(heroe);
    let headers:Headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.heroeURL}${key$}.json`;
    return this.http.put(
      url,
      body,
      { headers }
    ).map(res => {
      return res.json();
    });
  }

  getHeroe(key$:string) {
    let headers:Headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.heroeURL}${key$}.json`;
    return this.http.get(
      url,
      { headers }
    ).map(res => {
      return res.json();
    });
  }

  getHeroes() {
    let headers:Headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(
      this.heroesURL,
      { headers }
    ).map(res => {
      return res.json();
    });
  }

  borrarHeroe(key$:string) {
    let headers:Headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.heroeURL}${key$}.json`;
    return this.http.delete(
      url,
      { headers }
    ).map(res => {
      return res.json();
    });
  }

}
