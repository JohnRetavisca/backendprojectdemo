import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciudad } from '../Modelo/Ciudad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  Url='http://localhost:8080/ciudad/';

  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Ciudad[]> {
    return this.httpclient.get<Ciudad[]>(this.Url + 'lista');
  }

}
