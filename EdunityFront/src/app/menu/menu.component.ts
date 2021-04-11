import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pesquisa: string

  nome = environment.nome
  foto = environment.foto
  usuario = environment.usuario

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  dgtPesquisar(event: any){
    this.pesquisa = event.target.value
  }

  pesquisar(){
    this.router.navigate(['/pesquisa', this.pesquisa])    
  }

  sair(){
    this.router.navigate(["/login"])
    environment.token = ""
    environment.nome = ""
    environment.id = 0
    environment.foto = ""
    environment.tipo = ""
    environment.usuario = ""
  }

}
