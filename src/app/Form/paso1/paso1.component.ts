import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.component.html',
  styleUrls: ['./paso1.component.css']
})
export class Paso1Component implements OnInit {

  constructor(private router:Router){}

  Ingresar(){
    this.router.navigate(["ingresar"]);
  }
  Paso2(){
    this.router.navigate(["paso2"]);
  }

  ngOnInit(): void {
  }

}
