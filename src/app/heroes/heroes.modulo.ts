import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    //los componentes: estos invisibles para el resto, para app.module
    declarations: [
        HeroeComponent,
        ListadoComponent

    ], 
    //que cosas quiero q sean visibles fuera de este modulo, para poder usar app listado ea nivel /app
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    //se colocan modulos
    imports: [
        //CommonModule
    ]
})

export class HeroesModule {

}
