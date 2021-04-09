import { Tema } from "./Tema"
import { User } from "./User"


export class Postagem {
    public id: number
    public titulo: string
    public date: Date
    public conteudo: string
    public tema: Tema
    public usuario: User
}