import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [

  {path: "", redirectTo: "entrar", pathMatch: "full"},
  {path: "entrar", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "sobre", component:SobreComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
