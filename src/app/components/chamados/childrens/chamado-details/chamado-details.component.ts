import { Chamado } from './../../../../models/chamado';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-chamado-details',
  templateUrl: './chamado-details.component.html',
  styleUrls: ['./chamado-details.component.scss']
})
export class ChamadoDetailsComponent implements OnInit {

  public chamado: Chamado;

  constructor(@Inject(MAT_DIALOG_DATA) chamado: Chamado) { 
    this.chamado = chamado;
  }

  ngOnInit(): void {
  }
}
