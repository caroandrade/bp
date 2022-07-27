import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BpRoutingModule } from './bp-routing.module';


import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { RecursosComponent } from './componentes/recursos/recursos.component';
import { PreguntasFrecuentesComponent } from './componentes/preguntas-frecuentes/preguntas-frecuentes.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';




@NgModule({
  declarations: [
    BarraMenuComponent,
    ComoFuncionaComponent,
    RecursosComponent,
    PreguntasFrecuentesComponent,
    PresentacionComponent,
  ],
  imports: [
    CommonModule,
    BpRoutingModule
  ],
  exports:[
    BarraMenuComponent,
    ComoFuncionaComponent,
    RecursosComponent,
    PreguntasFrecuentesComponent,
    PresentacionComponent,
  ]
})
export class BpModule { }
