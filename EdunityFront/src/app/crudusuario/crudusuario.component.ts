import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-crudusuario',
  templateUrl: './crudusuario.component.html',
  styleUrls: ['./crudusuario.component.css']
})
export class CRUDUsuarioComponent implements OnInit {

  perfil: User = new User()
  idUser: number
  confirmarSenha: string
  idAtivo = environment.id
  nome = environment.nome
  usuario = environment.usuario
  foto = environment.foto
  tipo = environment.tipo

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (environment.token == ""){
      alert("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }
    this.idUser = this.route.snapshot.params["id"]
    this.findUsuarioById(this.idUser)
  }

  findUsuarioById(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp: User) => {
      this.perfil = resp
    })
  } 

  editPerfil(){
    this.perfil.tipo = environment.tipo

    this.auth.cadastrar(this.perfil).subscribe((resp: User) => {
      this.perfil = resp
      alert("O usuarie foi atualizado com sucesso, faça o login novamente")
      environment.token = ""
      this.router.navigate(["/login"])    
    })
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

}
