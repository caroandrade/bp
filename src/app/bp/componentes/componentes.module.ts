import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { RecursosComponent } from './recursos/recursos.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';


@NgModule({
  declarations: [
    ComoFuncionaComponent,
    PresentacionComponent, 
    PreguntasFrecuentesComponent,
    RecursosComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
