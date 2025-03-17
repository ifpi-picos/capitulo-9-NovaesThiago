class Usuario {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dtNascimento = dataNascimento;
        this.seguidores = [];
        this.seguindo = [];
        this.publicacoes = [];
    }
 
    seguirUsuario(usuario) {
     this.seguindo.push(usuario);
 usuario.seguidores.push(this);
    }
 
}

const usuario1 = new Usuario("Alice", new Date("1990-05-15"))
const usuario2 = new Usuario("Bob", new Date("1985-10-22"))

usuario2.seguirUsuario(usuario1)

console.log(usuario1.nome)
console.log(usuario2.nome)

console.log(usuario1.seguidores.length)
console.log(usuario2.seguidores.length)


//Não entendi muito bem o que era para ser feito, então apenas juntei o codigo