import { Router } from '@angular/router';
import { Chamado } from './../../../../models/chamado';
import { ChamadoService } from './../../../../services/chamado.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TecnicoService } from './../../../../services/tecnico.service';
import { ClienteService } from './../../../../services/cliente.service';
import { Tecnico } from './../../../../models/tecnico';
import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.scss']
})
export class ChamadoCreateComponent implements OnInit {

  public statusList: DataSection[] = [
    { title: "Aberto", value: 0 },
    { title: "Andamento", value: 1 },
    { title: "Encerrado", value: 2 }
  ];

  public prioridadeList: DataSection[] = [
    { title: "Baixa", value: 0 },
    { title: "Média", value: 1 },
    { title: "Alta", value: 2 }
  ];


  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];
  public formChamado: FormGroup;

  private serviceCliente: ClienteService;
  private serviceTecnico: TecnicoService;
  private toast: ToastrService;
  private service: ChamadoService;
  private router: Router;

  constructor(service: ChamadoService, serviceCliente: ClienteService, serviceTecnico: TecnicoService, formBuilder: FormBuilder, toast: ToastrService, router: Router) {
    this.router = router;
    this.service = service;
    this.toast = toast;
    this.serviceCliente = serviceCliente;
    this.serviceTecnico = serviceTecnico;
    this.formChamado = formBuilder.group({
      titulo: ["", [Validators.required, Validators.minLength(3)]],
      status: ["", [Validators.required,]],
      prioridade: ["", [Validators.required]],
      cliente: ["", [Validators.required]],
      tecnico: ["", [Validators.required]],
      observacoes: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    this.initializeClientes();
    this.initializeTecnico();
  }

  initializeClientes(): void {
    this.serviceCliente.findAll().subscribe(clientes => {
      this.clienteList = clientes;
    });
  }

  initializeTecnico(): void {
    this.serviceTecnico.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
    });
  }
  create(): void {
    if (this.formChamado.valid) {
      let chamado: Chamado = this.formChamado.value;
      this.service.insert(chamado).subscribe({
        next: () => {
          this.toast.success("Chamado adicionado com sucesso.", "Sucesso");
          this.router.navigate(["/chamados"]);
        },
        error: errorResponse => {
          let errors = errorResponse.error.errors;
          if (errors != undefined) {
            errors.array.forEach((error: any) => {
              this.toast.error(error.message, "Erro")
            });
          }
          else {
            this.toast.error(errorResponse.console.error.message, "Erro");
          }
        }
      });
    } else {
      this.toast.error("Dados inválidos.", "Erro");
    }
  }
}
