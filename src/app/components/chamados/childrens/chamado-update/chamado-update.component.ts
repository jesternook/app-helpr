import { Router, ActivatedRoute } from '@angular/router';
import { Chamado } from '../../../../models/chamado';
import { ChamadoService } from '../../../../services/chamado.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TecnicoService } from '../../../../services/tecnico.service';
import { ClienteService } from '../../../../services/cliente.service';
import { Tecnico } from '../../../../models/tecnico';
import { Cliente } from '../../../../models/cliente';
import { Component, OnInit } from '@angular/core';

type DataSection = {
  title: string,
  value: number
}

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.scss']
})
export class ChamadoUpdateComponent implements OnInit {

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

  public chamado: Chamado = {
    titulo: "",
    status: NaN,
    prioridade: NaN,
    cliente: NaN,
    tecnico: NaN,
    observacoes: ""
  }

  public clienteList: Cliente[] = [];
  public tecnicoList: Tecnico[] = [];
  public formChamado: FormGroup;

  private serviceCliente: ClienteService;
  private serviceTecnico: TecnicoService;
  private toast: ToastrService;
  private service: ChamadoService;
  private router: Router;
  private route: ActivatedRoute;

  constructor(service: ChamadoService, serviceCliente: ClienteService, serviceTecnico: TecnicoService, formBuilder: FormBuilder, toast: ToastrService, router: Router, route: ActivatedRoute) {
    this.route = route;
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
    this.initializeField();
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

  initializeField(): void {
    let id: string | null = (this.route.snapshot.paramMap.get("id"));
    if (id != null) {
      this.service.findById(Number.parseInt(id)).subscribe(chamado => {
        this.chamado = chamado;
      })
    }
  }

  update(form: NgForm): void {
    if (this.formChamado.valid) {
      this.service.update(this.chamado).subscribe({
        next: () => {
          this.toast.success("Chamado editado com sucesso.", "Sucesso");
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
