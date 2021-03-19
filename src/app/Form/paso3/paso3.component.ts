import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso3',
  templateUrl: './paso3.component.html',
  styleUrls: ['./paso3.component.css']
})
export class Paso3Component implements OnInit {

  constructor(private router:Router){}

  Paso2(){
    this.router.navigate(["paso2"]);
  }
  Paso4(){
    this.router.navigate(["paso4"]);
  }

  ngOnInit(): void {
  }

}
