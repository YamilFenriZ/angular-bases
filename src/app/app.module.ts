import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LenguajeProgramacionComponent } from './lenguajes-programacion/lenguaje-programacion/lenguaje-programacion.component';
import { ListComponent } from './lenguajes-programacion/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LenguajeProgramacionComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
