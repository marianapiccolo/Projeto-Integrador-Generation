import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alerta.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  listaTemas: Tema[]
  listaPostagens: Postagem[]
  listaUsuario: User[]
  parametro: string

  constructor(
    private alertas: AlertasService,
    private route: ActivatedRoute,
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    window.scroll (0,0)

    if (environment.token == "") {
      this.alertas.showAlertDanger("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }

    this.parametro = this.route.snapshot.params['pesquisa']
    this.findPerfilByUsuario(this.parametro)
    this.findPostagemByTitulo(this.parametro)
    this.findTemaByCategoria(this.parametro)

  }

  findTemaByCategoria (tags: string) {
    this.temaService.getByTagsTema(tags).subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findPostagemByTitulo (titulo: string) {
    this.postagemService.getByTitulo(titulo).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findPerfilByUsuario(usuario: string) {
    this.usuarioService.getPerfilByUsuarioContainingIgnoreCase(usuario).subscribe((resp: User[]) => {
    this.listaUsuario = resp
    })
  }

  avisoNuloTema(){
    if (this.listaTemas.length == 0){
      this.alertas.showAlertInfo("Não foram encontrados resultados para tags")
    }
  }

  avisoNuloPost(){
    if (this.listaPostagens.length == 0){
      this.alertas.showAlertInfo("Não foram encontrados resultados para postagens")
    }
  }

  avisoNuloUser(){
    if (this.listaUsuario.length == 0){
      this.alertas.showAlertInfo("Não foram encontrados resultados para usuáries")
    }
  }

}
