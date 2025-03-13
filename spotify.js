class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo
        this.artista = artista
        this.duracao = duracao
        this.arquivo = arquivo
        this.isReproduzindo = false
    }

    reproduzir() {
        this.isReproduzindo = true
        console.log(`Reproduzindo: ${this.titulo} - ${this.artista}`)
    }

    pausar() {
        this.isReproduzindo = false
        console.log(`Pausado: ${this.titulo}`)
    }
}

class Artista {
    constructor(nome, foto) {
        this.nome = nome
        this.foto = foto
        this.musicas = []
    }

    listaDeMusicas() {
        return this.musicas
    }

    adicionarMusica(musica) {
        this.musicas.push(musica)
        console.log(`Música adicionada: ${musica.titulo} ao artista ${this.nome}`)
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica)
        console.log(`Música removida: ${musica.titulo} do artista ${this.nome}`)
    }
}

class Playlist {
    constructor(nome) {
        this.nome = nome
        this.musicas = []
        this.musicaAtualIndex = 0
    }

    adicionarMusica(musica) {
        this.musicas.push(musica)
        console.log(`Música adicionada à playlist ${this.nome}: ${musica.titulo}`)
    }

    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica)
        console.log(`Música removida da playlist ${this.nome}: ${musica.titulo}`)
    }

    reproduzir() {
        if (this.musicas.length > 0) {
            this.musicas[this.musicaAtualIndex].reproduzir()
        } else {
            console.log('A playlist está vazia.')
        }
    }

    avancarMusica() {
        if (this.musicaAtualIndex < this.musicas.length - 1) {
            this.musicas[this.musicaAtualIndex].pausar()
            this.musicaAtualIndex++
            this.reproduzir()
        } else {
            console.log('Você já está na última música.')
        }
    }

    voltarMusica() {
        if (this.musicaAtualIndex > 0) {
            this.musicas[this.musicaAtualIndex].pausar()
            this.musicaAtualIndex--
            this.reproduzir()
        } else {
            console.log('Você já está na primeira música.')
        }
    }
}

const artista1 = new Artista("Artista Exemplo", "url_da_foto.jpg");
const playlist = new Playlist("Minha Playlist");

function exibirMenu() {
    console.log("Menu:")
    console.log("1. Adicionar música")
    console.log("2. Remover música")
    console.log("3. Listar músicas do artista")
    console.log("4. Reproduzir música atual")
    console.log("5. Pausar música")
    console.log("6. Avançar música")
    console.log("7. Voltar música")
    console.log("8. Sair")
}

function adicionarItem() {
    const titulo = prompt("Digite o título da música:")
    const artista = prompt("Digite o nome do artista:")
    const duracao = parseInt(prompt("Digite a duração da música (em segundos):"))
    const arquivo = prompt("Digite o caminho do arquivo da música:")

    const novaMusica = new Musica(titulo, artista, duracao, arquivo)
    artista1.adicionarMusica(novaMusica)
    playlist.adicionarMusica(novaMusica)
}

function removerItem() {
    const titulo = prompt("Digite o título da música que deseja remover:")
    const musicaParaRemover = artista1.listaDeMusicas().find(m => m.titulo === titulo)

    if (musicaParaRemover) {
        artista1.removerMusica(musicaParaRemover)
        playlist.removerMusica(musicaParaRemover)
    } else {
        console.log("Música não encontrada.")
    }
}

function listarMusicas() {
    const musicas = artista1.listaDeMusicas()
    if (musicas.length > 0) {
        console.log("Músicas do artista:")
        musicas.forEach(musica => {
            console.log(`- ${musica.titulo} (${musica.duracao} segundos)`)
        })
    } else {
        console.log("Nenhuma música encontrada para este artista.")
    }
}

function reproduzirMusicaAtual() {
    playlist.reproduzir()
}

function pausarMusica() {
    if (playlist.musicas.length > 0) {
        const musicaAtual = playlist.musicas[playlist.musicaAtualIndex]
        musicaAtual.pausar()
    } else {
        console.log("A playlist está vazia.")
    }
}

function avancarMusica() {
    playlist.avancarMusica()
}

function voltarMusica() {
    playlist.voltarMusica()
}

function iniciarMenu() {
    let opcao
    do {
        exibirMenu()
        opcao = parseInt(prompt("Escolha uma opção:"))

        switch (opcao) {
            case 1:
                adicionarItem()
                break;
            case 2:
                removerItem()
                break;
            case 3:
                listarMusicas()
                break;
            case 4:
                reproduzirMusicaAtual()
                break;
            case 5:
                pausarMusica()
                break;
            case 6:
                avancarMusica()
                break;
            case 7:
                voltarMusica()
                break;
            case 8:
                console.log("Saindo do menu...")
                break;
            default:
                console.log("Opção inválida. Tente novamente.")
        }
    } while (opcao !== 8)
}

iniciarMenu()