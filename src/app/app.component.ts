import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectdemo';

  constructor(private router:Router){}

  Ingresar(){
    this.router.navigate(["ingresar"]);
  }
  Editar(){
    this.router.navigate(["editar"]);
  }
  Eliminar(){
    this.router.navigate(["eliminar"]);
  }
  Listar(){
    this.router.navigate(["listar"]);
  }
}
