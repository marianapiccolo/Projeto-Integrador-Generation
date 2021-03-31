import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  //tema: Tema = new Tema()
  //listaTemas: Temas[]

  constructor(
    //private router: Router,
    //private temaService: TemaService

  ) { }

  ngOnInit(): void {
    //if .....
   // this.findAllTemas()
  }

  //findAllTemas(){
    //this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      //this.listaTemas = resp

   // })
  //}

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      this.alertas.showAlertSuccess('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })

}

}
