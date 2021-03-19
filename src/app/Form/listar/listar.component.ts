import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/Modelo/Direccion';
import { DireccionService } from 'src/app/Service/direccion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  direcciones: Direccion[] = [];

  constructor(private direccionService: DireccionService,
    private router:Router,
    private toastr: ToastrService) { }

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

  borrar(id: any){
    this.direccionService.delete(id).subscribe(
      data=> {
        this.toastr.success('Se elimino el registro satisfactoriamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarDirecciones();
      }
    )
  }
}
