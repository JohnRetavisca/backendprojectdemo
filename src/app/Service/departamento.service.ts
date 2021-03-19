import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../Modelo/Departamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  Url='http://localhost:8080/departamento/';

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Departamento[]> {
    return this.httpclient.get<Departamento[]>(this.Url + 'lista');
  }

}
