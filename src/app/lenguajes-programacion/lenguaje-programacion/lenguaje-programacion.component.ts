import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes-programacion-lenguaje-programacion',
  templateUrl: './lenguaje-programacion.component.html',
  styleUrls: ['./lenguaje-programacion.component.css']
})
export class LenguajeProgramacionComponent {

  public name: string = 'flutter';
  public anio: number = 2017;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string{
    return `${this.name} - ${this.anio}`;
  }
  changeLenguajeProgramacion():void{
    this.name = "Angular"
  }
  changeAnio():void{
    this.anio = 2016
  }

}
