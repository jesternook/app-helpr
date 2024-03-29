import { ClienteCreateComponent } from './childrens/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './childrens/cliente-update/cliente-update.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MaterialModule } from '../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    NavBarModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ClientesComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent
  ]
})
export class ClientesModule { }
