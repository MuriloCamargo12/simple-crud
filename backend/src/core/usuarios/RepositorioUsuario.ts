import Senha from "../shared/Senha"
import Usuario from "./Usuario"

export default class RepositorioUsuarios {
    usuarios: Usuario[] = [
        new Usuario("murilotop@gmail.com", "1234567"),
        new Usuario("pedrotop@gmail.com", "654321"),
        new Usuario("anatop@gmail.com", "abc")
    ]

    encontrarIndice(email: string) {
        const i = this.usuarios.findIndex(usr => usr.email === email)
        return i
    }

    usuarioExiste(email: string) {
        return this.encontrarIndice(email) >= 0
    }

    loginCorreto(email: string, senha: string) {
        const i = this.encontrarIndice(email)
        const senhaEstaCorreta = Senha.comparar(senha, this.usuarios[i]!?.senha)

        return senhaEstaCorreta
    }
}