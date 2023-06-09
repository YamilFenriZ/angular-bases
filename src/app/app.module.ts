import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { CounterComponent } from './counter/counter.component';
// import { LenguajeProgramacionComponent } from './lenguajes-programacion/lenguaje-programacion/lenguaje-programacion.component';
// import { ListComponent } from './lenguajes-programacion/list/list.component';
import { CounterModule } from './counter/counter.module';
import { LenguajesProgramacionModule } from './lenguajes-programacion/lenguajesProgramacion.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    //CounterComponent,
    // LenguajeProgramacionComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    LenguajesProgramacionModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
