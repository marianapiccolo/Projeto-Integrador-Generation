import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  tipo = environment.tipo
  usuario = environment.usuario
  idUser = environment.id

  listaTemas: Tema[]
  tema: Tema = new Tema()
  idTema: number
  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem()
  edtPostagem: Postagem = new Postagem()
  idPostagem: number
  user: User = new User()
  dataHora: Date
  
  key: string = "post.date"
  reverse = true

  constructor(
    public auth: AuthService,
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private route: ActivatedRoute,
    private alerta: AlertasService
    
  ) { }

  ngOnInit() {
    window.scroll (0,0)
    
    if (environment.token == ""){
      this.alerta.showAlertDanger("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }

    this.findAllTemas()
    this.findAllPostagens()

    this.idPostagem = this.route.snapshot.params["id"]
    this.findByIdPostagem(this.idPostagem)
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.edtPostagem = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    
    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alerta.showAlertSuccess("Postagem feita com sucesso!")
      this.postagem = new Postagem()
      this.findAllPostagens()
    }, erro => {
      if(erro.status == 500) {
        this.alerta.showAlertDanger("Preencha todos os campos!")
      }
    })

  }

  deletar(){
    this.postagemService.deletePostagem(this.idPostagem).subscribe(() =>{
      this.alerta.showAlertDanger("Postagem apagada!")
      this.router.navigate(["/feed"])
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.edtPostagem.tema = this.tema
    this.edtPostagem.date = this.dataHora

    this.user.id = this.idUser
    this.edtPostagem.usuario = this.user
    
    this.postagemService.putPostagem(this.edtPostagem).subscribe((resp: Postagem)=> {
      this.edtPostagem = resp 
      this.alerta.showAlertInfo("Postagem atualizada!")
      this.router.navigate(["/feed"])
    }, erro => {
      if(erro.status == 500) {
        this.alerta.showAlertDanger("Preencha todos os campos!")
      }
    })
  }

  setOrder(event: any) {
    if(event.target.value == "recentes") {
      this.key = "date";
      this.reverse = true
    } else if (event.target.value == "antigos") {
      this.key = "date";
      this.reverse = false
    } else if (event.target.value == "titulo") {
      this.key = "titulo";
      this.reverse = false
    } else if (event.target.value == "tema") {
      this.key = "tema.categoria";
      this.reverse = false
    }
    this.findAllPostagens()
  }

}
