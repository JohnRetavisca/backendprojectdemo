import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Direccion } from '../Modelo/Direccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  Url='http://localhost:8080/direccion/';

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Direccion[]> {
    return this.httpclient.get<Direccion[]>(this.Url + 'lista');
  }

  public detail(id: number): Observable<Direccion> {
    return this.httpclient.get<Direccion>(this.Url + `detail/${id}`);
  }

  public save(direccion: Direccion): Observable<any> {
    return this.httpclient.post<any>(this.Url + 'create', direccion);
  }

  public update(id: number, direccion: Direccion): Observable<any> {
    return this.httpclient.put<any>(this.Url + `update/${id}`, direccion);
  }

  public delete(id: number): Observable<any> {
    return this.httpclient.delete<any>(this.Url + `delete/${id}`)
  }

}
