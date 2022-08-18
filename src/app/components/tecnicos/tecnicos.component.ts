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

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: "Nico Costa",
      cpf: "4545684846",
      email: "nico@email.com",
      perfis: ["CLIENTE", "TECNICO"],
      dataCriacao: "18/08/22"
    }
  ];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'dataCriacao', 'update',
'delete'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }


}


