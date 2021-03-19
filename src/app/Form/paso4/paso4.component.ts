import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso4',
  templateUrl: './paso4.component.html',
  styleUrls: ['./paso4.component.css']
})
export class Paso4Component implements OnInit {

  constructor(private router:Router){}

  Paso3(){
    this.router.navigate(["paso3"]);
  }
  Paso4(){
    this.router.navigate(["paso4"]);
  }

  ngOnInit(): void {
  }

}
