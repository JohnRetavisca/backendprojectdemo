import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.component.html',
  styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {

  constructor(private router:Router){}

  Paso1(){
    this.router.navigate(["paso1"]);
  }
  Paso3(){
    this.router.navigate(["paso3"]);
  }

  ngOnInit(): void {
  }

}
