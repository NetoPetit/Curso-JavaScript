//criando objetos
const pessoa1 = {
    nome : 'Alcides',
    sobrenome : 'Petit',
    idade : 36,
    //para criar uma função(chamada método quando dentro de um objeto) dentro de um objeto, não é necessário a palavra function
    fala() {
        console.log(`Olá meu nome é ${this.nome}, meu sobrenome é ${this.sobrenome}, e minha idade é ${this.idade}`);
    },
    incrementaIdade() {
        ++this.idade;
    }
};

const pessoa2 = {
    nome : 'Mauricio',
    sobrenome : 'Aparecido',
    idade : 63
}
//acessando atributos dos objetos:
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

//função para criar objetos de pessoas:
function criarPessoas(nome, sobrenome, idade) {
    return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade,

        fala() {
            console.log(`Olá meu nome é ${this.nome}, meu sobrenome é ${this.sobrenome}, e minha idade é ${this.idade}`);
        }
    }
};
/*
//simplificando a função quando o atributo tem o mesmo nome dentro do corpo do objeto

function criarPessoas(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
};

*/
const pessoa3 = criarPessoas('Rodrigues', 'de Abreu', 30);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa3.sobrenome);
console.log(pessoa3.idade);

const pessoa4 = criarPessoas('Paulo', 'Soares', 25);
const pessoa5 = criarPessoas('Claudio', 'Perez', 51);
console.log(pessoa4.nome, pessoa5.nome);

pessoa1.fala();
const pessoa6 = criarPessoas('Rodrigo', 'Alencar', 22);
pessoa6.fala();
pessoa1.fala(); //idade 36
pessoa1.incrementaIdade(); //incrementando a idade em + 1
pessoa1.fala(); //idade incrementada em 1, atualizou para 37