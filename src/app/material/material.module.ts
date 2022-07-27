import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialComponent } from './material/material.component';
import { MatIconModule } from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    
  ],
  exports:[
    MaterialComponent,
    MatGridListModule,
    MatIconModule,
    LayoutModule,
    FontAwesomeModule
  ]
})
export class MaterialModule { }
