import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FeedComponent } from './feed/feed.component';
import { RodapeFeedComponent } from './rodape-feed/rodape-feed.component';
import { CRUDUsuarioComponent } from './crudusuario/crudusuario.component';
import { TemaComponent } from './tema/tema.component';
import { ValidMentorComponent } from './valid-mentor/valid-mentor.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { AlertaComponent } from './alerta/alerta.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    CadastrarComponent,
    SobreComponent,
    RodapeComponent,
    FeedComponent,
    RodapeFeedComponent,
    CRUDUsuarioComponent,
    TemaComponent,
    ValidMentorComponent,
    PesquisaComponent,
    AlertaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
