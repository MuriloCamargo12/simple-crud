import Id from "../shared/Id"

export default class Produto {
    nome: string
    preco: number
    codigo: string

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.codigo = Id.novo()
    }
}