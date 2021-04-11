import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alerta.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  listaPostagens: Postagem[]

  tipo = environment.tipo

  constructor(
    private router: Router,
    private temaService: TemaService,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll (0,0)
    
    if (environment.token == "") {
      this.alerta.showAlertDanger("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }
    this.findAllTemas()

    this.idTema = this.route.snapshot.params["id"]
    this.findByIdTema(this.idTema)

    if (this.tipo == "Aluno"){
      this.alerta.showAlertDanger("Você não pode acessar essa página")
      this.router.navigate(["/feed"])
    }
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.alerta.showAlertSuccess("Tag cadastrado com sucesso!")
      this.tema = new Tema()
      this.findAllTemas()
    }, erro => {
      if(erro.status == 500) {
        this.alerta.showAlertDanger("Preencha todos os campos!")
      }
    })
  }

  editar(){
    this.tema.postagem = this.listaPostagens

    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.alerta.showAlertInfo("Tag atualizada!")
      this.router.navigate(["/tag"])
    }, erro => {
      if(erro.status == 500) {
        this.alerta.showAlertDanger("Preencha todos os campos!")
      }
    })
  }

  deletar(){
    this.temaService.deleteTema(this.idTema).subscribe(() =>{
      this.alerta.showAlertInfo("Tag apagada!")
      this.router.navigate(["/tag"])
    })
  }

}
