import { Emprestimo } from "./bibliotecaEmprestimo"

export class Biblioteca {
    constructor() {
        this.livros = []
        this.usuarios = []
        this.emprestimos = []
    }

    adicionarLivro(livro) {
        this.livros.push(livro)
    }

    registrarUsuario(usuario) {
        this.usuarios.push(usuario)
    }

    emprestarLivro(usuarioId, livroTitulo) {
        const usuario = this.usuarios.find(u => u.id === usuarioId)
        const livro = this.livros.find(l => l.titulo === livroTitulo && l.disponivel)

        if (usuario && livro) {
            livro.disponivel = false
            usuario.adicionarLivroEmprestado(livro)
            const dataEmprestimo = new Date()
            const dataDevolucao = new Date()
            dataDevolucao.setDate(dataEmprestimo.getDate() + 14)
            const novoEmprestimo = new Emprestimo(usuario, livro, dataEmprestimo, dataDevolucao)
            this.emprestimos.push(novoEmprestimo)
            console.log(`Livro "${livro.titulo}" emprestado para ${usuario.nome}.`)
        } else {
            console.log('Empréstimo não realizado. Verifique se o usuário existe e se o livro está disponível.')
        }
    }

    devolverLivro(usuarioId, livroTitulo) {
        const usuario = this.usuarios.find(u => u.id === usuarioId)
        const livro = this.livros.find(l => l.titulo === livroTitulo)
        
        if (usuario && livro && !livro.disponivel) {
            livro.disponivel = true
            usuario.removerLivroEmprestado(livro)
            const emprestimo = this.emprestimos.find(e => e.usuario.id === usuarioId && e.livro.titulo === livroTitulo)
            if (emprestimo) {
                this.emprestimos = this.emprestimos.filter(e => e !== emprestimo)
            }
            console.log(`Livro "${livro.titulo}" devolvido por ${usuario.nome}.`)
        } else {
            console.log('Devolução não realizada. Verifique se o usuário e o livro estão corretos.')
        }
    }
}
