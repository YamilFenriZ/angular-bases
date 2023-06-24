import { Component } from '@angular/core';

@Component({
  selector: 'app-lenguajes-programacion-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public lenguajeProgramacionNames: string[] = [
    'Dart',
    'c#',
    'Python',
    'Flutter',
    'NestJS',
    'JavaScript',
  ];
  public deletedLenguaje?: string;

  removeLastHero():void{
    this.deletedLenguaje = this.lenguajeProgramacionNames.pop();
    // console.log({deletedLenguaje});
  }

}
