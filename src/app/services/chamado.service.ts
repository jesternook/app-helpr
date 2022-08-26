import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Chamado } from './../models/chamado';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private http: HttpClient;
  create: any;

  constructor(http: HttpClient) {
    this.http = http;
  }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.serviceUrl}/chamados`);
  }

  findById(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(`${API_CONFIG.serviceUrl}/chamados/${id}`);
  }

  insert(chamado: Chamado): Observable<Chamado> {
    return this.http.post<Chamado>(`${API_CONFIG.serviceUrl}/chamados`, chamado)
  }

  update(chamado: Chamado): Observable<Chamado> {
    return this.http.put<Chamado>(`${API_CONFIG.serviceUrl}/chamados/${chamado.id}`, chamado)
  }
}
