export class Playlist {
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
