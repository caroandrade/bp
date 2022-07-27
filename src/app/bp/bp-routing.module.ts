import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './componentes/como-funciona/como-funciona.component';
import { PreguntasFrecuentesComponent } from './componentes/preguntas-frecuentes/preguntas-frecuentes.component';
import { RecursosComponent } from './componentes/recursos/recursos.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';

const routes: Routes = [
  { path: '', 
      children:[
        { path: 'recursos', component: RecursosComponent
        },
        { path:'preguntas', component: PreguntasFrecuentesComponent},
        {path:'como', component: ComoFuncionaComponent},
        {path:'presentacion', component: PresentacionComponent},
        {path: '**', redirectTo: 'presentacion'}
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpRoutingModule { }
