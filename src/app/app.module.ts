import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarComponent } from './Form/editar/editar.component';
import { ListarComponent } from './Form/listar/listar.component';
import { IngresarComponent } from './Form/ingresar/ingresar.component';
import { EliminarComponent } from './Form/eliminar/eliminar.component';
import { Paso1Component } from './Form/paso1/paso1.component';
import { Paso2Component } from './Form/paso2/paso2.component';
import { Paso3Component } from './Form/paso3/paso3.component';
import { Paso4Component } from './Form/paso4/paso4.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Externo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ResumenComponent } from './Form/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    ListarComponent,
    IngresarComponent,
    EliminarComponent,
    Paso1Component,
    Paso2Component,
    Paso3Component,
    Paso4Component,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
