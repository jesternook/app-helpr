import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './../../../../config/api.config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TecnicoService } from './../../../../services/tecnico.service';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from './../../../../models/tecnico';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.scss']
})
export class TecnicoCreateComponent implements OnInit {

  public tecnico: Tecnico = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: []
  }

  private perfis: number[] = [];
  private toast: ToastrService;
  private service: TecnicoService;
  private router: Router;
  private http: HttpClient;

  constructor(service: TecnicoService, toast: ToastrService, router: Router, http: HttpClient) {
    this.toast = toast;
    this.service = service;
    this.router = router;
    this.http =http;
  }

  ngOnInit(): void {
  }

  addPerfil(perfil: number): void {
    for (let i = 0; i < this.perfis.length; i++) {
      if (this.perfis[i] === perfil) {
        this.perfis.splice(i, 1);
        this.tecnico.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.tecnico.perfis = this.perfis;
  }

  create(form: NgForm) {
    if (form.valid) {
      this.service.insert(this.tecnico).subscribe({
        next: response => {
          this.toast.success("Técnico cadastrado com sucesso!", "Sucesso");
          this.router.navigate(["/tecnicos"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if(errors != undefined) {
            errors.forEach((error:any) => {
              this.toast.error(error.message, "Erro");
            });
          }
          else {
            this.toast.error(errorResponse.error.message, "Erro");
          }
        }
      });
    } else {
      this.toast.error("Dados inválidos", "Erro");
    }
  }
}
