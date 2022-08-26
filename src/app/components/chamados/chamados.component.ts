import { ChamadoDetailsComponent } from './childrens/chamado-details/chamado-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ChamadoService } from './../../services/chamado.service';
import { Chamado } from './../../models/chamado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  public chamadoList: Chamado[] = [];

  displayedColumns: string[] = ['id', 'titulo', 'nomeCliente', 'nomeTecnico', 'dataAbertura', 'prioridade', 'status',
    'update', 'details'];
  dataSource = new MatTableDataSource<Chamado>(this.chamadoList);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  private service: ChamadoService;

  constructor(service: ChamadoService, private dialog: MatDialog) {
    this.service = service;
    this.dialog = dialog;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initializeTable();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(chamados => {
      this.chamadoList = chamados;
      this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByStatus(status: number): void {
    let filterList: Chamado[] = [];
    this.chamadoList.forEach(chamado => {
      if (chamado.status === status) {
        filterList.push(chamado)
      }
    });
    this.dataSource = new MatTableDataSource<Chamado>(filterList);
    this.dataSource.paginator = this.paginator;
  }

  clearFilter(input: HTMLInputElement, check1: MatRadioButton, check2: MatRadioButton, check3: MatRadioButton): void {
    input.value = "";
    check1.checked = false;
    check2.checked = false;
    check3.checked = false;
    this.dataSource = new MatTableDataSource<Chamado>(this.chamadoList);
    this.dataSource.paginator = this.paginator;
  }

  openDetailsDialog(chamado: Chamado): void {
    this.dialog.open(ChamadoDetailsComponent, {data: chamado, width: "400px"})
  }
}
