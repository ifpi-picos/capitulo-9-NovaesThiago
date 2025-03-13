export class Musica {
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
