import { ChamadosModule } from './../../components/chamados/chamados.module';
import { ClientesModule } from './../../components/clientes/clientes.module';
import { TecnicosModule } from './../../components/tecnicos/tecnicos.module';
import { LoginModule } from './../../components/login/login.module';
import { HomeModule } from './../../components/home/home.module';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [
    HomeModule,
    LoginModule,
    TecnicosModule,
    ClientesModule,
    ChamadosModule
  ]
})
export class PagesModule { }
