import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './Form/editar/editar.component';
import { EliminarComponent } from './Form/eliminar/eliminar.component';
import { IngresarComponent } from './Form/ingresar/ingresar.component';
import { ListarComponent } from './Form/listar/listar.component';
import { Paso1Component } from './Form/paso1/paso1.component';
import { Paso2Component } from './Form/paso2/paso2.component';
import { Paso3Component } from './Form/paso3/paso3.component';
import { Paso4Component } from './Form/paso4/paso4.component';

const routes: Routes = [
  {path:"ingresar", component:IngresarComponent},
  {path:"editar/:id", component:EditarComponent},
  {path:"listar", component:ListarComponent},
  {path:"eliminar/:id", component:EliminarComponent},
  {path:"paso1", component:Paso1Component},
  {path:"paso2", component:Paso2Component},
  {path:"paso3", component:Paso3Component},
  {path:"paso4", component:Paso4Component},
  {path:"**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
