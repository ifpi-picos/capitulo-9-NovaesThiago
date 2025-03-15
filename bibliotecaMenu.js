import { Livro } from "./bibliotecaLivro"
import { Biblioteca } from "./bibliotecaCadastros"
import { Usuario } from "./bibliotecaUsuario"

function exibirMenu() {
    console.log("\n=== Sistema de Gerenciamento de Biblioteca ===")
    console.log("1. Adicionar Livro")
    console.log("2. Registrar Usuário")
    console.log("3. Emprestar Livro")
    console.log("4. Devolver Livro")
    console.log("5. Sair")
    const escolha = prompt("Escolha uma opção: ")
    return escolha;
}

function executarSistema() {
    const biblioteca = new Biblioteca()

    while (true) {
        const escolha = exibirMenu()

        switch (escolha) {
            case '1':
                const titulo = prompt("Digite o título do livro: ")
                const autor = prompt("Digite o autor do livro: ")
                const anoPublicacao = prompt("Digite o ano de publicação: ")
                const novoLivro = new Livro(titulo, autor, anoPublicacao)
                biblioteca.adicionarLivro(novoLivro)
                console.log(`Livro "${titulo}" adicionado com sucesso!`)
                break;

            case '2':
                const nomeUsuario = prompt("Digite o nome do usuário: ")
                const idUsuario = prompt("Digite o ID do usuário: ")
                const novoUsuario = new Usuario(nomeUsuario, idUsuario)
                biblioteca.registrarUsuario(novoUsuario)
                console.log(`Usuário "${nomeUsuario}" registrado com sucesso!`)
                break;

            case '3':
                const idEmprestimo = prompt("Digite o ID do usuário: ")
                const tituloEmprestimo = prompt("Digite o título do livro a ser emprestado: ")
                biblioteca.emprestarLivro(idEmprestimo, tituloEmprestimo)
                break;

            case '4':
                const idDevolucao = prompt("Digite o ID do usuário: ")
                const tituloDevolucao = prompt("Digite o título do livro a ser devolvido: ")
                biblioteca.devolverLivro(idDevolucao, tituloDevolucao)
                break;

            case '5':
                console.log("Saindo do sistema...")
                return;

            default:
                console.log("Opção inválida. Tente novamente.")
        }
    }
}

executarSistema()