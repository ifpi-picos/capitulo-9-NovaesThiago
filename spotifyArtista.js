export class Artista {
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