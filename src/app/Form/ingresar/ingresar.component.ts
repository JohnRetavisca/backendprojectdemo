import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Direccion } from 'src/app/Modelo/Direccion';
import { DireccionService } from 'src/app/Service/direccion.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

export class IngresarComponent implements OnInit {

  numerocalle: number = 0;
  nombrecalle = '';
  cuidad = '';
  departamento = '';
  codpostal: number = 0;

  constructor(private direccionService: DireccionService,
    private router:Router,
    private toastr: ToastrService){}

  ngOnInit(): void {
  }

  Paso1(){
    this.router.navigate(["paso1"]);
  }


  onCreate(): void {
    const direccion = new Direccion(this.numerocalle, this.nombrecalle, this.cuidad, this.departamento, this.codpostal)
    this.direccionService.save(direccion).subscribe(
      data => {
        this.toastr.success('Direccion Domicilio creada!', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(["paso1"]);
      },
      err => {
        this.toastr.error(err. error.mensaje, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(["/"]);
      }
    )
  }

}
