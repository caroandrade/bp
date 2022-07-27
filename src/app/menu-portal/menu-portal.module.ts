import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuPortalRoutingModule } from './menu-portal-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RedesComponent } from './redes/redes.component';

@NgModule({
  declarations: [
    MenuComponent,
    RedesComponent
  ],
  imports: [
    CommonModule,
    MenuPortalRoutingModule,
    MaterialModule
  
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuPortalModule { }
