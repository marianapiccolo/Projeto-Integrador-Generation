import { Postagem } from "./Postagem"

export class Tema {
    public id: number
    public categoria: string
    public tags: string
    public descricao: string
    public postagem: Postagem
}