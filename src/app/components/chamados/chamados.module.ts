import { ChamadoUpdateComponent } from './childrens/chamado-update/chamado-update.component';
import { ChamadoCreateComponent } from './childrens/chamado-create/chamado-create.component';
import { PipesModule } from './../../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { NavBarModule } from './../nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';
import { ChamadoDetailsComponent } from './childrens/chamado-details/chamado-details.component';



@NgModule({
  declarations: [
    ChamadosComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent,
    ChamadoDetailsComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    NavBarModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports: [
    ChamadosComponent,
    ChamadoCreateComponent,
    ChamadoUpdateComponent
  ]
})
export class ChamadosModule { }
