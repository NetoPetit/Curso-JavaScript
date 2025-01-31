const pessoa = {
    nome : 'Neto',
    //sobrenome : 'Petit',
    idade : 36,
    endereço : {
        rua : 'Orlando ranieri',
        numero : 115
    }
};

//const nome = pessoa.nome; => atribuição normal
const {nome: testeNome = 'Neto', sobrenome = 'Petit', idade, ...resto} = pessoa; //atribuição via desestruturação, pode ser criado
//mais de uma const de uma única vez, e se ela não existir dentro do objeto como podemos ver com o sobrenome,
//ou se não tiver valor, pode ser atribuido na hora também, e também é
//possível mudar o nome na hora da construção, como podemos ver na const nome,
//os tres pontos (...) no final, é usado, para pegar os resto dos valores
//de dentro do objeto, como no exemplo o enderço
const {endereco: {rua, numero}} = pessoa;//acessando um objeto dentro
//de outro objeto, criando duas const(rua e numero) com os valores de 
//dentro do objeto
console.log(rua, numero);
console.log(testeNome, sobrenome, idade);
console.log(pessoa);