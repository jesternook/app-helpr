import { TecnicosModule } from './../../components/tecnicos/tecnicos.module';
import { LoginModule } from './../../components/login/login.module';
import { HomeModule } from './../../components/home/home.module';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [
    HomeModule,
    LoginModule,
    TecnicosModule
  ]
})
export class PagesModule { }
