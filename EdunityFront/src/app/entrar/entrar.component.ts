import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alerta.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll (0,0)

    environment.token = ""
  }

  entrar() {
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id
      environment.usuario = this.userLogin.usuario
      environment.tipo = this.userLogin.tipo

      this.router.navigate(["/feed"])
    }, erro => {
      if (erro.status == 500) {
        this.alerta.showAlertDanger("Usuárie ou senha estão incorretos!")
      }

    })
  }

}
