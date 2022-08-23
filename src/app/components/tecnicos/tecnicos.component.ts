import { TecnicoService } from './../../services/tecnico.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.scss']
})
export class TecnicosComponent implements OnInit, AfterViewInit {

  tecnicoList: Tecnico[] = [];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'update',
    'delete'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicoList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private service: TecnicoService;

  constructor(service: TecnicoService) { 
    this.service = service;
  }

  ngOnInit(): void {
    this.initializeTable();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initializeTable(): void {
    this.service.findAll().subscribe(tecnicos => {
      this.tecnicoList = tecnicos;
      this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicoList);
      this.dataSource.paginator = this.paginator;
    })
  }
}


