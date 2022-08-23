import { NavBarModule } from './../nav-bar/nav-bar.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { TecnicoCreateComponent } from './childrens/tecnico-create/tecnico-create.component';


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoCreateComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule
  ],
  exports: [
    TecnicosComponent,
    TecnicoCreateComponent
  ]
})
export class TecnicosModule { }
