import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/Modelo/Direccion';
import { DireccionService } from 'src/app/Service/direccion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  direcciones: Direccion[] = [];

  constructor(private direccionService: DireccionService) { }

  ngOnInit(): void {
    this.cargarDirecciones();
  }

  cargarDirecciones(): void{
    this.direccionService.lista().subscribe(
      data => {
        this.direcciones = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  eliminar(id: number){
    alert("Borrar el elemento " + id);
  }

}
