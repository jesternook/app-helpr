import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../../../config/api.config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  public cliente: Cliente = {
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    perfis: []
  }

  private perfis: number[] = [];
  private toast: ToastrService;
  private service: ClienteService;
  private router: Router;
  private http: HttpClient;

  constructor(service: ClienteService, toast: ToastrService, router: Router, http: HttpClient) {
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
        this.cliente.perfis = this.perfis;
        return;
      }
    }
    this.perfis.push(perfil);
    this.cliente.perfis = this.perfis;
  }

  create(form: NgForm) {
    if (form.valid) {
      this.service.insert(this.cliente).subscribe({
        next: response => {
          this.toast.success("Cliente cadastrado com sucesso!", "Sucesso");
          this.router.navigate(["/clientes"]);
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
