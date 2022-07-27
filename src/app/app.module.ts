import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module'; ''
import { MenuPortalModule } from './menu-portal/menu-portal.module';
import { BpModule } from './bp/bp.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,

    
    MaterialModule,
    MenuPortalModule,
    BpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
