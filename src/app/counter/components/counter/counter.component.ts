import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>
  Counter: {{ counter }}
  </h2>
  <button (click)="incrementar(+1)"> más uno (+ 1) </button>
  <button (click)="resetearValor()">RESET</button>
  <button (click)="incrementar(-1)"> menos uno (- 1) </button>
  `
})

export class CounterComponent {

  constructor() { }

  public counter: number = 10;

  incrementar(value: number):void{
    this.counter+=value;
  }
  // decrementar(value: number):void{
  //   console.log("Decre")
  //   this.counter-=value;
  // }
  resetearValor():void{
    this.counter = 10;
  }

}
