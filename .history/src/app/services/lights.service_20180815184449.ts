import { Injectable } from '@angular/core';
import { Light } from '../models/Light';
@Injectable()
export class LightsService {
  lights: Light[] = [];
  currentLight: number = 0;
  constructor() { 
    const redLight = new Light('red', 2);
    const yellowLight = new Light('yellow', 1);
    const greenLight = new Light('green', 3);
    this.lights.push(redLight, yellowLight, greenLight);
  }

  activateLight() {
    let light: Light = this.lights[this.currentLight];
   return new Promise(resolve => {
   return setTimeout(() => { 
      resolve('red');
    }, light.time * 1000);
   }) 
   
  
  }

  startClock() {

  }
}