import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { SobreComponent } from './sobre/sobre.component';
import { ValidMentorComponent } from './valid-mentor/valid-mentor.component';

const routes: Routes = [

  {path: "", redirectTo: "entrar", pathMatch: "full"},
  {path: "entrar", component: EntrarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path: "sobre", component:SobreComponent},
  {path: "feed", component:FeedComponent},
  {path: "validacao", component: ValidMentorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
