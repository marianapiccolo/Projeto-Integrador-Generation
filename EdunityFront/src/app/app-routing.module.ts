import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { SobreComponent } from './sobre/sobre.component';
import { ValidMentorComponent } from './valid-mentor/valid-mentor.component';
import { TemaComponent } from './tema/tema.component';
import { CRUDUsuarioComponent } from './crudusuario/crudusuario.component';

const routes: Routes = [

  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "sobre", component:SobreComponent},
  {path: "feed", component:FeedComponent},
  {path: "tema", component:TemaComponent},
  {path: "validacao", component:ValidMentorComponent},
  {path: "perfil-edit", component:CRUDUsuarioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
