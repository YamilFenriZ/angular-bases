

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { LenguajeProgramacionComponent } from './lenguaje-programacion/lenguaje-programacion.component';

@NgModule({
  exports: [
    LenguajeProgramacionComponent,
    ListComponent
  ],
  declarations: [
    LenguajeProgramacionComponent,
    ListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class LenguajesProgramacionModule { }
