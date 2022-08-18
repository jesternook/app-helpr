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
    MaterialModule
  ],
  exports: [
    TecnicosComponent
  ]
})
export class TecnicosModule { }
