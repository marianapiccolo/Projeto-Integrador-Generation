import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { SobreComponent } from './sobre/sobre.component';
import { ValidMentorComponent } from './valid-mentor/valid-mentor.component';
import { TemaComponent } from './tema/tema.component';
import { CRUDUsuarioComponent } from './crudusuario/crudusuario.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [

  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "sobre", component:SobreComponent},
  {path: "feed", component:FeedComponent},
  {path: "feed/:id", component:FeedComponent},
  {path: "tag", component:TemaComponent},
  {path: "tag/:id", component:TemaComponent},
  {path: "validacao", component:ValidMentorComponent},
  {path: "perfil-edit", component:CRUDUsuarioComponent},
  {path: "perfil-edit/:id", component:CRUDUsuarioComponent},
  {path: "pesquisa/:pesquisa", component: PesquisaComponent},
  {path: "perfil/:usuario", component: PerfilComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
