import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { AlertasService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-crudusuario',
  templateUrl: './crudusuario.component.html',
  styleUrls: ['./crudusuario.component.css']
})
export class CRUDUsuarioComponent implements OnInit {

  perfil: User = new User()
  user: User = new User()
  idUser: number
  confirmarSenha: string
  postagensUsuario: Postagem[]
  listaPostagens: Postagem[]

  idAtivo = environment.id
  nome = environment.nome
  usuario = environment.usuario
  foto = environment.foto
  tipo = environment.tipo

  key: string = "post.date"
  reverse = true

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private alerta: AlertasService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll (0,0)
    
    if (environment.token == "") {
      this.alerta.showAlertDanger("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }
    this.findAllPostagens()

    this.idUser = this.route.snapshot.params["id"]
    this.findUsuarioById(this.idUser)

    this.findPerfilByUsuario(this.usuario)
  }

  findPerfilByUsuario(usuario: string) {
    this.usuarioService.getPerfilByUsuario(usuario).subscribe((resp: User) => {
    this.user = resp

    this.postagensUsuario = this.user.postagem
    })
  }

  findAllPostagens() {
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findUsuarioById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: User) => {
      this.perfil = resp
    })
  }

  editPerfil() {
    this.perfil.tipo = environment.tipo
    this.perfil.postagem = this.postagensUsuario

    if (this.perfil.senha != this.confirmarSenha) {
      this.alerta.showAlertDanger("As senhas estão divergentes")
    } else {
      this.auth.cadastrar(this.perfil).subscribe((resp: User) => {
        this.perfil = resp
        this.alerta.showAlertInfo("O usuarie foi atualizado com sucesso, faça o login novamente")
        environment.token = ""

        this.router.navigate(["/login"])

      }, erro => {
        if (erro.status == 500) {
          this.alerta.showAlertDanger("Preencha todos os campos!")
        }
      })
    }
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

}
