export class Usuario {
    constructor(nome, id) {
        this.nome = nome
        this.id = id
        this.livrosEmprestados = []
    }

  
    adicionarLivroEmprestado(livro) {
        this.livrosEmprestados.push(livro)
    }


    removerLivroEmprestado(livro) {
        this.livrosEmprestados = this.livrosEmprestados.filter(l => l !== livro)
    }
}
