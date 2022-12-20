import { ContadorComponent } from './contador/contador.componente.component';
import { NgModule } from '@angular/core';




@NgModule({
    //los componentes: estos invisibles para el resto, para app.module
    declarations: [
        ContadorComponent

    ], 
    //que cosas quiero q sean visibles fuera de este modulo, para poder usar app listado ea nivel /app
    exports: [
        ContadorComponent
    ],
    //se colocan modulos
    imports: [
        //CommonModule
    ]
})

export class ContadorModule {

}