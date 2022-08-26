import { TecnicoUpdateComponent } from './childrens/tecnico-update/tecnico-update.component';
import { NavBarModule } from './../nav-bar/nav-bar.module';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { TecnicoCreateComponent } from './childrens/tecnico-create/tecnico-create.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    MaterialModule,
    NavBarModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    TecnicosComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent
  ]
})
export class TecnicosModule { }
