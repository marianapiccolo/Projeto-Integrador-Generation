import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert("As senhas estão divergentes")
    } else {
      if(this.user.tipo == "Professor/Mentor"){
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
      })
        this.router.navigate(["/validacao"])
      } else {
        this.authService.cadastrar(this.user).subscribe((resp: User) => {
          this.user = resp
          this.router.navigate(["/login"])
          alert("Usuárie cadastrado com sucesso!")
        })
      }
    }

    
  }

}
