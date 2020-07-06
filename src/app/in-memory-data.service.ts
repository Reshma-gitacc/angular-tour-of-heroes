import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const heroes= [
      { id: 11, name: 'IronMan'},
      { id: 22, name: 'Captain America'},
      { id: 33, name: 'SpiderMan'},
      { id: 44, name: 'BatMan'},
      { id: 55, name: 'Hulk'},
      { id: 66, name: 'AntMan'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]):number {
    return heroes.length>0 ? Math.max(...heroes.map(hero=> hero.id))+1 : 10;

  }
  constructor() { }
}
