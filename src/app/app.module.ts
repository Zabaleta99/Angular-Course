import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
