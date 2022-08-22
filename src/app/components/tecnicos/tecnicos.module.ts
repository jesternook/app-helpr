import { NavBarModule } from './../nav-bar/nav-bar.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';


@NgModule({
  declarations: [
    TecnicosComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule
  ],
  exports: [
    TecnicosComponent
  ]
})
export class TecnicosModule { }
