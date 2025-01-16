function saudacao(nome) {
    return `Bom dia ${nome}`;
}
const variavel = saudacao('Neto');
console.log(variavel);

function soma(x, y){
    const resultado = x + y;
    return resultado;
}
console.log(soma(2,2)); 

function soma2 (x = 1, y = 1 ) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(4, 2);
console.log(resultado);

//Outra maneira de criar um função, chamada arrow function:
const raiz = (n) => { //função para retornar o resultado da raiz quadrada
    return Math.sqrt(n);
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//simplificando o arrow function, mas só funciona se o corpo da função ter apenas uma linha;
const raiz2 = n => Math.sqrt(n);

console.log(raiz2(9));
console.log(raiz2(16));
console.log(raiz2(25));
