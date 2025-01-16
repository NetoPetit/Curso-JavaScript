let num1 = 9.2123;
let num2 = Math.floor(num1); //arredonda para baixo
    num2 = Math.ceil(num1); //arredonda para cima
    num2 = Math.round(num1); //arredonda para o mais próximo
console.log(num2);

console.log(Math.max(50, 20, 135, -2, 5)); //seleciona o maior número da lista
console.log(Math.min(50, 20, 135, -2, 5)); //seleciona o menor número da lista

const aleatorio = Math.random(); // gera um número aleatório entre zero e um
console.log(aleatorio); // gera um número aleatório entre zero e um
const aleatorioRedondo = Math.round(Math.random() * (10 - 5) + 5); // gera um número aleatório redondo entre cinco e dez
console.log(aleatorioRedondo);// gera um número aleatório redondo entre cinco e dez
console.log(Math.pow(2, 10)); //dois elevado a dez
console.log(2 ** 10); //dois elevado a dez
console.log(num1 ** 0.5); //raiz quadrada
console.log(Math.sqrt(num1)); //raiz quadrada
console.log$(num1.toFixed(2)); //número com duas casas decimais depois da vírgula