import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
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

  listaTemas: Tema[]

  constructor(
    public auth: AuthService,
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if (environment.token == ""){
      alert("Sua seção expirou, faça o login novamente.")
      this.router.navigate(["/login"])
    }

    this.findAllTemas()
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

}
