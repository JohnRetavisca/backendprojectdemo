import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Direccion } from 'src/app/Modelo/Direccion';
import { Departamento } from 'src/app/Modelo/Departamento';
import { Ciudad } from 'src/app/Modelo/Ciudad';
import { DireccionService } from 'src/app/Service/direccion.service';
import { DepartamentoService } from 'src/app/Service/departamento.service';
import { CiudadService } from 'src/app/Service/ciudad.service';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})
export class Paso1Component implements OnInit {

  departamentos: Departamento[] = [];
  ciudades: Ciudad[] = [];

  public selectedDepartamento: Departamento = {id:0, codigo: 0, nombre: ''};
  
  numerocalle: number = 0;
  nombrecalle = '';
  ciudad = '';
  departamento = '';
  codpostal: number = 0;

  constructor(private direccionService: DireccionService,
    private departamentoService: DepartamentoService,
    private ciudadService: CiudadService,
    private router:Router,
    private toastr: ToastrService){}

  ingresar(){
    this.router.navigate(["ingresar"]);
  }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  cargarDepartamentos(): void{
    this.departamentoService.lista().subscribe(
      data => {
        this.departamentos = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  cargarCiudades(id: any): void{
    this.ciudadService.lista().subscribe(
      data => {
        this.ciudades = data.filter(item => item.departamento_id ==  id);
      },
      err => {
        console.log(err);
      }
    )
  }

  onSelect(): void {
    //this.ciudades.filter(item => item.id ==  id);
  }

  onCreate(): void {
    const direccion = new Direccion(this.numerocalle, this.nombrecalle, this.ciudad, this.departamento, this.codpostal)
    this.direccionService.save(direccion).subscribe(
      data => {
        this.toastr.success('Direccion Domicilio creada!', 'OK', {
          timeOut: 3000,
        });
        this.router.navigate(["paso2"]);
      },
      err => {
        this.toastr.error(err. error.mensaje, 'Fail', {
          timeOut: 3000,
        });
        this.router.navigate(["ingresar"]);
      }
    )
  }

}
