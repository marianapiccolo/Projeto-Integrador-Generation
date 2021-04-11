import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getByIdUsuario(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuario/${id}`,this.token)
  }

  getPerfilByUsuarioContainingIgnoreCase(usuario: string): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/usuario/pesquisa/${usuario}`, this.token)
  }

  getPerfilByUsuario(usuario: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/usuario/perfil/${usuario}`, this.token)
  }
}
