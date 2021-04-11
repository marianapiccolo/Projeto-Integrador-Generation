import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { AlertasService } from '../service/alerta.service';
import { PostagemService } from '../service/postagem.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: string
  user: User = new User()
  listaPostagens: Postagem[]

  key: string = "post.date"
  reverse = true

  constructor(
    private alertas: AlertasService,
    private route: ActivatedRoute,
    private router: Router,
    private postagemService: PostagemService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    window.scroll (0,0)
    
    if (environment.token == "") {
      this.alertas.showAlertDanger("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }
    this.findAllPostagens()

    this.usuario = this.route.snapshot.params['usuario']
    this.findPerfilByUsuario(this.usuario)
  }
  
  findAllPostagens() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findPerfilByUsuario(usuario: string) {
    this.usuarioService.getPerfilByUsuario(usuario).subscribe((resp: User) => {
    this.user = resp
    })
  }

}
