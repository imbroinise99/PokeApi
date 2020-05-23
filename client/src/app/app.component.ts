import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public http: HttpClient) {} //dependency injection

  pokemon: Pokemon;

  data: Object;
  observable: Observable<Object>;

  obsPost: Observable<Object>;

  getData = (d : Object) => {
    this.data = new Object(d);
  }

  cercaPokemon(HTMLpokemon: HTMLInputElement) {
    let pokemon = String(HTMLpokemon.value);
    this.observable = this.http.get('https://pokeapi.co/api/v2/pokemon/' + pokemon + '/'); //richiesta alle API
    this.observable.subscribe(this.getData); //ci sottoscriviamo all'observable
    return false;
  }

  catturaPokemon(): boolean {
    let newData = new Pokemon();
    this.obsPost = this.http.post('', newData);
    this.obsPost.subscribe(data => this.data = data);
    return false;
  }

}
