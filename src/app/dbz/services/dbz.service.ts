import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  //constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 999
  },{
    id: uuid(),
    name: 'Goku',
    power: 9900
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 9909
  },];

  addCharacter( character: Character ):void {

    // const newCharacter:Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    const newCharacter:Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);

  }

  deleteCharacterById(id: string): void{
    this.characters = this.characters.filter( character => character.id !== id);
    // this.characters.splice(index, 1);
  }

  // deleteCharacter(index: number): void{
  //   this.characters.splice(index, 1);
  // }

}
